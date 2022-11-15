import './mainpage.css';

import Header from '../../components/header/Header';
import ReverseComp from '../../components/reversecomp/ReverseComp';
import JourneyDetails from '../../components/journeydetails/JourneyDetails';
import ImgComp from '../../components/imgagecomponent/ImgComp';

import tree from '../../images/tree.jpg';

const MainPage = () => {
  return (
    <div>
      <div className='header-cnt'>
        <Header heading={'November 7'} />
      </div>
      <div className='first-cnt'>
        <ReverseComp data={'Journey Begins'} />
        <JourneyDetails details={'lorem'} />
        <ImgComp Img={tree} />
      </div>
    </div>
  );
};

export default MainPage;
