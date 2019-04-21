import * as orderController from '../controllers/order.controller';

const resourceRoutes = (router) => {
    let orderRoute = router.route('/orders');
    let orderIdRoute = router.route('/orders/:id');
    
    orderRoute.get(orderController.findAll)
    orderRoute.put(orderController.update)
    orderRoute.post(orderController.create);
    orderIdRoute.get(orderController.find)
    orderIdRoute.delete(orderController.remove);
}

export default resourceRoutes;