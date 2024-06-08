import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-xs flex flex-col md:flex-row justify-between gap-8 md:gap-16 md:p-5">
        {/* Logo and detail section */}
        <div className="flex flex-col w-full md:w-[36%] gap-4">
          <Link to="/homepage">
            <img src="images/Logo_02.png" alt="logo" className="h-[140px] w-[220px] object-contain"/>
          </Link>
          <p>
            At MyTv Furniture, we believe that furniture should be both stylish and functional. We've been dedicated to providing our customers with high-quality furniture that fits every style and budget. From classic to contemporary, we have something for every home.
          </p>
        </div>
        {/* Customer and information section */}
        <div className="flex flex-col md:flex-row gap-8 md:ml-0">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl">Customer</h2>
            <ul className="flex flex-col gap-4">
              <li><Link to="shop">Order Status</Link></li>
              <li><Link to="shop">Collections</Link></li>
              <li><Link to="shop">Our Story</Link></li>
              <li><Link to="shop">Affiliates</Link></li>
              <li><Link to="shop">Security</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl">Information</h2>
            <ul className="flex flex-col gap-4">
              <li><Link to="shop">Customer Service</Link></li>
              <li><Link to="shop">Career</Link></li>
              <li><Link to="shop">FAQ</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl">Follow us</h2>
            <div className="flex gap-2">
              <Link to="https://facebook.com" target="_blank"><img src="images/fb.png" alt="facebook" className="w-[40px] rounded-[20px]"/></Link>
              <Link to="https://instagram.com" target="_blank"><img src="images/instagram.png" alt="instagram" className="w-[40px] rounded-[20px]"/></Link>
              <Link to="https://twitter.com" target="_blank"><img src="images/twitter.png" alt="twitter" className="w-[40px] rounded-[20px]"/></Link>
              <Link to="https://youtube.com" target="_blank"><img src="images/yt.png" alt="youtube" className="w-[40px] rounded-[20px]"/></Link>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright section */}
      <div className="text-center mt-8">
        <p>© Copyright 2021, MyTv Furniture. All rights reserved.</p>
        <ul className="flex gap-6 mt-2">
          <li><Link to="terms">Terms of conditions</Link></li>
          <li><Link to="policies">Privacy policy</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
