import { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {

  const location = useLocation();

  const isAboutPage = location.pathname.includes('/about');
  const isContactPage = location.pathname.includes('/contact');

  const isCoursesListPage = location.pathname.includes('/course-list');

  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext)

  const { openSignIn } = useClerk()
  const { user } = useUser()

  const becomeEducator = async () => {

    try {

      if (isEducator) {
        navigate('/educator')
        return;
      }

      const token = await getToken()
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', { headers: { Authorization: `Bearer ${token}` } })
      if (data.success) {
        toast.success(data.message)
        setIsEducator(true)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCoursesListPage ? 'bg-white' : 'bg-green-100/70'}`}>
      <img onClick={() => navigate('/')} src={assets.logoNew} alt="Logo" className="w-28 lg:w-40 cursor-pointer" />
      <div className='flex items-center justify-center gap-8 text-lg'>
        <a href='/' className={!isAboutPage && !isContactPage ? 'text-cyan-600' : ''}>Home</a>
        <a href='/about' className={isAboutPage ? 'text-cyan-600' : ''}>About</a>
        <a href='/contact' className={isContactPage ? 'text-cyan-600' : ''}>Contact us</a>
      </div>
      <div className="md:flex hidden items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {
            user && <>
              <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
              | <Link to='/my-enrollments' >My Enrollments</Link>
            </>
          }
        </div>
        {user
          ? <UserButton />
          : <button onClick={() => openSignIn()} className="bg-cyan-600 text-white px-5 py-2 rounded-full">
            Create Account
          </button>}
      </div>
      {/* For Phone Screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
          | {
            user && <Link to='/my-enrollments' >My Enrollments</Link>
          }
        </div>
        {user
          ? <UserButton />
          : <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" />
          </button>}
      </div>
    </div>
  );
};

export default Navbar;