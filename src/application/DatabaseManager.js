import { MongoClient } from 'mongodb';

export default class DatabaseManager {
    constructor() {
        this.connection = null;
    }

    static getConnection(){
        return new Promise((resolve, reject) => {
            if(this.connection){
                resolve(this.connection);
            } else {
                MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {  
                    this.connection = client.db('stormChallenge');
                    resolve(this.connection);
                    client.close();
                });
            }
        })
    }
}