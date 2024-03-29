import React, { useEffect, useContext } from 'react'
import { FiHome } from 'react-icons/fi'
import { BiCategoryAlt } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../Context/context'
export default function Sidebar() {

    const location = useLocation()
    const { state, dispatch } = useContext(GlobalContext)

    const NavItems = [
        {
            tab: "Home",
            url: "/",
            icon: <FiHome />
        },
        {
            tab: "Categories",
            url: "/category",
            icon: <BiCategoryAlt />
        },
        {
            tab: "Products",
            url: "/products",
            icon: <BiCategoryAlt />
        },


    ]


    return (
        <>

 <div className=" p-3 d-flex  justify-content-between align-items-center" style={{backgroundColor:'#01F9C6 '}}  >
                <span>Admin Name</span>
                <button className="btn btn-outline-dark text-success"
                    onClick={() => dispatch({ type: "USER_LOGOUT" })}>Logout</button>
            </div>


            <ul className="nav flex-column pt-3">
                {
                    NavItems.map((val, key) =>

                        <li key={key} className={`nav-item m-2  ${location.pathname == val.url ? 'bg-white rounded' : null}`}>
                            <Link className='nav-link d-flex align-items-center  gap-2' to={val.url}>
                                <span style={{color:'#01F9C6 '}}>{val.icon}</span>

                                <span style={{color:'#01F9C6 '}}>{val.tab}</span>
                            </Link>
                        </li>)
                }

            </ul>

        </>
    )
}
