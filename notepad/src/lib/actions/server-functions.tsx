import { signupForm } from "@/type";
import { LoginForm, Note } from "@/type/index";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";

/// This function is used to send a signup request to the server
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

// This function is used to send a login request to the server
export const login = async (data: LoginForm) => {
  const res = await signIn("credentials", {
    redirect: false,
    email: data.email,
    password: data.password,
    callbackUrl: "/mainpage",
  });

  return res;
};

/// This function is used to sign out the user
export const handleSignOut = async () => {
  await signOut({ callbackUrl: "/landingPage" });
};

// This function is used to create a new note
export const handleCreateNote = async (
  note: { title: string; content: string },
  token: string
) => {
  try {
    if (!token) {
      throw new Error("Not authenticated");
    }

    const res = await fetch(`http://localhost:3000/notes/create-note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
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
};

// This function is used to fetch all notes of the user
export const handleFetchNote = async (token: string) => {
  try {
    const res = await fetch(`http://localhost:3000/notes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
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
};

export const handleGetNoteById = async (id: string, token: string) => {
  try {
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching note by ID:", error);
    throw error;
  }
};

// This function is used to update a note
export const handleUpdateNote = async (
  note: { title: string; content: string },
  id: string,
  token: string
) => {
  try {
    const res = await fetch(`http://localhost:3000/notes/update-note/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(note),
    });

    return res;
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
};

// This function is used to delete a note
export const handleDelete = async (id: string, token: string) => {
  try {
    const res = await fetch(`http://localhost:3000/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    return res;
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
};
