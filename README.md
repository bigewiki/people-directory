This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

This simple app uses the [Random User](https://randomuser.me/) API to render a list of randomly generated people.

Upon first load we leverage [React's cache API](https://react.dev/reference/react/cache) to later enable the detailed view of a given user in the list. This is necessary given we are using server components and cannot make a second API call to fetch the chosen user on a new page. Since a new seed is generated each time the API is called we won't get the user unless we specify the same seed. Instead, I used this opportunity to try out the cache API and it gives us bit of a performance boost.

A hard refresh on the homepage will regenerate the list of people. A hard refresh on a given profile page will result in a 404.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
