import Avator from '../Assets/user.png';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <span className="logo">Messenger</span>
        <span className="title">Register</span>
        <form>
          <input className="input" type="text" placeholder="User name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" className="hide" />
          <label htmlFor="file">
            <img src={Avator} alt="avator" className="avator" />
            <span>Add an Avator</span>
          </label>
          <button className="signButton">Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default RegisterPage;
