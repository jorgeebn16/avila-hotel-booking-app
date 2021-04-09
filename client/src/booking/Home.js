import { userSelector, useSelector, useStore } from "react-redux";

const Home = () => {
    const {user} = useSelector((state) => ({...state}));
    return (
        <div className="conatiner-fluid h1 p-5 text-center">
            Home Page {JSON.stringify(user)}
        </div>
    );
};

export default Home;