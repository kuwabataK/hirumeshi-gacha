import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';


/**
 * ヘッダーに表示するログインボタン
 * 
 * @param props 
 */
const LoginButton: React.FC = observer(() => {

  const login = () => {
    store.authStore.login()
  }

  const logout = () => {
    store.authStore.logout()
  }

  if (store.authStore.loginStatus === 'login') {
    return <Button color="inherit" onClick={logout} >{store.authStore.user && store.authStore.user.displayName}</Button>
  } else if (store.authStore.loginStatus === 'loading') {
    return <Button color="inherit">Now Loading...</Button>
  }
  return <Button color="inherit" onClick={login} >Login</Button>
})

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

/**
 * ヘッダーに常に表示するAppBar
 */
const ButtonAppBar = observer(() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <LoginButton></LoginButton>
        </Toolbar>
      </AppBar>
    </div>
  );
})

export default ButtonAppBar