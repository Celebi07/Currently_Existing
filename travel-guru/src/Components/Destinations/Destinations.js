import React from 'react';
import DestinationSpot from '../DestinationSpot/DestinationSpot';
import { destinations } from '../fakeData/fakeData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';

const Destinations = () => {
    const allDestination = destinations

    return (
        <section className='tw-h-screen d-flex align-items-center container'>

            {/*Swiper for Carousel Effect */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                speed={600}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                Pagination={{ clickable: true }}
                loop={true}
                Scrollbar={{ draggable: true }}>
                {
                    allDestination.map(destination => {
                        return <SwiperSlide>
                            <DestinationSpot key={destination.id}
                                destination={destination} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    );
};

export default Destinations;