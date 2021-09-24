import {
    Alert,
    Button,
    CssBaseline,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { register } from "./registerApi";

const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
});

const Register = () => {
    const [success, setSuccess] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            phoneNumber: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            register(values).then(() => {
                setSuccess(true);
            });
        },
    });

    return (
        <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
            {success && (
                <Alert severity="success">
                    New user registration successfull! Go to{" "}
                    <Link to="/login">Login</Link> {" "} to explore.
                </Alert>
            )}
            <CssBaseline />
            <Typography variant="h4" align="center" component="h1" gutterBottom>
                Register
            </Typography>
            <Paper style={{ padding: 16 }}>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        style={{ marginBottom: 16 }}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        fullWidth
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone Number"
                        style={{ marginBottom: 16 }}
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.phoneNumber &&
                            Boolean(formik.errors.phoneNumber)
                        }
                        helperText={
                            formik.touched.phoneNumber &&
                            formik.errors.phoneNumber
                        }
                    />
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
        </div>
    );
};

export default Register;
