import './mainpage.css';

import Header from '../../components/header/Header';
import ReverseComp from '../../components/reversecomp/ReverseComp';
import JourneyDetails from '../../components/journeydetails/JourneyDetails';
import ImgComp from '../../components/imgagecomponent/ImgComp';

import tree from '../../images/tree.jpg';

const MainPage = () => {
  return (
    <div>
      <div className='main-header-cnt'>
        <Header heading={'November 7'} />
      </div>
      <div className='main-first-cnt'>
        <ReverseComp data={'Journey Begins'} />
        <div className='main-journey'>
          <JourneyDetails
            detailsHeading={'07 November'}
            details={'A tree is a magic on earth, source of life'}
          />
        </div>

        <ImgComp Img={tree} />
      </div>
    </div>
  );
};

export default MainPage;
