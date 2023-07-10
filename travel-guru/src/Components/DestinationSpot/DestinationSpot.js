import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

// Destination-spot card//
const DestinationSpot = ({ destination }) => {
    // Destructured object
    const { id, name, description, img } = destination;

    // Button animation state
    const [btnAnimation, setBtnAnimation] = useState(false)

    // Booking Btn Event handler 
    const navigate = useNavigate()
    const onClickHandler = (id) => {
        setBtnAnimation(!btnAnimation)
        return setTimeout(() => {
            navigate(`/destination/${id}`)
        }, 120)
    }

    return (
        <div className='row text-light'>

            {/* Spot details */}
            <div className='col-md-8 col-6 col-sm-6 d-flex align-items-center'>
                <div>
                    <h1 className='xl:tw-text-6xl 
                     md:tw-text-5xl tw-text-4xl text-nowrap'>{name}</h1>

                    {/* This slice method will limit (100latter's) the text */}
                    <p className='md:tw-text-lg tw-text-base tw-backdrop-blur-sm py-1 rounded-3 xl:tw-w-10/12
                    text-justify my-md-4'>
                        {description && description.length > 200 ? description.slice(0, 200) + '...' : description
                        }
                    </p>

                    <div>
                        <motion.button animate={{ x: btnAnimation ? 70 : 0}}
                            transition={{ duration: .11, type: "spring" }}
                            onClick={() => onClickHandler(id)} className='btn btn-warning px-4 px-sm-3 fw-semibold'>Booking <i className="bi bi-arrow-right"></i>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Spot image */}
            <div className='col-md-4 col-6 placeholder-wave'>
                {!img ? <div className='hover:tw-ring-2 placeholder xl:tw-h-96 tw-h-80 md:tw-w-72 tw-w-full tw-ring-yellow-500 tw-shadow-glow-2xl 
                 border shadow-md border-warning border-2  rounded-5 mx-auto' />

                    /* Image names goes here from local fake-data file*/
                    : <motion.img animate={{ scale: [.80, 1] }} transition={{ duration: 1, type: "spring" }}
                        src={require(`../../images/${img}.png`)}
                        className='hover:tw-ring-2   tw-shadow-glow-2xl tw-ring-yellow-500 
                border shadow-md border-warning border-2  rounded-5 mx-auto xl:tw-h-96 tw-h-80' alt='' />}
            </div>
        </div>

    );
};

export default DestinationSpot;