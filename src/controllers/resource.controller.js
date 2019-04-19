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
        resourceRepository.add(resource).then(data => console.log(data));
        response.status(201).end();
    } catch (e) {
        response.status(500).json(e);
    }
}
