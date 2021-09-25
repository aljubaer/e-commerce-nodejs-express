import { httpRequest } from "./httpRequest";

export const httpProtectedRequest = async (URI: string, options = {}) => {
    options = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
            'Content-Type': 'application/json',
        },
        ...options
    }
    return httpRequest(URI, options);
};
