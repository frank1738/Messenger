const NavBar = () => {
  return (
    <div className="navbar">
      <span className="nav-logo">Messenger</span>
      <div className="user">
        <img
          src="https://media.licdn.com/dms/image/D4D35AQGc2YZYwSgVhg/profile-framedphoto-shrink_200_200/0/1655451209721?e=1679929200&v=beta&t=z65jkFBmOQP1Jj9Wky1s6Rt8WF3tooFyhVQDLklru3I"
          alt="profile"
        />
        <span>frank</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default NavBar;
