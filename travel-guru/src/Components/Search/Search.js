import React, { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import { stay } from '../fakeData/fakeData';

const Search = () => {
    const getClientBookingInfo = JSON.parse(localStorage.getItem('Booked'));
    const { destination, bookingDate } = getClientBookingInfo
    const username = JSON.parse(localStorage.getItem('username'))
    const hotels = stay;

    // Get duration (toDate - fromDate) in days
    const travelDurationInMs = (new Date(bookingDate.to) - new Date(bookingDate.from))
    const travelDurationInDays = Math.ceil(travelDurationInMs / (1000 * 60 * 60 * 24))

    //Timeout Function for Google mapLoading
    const [mapLoaded, setMapLoaded] = useState(false)
    setTimeout(() => setMapLoaded(true), 500)
    return (
        <section className='tw-py-20 container min-vh-100'>
            {/* Client info */}
            <div className='text-light mb-4'>
                <h3 className='tw-font-light'>Hi, <span className='tw-text-yellow-400 tw-font-medium '>{username}</span> </h3>
                <h3 className='tw-font-light '>{hotels.length}
                    <span className='ms-2'>Stays in</span> <span className='tw-text-yellow-400 tw-font-medium'>
                        {destination.toUpperCase()}</span></h3>
            </div>
            <div className='row flex-lg-row flex-column-reverse text-light'>
                <div className="col-lg-7">
                    <div>
                        <SearchResults />
                    </div>
                </div>
                <div className="col-lg-5 lg:tw-mb-0 tw-mb-8">
                    {!mapLoaded ? <img className='tw-w-full lg:tw-h-screen tw-h-80 tw-rounded-xl'
                        src={require('../../images/googleMapLoading.webp')} alt="" />
                        : <iframe
                            className="tw-w-full lg:tw-h-screen tw-h-80 tw-rounded-xl"
                            title="google-map"
                            width="678"
                            height="527"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                            id="gmap_canvas"
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(destination.toLowerCase())}&t=&z=12&ie=UTF8&iwloc=B&output=embed`} />}
                </div>
            </div>
        </section>
    );
};

export default Search;