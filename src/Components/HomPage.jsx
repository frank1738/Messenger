import SideBar from './ChatComponents/SideBar';
import Chat from './ChatComponents/Chat';
import './HomePage.css';
const HomPage = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default HomPage;
