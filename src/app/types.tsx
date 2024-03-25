export type Person = {
  gender: "female";
  name: {
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  dob: {
    date: string;
    age: string;
  };
  phone: "(272) 790-0888";
  cell: "(489) 330-2385";
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
};
