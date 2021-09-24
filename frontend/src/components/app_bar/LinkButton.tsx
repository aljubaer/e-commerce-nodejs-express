import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LinkButton = ({ to, title }: any) => (
    <Link to={to} style={{ textDecoration: "none", color: "#fff" }}>
        <Button color="inherit">{title}</Button>
    </Link>
);

export default LinkButton;
