import { useContext } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../firebase.config";
import { User } from "../../../App";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const [user, setUser] = useContext(User)
    const location = useLocation()
    const navigate = useNavigate()
    const { from } = location.state || { from: { pathname: '/' } }

    // FIREBASE
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    //GOOGLE Event handler
    const googleHandler = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const userData = res.user;
                // Set user info inside User_Context API
                const userInfo = { ...user }
                userInfo.email = userData.email
                userInfo.username = userData.displayName
                userInfo.error = '';
                setUser(userInfo)
                localStorage.setItem('username', JSON.stringify(userData.displayName))
                localStorage.setItem('userLoggedIn', JSON.stringify(true));
                // redirect user on previous route
                navigate(from)
            })
            .catch((error) => {
                setUser(user => ({ ...user, googleError: error.code }))
            })
    }

    return (
        <>
            {/* Error goes here */}
            <p className="text-danger mb-3 tw-text-center">{user.googleError}</p>

            <div onClick={googleHandler}
                className='tw-bg-white tw-rounded-3xl md:tw-w-10/12 tw-w-11/12 mx-auto tw-flex tw-align-items-center tw-ring-1 tw-ring-gray-300 tw-pl-2 tw-py-1 tw-cursor-pointer hover:tw-bg-gray-100/50'>
                <div className='tw-flex tw-justify-end tw-align-items-center '>
                    <img className='tw-max-h-8 tw-m-auto'
                        src={require("../../../images/icons/google.png")} alt="google" />
                </div>
                <div className='m-auto tw-flex tw-align-items-center'>
                    <h5 className='tw-font-medium tw-text-lg'>Continue with Google</h5>
                </div>
            </div>
        </>
    );
};

export default GoogleLogin;