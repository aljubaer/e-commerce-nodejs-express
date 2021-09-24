import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const ProductsGrid = ({ products, wish }: any) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
            >
                {products?.map((product: any, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProductCard product={product} wish={wish || false} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductsGrid;