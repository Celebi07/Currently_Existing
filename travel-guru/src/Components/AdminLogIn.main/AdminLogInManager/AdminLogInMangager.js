// Handle the "Remember me" feature by storing the user's email and password in local storage when user log in.
//  This ensures that the user's login information will be automatically filled in the next time user visits the site 

export const AdminhandleRememberMe = (AdminuserLogInInfo) => {
    const AdminLogInInfo = JSON.stringify(AdminuserLogInInfo);
    localStorage.setItem('userLogInInfo', AdminLogInInfo)
}

// This function will check (password === confirmPassword) in Create_an_Account form
export const AdmincheckBothPasswords = (data, formValidate, setFormValidate) => {
    if (data.password === data.confirmPassword) {
        const form = { ...formValidate }
        form.passwordMatched = true
        form.error = ''
        setFormValidate(form)
    } else {
        const form = { ...formValidate }
        form.passwordMatched = false
        form.error = "Password didn't match"
        setFormValidate(form)
    }
}