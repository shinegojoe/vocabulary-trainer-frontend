import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RedditIcon from '@material-ui/icons/Reddit'
import AppleIcon from '@material-ui/icons/Apple';
import { withRouter, RouterProps } from "react-router-dom"
import style from '../sass/appBar.module.sass'


function ButtonAppBar(props: RouterProps) {

  const home = () => {
    props.history.push({
        pathname: '/'
    })
  }

  return (
    <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
            <div className={style.appBarContainer}>
                <div>
                    <IconButton onClick={home} edge="start"  color="inherit" aria-label="menu">
                        <AppleIcon />
                    </IconButton>
                </div>
                <div>
                    <Button color="inherit">Login</Button>
                </div>
             
            </div>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar)