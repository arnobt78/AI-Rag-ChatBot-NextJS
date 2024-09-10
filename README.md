
![Screenshot 2024-09-10 at 17 58 51](https://github.com/user-attachments/assets/52b20b6a-8bda-43ef-8567-568c8ea1183f) ![Screenshot 2024-09-10 at 17 57 55](https://github.com/user-attachments/assets/b338d3e4-db6e-425a-8a13-1b2055ba2afc)

## AI-Rag-ChatBot-NextJS

AI-Rag-ChatBot is a complete project example with RAGChat and Next.js 14, using Upstash Vector Database, Upstash Qstash, Upstash Redis, Dynamic Webpage Folder, Middleware, Typescript, Vercel AI SDK for the Client side Hook, Lucide-React for Icon, Shadcn-UI, Next-UI Library Plugin to modify TailwindCSS and deploy on Vercel. It is not just an AI, but also a pattern convension and provides reply super fast and it also can memorize all previous chat history from the Vector Storage so it doesn't have to reload the page again once its already indexed. 

**Note: To check this webpage live, click here:** 

## To Install Dependences

Before launching this web application, be sure to install all required dependencies, which are listed in the package.json file.

To install all dependences, run this command from your project folder: `npm install`

## To Install NodeJS

Make sure you have NodeJS installed in your machine first, The installation instructions are here: https://nodejs.org/en/

## To setup .env File

After creating an accound in Upstash and generate Upstash Vector API Key, Upstash Qstash API Key, Upstash Redis API Key, then you must create an .env file in your project folder and save your API key or other sensetive info.

Example: 

```
UPSTASH_VECTOR_REST_URL=""

UPSTASH_VECTOR_REST_TOKEN="

QSTASH_TOKEN=""

UPSTASH_REDIS_REST_URL=""

UPSTASH_REDIS_REST_TOKEN=""
```

## To Setup Upstash Vector Database, Upstash Qstash, Upstash Redis

You need to create a Upstash Vector Database to acheive the REST Vector URL and REST Token. Also you need Qstash Token. And Redis to prevent from saving the same webpage or same vector saving in vector storage again.

To install upstash/rag-chat: `npm install @upstash/rag-chat`

To install upstash/redis: `npm install @upstash/redis`

( For Further info, visit: https://upstash.com/docs/vector/sdks/rag-chat/gettingstarted and https://console.upstash.com/vector )

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## To Setup Webpage Dynamic

To use any webpage dynamically inserting in this AI Rag-Chat application, create a folder called `[...url]`, under the folder create a file called `page.tsx`

## To Install Vercel AI SDK for Client Side Hook

To use a client side hook which is not built in React, coming from Vercel AI SDK: `npm install ai`

( For Further info, visit: https://www.npmjs.com/package/ai )

## To Setup Middleware

NextJS provides to execute some logic/code before the user accesses the page by using `middleware.ts` file which is included in this project.

( For Further info, visit: https://nextjs.org/docs/app/building-your-application/routing/middleware )

## To Install TailwindCSS

By deafault tailwind use css order, to avaoid that, we use class merging intuative: `npm i tailwind-merge clsx`

( For Further info, visit: https://tailwindcss.com/docs/guides/nextjs )

## To Install Shadcn-UI

To use shadcn ui framework: `npx shadcn-ui@latest init`

( For Further info, visit: https://ui.shadcn.com/docs/installation/next )

## To Install Lucide-React Icon Library

To use icon library: `npm i lucide-react`

( For Further info, visit: https://lucide.dev/guide/packages/lucide-react )

## To Install Next-UI Library

To use next-ui library: `npm i @nextui-org/react`

For using next-ui library, you need to change tailwind contect. Go to your `tailwind.config.ts` file, the add this line in `config` class inside `content: [...]`, past it:

```
content: [
  ...
  ...
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
```

Also add that on top after your import as pluging : `const { nextui } = require("@nextui-org/react");`

And add the plugin in the bottom as default: `plugins: [require("tailwindcss-animate"), nextui()],`

Example:

```
...
...
},

plugins: [require("tailwindcss-animate"), nextui()],

} satisfies Config;
```

( For Further info, visit: https://nextui.org/docs/frameworks/nextjs )

## To Create A New Next.js React App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
