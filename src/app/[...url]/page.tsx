
//To catch all the webpage dynamically create a folder called [...url] inside the pages folder
// and create a file called page.tsx inside it.

import { ChatWrapper } from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

//Its from the documentation of next.js
interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

//To reconstruct the url from the array of strings
function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) => decodeURIComponent(component));

  return decodedComponents.join("//");
}

//The page function is a async function that takes a object as a parameter
const Page = async ({ params }: PageProps) => {
  //Get the session cookie from the cookies
  const sessionCookie = cookies().get("sessionId")?.value;
  //Reconstruct the url from the array of strings
  const reconstructedUrl = reconstructUrl({ url: params.url as string[] });

  //The session id is the reconstructed url and the session cookie combined globally
  const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(/\//g, "");
  
  //Check if the url is already indexed by using Redis to check if the url is a member of the indexed-urls set
  //The sismember command returns 1 if the url is a member of the set and 0 if it is not a member of the set
  //To keep track of the indexed urls we are using a set called indexed-urls not to index the same url again
  // Its a setIsMember command in Rediswhere its checks if the member is present in the set or not
  const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl);

  //Get the initial messages from the
  const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId });

  //If the url is not indexed then add the url to the context
  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      //The chunkOverlap and chunkSize are the parameters that are used to split the text into chunks
      config: { chunkOverlap: 50, chunkSize: 200 },
    });
    //Add the url to the indexed-urls setAdd
    await redis.sadd("indexed-urls", reconstructedUrl);
  }
  //Return the ChatWrapper component with the sessionId and initialMessages
  return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />;
};

export default Page;
