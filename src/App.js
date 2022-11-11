import logo from './logo.svg';
import './App.css';
// import Signup from './screens/signup'
// import Login from './screens/login'

import AppRouter from './config/router';
function App() {
  return (
    <div className="App">
      {/* <Signup/>
      <Login/> */}
        <AppRouter/>
    </div>
  );
}

export default App;
