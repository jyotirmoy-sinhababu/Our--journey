import './header.css';

const Header = ({ heading }) => {
  return (
    <div className='head-cnt'>
      <h1 className='header-txt'>{heading}</h1>
    </div>
  );
};

export default Header;
