import BodyPart from './BodyPart';
import { useContext } from 'react';
import PropTypes from 'prop-types'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Typography } from '@mui/material';
import RightArrowIcon from '../assets/right-arrow_icon.png';
import LeftArrowIcon from '../assets/left-arrow_icon.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      className="scroll-menu"
    >
      {data.map((item) => (
        <Card
          item={item}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          key={item}
          itemId={item}
          title={item}
        />
      ))}
    </ScrollMenu>
  );
};

function Card({ item, setBodyPart, bodyPart }) {
  return (
    <div>
      <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    </div>
  );
}

Card.propTypes = {
    item: PropTypes.string.isRequired,
    setBodyPart: PropTypes.func.isRequired,
    bodyPart: PropTypes.string.isRequired
  };
  
  HorizontalScrollbar.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    bodyPart: PropTypes.string.isRequired,
    setBodyPart: PropTypes.func.isRequired,
  };

export default HorizontalScrollbar;
