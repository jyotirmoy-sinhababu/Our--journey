import './mainpage.css';

import Header from '../../components/header/Header';
import ReverseComp from '../../components/reversecomp/ReverseComp';
import JourneyDetails from '../../components/journeydetails/JourneyDetails';
import ImgComp from '../../components/imgagecomponent/ImgComp';
import EmpCompOne from '../../components/emptycomp/EmpCompOne';
import EmpCompTwo from '../../components/emptycomp/EmpCompTwo';

import tree from '../../images/tree.jpg';

const MainPage = () => {
  return (
    <div>
      <div className='main-header-cnt'>
        <Header heading={'November 2022'} />
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
      <div className='main-second-cnt'>
        <EmpCompOne />
        <JourneyDetails
          detailsHeading={'07 November'}
          details={'A tree is a magic on earth, source of life'}
        />
      </div>
      <div className='main-third-cnt'>
        <div>
          <Header heading={'November 2022'} />
        </div>
        <div>
          <EmpCompTwo />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
