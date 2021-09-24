export class WishList {
    public id: number;
    public userId: number;
    public productId: number;

    constructor({id, userId, productId}) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
    }
}