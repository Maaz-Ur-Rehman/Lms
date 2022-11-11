import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
import Admin from "../screens/admin";
import Login from "../screens/login";
import Signup from '../screens/signup'
import Home from '../screens/home' 
import { StudentsList } from "../screens/students";
  function AppRouter(){
    return(
        <>
        <Router>
            <Routes>
                <Route path="/:id" element={<Home />} />
                <Route path="login"  element={<Login/>} />
                <Route path="signup" element={<Signup />}/>
                <Route path="stdlst" element={<StudentsList />}/>

                {/* <Route path="admin/*" element={<Admin />} /> */}
            </Routes>
        </Router>
        </>
    )

  }

  export default AppRouter