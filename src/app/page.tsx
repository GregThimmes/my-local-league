import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import ProtectedApp from "@/components/ProtectedApp";
import { authOptions } from "@/lib/auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const userName = session.user?.name || session.user?.email || "Coach";

  return <ProtectedApp userName={userName} />;
}
