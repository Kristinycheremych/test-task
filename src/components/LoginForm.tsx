import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import useAuthStore from "../store/useAuthStore";
import { LOGIN_MUTATION } from "../graphql/mutations";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setTokens = useAuthStore((state) => state.setTokens);
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { email, password },
      });

      if (data?.login) {
        setTokens(data.login.access_token, data.login.refresh_token);
        router.push("/my-info");
      }
    } catch (err) {
      console.error("Ошибка входа в систему", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-black rounded-2xl border border-gray-700 shadow"
      >
        <h2 className="mb-2 text-2xl font-semibold text-white">Login</h2>
        <p className="mb-6 text-sm text-gray-400">
          Enter your email below to login to your account.
        </p>
        <label
          htmlFor="email"
          className="block mb-2 text-sm text-gray-300 font-bold"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="m@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mb-4 text-white bg-black border border-gray-400 rounded"
          required
        />
        <label
          htmlFor="email"
          className="block mb-2 text-sm text-gray-300 font-bold"
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-4 text-white bg-black border border-gray-400 rounded"
          required
        />
        {error && (
          <p className="mb-4 text-sm text-red-500">
            {error.message || "Неверные учетные данные"}
          </p>
        )}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-white text-black  rounded"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
