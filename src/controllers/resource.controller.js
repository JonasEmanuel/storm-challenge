import ResourceRepository from "../repositories/ResourceRepository";
import Resource from "../models/Resource";

const resourceRepository = new ResourceRepository();

export async function findAll(request, response) {
    try {
        let resources = await resourceRepository.findAll();
        response.json(resources);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function create(request, response) {
    let resource = new Resource();
    resource.price = request.body.price;
    resource.type = request.body.type;
    try {
        let createdResource = await resourceRepository.add(resource);
        response.status(201).json(createdResource[0]);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function find(request, response) {
    try {
        let resource = await resourceRepository.find(request.params.id);
        response.json(resource);
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function update(request, response) {
    let resource = new Resource();
    resource._id = request.body._id;
    resource.price = request.body.price;
    resource.type = request.body.type;
    try {
        await resourceRepository.update(resource);
        response.status(200).end();
    } catch (e) {
        response.status(500).json(e);
    }
}

export async function remove(request, response) {
    try {
        await resourceRepository.remove(request.params.id);
        response.status(200).end();
    } catch (e) {
        response.status(500).json(e);
    }
}