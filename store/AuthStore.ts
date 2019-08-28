import { observable, action } from 'mobx'
import firebase from '../utils/firebase'

export class AuthStore {
  constructor() {
    this.checkLoginStatus()
  }

  /**
   * ログインユーザー
   */
  @observable user: firebase.User | null = null

  /**
   * ログイン状態
   */
  @observable loginStatus: 'login' | 'logout' | 'loading' = 'loading'

  /**
   * googleのアカウントでログインする
   */
  @action
  async login() {
    this.checkLoginStatus()
    this.loginStatus = 'loading'
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithRedirect(provider)
  }

  /**
   * ログアウトする
   */
  @action
  async logout() {
    this.checkLoginStatus()
    this.loginStatus = 'loading'
    await firebase.auth().signOut()
  }

  /**
   * firebaseのログイン状態に応じてログインユーザーを変更する
   *
   * @param user 設定するユーザー
   */
  @action
  private setUser(user: firebase.User | null) {
    this.user = user
    if (user) {
      this.loginStatus = 'login'
    } else {
      this.loginStatus = 'logout'
    }
  }

  /**
   * ログイン状態の変更を監視するObserverをセット
   */
  private checkLoginStatus() {
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user)
    })
  }
}
