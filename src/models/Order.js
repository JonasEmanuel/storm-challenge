export default class Order {
    constructor(id, totalResources, total, itens) {
        this._id = id;
        this.itens = itens;
        this.totalResources = totalResources;
        this.total = total;
    }
}