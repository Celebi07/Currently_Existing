import React from 'react';
import GoogleLogin from './LogInManager/GoogleLogin';
import Forms from './LogInManager/Forms/Forms';
// import axios from 'axios';
// import config from '../../../src/config.json'
//:::::LOG IN (Main) :::::://
const LogInMain = () => {
    
    return (
        <section className='tw-min-h-screen tw-py-20 tw-flex tw-align-middle tw-justify-center container'>
            <div className='row m-auto tw-w-screen'>
                <div className='mx-auto col-11 col-md-8 col-lg-7 col-xl-6 pb-5 tw-rounded-lg bg-white px-5 py-4'>
                    <Forms />

                    {/* Form divider  */}
                    <div className="tw-flex tw-items-center tw-my-5">
                        <hr className="tw-flex-grow tw-border-gray-500 tw-border-1 tw-mr-4" />
                        <span className="tw-text-gray-900 tw-font-medium">Or</span>
                        <hr className="tw-flex-grow tw-border-gray-500 tw-border-1 tw-ml-4" />
                    </div>
                    
                    {/* <GoogleLogin /> */}
                </div>
            </div>
        </section>
    );
};

export default LogInMain;