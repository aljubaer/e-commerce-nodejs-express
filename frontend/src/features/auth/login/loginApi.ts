import { LoginPayload } from "./loginInterface";
import { LOGIN_URL } from "./../../../constants/index";

export const login = async (payload: LoginPayload) => {
    const userInfo = await (await fetch(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify(payload),
    })).json();
};
