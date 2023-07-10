import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { handleRememberMe } from "../LogInMangager";
import { User } from "../../../../App";
import { useLocation, useNavigate } from "react-router-dom";

//:::: LOG-IN FORM :::://
const LogInForm = ({ setUserLogIn }) => {
    // Selecting 'remember me' sets the 'rememberMe' state to true,
    const [rememberMe, setRememberMe] = useState(false);
    const [user, setUser] = useContext(User);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    const { from } = location.state || { from: { pathname: '/' } };

    // LOG-IN BUTTON handler
    const onSubmit = (data, rememberMe) => {
        // Handle login logic here (e.g., API call, authentication)

        // Set user info inside User_Context API
        const userInfo = { ...user };
        userInfo.email = data.email;
        userInfo.username = ''; // Set username if available
        userInfo.error = '';
        setUser(userInfo);

        // RememberMe stores user (email-password)
        rememberMe && handleRememberMe(data);
        localStorage.setItem('username', JSON.stringify(userInfo.username));
        localStorage.setItem('userLoggedIn', JSON.stringify(true));

        // redirect user on previous route
        navigate(from);
    };
    async function postData() {
        const data = {
            
            "email": document.getElementById('email').value.toString(),
            "password": document.getElementById('password').value.toString(),
        };
        
        
        fetch('http://localhost:5000/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            var token = await res.json();
            console.log(token);
           
            sessionStorage.setItem("sessiontoken",token);
        }).catch((e)=> {console.log(e)});
        
    
    
        // Handle the response here (e.g., check status code, parse JSON, etc.)
    }

    // If the user had previously selected the "remember me" option before logging in,
    // this function will retrieve their email and password from local storage and 
    // set those values as the default values for the input fields//
    const autoFillUser = (key) => {
        const getLogInfo = localStorage.getItem("userLogInInfo");
        const loggedInfo = JSON.parse(getLogInfo);
        return loggedInfo && loggedInfo[key];
    };

    return (
        <>
            {/* Log In */}
            <form onSubmit={handleSubmit(onSubmit)} className='mb-0 tw-space-y-6'>
                {/* Email */}
                <div>
                    <label className='mb-2'>Email</label>
                    <input required className='form-control'
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={autoFillUser('email')}
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div>
                    <label className='mb-2'>Password</label>
                    <input required className='form-control'
                        type="password"
                        name="password"
                        id="password"
                        defaultValue={autoFillUser('password')}
                        {...register("password", {
                            required: true,
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long",
                            },
                        })} />
                    {errors.password && <p className='text-danger'>{errors.password.message}</p>}

                    {/* Remember me [check_box]*/}
                    <Form.Check variant='dark' onClick={() => setRememberMe(!rememberMe)} className='mt-3' type="checkbox" label="Remember me" />
                </div>

                <div>
                    {/* Authentication error goes here */}
                    <p className="text-center mt-2 text-danger">{user.logInError}</p>

                    <button className='btn btn-warning fw-semibold w-100' type="submit" onClick={() => postData()} >Login</button>

                    {/* 'CreateAnAccount' will toggle this form */}
                    <p className="text-center mt-3 tw-text-sm md:tw-text-base">Don't have an account? <span onClick={() => setUserLogIn(false)}
                        className="tw-underline tw-text-yellow-500 hover:tw-text-yellow-400">Create an account</span></p>
                </div>
            </form>
        </>
    );
}

export default LogInForm;
