import Image from "next/image";
import { notFound } from "next/navigation";
import { formatDate, getCache } from "../../utils";

const Page = async ({
  params: { person: slug },
}: {
  params: { person: string };
}) => {
  const person = (await getCache()).find((e) => e.login.uuid === slug);
  if (!person) return notFound();

  const {
    dob: { age, date: dobIsoString },
    picture: { large: largePortrait },
    name: { first: firstName, last: lastName },
    location: { street, city, state, postcode },
    email,
    phone,
  } = person;

  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-14">
      <div className="flex border-2 rounded-lg m-5 p-1 border-gray-100 border-solid bg-cyan-950">
        <div>
          <Image
            className="rounded-full w-100 h-100 m-5"
            src={largePortrait}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <table className="m-5">
          <tr>
            <td className="p-1 text-lg font-medium text-zinc-400">
              {firstName} {lastName}
            </td>
          </tr>
          <tr>
            <td className="p-1">Age</td>
            <td className="p-1 text-sm text-gray-500">{age}</td>
          </tr>
          <tr>
            <td className="p-1">Address</td>
            <td className="p-1 text-sm text-gray-500">
              {street.number} {street.name} <br /> {city} {state} {postcode}
            </td>
          </tr>
          <tr>
            <td className="p-1">Email</td>
            <td className="p-1 text-sm text-gray-500">{email}</td>
          </tr>
          <tr>
            <td className="p-1">Date of Birth</td>
            <td className="p-1 text-sm text-gray-500">
              {formatDate(dobIsoString)}
            </td>
          </tr>
          <tr>
            <td className="p-1">Phone Number</td>
            <td className="p-1 text-sm text-gray-500">{phone}</td>
          </tr>
        </table>
      </div>
    </main>
  );
};

export default Page;
