import { Link } from "react-router-dom"

function Homepage() {
  return (
    <>
    {/* section one  */}
    <div className="flex justify-center bg-[#ffe7c7] py-20 md:py-5">
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
          className="rounded-[0px] bg-gray-900 px-6 py-3 text-sm font-semibold text-[#ffe7c7] shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Shop Now
          </button>
          </ Link>
        </div>
        <img 
          src="images/home_pic01.png"
          alt="image"
          className=" h-[75%] w-[38%] object-cove md:w-[75%]"
        />
      </div>
    </div>

    {/* section two */}

    </>
  )
}

export default Homepage