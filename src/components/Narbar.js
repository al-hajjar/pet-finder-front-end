import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"



const Navbar = ({loggedIn, setLoggedIn}) => {
    const [open, setOpen] = useState(false)

    function logoutUser(){
        localStorage.clear()
        setLoggedIn(false)
        
        fetch(`https://mkali-pet-finder.onrender.com/logout`, {method: 'DELETE'})
        .then(res => {
            if(!res.ok){
                res.json().then(error => console.warn(error))
            }
        })
    }

    return ( 
        <>
            <nav className='lg:px-48 md:px-32 px-8 md:py-6 py-4 top-0 left-0 sticky z-[100] bg-pink-400 opacity-100 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-2xl text-lg uppercase font-semibold '>
                            PET FINDER
                        </Link>
                        
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-gray-800">
                            <FaBars/>
                        </button>
                    </div>
                    
                    <div className='md:flex hidden text-gray-700'>
                        <ul className="flex items-center text-center text-base font-medium">
                            <li onClick={() => setOpen((prev) => !prev)} className='md:mx-4 hover:text-white'>
                                <Link to='/'>Home</Link>
                            </li>
                            { !loggedIn ?
                                <>
                                    <li onClick={() => setOpen((prev) => !prev)} className=''>
                                        <Link to='/login' className="mx-4 my-4 bg-white px-3 py-2 hover:bg-pink-800 hover:text-white duration-500">
                                            Login
                                        </Link>
                                    </li>
                                    <li onClick={() => setOpen((prev) => !prev)} className=''>
                                        <Link to='/signup' className="mx-4 my-4 bg-pink-800 px-3 py-2 hover:bg-white text-white hover:text-pink-800 duration-500">
                                            Signup
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li onClick={() => setOpen((prev) => !prev)} className='md:mx-4 md:my-0 my-4 hover:text-white'>
                                        <Link to='/pets'>Pets</Link>
                                    </li>                              
                                    <button className="mx-4 my-4 bg-white px-3 py-1 hover:bg-sky-800 hover:text-white duration-500 rounded-md"
                                        onClick={logoutUser}>
                                        Logout
                                    </button> 
                                </>
                            }
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0  space-y-8 py-6 px-8 w-full h-screen duration-300 ease-in-out bg-pink-400`}>
                    <div className="flex justify-end">
                        <button onClick={() => setOpen((prev) => !prev)} className="mb-8 sm:hidden text-2xl text-gray-100 text-right">
                                <FaTimes/> 
                        </button> 
                    </div>
                    <ul className="flex flex-col items-center text-center text-base font-medium">
                        <li onClick={() => setOpen((prev) => !prev)} className='md:mx-4 md:my-0 my-4 hover:text-white'>
                            <Link to='/'>Home</Link>
                        </li>
                        { !loggedIn ?
                            <>
                                <li onClick={() => setOpen((prev) => !prev)} className='flex flex-col md:my-0 my-4'>
                                    <Link to='/login' className="mx-4 my-4 bg-white px-3 py-1 hover:bg-pink-800 hover:text-white duration-500 rounded-md">
                                        Login
                                    </Link>
                                </li>
                                <li onClick={() => setOpen((prev) => !prev)} className='flex flex-col md:my-0 my-4'>
                                    <Link to='/signup' className="mx-4 my-4 bg-pink-800 px-3 py-1 hover:bg-white text-white hover:text-pink-800 duration-500 rounded-md">
                                        Signup
                                    </Link>
                                </li>
                            </>
                             :
                            <>
                                <li onClick={() => setOpen((prev) => !prev)} className='md:mx-4 md:my-0 my-4 hover:text-white'>
                                    <Link to='/pets'>Pets</Link>
                                </li>                              
                                <button className="mx-4 my-4 bg-white px-3 py-1 hover:bg-sky-800 hover:text-white duration-500 rounded-md"
                                    onClick={logoutUser}>
                                    Logout
                                </button> 
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;