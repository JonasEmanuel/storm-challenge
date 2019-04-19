import * as resourceController from '../controllers/resource.controller';

const resourceRoutes = (app) => {
    app.route('/resource')
        .get(resourceController.findAll)
        .post(resourceController.update)
        .put(resourceController.create);
    app.route('/resource/:id')
        .get(resourceController.find)
        .delete(resourceController.remove);
}

export default resourceRoutes;