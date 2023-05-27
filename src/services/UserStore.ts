interface User {
    id: number,
    firstName?: string,
    secondName?: string,
    lastName?: string,
    phone?: string,
    email?: string,
    photo?: string,
    emailStatus?: number,
}

class UserStore {
    token: string = ''

    get isAuth () {
        return !!this.token
    }
    async signIn (token: string) {
        this.token = token
        localStorage.setItem('user.token', token)
    }
    async signOut () {
        this.token = ''
        localStorage.removeItem('user.token')
    }
}

const userStore = new UserStore()


export {
    userStore,
    type User,
}
