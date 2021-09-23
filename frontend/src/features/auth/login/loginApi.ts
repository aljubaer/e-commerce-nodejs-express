import { LoginPayload } from "./loginInterface";
import { LOGIN_URL } from "./../../../constants/index";

export const login = async (payload: LoginPayload) => {
    const { jwt, user } = await (await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })).json();
    return { jwt, user };
};
