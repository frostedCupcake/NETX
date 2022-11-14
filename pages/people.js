import Head from "next/head";
import Person from "../components/Person";
import data from "../data/person";
export default function Home() {
  return (
    <div>
      <Head>
        <title>People: NETX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-center text-2xl lg:text-3xl p-5">Our group</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:w-[70rem] lg:w-[80%] sm:w-[40rem] mx-auto ">
        {data.map((item) => (
          <Person
            name={item.name}
            designation={item.designation}
            i_link={item.i_link}
            p_link={item.p_link}
            info={item.info}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
}
