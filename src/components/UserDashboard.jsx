import { Outlet, useLocation,useNavigate } from 'react-router-dom';
import Carousel from './Carousel';

function UserDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log('Current Path:', location.pathname); // Debug output

  const isMoviePage = location.pathname.includes('/dashboard/movie');
  const isTheatrePage = location.pathname.includes('/dashboard/theatre');

  return (
    <div className="max-w-2xl">
      {!isMoviePage && !isTheatrePage && <Carousel />}
      <button onClick={()=>{navigate('/dashboard/movie/theatre')}}>next</button>
      <Outlet />
    </div>
  );
}

export default UserDashboard;
