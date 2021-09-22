import { RouteComponentProps } from "react-router";

type TParams = { id: string };

const ProductList = ({ match }: RouteComponentProps<TParams>) => (
    <h1>This is a page for product with ID: {match.params.id ?? ''} </h1>
);

export default ProductList;