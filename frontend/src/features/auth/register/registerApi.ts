import { RegisterPayload } from './registerInterface';
import { REGISTER_URI } from "../../../constants/index";

export const register = async (payload: RegisterPayload) => {
    const { jwt, user } = await (await fetch(REGISTER_URI, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })).json();
    return { jwt, user };
};
