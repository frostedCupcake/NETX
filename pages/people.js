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
      <div className="sm:w-[30rem]  md:w-[50rem] mx-auto py-10 text-center">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl uppercase">
          Our group
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {data.map((item) => (
            <Person
              name={item.name}
              designation={item.designation}
              i_link={item.i_link}
              p_link={item.p_link}
              info={item.info}
              key={item.name}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
