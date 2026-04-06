"use client";

import { signOut } from "next-auth/react";
import LittleLeagueApp from "@/components/LittleLeagueApp";

type ProtectedAppProps = {
  userName: string;
};

export default function ProtectedApp({ userName }: ProtectedAppProps) {
  return (
    <LittleLeagueApp
      rightAction={
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "transparent",
            color: "#b1c7f2",
            border: "1px solid #b1c7f244",
            borderRadius: 999,
            padding: "6px 10px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            maxWidth: 170,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={`Signed in as ${userName}`}
          aria-label="Sign out"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            logout
          </span>
          Sign Out
        </button>
      }
    />
  );
}
