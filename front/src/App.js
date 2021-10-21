import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Notfound from './components/NotFound';
import Main from './components/Main';
import { Container } from 'react-bootstrap';
import Signup from './components/Signup';
import AuthProvider from './hooks/useAuth';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    // <Router>
      
    //   <div className="App">
    //     <Navbar/>
    //     <div className="content">
    //       <Switch>
    //         <Route exact path="/">
    //           <Main/>
    //         </Route>
    //         <Route path="/login">
    //           <Login/>
    //         </Route>
    //         <Route path="*">
    //           <Notfound/>  
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
    
      <Container 
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: "70vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Main}/>
                <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
                <Route path="*" component={Notfound} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    
    
  );
}

export default App;
