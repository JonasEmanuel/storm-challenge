import * as resourceController from '../controllers/resource.controller';

const resourceRoutes = (router) => {
    let resourceRoute = router.route('/resource');
    let resourceIdRoute = router.route('/resource/:id');
    
    resourceRoute.get(resourceController.findAll)
    resourceRoute.post(resourceController.update)
    resourceRoute.put(resourceController.create);
    resourceIdRoute.get(resourceController.find)
    resourceIdRoute.delete(resourceController.remove);
}

export default resourceRoutes;