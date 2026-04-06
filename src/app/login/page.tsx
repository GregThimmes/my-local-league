"use client";

import { FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { status } = useSession();

  const [email, setEmail] = useState("coach@example.com");
  const [password, setPassword] = useState("password123");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [router, status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false,
    });

    setSubmitting(false);

    if (!result || result.error) {
      setError("Invalid email or password.");
      return;
    }

    router.push(result.url || "/");
    router.refresh();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at 20% 20%, #001b3d 0%, #0f141e 48%, #090b10 100%)",
        padding: 20,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#16191f",
          border: "1px solid #2f394a",
          borderRadius: 16,
          padding: 24,
          color: "#e3e2e5",
          boxShadow: "0 20px 48px rgba(0,0,0,0.35)",
        }}
      >
        <h1 style={{ marginBottom: 8, fontSize: 28, letterSpacing: "-0.02em" }}>
          Little League Admin
        </h1>
        <p style={{ color: "#a9b3c7", marginBottom: 20 }}>
          Sign in to view league dashboards, standings, and live game data.
        </p>

        <label style={{ display: "block", fontSize: 13, marginBottom: 6 }}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          style={{
            width: "100%",
            marginBottom: 14,
            height: 44,
            borderRadius: 10,
            border: "1px solid #364359",
            background: "#0f141e",
            color: "#e3e2e5",
            padding: "0 12px",
          }}
        />

        <label style={{ display: "block", fontSize: 13, marginBottom: 6 }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          style={{
            width: "100%",
            marginBottom: 14,
            height: 44,
            borderRadius: 10,
            border: "1px solid #364359",
            background: "#0f141e",
            color: "#e3e2e5",
            padding: "0 12px",
          }}
        />

        {error && (
          <p style={{ color: "#ffb3ae", marginBottom: 10, fontSize: 13 }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          style={{
            width: "100%",
            height: 44,
            borderRadius: 10,
            border: "none",
            background: submitting ? "#486088" : "#b1c7f2",
            color: "#193053",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: submitting ? "not-allowed" : "pointer",
            marginBottom: 12,
          }}
        >
          {submitting ? "Signing In..." : "Sign In"}
        </button>

        <p style={{ fontSize: 12, color: "#9eadc9" }}>
          Demo credentials are prefilled by default.
        </p>
      </form>
    </main>
  );
}
