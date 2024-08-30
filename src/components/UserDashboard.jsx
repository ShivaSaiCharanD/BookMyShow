import { Outlet } from 'react-router-dom';
import Carousel from './Carousel';

function UserDashboard() {
  return (
    <div className="max-w-2xl ">
      <Carousel />
      <Outlet />
    </div>
  );
}

export default UserDashboard;
