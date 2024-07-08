import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Logo from "./../Shared/Logo";
import NavigationLink from "./../Shared/NavigationLink";
import {useAuth} from './../../context/AuthContext';

 const Header = () => {
  const auth = useAuth();
  return (
    <AppBar sx={{bgcolor: "transparent", position: "static", boxShadow:"none"}} >
      <ToolBar sx={{display: "flex"}}>
        <Logo />
        <div>
          { auth?.isLoggedIn ? 
          ( <>
            <NavigationLink 
              to="/chat"
              text="Go To Chat"
              textColor="Black"
              bg="#00fffc"
            />
            <NavigationLink 
              to="/"
              text="logout"
              textColor="white"
              bg="#51538f"
              onClick={auth.logout}
            />
          </> )
          :
          ( <>
            <NavigationLink
               to="/login"
               text="login"
               textColor="black"
               bg="#00fffc"
             />
             <NavigationLink 
               to="/signup"
               text="signup"
               textColor="white"
               bg="#51538f"
             />
          </> )
          }
        </div>
      </ToolBar>
    </AppBar>
  )
};

export default Header;
