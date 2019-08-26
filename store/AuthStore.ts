import { observable, action } from 'mobx'
import firebase from '../utils/firebase';

export class AuthStore {

    constructor(){
        this.checkLoginStatus()
    }

    @observable user: firebase.User | null = null
    @observable loginStatus: 'login' | 'logout' | 'loading' = 'loading'

    @action
    setUser(user: firebase.User | null) {
        this.user = user
        if (user) {
            this.loginStatus = 'login'
        } else {
            this.loginStatus = 'logout'
        }
    }

    @action
    async login() {
        this.checkLoginStatus()
        this.loginStatus = 'loading'
        const provider = new firebase.auth.GoogleAuthProvider()
        await firebase.auth().signInWithRedirect(provider)
    }

    @action
    async logout() {
        this.checkLoginStatus()
        this.loginStatus = 'loading'
        await firebase.auth().signOut()
    }

    checkLoginStatus() {
        firebase.auth().onAuthStateChanged(user => {
            this.setUser(user)
        })
    }
}