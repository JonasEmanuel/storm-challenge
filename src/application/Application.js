import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import cors from 'cors';

import orderRoute from '../routes/order.route';
import resourceRoutes from '../routes/resource.route';

export default class Application {
    constructor() { 
        this.app = express();
        this.router = express.Router();
        this.connectionString = "mongodb+srv://root:root@maincluster-bzgfm.mongodb.net";
        this.databaseName = "stormChallenge";
        this.port = 9000;
    }

    init() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use('/', express.static('./src/clientApp/dist')); 
        
        this.connectDatabase();
        this.loadRoutes();

        this.app.listen(process.env.PORT || this.port, () => {
            console.log(`Server running on port ${this.port}/`);
        });
    }

    loadRoutes(){
        this.app.use('/api', this.router);
        resourceRoutes(this.router);
        orderRoute(this.router);
    }

    connectDatabase() {
        MongoClient.connect(this.connectionString, { useNewUrlParser: true }, (err, client) => {
            if(!err){
                console.log("MongoDB - OK");
            } else {
                console.log(err);
            }
        });
    }

    static getConfig() {
        return {
            port: this.port,
            connectionString: this.connectionString,
            databaseName: this.databaseName
        }
    }
}