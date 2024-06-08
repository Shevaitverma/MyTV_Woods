import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


function Product(props) {
  return (
    <div className="relative h-[300px] w-[350px] rounded-[0px]">
        <img
          src={props.image}
          alt="Product image"
          className="z-0 h-full w-full rounded-[0px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-center">
          
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            <Link to="/shop">
              See more &rarr;
            </Link>
            
          </button>
        </div>
      </div>
  )
}

Product.propTypes = {
    image: PropTypes.string.isRequired,
  };

export default Product