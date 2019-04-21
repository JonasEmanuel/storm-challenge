import * as orderController from '../controllers/order.controller';

const resourceRoutes = (router) => {
    let orderRoute = router.route('/order');
    let orderIdRoute = router.route('/order/:id');
    
    orderRoute.get(orderController.findAll)
    orderRoute.post(orderController.update)
    orderRoute.put(orderController.create);
    orderIdRoute.get(orderController.find)
    orderIdRoute.delete(orderController.remove);
}

export default resourceRoutes;