import { signIn } from "next-auth/react";
import { Github } from "lucide-react"; // Assuming you're using react-feather for the Github icon

export const GithubLoginButton = () => {
  const handleGithubSignIn = async () => {
    await signIn("github");
  };

  return (
    <button
      onClick={handleGithubSignIn}
      className="flex items-center space-x-2 cursor-pointer border p-2 border-white/30 rounded"
    >
      <Github color="lightgreen" />
      <p className="text-white text-sm font-bol">Sign up with Github</p>
    </button>
  );
};
