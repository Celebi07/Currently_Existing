import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/home')
    // Handle form submission logic here
  };

  return (
    <div className=" tw-min-h-screen tw-pt-24 tw-pb-6 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-max-w-lg tw-mx-auto tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden md:tw-max-w-3xl">
        <div className="md:tw-flex">

          {/* Contact Form */}
          <div className="md:tw-w-1/2 tw-px-6 tw-py-8">
            {/* Title */}
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">Contact Us</h2>

            {/* Description */}
            <p className="tw-mt-2 tw-text-gray-600">
              We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
            </p>
            <form className="tw-mt-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="tw-grid tw-grid-cols-1 tw-gap-6">
                {/* Enter Name */}
                <div>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className='form-control'
                    placeholder="Enter full name"
                  />
                  {errors.name && <span className="tw-text-red-500 tw-text-sm tw-mt-1">{errors.name.message}</span>}
                </div>
                <div>

                  {/* Enter Email */}
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Invalid email address',
                      },
                    })}
                    className='form-control'
                    placeholder="Enter your email address"
                  />
                  {errors.email && <span className="tw-text-red-500 tw-text-sm tw-mt-1">{errors.email.message}</span>}
                </div>
                {/* Enter Massage */}
                <div>
                  <textarea
                    id="message"
                    rows="4"
                    {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                    className='form-control'
                    placeholder="Enter your message"
                  ></textarea>
                  {errors.message && <span className="tw-text-red-500 tw-text-sm tw-mt-1">{errors.message.message}</span>}
                </div>
              </div>

              {/* Submit form */}
              <div className="tw-mt-6">
                <button
                  type="submit"
                  className='btn btn-warning'  >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information  */}
          <div className="md:tw-w-1/2 tw-px-6 tw-py-8 tw-bg-gray-50">
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">Contact Information</h2>
            <p className="tw-mt-2 tw-text-gray-600">Feel free to reach out to us using the contact information below:</p>
            <div className="tw-mt-6">
              <p className="tw-text-sm tw-font-medium tw-text-gray-700">Address</p>
              <p className="tw-mt-1 tw-text-gray-600">123 Main Street, City, Country</p>
            </div>
            <div className="tw-mt-6">
              <p className="tw-text-sm tw-font-medium tw-text-gray-700">Email</p>
              <p className="tw-mt-1 tw-text-gray-600">info@example.com</p>
            </div>
            <div className="tw-mt-6">
              <p className="tw-text-sm tw-font-medium tw-text-gray-700">Phone</p>
              <p className="tw-mt-1 tw-text-gray-600">+1 123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
