import config from '../config/config';
import { Client, Account, ID } from 'appwrite';

export class Authentication {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createUserAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                this.logIn({ email, password })
            }
        } catch (error) {
            return userAccount;

        }
    }
    async logIn({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log('AppwriteAuthentication :: Error is logIn ::', error);
        }
    }

    async getUserLocation() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('AppwriteAuthentication :: Error is getUserLocation ::', error);
        }
        return null;
    }

    async logOut() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log('AppwriteAuthentication :: Error is logOut ::', error);
        }
    }

}

const authentication = new Authentication()


export default authentication;