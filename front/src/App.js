<<<<<<< HEAD
function App() {
  return <div></div>;
=======
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
import ViewProfile from './components/View_Profile';

function App() {

  return (
      <Container>
        {/* <div className="w-100"> */}
          <Router>

          <AuthProvider>
          <Navbar/>

              <Switch>
                <Route exact path="/" component={Main}/>
                <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
                <Route path="/profile" component={ViewProfile}/>
                <Route path="*" component={Notfound} />
              </Switch>
            </AuthProvider>
          </Router>
        {/* </div> */}
      </Container>
    
    
  );
>>>>>>> login-page
}

export default App;
