import { Client, ID, Databases, Storage } from "appwrite";
import config from "../config/config";

export class Services {
    client = new Client()
    databases;
    storage;

    constructor(){
     
    }
}

const services = new Services()

export default services;