import React, { useState } from 'react';
import { From } from '../fakeData/fakeData';
import { handleDate, validateOrigin } from './validationManager-booking';
import { useNavigate } from 'react-router-dom';


// Get From-location options (fakeData)
const FromLocations = From;

const BookingForm = ({ destination }) => {
    // If any form field is invalid or undefined, 
    // This function sets the 'FormValidation' state to False.
    const [formValidate, setFormValidate] = useState(true);

    // All form data will goes here
    const [formData, setFormData] = useState({
        origin: '',
        destination: destination,
        bookingDate: {
            from: '',
            to: ''
        }
    })

    // ALL Error goes here
    const [error, setError] = useState({
        fromDateError: '',
        toDateError: '',
        originError: ''
    });

    // HANDLE SUBMIT
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        // This function checks the Origin input field
        validateOrigin(formData, setFormValidate, error, setError)


        if (formValidate) {
            const bookingInfo = JSON.stringify(formData)
            localStorage.setItem('Booked', bookingInfo)
            navigate('/destination/search')
        }

        e.preventDefault()
    }

    // Handle Origin-field
    const handleOrigin = (e) => {
        const form = { ...formData }
        form.origin = e.target.value
        setFormData(form)
    }

    return (
        <form onSubmit={handleSubmit}
            className='bg-white tw-space-y-5 tw-p-6 tw-rounded-lg tw-text-gray-600'>

            {/* Origin */}
            <div>
                <label className='tw-tracking-wide tw-mb-1.5' htmlFor="origin"> Origin</label>
                <select name='origin' onChange={handleOrigin} className="form-select">

                    {/* Default option */}
                    <option value={''}>Select Division</option>

                    {  /*Other options */
                        FromLocations.map((from, i) => <option key={'option' + i} value={
                            from.toLowerCase()}>{from}</option>)
                    }
                </select>
                {/* Error goes here */}
                <p className='text-danger'>{error.originError}</p>
            </div>

            {/* Destination*/}
            <div>
                <label className='tw-tracking-wide tw-mb-1.5' htmlFor="from"> Destination
                </label>
                <select name='destination' className="form-select" aria-label="Default select example">

                    {/* Destination */}
                    <option value={destination.toLowerCase()}>{destination}</option>
                </select>
            </div>

            <div className='row'>
                {/* From-Date */}
                <div className='col-6'>
                    <label htmlFor="from" className='tw-tracking-wide tw-mb-1'>From
                    </label>

                    <input required name='from' onBlur={(e) => handleDate(e, setFormValidate, formData, setFormData, error, setError)} className='form-control' type="date" />
                    <p className='text-danger'>{error.fromDateError}</p>
                </div>

                {/* To-Date */}
                <div className='col-6'>
                    <label htmlFor="to" className='tw-tracking-wide tw-mb-1'>To</label>
                    <input required name='to' onBlur={(e) => handleDate(e, setFormValidate, formData, setFormData, error, setError)}
                        className='form-control' type="date" />
                    <p className='text-danger'>{error.toDateError}</p>
                </div>
            </div>

            {/* Start-Booking btn*/}
            <input type="submit" value='Start Booking' className='mt-4 w-100 btn btn-warning' />
        </form>
    );
};

export default BookingForm;