export default class Token
{
    constructor({token, expiration} = {}){
        ({token: this.token, expiration: this.expiration} = {token, expiration})
    }
}