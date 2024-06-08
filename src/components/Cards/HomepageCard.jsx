import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export function HomeCard(props) {
    return (
      <div className="relative h-[300px] w-[600px] rounded-[0px]">
        <img
          src={props.image}
          alt="furniture img"
          className="z-0 h-full w-full rounded-[0px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{props.room}</h1>
          <p className="mt-2 text-sm text-gray-300">
            {props.desc}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            <Link to="/shop">
              Watch More &rarr;
            </Link>
            
          </button>
        </div>
      </div>
    )
  }
  
  HomeCard.propTypes = {
    image: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  };