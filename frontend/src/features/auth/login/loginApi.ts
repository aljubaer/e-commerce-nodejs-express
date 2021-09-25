import { LoginPayload } from "./loginInterface";
import { LOGIN_URI } from "../../../constants/index";
import { httpRequest } from "../../../request/httpRequest";

export const login = async (payload: LoginPayload) => {
    const { status, data } = await httpRequest(LOGIN_URI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    return { status, data };
};
