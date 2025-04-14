import { signupForm } from "@/type";
import { LoginForm } from "@/type/index";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";

export const signup = async (data: signupForm) => {
  try {
    const uri = process.env.NEXT_PUBLIC_BASE_URL;
    console.log("Sending signup request to:", `${uri}/auth/register`);
    console.log("Signup data:", data);
    
    const res = await fetch(`${uri}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    console.log("Signup response status:", res.status);
    return res;
  } catch (error) {
    console.error("Signup fetch error:", error);
    throw error;
  }
};

export const login = async (data: LoginForm) => {
  const res = await signIn("credentials", {
    redirect: false,
    email: data.email,
    password: data.password,
    callbackUrl: "/mainpage",
  });

  return res;
};


export const handleSignOut = async () => {
  await signOut({ callbackUrl: "/landingPage" });
};

export const handleNote = async (note: { title: string; content: string }, token: string) => {
  try {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const res = await fetch(`http://localhost:3000/notes/create-note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      },
      body: JSON.stringify(note),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to create note");
    }

    return res;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
}

export const handleFetch = async (token: string) => {
  try {
    const res = await fetch(`http://localhost:3000/notes`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
}