export default class User {
    constructor({email, password} = {}){
        ({email: this.email, password: this.password} = {email, password});
    }
}