import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

import resourceRoute from '../routes/resource.route';
import resourceRoutes from '../routes/resource.route';

export default class Application {
    constructor() { 
        this.app = express();
        this.connectionString = 'mongodb://localhost:27017';
        this.databaseName = 'stormChallenge';
    }

    init() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        this.loadRoutes();
        this.connectDatabase();

        this.app.listen(6000, () => {
            console.log(`Server running on http://localhost:6000/`);
        });
    }

    loadRoutes(){
        resourceRoutes(this.app);
        //requestRoute(this.app);
    }

    connectDatabase() {
        MongoClient.connect(this.connectionString, { useNewUrlParser: true }, (err, client) => {
            if(!err){
                console.log("MongoDB - OK");
            }
        });
    }
}