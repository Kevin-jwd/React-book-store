import { RegisterProps } from "../pages/Register";
import { httpClient } from "./http";

export const register = async (userData: RegisterProps) => {
    const response = await httpClient.post("/users/register", userData);
    return response.data;
};
