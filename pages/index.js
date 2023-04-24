import { useSession, signIn, signOut } from "next-auth/react";

import Nav from "@/components/Nav";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className={"bg-blue-900 w-screen h-screen flex items-center"}>
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Faça o loguin com Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow my-2 mr-2 p-4 rounded-lg">
        Deu bom {session.user.email}
      </div>
    </div>
  );
}
