"use server";
import { cookies } from "next/headers";
import { SigninFormData } from "./form";

export async function SigninUser(formData: SigninFormData) {
  const response = await fetch(`https://api.mark8.awesomity.rw/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  if(result.data ) {
  cookies().set("accessToken", result.data.accessToken);
}
  return result;

}
