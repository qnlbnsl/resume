import { FormData } from "./../Types";

export const sendEmail = async (data: FormData): Promise<Boolean> => {
    console.log(data);
    return true;
};
