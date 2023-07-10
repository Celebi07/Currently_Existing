import React, { useState } from 'react';
import LogInForm from './LogInForm';
import CreateAccountForm from './CreateAccountForm';

const Forms = () => {
    // This state will toggle the forms 
    // True === loginForm || False === Create_account_form
    const [userLogIn, setUserLogIn] = useState(true)

    return (<div>
        <h3 className='tw-text-2xl mb-4 tw-font-bold'>{userLogIn ? 'Login' : 'Create an account'}</h3>

        {userLogIn ? <LogInForm setUserLogIn={setUserLogIn} />
            : <CreateAccountForm setUserLogIn={setUserLogIn} />}
    </div>)
};

export default Forms;