import HomPage from './Components/HomPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Context/Context';

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
