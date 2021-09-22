export class Product {
    public id: number;
    public name: string;
    public description: string;
    public imageUrl: string;

    constructor({id, name, description, imageUrl}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}