import { MdLogout, MdBusiness, MdWorkOutline } from 'react-icons/md'
import { TbBrandBlogger } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

const SideNav = () => {
    const { pathname } = useLocation();
    // console.log({pathname})

  return (
    <div className='no-scrollbar hidden sm:flex flex-col justify-between grad-to-bottom max-h-screen overflow-hidden h-screen min-w-[240px] w-60 pb-4 grad-to-right'>
        <div>
            <div className='flex flex-col items-center w-full gap-5 py-5 text-center border-b border-white/10'>
                <Link to={"/admin/"} className='text-2xl font-semibold'>
                    {/* <Image src={Logo} className='w-full h-12 bg-white md:h-12' alt='' /> */}
                    Admin
                </Link>
            </div>
            <div className='flex flex-col gap-2 pt-12 pb-2'>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${(pathname === '/businesses') && 'font-bold'}`} to="/businesses">
                    <MdBusiness size={"1.3rem"} />
                    Businesses
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("jobs") && 'font-bold'}`} to={"/jobs"}>
                    <MdWorkOutline size={"1.3rem"} />
                    Jobs 
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("blogs") && 'font-bold'}`} to={"/blogs"}>
                    <TbBrandBlogger size={"1.3rem"} />
                    Blogs 
                </Link>
            </div>
        </div>
        <div className='flex flex-col gap-10 pb-2 underline'>
            <div onClick={() => ''} className={`py-2.5 pl-6 text-sm flex items-center gap-2 cursor-pointer`}>
                <MdLogout size={"1.3rem"} />
                Logout
            </div>
        </div>
    </div>
  )
}

export default SideNav