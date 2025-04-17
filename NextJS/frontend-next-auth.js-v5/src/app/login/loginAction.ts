"use server";
import Error from "next/error";
import { signIn } from "../../../auth";

export default async function loginAction(formData: FormData) {

    await signIn("credentials", formData);
}