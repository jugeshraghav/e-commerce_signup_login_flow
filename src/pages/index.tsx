import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>E-COMMERCE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>E-COMMERCE SIGNUP LOGIN FLOW</h1>
      </main>
    </>
  );
}
