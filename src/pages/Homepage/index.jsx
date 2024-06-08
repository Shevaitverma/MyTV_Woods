import { Link } from "react-router-dom"
import { HomeCard } from "../../components/Cards/HomepageCard"
import { data } from "../../assets/furnitureData"
import Product from "../../components/Cards/Product"

function Homepage() {

  return (
    <>
    {/* section one  */}
    <div className="flex justify-center rounded-[0px] bg-[#6c724f] py-20 md:py-4 ">
      <div className="container-xs flex items-center  justify-between gap-5 md:p-5 m-[3%]">
        <div className="flex w-[48%] flex-col items-start gap-[30%]  md:w-full">
          <div className="flex flex-col items-start gap-[10px] self-stretch">
            <h5 className="text-[15px]">Interior Needs</h5>
            <h3 className="text-[24px] font-bold text-gray-900">
              <span>Various new collections </span><br />
              <span>of furniture to decorate the </span><br />
              <span>corner of your house</span>
            </h3>
          </div><br />
          <Link to="shop">
          <button
          type="button"
          className="rounded-[0px] bg-gray-900 px-6 py-3 text-sm font-semibold text-[#6c724f] shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Shop Now
          </button>
          </ Link>
        </div>
        <img 
          src="images/home_pic01.png"
          alt="image"
          className=" h-[75%] w-[38%] object-cover md:w-[75%]"
        />
      </div>
    </div>

    {/* section two */}
      <div className="container-xs justify-center flex-wrap flex gap-6 md:p-[60px] m-[40px] ">
        {data.map((item, index)=> (
          <HomeCard key={index} room={item.room} desc={item.desc} image={item.image} />
        ))}
      </div>
    
    {/* shop showcase section  */}
    <div className="flex flex-col "> 
      <div className="items-center justify-center md:p-[40px] m-[40px]">
        <h1 className="text-center text-[30px] ">our products</h1>
        <p className="text-center text-[15px] text-gray-600">Made with best material without compromising with comfort</p>
      </div>

      <div className="container-xs justify-center flex-wrap flex gap-6 md:p-[80px] ">
        <Product image="images/product/chair01.png"/>
        <Product image="images/product/table02.png"/>
        <Product image="images/product/chair03.png"/>
        <Product image="images/product/table01.png"/>
        <Product image="images/product/kitchen01.png"/>
        <Product image="images/product/sofa01.png"/>
        <Product image="images/product/sofa02.png"/>
        <Product image="images/product/sofa03.png"/>
        <Product image="images/product/table05.png"/>
      </div>
    </div>
    
    {/* Safety Guarantee Section */}
    <div className="flex flex-col md:flex-row items-center justify-between p-6 ">
      <div className="md:w-1/2 space-y-4 ">
        <h2 className="text-2xl font-bold text-gray-900">
          We guarantee the safety of your shopping
        </h2> 
        <div className="space-y-6 flex flex-wrap p-[60px] gap-5">

          <div className="flex items-center space-x-4">
            <div className="text-blue-500">
              {/* Replace 'icon' with actual icon element */}
              <svg className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h3.22c.29-.63.77-1.19 1.4-1.58A3.993 3.993 0 0114 2h6a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg>
            </div>
            <div className="container-xs">
              <h3 className="text-xl font-semibold text-gray-900">Fast Shipping</h3>
              <p className="text-gray-800">
              Enjoy swift and safe delivery of your furniture, ensuring it reaches your home quickly and securely.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-blue-500">
              {/* Replace 'icon' with actual icon element */}
              <svg className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h3.22c.29-.63.77-1.19 1.4-1.58A3.993 3.993 0 0114 2h6a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Track yuor package</h3>
              <p className="text-gray-800">
              Stay informed with our real-time tracking system, allowing you to monitor your order every step of the way for peace of mind.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-blue-500">
              {/* Replace 'icon' with actual icon element */}
              <svg className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h3.22c.29-.63.77-1.19 1.4-1.58A3.993 3.993 0 0114 2h6a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">60 Days Return</h3>
              <p className="text-gray-800">
              Shop confidently with our hassle-free 60-day return policy, offering full refunds or exchanges if you’re not completely satisfied.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-blue-500">
              {/* Replace 'icon' with actual icon element */}
              <svg className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h3.22c.29-.63.77-1.19 1.4-1.58A3.993 3.993 0 0114 2h6a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">24 Hours support</h3>
              <p className="text-gray-800">
              Our dedicated customer support team is available 24/7 to assist you with any questions or concerns, ensuring you receive help whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="py-[60px]">
        {/* Replace 'image' with actual image element */}
        <img src="images/bed01.png" alt="Shopping Safety" className="rounded-[0px] shadow-md h-[420px] w-[100]" />
      </div>
    </div>


    </>
  )
}

export default Homepage