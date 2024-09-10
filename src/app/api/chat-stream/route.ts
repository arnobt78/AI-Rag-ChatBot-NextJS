import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

// POST request to the /api/chat-stream endpoint to handle the chat stream API logic
// and response handling logic using the ragChat instance
// The request body contains the messages and sessionId
export const POST = async (req: NextRequest) => {
  
  // Parse the request body to get the messages and sessionId
  const { messages, sessionId } = await req.json();
  
  // Get the last message from the messages array
  const lastMessage = messages[messages.length - 1].content;
  
  // Call the chat method from the ragChat instance to get the response
  const response = await ragChat.chat(lastMessage, { streaming: true, sessionId });
  
  // Return the response using the aiUseChatAdapter function from vercel sdk
  return aiUseChatAdapter(response);
};
