import { Outlet, useLocation } from 'react-router-dom';
import Carousel from './Carousel';

function UserDashboard() {
  const location = useLocation();
  console.log('Current Path:', location.pathname); // Debug output

  const isMoviePage = location.pathname.includes('/dashboard/movie');

  return (
    <div className="max-w-2xl">
      {!isMoviePage && <Carousel />}
      <Outlet />
    </div>
  );
}

export default UserDashboard;
