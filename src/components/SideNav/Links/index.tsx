import { MdLogout, MdOutlineClose } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuthContext } from 'src/hooks/useAuthContext'



const Links = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    toast.success("Logged ot Successfully.")
    dispatch({ type: "LOGOUT", payload: null })
    return navigate('/')
  }


  return (
    <div className={`md:hidden shadow fixed top-0 left-0 w-5/6 min-h-screen h-screen bg-white text-black px-4  py-2 md:px-10 z-30 text-sm ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300`}>
       { isOpen &&
              <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden z-50 text-gray-dark absolute top-6 right-6 `} /> 
              // : <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl cursor-pointer md:hidden text-gray-dark' />
            }
      <nav className="flex flex-col justify-between h-full gap-16 p-4 pt-24 md:hidden">
        <ul className='flex flex-col font-medium text-dark-light gap-7 md:gap-4 lg:gap-7'>
          <li><Link to="/businesses" className={`pb-1.5 px-1 font-medium`}>Businesses</Link></li>
          <li><Link to="/jobs" className={`pb-1.5 px-1 font-medium`}>Jobs</Link></li>
          <li><Link to="/blogs" className={`pb-1.5 px-1 font-medium`}>Blogs</Link></li>
        </ul>
        <div onClick={handleLogout} className={`w-fit py-2 pb-2.5 flex items-center gap-2 text-xs font-medium rounded-full`}>
            <MdLogout size={"1.3rem"} />
            Logout
        </div>
      </nav>
    </div>
  )
}

export default Links