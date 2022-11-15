import './header.css';

const Header = ({ heading }) => {
  return (
    <div className='head-cnt'>
      <h1>{heading}</h1>
    </div>
  );
};

export default Header;
