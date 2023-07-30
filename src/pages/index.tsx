import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getRefreshTokenFromLocalStorage } from "../utils/refreshTokenHandler";

export default function Home() {
  const router = useRouter();
  const logined = getRefreshTokenFromLocalStorage();

  useEffect(() => {
    if (!logined) {
      router.replace("/auth/login");
    } else if (!!logined) {
      router.replace("/community");
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main></main>
    </>
  );
}