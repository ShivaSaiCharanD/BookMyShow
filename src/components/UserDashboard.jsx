import { Outlet,useNavigate } from 'react-router-dom';
import Carousel from './Carousel';

function UserDashboard() {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl ">
      <Carousel />
      <button onClick={()=>{navigate('/dasboard/theatre')}}>Next</button>
      <Outlet />
    </div>
  );
}

export default UserDashboard;
