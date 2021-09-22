export interface Dao {
    create: (body: object) => object;
    findAll: () => object[];
    findById: (id: number) => object;
    find: (crieteria: any) => object[];
}