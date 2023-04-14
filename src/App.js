import logo from './logo.svg';
import './App.css';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import AuthDetails from './component/auth/AuthDetails';

function App() {
  return (
    <div className="App">
      <SignUp/>
      <SignIn/>
      <AuthDetails/>
    </div>
  );
}

export default App;
