import PropTypes from 'prop-types';

function ReviewCard({ name, rating, comment }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
          {/* Display initial of the reviewer's name */}
          <span className="text-gray-600 text-lg font-semibold">{name.charAt(0)}</span>
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          {/* Display star rating */}
          <div className="flex items-center mt-1">
            {[...Array(rating)].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 01.773.368l1.882 2.324 3.07.447a1 1 0 01.555 1.705l-2.276 2.05.646 3.304a1 1 0 01-1.451 1.054L10 11.796l-3.386 1.786a1 1 0 01-1.451-1.054l.646-3.304L.72 6.844a1 1 0 01.555-1.705l3.07-.447L9.227 2.368A1 1 0 0110 2zm0 2.334L8.615 5.05a1 1 0 01-.753.368l-3.254.473 2.36 2.135a1 1 0 01.305.882l-.529 2.705 2.753-1.45a1 1 0 01.938 0l2.754 1.45-.53-2.705a1 1 0 01.305-.882l2.36-2.135-3.253-.473a1 1 0 01-.753-.368L10 4.334zm0 8.198l2.612 1.378a1 1 0 01.497 1.705l-.529.45.646 3.304a1 1 0 01-1.451 1.054L10 16.995l-2.275 1.199a1 1 0 01-1.452-1.054l.647-3.304-.529-.45a1 1 0 01.497-1.705L10 12.532l1.875-.272a1 1 0 01.753.368z" clipRule="evenodd" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      {/* Display customer comment */}
      <p className="text-gray-700">{comment}</p>
    </div>
  );
}

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

export default ReviewCard;
