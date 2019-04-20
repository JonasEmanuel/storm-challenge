import Request from '../components/Request.vue';
import Requests from '../components/Requests.vue';

const routes = [
    { path: '/', component: Requests },
    { path: '/request', component: Request }
];

export default routes;