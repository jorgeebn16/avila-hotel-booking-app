import axios from 'axios'

export const registration =async (user) => 
    await axios.post(`${process.env.REACT_APP_API}/registration`, user);

    export const login = async (user) =>
    await axios.post(`${process.env.REACT_APP_API}/login`, user);

