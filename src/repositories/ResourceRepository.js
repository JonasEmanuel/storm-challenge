import DefaultRepository from "./DefaultRepository";

export default class ResourceRepository extends DefaultRepository {
    constructor(id, type, price) {
        super("Resource");
    }
}