import { useState } from "react";
import RegistrationForm from '../components/RegistrationForm';
import axios from 'axios';
import { toast } from 'react-toastify';
import { registration } from '../actions/auth';

const Registration = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("history", history);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await registration ({
          name, 
          email, 
          password,
      
    });
    console.log("User Registration ===>", res);
    toast.success("Registration Successful, Please Login");
    history.push("/login");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-white p-5 text-center">
        <h1>Registration</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegistrationForm 
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
