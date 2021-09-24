import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/auth/login/loginSlice";

export default function PrivateRoute({ children, ...rest }: any) {
    const user = useAppSelector(selectUser);

    const isLoggedIn = () => user.status === "success";

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}
