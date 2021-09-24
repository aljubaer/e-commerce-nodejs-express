import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AppBrand = () => (
    <>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            MUI
        </Typography>
    </>
);

export default AppBrand;
