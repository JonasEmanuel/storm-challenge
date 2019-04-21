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
                MongoClient.connect('mongodb+srv://root:root@maincluster-bzgfm.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, (err, client) => {  
                    this.connection = client.db('stormChallenge');
                    if(!err){
                        resolve(this.connection);
                    } else {
                        reject(err);
                    }
                });
            }
        })
    }
}