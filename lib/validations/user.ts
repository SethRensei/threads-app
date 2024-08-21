import * as z from "zod";

export const UserValidation = z.object({
    profile_photo: z
        .string()
        .url()
        .min(1, { message: "La photo de profile est requis !" }),
    name: z
        .string()
        .min(3, { message: "3 caractères minimum." })
        .max(30, { message: "30 caractères maximum." }),
    username: z
        .string()
        .min(3, { message: "3 caractères minimum." })
        .max(30, { message: "30 caractères maximum." }),
    bio: z
        .string()
        .min(3, { message: "Minimum 3 characters." })
        .max(1000, { message: "1000 caractères maximum." }),
});
