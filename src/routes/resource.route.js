import * as resourceController from '../controllers/resource.controller';

const resourceRoutes = (app) => {
    app.get('/resource', resourceController.findAll);
    app.get('/resource/:id', resourceController.find);
    app.post('/resource', resourceController.update);
    app.put('/resource', resourceController.create);
    app.delete('/resouce', resourceController.delete)
}

export default resourceRoutes;