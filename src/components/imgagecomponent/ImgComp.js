import React from 'react';
import './imgcomp.css';

const ImgComp = ({ Img }) => {
  return (
    <div className='img-cnt'>
      <img className='img' src={Img} alt='' />
    </div>
  );
};

export default ImgComp;
