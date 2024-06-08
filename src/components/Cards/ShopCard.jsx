import PropTypes from 'prop-types';

function ShopCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <img src={image} alt={name} className="z-0 h-[200px] w-[220px] rounded-[0px] object-cover" />
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 text-lg">${price}</p>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ShopCard;
