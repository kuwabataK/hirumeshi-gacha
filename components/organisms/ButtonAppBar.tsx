import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import firebase from '../../utils/firebase';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';

type LoginButtonProps = {
  isLogin: boolean
  displayName: string | null
}

const LoginButton: React.FC<LoginButtonProps> = observer((props: LoginButtonProps) => {

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  const logout = () => {
    firebase.auth().signOut()
  }

  if (props.isLogin) {
    return <Button color="inherit" onClick={logout} >{props.displayName} : Logout</Button>
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

const ButtonAppBar = observer(() => {
  const classes = useStyles();

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user => {
      store.authStore.setUser(user)
    })
  })

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
          <LoginButton displayName={store.authStore.user && store.authStore.user.displayName} isLogin={store.authStore.isLogin} ></LoginButton>
        </Toolbar>
      </AppBar>
    </div>
  );
})

export default ButtonAppBar