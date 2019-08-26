import { observable, action, computed } from 'mobx'

export class AuthStore {
    @observable user: firebase.User | null = null
    @action
    setUser(user: firebase.User | null) {
        this.user = user
    }

    @computed
    get isLogin(){
        if(this.user) return true
        return false
    }
}