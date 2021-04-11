import User from "../models/user";
import jwt from "jsonwebtoken";

export const registration = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body

  if(!name) return res.status(400).send('Name is required');
  if(!password || password.length <6) 
    return res
    .status(400)
    .send("Passwrod is required and must be at least 6 characters long");
  let userExist = await User.findOne({email}).exec()
  if(userExist) return res.status(400).send('Email already registered, try again')

  const user = new User(req.body)
  try {
    await user.save()
    console.log('USER CREATED', user)
    return res.json({ ok: true });
  } catch (err) {
    console.log('USER REGISTRATION FAILED', err)
    return res.status(400).send('Error. Try again')
  }
};

export const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).exec();
    if(!user) res.status(400).send('User not found. Verify email prompted')
    user.comparePassword(password, (err, match) => {
      console.log('ERR ON PASSWORD COMPARE', err)
      if(!match || err) return res.status(400).send("WRONG PASSWORD");
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      });
      res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          stripe_account_id: user.stripe_account_id,
          stripe_seller: user.stripe_seller,
          stripeSession: user.stripeSession,
        },
      });
    });
  } catch (err) {
    console.log("LOGIN ERROR", err);
    res.status(400).send("Login Failed. Verify password prompted.");
  }
};
