import ReviewCard from "../../components/Cards/Review";

function Aboutus() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8 relative" style={{ backgroundImage: `url('/images/background.png')`, backgroundSize: 'cover', height: '600px' }}>
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className='py-[190px]'>
        <h1 className="text-3xl font-bold text-gray-900 relative z-10">Welcome to MyTV Furnitures</h1>
        <p className="text-lg text-gray-800 relative z-10">Where your dream home comes to life</p>
        </div>
        
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-[50px]">
        <div className="md:w-1/3 text-center">
          <img src="/images/lightbulb.png" alt="Innovative Designs" className="w-[130px] h-[100px] mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2">Innovative Designs</h2>
          <p className="text-gray-700">Explore our unique collection of furniture designs that combine style and functionality to elevate your living spaces.</p>
        </div>
        <div className="md:w-1/3 text-center">
          <img src="/images/heart.png" alt="Passionate Craftsmanship" className="w-24 h-24 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2">Passionate Craftsmanship</h2>
          <p className="text-gray-700">Each piece of furniture is crafted with passion and precision, using the finest materials to ensure durability and comfort.</p>
        </div>
        <div className="md:w-1/3 text-center">
          <img src="/images/check.png" alt="Exceptional Quality" className="w-24 h-24 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2">Exceptional Quality</h2>
          <p className="text-gray-700">We <a href="http://" target="_blank" rel="noopener noreferrer"></a>re committed to delivering furniture of the highest quality, backed by rigorous quality control measures and standards.</p>
        </div>
      </div>
      <div className="text-center mt-12 p-[40px]">
        <h2 className="text-lg text-gray-700 mb-4"></h2>
        <img src="/images/about01.png" alt="About Us" className="mx-auto rounded-lg shadow-md h-[500px]" />
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example CustomerReviewCard instances */}
          <ReviewCard
            name="John Doe"
            rating={5}
            comment="Amazing quality furniture! Loved the designs and comfort."
          />
          <ReviewCard
            name="Jane Smith"
            rating={4}
            comment="Great experience shopping here. Delivery was quick and hassle-free."
          />
          <ReviewCard
            name="Robert Johnson"
            rating={5}
            comment="Highly recommend this store! Excellent customer service."
          />
        </div>
      </div>

    </div>
  );
}

export default Aboutus;
