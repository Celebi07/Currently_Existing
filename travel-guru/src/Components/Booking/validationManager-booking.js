// This callback function sets an error message for a specific input field and updates
// the error state and overall form validation state.
const showError = (errorName, errorPath, error, setError, setFormValidate, isValidate) => {
    const Error = { ...error }
    Error[errorPath] = errorName
    setError(Error)
    setFormValidate(isValidate)
}

// This function checks the user's selected origin (division) and ensures that an origin has been selected.
// If the user hasn't selected an origin, the function sets an error message and updates
// the 'FormValidation' state to False.

export const validateOrigin = (formData, setFormValidate, error, setError) => {

    // Is undefined ?
    if (!formData.origin) {
        showError('Origin required', 'originError', error, setError, setFormValidate, false)
    } else {
        showError('', 'originError', error, setError, setFormValidate, true)
    }
}


// This function will handle TO & From date
export const handleDate = (e, setFormValidate, formData, setFormData, error, setError) => {

    // This callback function will check entered date is not in past
    // Date must be on current or future...if not function will show an error//
    const isDateValid = (e, dateType, errorPath) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const minDate = today.toISOString().substring(0, 10)
        if (minDate <= e.target.value) {
            setFormValidate(true)
            const Form = { ...formData }
            Form.bookingDate[dateType] = e.target.value
            setFormData(Form)
            showError('', errorPath, error, setError, setFormValidate, true)
        } else {
            showError('Your date was invalid', errorPath, error, setError, setFormValidate, false)
        }
    }

    // For From date
    if (e.target.name === 'from') {
        isDateValid(e, 'from', 'fromDateError')
    }

    // For To Date
    else {
        isDateValid(e, 'to', 'toDateError')
    }
}
