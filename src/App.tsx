import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, useHistory } from 'react-router-dom';
import CustomRoute from 'routes/CustomRoute';
import Home from "pages/Home/Home"
import About from 'pages/About/About';
import Planpricing from 'pages/PlanPricing/Planpricing';
import Login from 'pages/Auth/Login/Login';
import Register from 'pages/Auth/Register/Register';
import ForgotPassword from 'pages/Auth/ForgotPassword/ForgotPassword';
import ContactUs from 'pages/ContactUs/ContactUs';
import WorkSpaceArea from 'pages/WorkSpace/WorkSpaceArea';
import Task from 'pages/Task/Task';
import NotificationPage from 'pages/Notification/NotificationPage';
import Message from 'pages/Message/Message';
import StartProject from 'pages/StartProject/StartProject';
import Project from 'pages/Project/Project';
import OurTeam from 'pages/OurTeam/OurTeam';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute
          path="/Login"
          exact
          component={Login}
        />
        <CustomRoute
          path="/register"
          exact
          component={Register}
        />
        <CustomRoute
          path="/forgotpassword"
          exact
          component={ForgotPassword}
        />
        <CustomRoute
          path="/"
          exact
          component={Home}
        />
        <CustomRoute
          path="/about"
          exact
          component={About}
        />
         <CustomRoute
          path="/ourteam"
          exact
          component={OurTeam}
        />
        <CustomRoute
          path="/planpricing"
          exact
          component={Planpricing}
        />
        <CustomRoute
          path="/contactus"
          exact
          component={ContactUs}
        />

        <CustomRoute
          path="/workspacearea"
          exact
          component={WorkSpaceArea}
        />

        <CustomRoute
          path="/task"
          exact
          component={Task}
        />

        <CustomRoute
          path="/notification"
          exact
          component={NotificationPage}
        />

        <CustomRoute
          path="/chat"
          exact
          component={Message}
        />

        <CustomRoute
          path="/startproject"
          exact
          component={StartProject}
        />

        <CustomRoute
          path="/project"
          exact
          component={Project}
        />


      </Switch>
    </BrowserRouter>
  );
}

export default App;
 

