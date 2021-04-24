import Head from "next/head";
import Result from "../components/Result";

export default function Home({ result }) {
  return (
    <div>
      <Head>
        <title>Notes App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Result data={result.data} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.SERVER_URL}`);
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
}
