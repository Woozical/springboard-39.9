// returns an image
// props: src (image link), alt text, zIndex, rotation
const Card = (props) => {
  const transforms = {
    zIndex: props.index,
    transform: `rotate(${props.rotation}turn)`
  };
  return <img src={props.src} alt={props.alt} style={transforms}></img>
};

Card.defaultProps = {
  rotation: Math.random(),
  alt: 'card',
  src: '',
  index: 0
};

export default Card;