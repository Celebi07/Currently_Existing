import React, { useState } from 'react';
import AdminLogInForm from './AdminLogInForm';
import AdminCreateAccountForm from './AdminCreateAccountForm';

const AdminForms = () => {
    // This state will toggle the forms 
    // True === loginForm || False === Create_account_form
    const [AdminuserLogIn, AdminsetUserLogIn] = useState(true)

    return (<div>
        <h3 className='tw-text-2xl mb-4 tw-font-bold'>{userLogIn ? 'Login' : 'Create an Adminaccount'}</h3>

        {userLogIn ? <AdminLogInForm AdminsetUserLogIn={setUserLogIn} />
            : <AdminCreateAccountForm AdminsetUserLogIn={setUserLogIn} />}
    </div>)
};

export default AdminForms;