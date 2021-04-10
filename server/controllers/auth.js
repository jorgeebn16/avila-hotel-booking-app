import User from '../models/user'


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
