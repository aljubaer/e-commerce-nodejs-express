import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, selectUser } from "../../features/auth/login/loginSlice";

const ProfileButtons = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    return (
        <>
            <Button color="inherit">{user?.value?.name}</Button>
            <Button
                color="inherit"
                onClick={() => {
                    dispatch(logout());
                }}
            >
                Logout
            </Button>
        </>
    );
};

export default ProfileButtons;
