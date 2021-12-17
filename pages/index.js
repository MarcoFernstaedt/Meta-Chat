import Head from "next/head";
import Login from "../components/Login";
import { useMoralis, logout } from "react-moralis";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Meta Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to Meta Chat</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
