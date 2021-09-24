import { LoginPayload } from "./loginInterface";
import { LOGIN_URI } from "../../../constants/index";

export const login = async (payload: LoginPayload) => {
    const { jwt, user } = await (await fetch(LOGIN_URI, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })).json();
    return { jwt, user };
};
