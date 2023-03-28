import Avator from '../Assets/user.png';
import { updateProfile } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = new Date().getTime();
    const storageRef = ref(storage, `${userName + date}`);

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await uploadBytesResumable(storageRef, file);
      const downloadUrl = await getDownloadURL(storageRef);
      await updateProfile(user, {
        displayName: userName,
        photoURL: downloadUrl,
      });
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        displayName: userName,
        email,
        photoURL: downloadUrl,
      });
      navigate('/');
    } catch (error) {
      setErr(true);
      console.log(error.message);
    }
  };
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <span className="logo">Messenger</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="User name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <input
            type="file"
            id="file"
            className="hide"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file">
            <img src={Avator} alt="avator" className="avator" />
            <span>Add an Avatar</span>
          </label>
          <button className="signButton">Sign up</button>
        </form>
        <p>You already have an account? Login</p>
      </div>
    </div>
  );
};

export default RegisterPage;
