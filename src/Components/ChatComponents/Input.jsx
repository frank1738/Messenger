import { UilPaperclip, UilMessage } from '@iconscout/react-unicons';

export const Input = () => {
  return (
    <div className="chatInput">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <input type="file" className="hide" id="file" />
        <label htmlFor="file">
          <UilPaperclip className="inputIcon" />
        </label>
        <button>
          <UilMessage className="sendBtn" />
        </button>
      </div>
    </div>
  );
};
