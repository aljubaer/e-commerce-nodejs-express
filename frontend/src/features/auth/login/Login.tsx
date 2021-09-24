import {
    Button,
    CssBaseline,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { Redirect, useLocation } from "react-router";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loginAsync, selectUser } from "./loginSlice";

const validationSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
});

const Login = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    let location = useLocation<{ from: string }>();

    let { from } = location.state || { from: { pathname: "/" } };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(loginAsync(values));
        },
    });

    return (
        <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
            <CssBaseline />
            <Typography variant="h4" align="center" component="h1" gutterBottom>
                Login
            </Typography>
            <Paper style={{ padding: 16 }}>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        style={{ marginBottom: 16 }}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        style={{ marginBottom: 16 }}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Paper>
            {user.status === "success" && <Redirect to={from} />}
        </div>
    );
};

export default Login;
