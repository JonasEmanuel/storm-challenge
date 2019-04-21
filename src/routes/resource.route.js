import * as resourceController from '../controllers/resource.controller';

const resourceRoutes = (router) => {
    let resourceRoute = router.route('/resources');
    let resourceIdRoute = router.route('/resources/:id');
    
    resourceRoute.get(resourceController.findAll)
    resourceRoute.put(resourceController.update)
    resourceRoute.post(resourceController.create);
    resourceIdRoute.get(resourceController.find)
    resourceIdRoute.delete(resourceController.remove);
}

export default resourceRoutes;