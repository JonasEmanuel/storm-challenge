import DatabaseManager from "../application/DatabaseManager";

export default class DefaultRepository {
    constructor (modelName) {
        this.modelName = modelName;
    }

    async add(document) {
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.insert(document, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });
    }

    async findAll() {
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.find({}).toArray((err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });
    }

    async find(_id) {
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.find({ _id }).toArray((err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });
    }

    async update(document) {
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.updateOne({ _id: document._id }, { $set: document }, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });
    }

    async remove(_id){
        let database = await DatabaseManager.getConnection();
        return new Promise((resolve, reject) => {
            let collection = database.collection(this.modelName);
            collection.updateOne({ _id }, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });
    }
}