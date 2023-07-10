import React from 'react';
import './Hotel.css'

const Hotel = ({ stay, stayDuration }) => {
    // Destructure object
    const { title, img, facilities, rating, rated_people, price } = stay;

    return (
        <div className='tw-max-w-72 col-sm-12 col-md-10 col-lg-11 mx-auto ms-lg-3 hotel p-sm-0 px-3'>
            <div className='tw-bg-gray-100 tw-rounded-lg row p-0 tw-cursor-pointer
             active:tw-bg-gray-200'>
                {/*  Stay image*/}
                <div className='col-4 col-sm-5 p-2 p-sm-1 tw-overflow-hidden'>
                    <img className='sm:tw-h-52 tw-h-44 mx-auto tw-rounded-lg tw-object-cover'
                        src={require(`../../images/${img}.png`)} alt={title} />
                </div>
                {/* Stay details  */}
                <div className=' col-sm-7 col-8'>
                    <div className='tw-h-14 tw-flex tw-align-middle'>
                        <h5 className='tw-text-lg my-auto pt-1 tw-text-gray-900'>
                            {title}
                        </h5>
                    </div>
                    <ul className=' tw-text-gray-800 mt-sm-2 mb-sm-4 tw-p-0 sm:tw-text-base tw-text-sm tw-space-y-1 sm:tw-py-1 tw-py-2'>
                        <li>{facilities[0]}</li>
                        <li>{facilities[1]}</li>
                        <li>{facilities[2]}</li>
                    </ul>
                    <div className='tw-flex'>
                        <div className='tw-flex tw-align-middle text-dark tw-flex-auto m-auto'>
                            <img className='tw-h-3 sm:tw-h-4 my-auto'
                                src={require("../../images/icons/star_1_.png")} alt="" />
                            <h6 className='tw-text-xs sm:tw-text-base my-auto ms-1'><span>{rating}</span> <span>({rated_people})</span></h6>
                        </div>
                        <div className="tw-flex-auto m-auto tw-text-gray-900 my-auto">
                            <h5 className='tw-text-sm sm:tw-text-base my-auto'>${price}/<span className='tw-font-light'>night</span></h5>
                        </div>
                        <div className="tw-flex-auto my-auto tw-text-gray-900">
                            <h6 className='my-auto
                            tw-font-light
                            tw-text-xs sm:tw-text-base'>$
                                {stayDuration === 0 ? (price * 1) : (price * stayDuration)} total</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;