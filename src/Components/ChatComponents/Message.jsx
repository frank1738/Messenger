const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://media.licdn.com/dms/image/D4D35AQGc2YZYwSgVhg/profile-framedphoto-shrink_200_200/0/1655451209721?e=1679929200&v=beta&t=z65jkFBmOQP1Jj9Wky1s6Rt8WF3tooFyhVQDLklru3I"
          alt="profile"
        />
        <span>just now</span>
      </div>
      <div className="messageContent owner">
        <p className="text owner">hello</p>
        <img
          src="https://images.pexels.com/photos/5082575/pexels-photo-5082575.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Message;
