import Hotel from '../Hotel/Hotel';
import { stay } from '../fakeData/fakeData';


const SearchResults = () => {
    // Get hotels-info from Fake_data
    const hotels = stay;
    const getClientBookingInfo = JSON.parse(localStorage.getItem('Booked'));
    const { destination, bookingDate } = getClientBookingInfo

    // Get duration (toDate - fromDate) in days
    const travelDurationInMs = Math.abs(new Date(bookingDate.to) - new Date(bookingDate.from))
    const travelDurationInDays = Math.ceil(travelDurationInMs / (1000 * 60 * 60 * 24))

    return (
        <div className='tw-space-y-7'>
            {/* Hotels/Stay*/}
            <div className='tw-space-y-7'>
                {
                    hotels.map(stay => <Hotel stayDuration={travelDurationInDays} stay={stay} />)
                }
            </div>
        </div>
    );
};

export default SearchResults;