import './reversecomp.css';

const ReverseComp = ({ data, style }) => {
  return (
    <div style={style} className='reverse-cnt'>
      <h2 className='reverse-cnt-txt'>{data}</h2>
    </div>
  );
};

export default ReverseComp;
