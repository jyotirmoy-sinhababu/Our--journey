import './journeydetail.css';

const JourneyDetails = ({ detailsHeading, details }) => {
  return (
    <div className='journey-cnt'>
      <div>
        <h3 className='cnt-firstTxt'>{detailsHeading}</h3>
      </div>

      <p className='cnt-secondTxt'>{details}</p>
    </div>
  );
};

export default JourneyDetails;
