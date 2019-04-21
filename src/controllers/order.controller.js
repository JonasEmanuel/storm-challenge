import OrderRepository from "../repositories/OrderRepository";
import Order from "../models/Order";

const orderRepository = new OrderRepository();

export async function findAll(request, response) {
    try {
        let orders = await orderRepository.findAll();
        response.json(orders);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function create(request, response) {
    let order = new Order();
    order.itens = request.body.itens;
    order.total = request.body.total;
    order.totalResources = request.body.totalResources;
    try {
        let createdOrder = await orderRepository.add(order);
        response.status(201).json(createdOrder[0]);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function find(request, response) {
    try {
        let order = await orderRepository.find(request.params.id);
        response.json(order);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function update(request, response) {
    let order = new Order();
    order._id = request.body._id;
    order.itens = request.body.itens;
    order.total = request.body.total;
    order.totalResources = request.body.totalResources;
    try {
        await orderRepository.update(order);
        response.status(200).end();
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function remove(request, response) {
    try {
        await orderRepository.remove(request.params.id);
        response.status(200).end();
    } catch (e) {
        response.status(500).json(e);
    }
}