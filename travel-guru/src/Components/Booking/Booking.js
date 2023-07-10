import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';
import { destinations } from '../fakeData/fakeData';

const Booking = () => {
    // Get Selected destination spot
    const { destinationId } = useParams();

    // Get Destination-spot by its id
    const destination = destinations.find(destination => destination.id === Number.parseInt(destinationId))
    const { name, description } = destination;

    return (
        <>
            <section className='min-vh-100 d-flex align-items-center justify-content-center'>
                <div className='tw-text-white row container tw-pt-20 tw-pb-10 tw-space-y-4'>

                    {/* Destination Spot full details */}
                    <div className='col-md-6'>
                        <div>
                            <h1 className='xl:tw-text-6xl
                     md:tw-text-5xl tw-text-4xl text-nowrap'>{name}</h1>

                            <p className='lg:tw-text-lg tw-text-base tw-backdrop-blur-sm py-2 rounded-3 text-justify my-md-3'>
                                {description}</p>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className='col-md-6'>
                        <BookingForm destination={name} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Booking;