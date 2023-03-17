const LoginPage = () => {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <span className="logo">Messenger</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="signButton">Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default LoginPage;
