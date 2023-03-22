import { UilVideo, UilUserPlus, UilEllipsisH } from '@iconscout/react-unicons';
import './Chat.css';
import { Input } from './Input';
import Messages from './Messages';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Frank</span>
        <div className="chatIcons">
          <UilVideo size="25" className="chatIcon" />
          <UilUserPlus size="25" className="chatIcon" />
          <UilEllipsisH size="25" className="chatIcon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
