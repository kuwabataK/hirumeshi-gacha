import firebase from 'firebase/app'
import 'firebase/auth'

try {
  const config = {
    apiKey: 'AIzaSyD6U4pstGM0NIvltrYphb3MxklMhGKLRT8',
    authDomain: 'hirumeshi-gacha.firebaseapp.com',
    databaseURL: 'https://hirumeshi-gacha.firebaseio.com',
    projectId: 'hirumeshi-gacha',
    storageBucket: 'hirumeshi-gacha.appspot.com',
    messagingSenderId: '720424860718',
    appId: '1:720424860718:web:a6eb2f781b7de24e'
  }
  if (!firebase.apps || firebase.apps.length <= 0) {
    firebase.initializeApp(config)
  }
} catch (e) {
  console.log(e)
}

export default firebase
