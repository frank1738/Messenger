import Chats from './Chats';
import NavBar from './NavBar';
import Search from './Search';

const SideBar = () => {
  return (
    <div className="sidebar">
      <NavBar />
      <Search />
      <Chats />
      <Chats />
      <Chats />
    </div>
  );
};

export default SideBar;
