
const ConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-center">
          <img src="images/tvLogo.png" alt="Logo" className="w-[35%]" />
        </div>
        <div className="flex justify-center mt-8 animate-bounce">
          <img src="images/check.png" alt="Success" className="h-[120px]" />
        </div>
        <h2 className="text-blue-500 text-3xl font-bold text-center mt-8 py-[40px]">
          Your code has been successfully authenticated.
        </h2>
        
        <div className="bg-gray-800 text-white text-center mt-8 p-6 rounded-lg">
          <h3 className="font-bold text-lg">
            Please Contact Prime Support For Account Validation and Activation.
          </h3>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a href="tel:+1-(716)246-4137" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Call Prime Support
            </button>
          </a>
          <a href="tel:+1-(716)246-4137" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center space-x-2">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>+1-(716)246-4137</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
