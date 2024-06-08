import { Link, NavLink } from "react-router-dom"

function Header() {
  return (
    <div className="container-xs flex item-center justify-between gap-4 md:px-4 bg-[#ffffff]">
      <Link to="/homepage">
      <img src="images/Logo_02.png" alt="logo" className="flex h-[140px] w-[220px] object-contain"/>
      </Link>
      <ul className="flex items-center text-[18px] font-semibold justify-center mx-[3%] gap-9">
        {/* home nav */}
        <li>
          <NavLink to="/homepage" className={({isActive})=>
            `flex cursor-pointer items-center gap-2.5 ${isActive ? "text-orange" : "text-gray"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }>
            Home
          </NavLink>
        </li>
        {/* Blog nav */}
        <li>
          <NavLink to="/shop" className={({isActive})=>
            `flex cursor-pointer items-center gap-2.5 ${isActive ? "text-orange" : "text-gray"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }>
            Shop
          </NavLink>          
        </li>
        {/* About nav */}
        <li>
          <NavLink to="/about" className={({isActive})=>
            `flex cursor-pointer items-center gap-2.5 ${isActive ? "text-orange" : "text-gray"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }>
            About
          </NavLink>  
        </li>
        {/* Contact nav */}
        <li>
          <NavLink to="/contact" className={({isActive})=>
            `flex cursor-pointer items-center gap-2.5 ${isActive ? "text-orange" : "text-gray"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }>
            Contact
          </NavLink>  
        </li>
      </ul>
    </div>
  )
}

export default Header