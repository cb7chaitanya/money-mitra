import * as zod from "zod";

export const signUpSchema = zod.object({
    name: zod.string().min(3).max(100),
    email: zod.string().email().min(11).max(255),
    password: zod.string().min(6).max(12)
})

export const signInSchema = zod.object({
    email: zod.string().email().min(11).max(255),
    password: zod.string().min(6).max(12)
})
