import Image from "next/image";
import React, { cache } from "react";
import { Person } from "./types";
import { getCache } from "./utils";

const Home = async () => {
  const people = await getCache();

  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
      <ul>
        {people.map((person: Person, i: number) => (
          <a key={i} href={`people/${person.login.uuid}`}>
            <li className="flex border-2 rounded-lg m-2 p-3 border-gray-100 border-solid bg-cyan-950 hover:bg-cyan-900">
              <div className="h-50 w-50">
                <Image
                  className="rounded-full"
                  src={person.picture.thumbnail}
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-lg font-medium text-zinc-400">
                  {person.name.first} {person.name.last}
                </p>
                <p className="text-sm font-medium text-zinc-400">
                  Age: {person.dob.age}
                </p>
                <p className="text-sm font-medium text-zinc-400">
                  City: {person.location.city}
                </p>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </main>
  );
};

export default Home;
