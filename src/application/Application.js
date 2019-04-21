import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import path from 'path';

import orderRoute from '../routes/order.route';
import resourceRoutes from '../routes/resource.route';

require('dotenv').config();

export default class Application {
    constructor() { 
        this.app = express();
        this.router = express.Router();
        this.connectionString = process.env.DATABASE_CONNECTION_STRING;
        this.databaseName = process.env.DATABASE_NAME;
    }

    init() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(express.static(path.join(__dirname, './src/clientApp/dist'), { maxAge: 86400000 }))); 
        
        this.loadRoutes();
        this.connectDatabase();

        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on http://localhost:${process.env.PORT}/`);
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
            }
        });
    }
}