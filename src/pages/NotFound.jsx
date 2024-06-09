import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <img src="/images/lost.png" alt="Lost Page" className="mx-auto mb-8" />
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Oops! The page you're looking for is lost.</p>
        <Link to="homepage" className="text-blue-500 text-xl">
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
