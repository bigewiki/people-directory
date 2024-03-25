import { cache } from "react";
import { Person } from "./types";

export const getCache = cache(async (): Promise<Person[]> => {
  try {
    const response = fetch("https://randomuser.me/api?results=20");
    return (await (await response).json()).results;
  } catch (e) {
    console.log(`Error: ${e}`);
    return [];
  }
});

export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month because it is zero-based
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${month}/${day}/${year}`;
};
