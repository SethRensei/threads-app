import * as z from "zod";

export const ThreadValidation = z.object({
    thread: z.string().min(3, { message: "3 caractères au minimum." }),
    accountId: z.string(),
});

export const CommentValidation = z.object({
    thread: z.string().min(3, { message: "3 caractères au minimum." }),
});
