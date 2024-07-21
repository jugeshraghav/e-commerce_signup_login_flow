import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { Navbar } from "./Navbar";
import { Signup } from "./Signup";
import { Login } from "./Login";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>E-COMMERCE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        {/* <Signup /> */}
        <Login />
      </main>
    </>
  );
}
