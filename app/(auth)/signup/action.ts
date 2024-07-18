"use server"
import { SignupFormValues } from "./form";

export async function SignupUser(formData: SignupFormValues) {
  const response = await fetch(`https://api.mark8.awesomity.rw/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  return result;
}
