/* eslint-disable @typescript-eslint/no-explicit-any */
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({ ip }: any) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Your IP address is <code>{ip}</code>
          </li>
        </ol>
      </main>
    </div>
  );
}


export const getServerSideProps = async ({ req }: any) => {
  const forwarded = req.headers['x-forwarded-for'];

  const ip = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : req.socket.remoteAddress;

  let yolla: any = false;

  if (ip == "176.42.143.66") {
    // talha
    yolla = "https://google.com";
  } else if (ip == "31.223.84.129") {
    // erel
    yolla = "https://topluyoruz.com";

  } else if (ip == "2a02:ff0:609:ee6e:7d24:73a6:5b8:3df8") {
    // metecan
    yolla = "https://www.blackhatworld.com";
  }


  return {
    props: { ip },
  };
};
