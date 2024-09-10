import { RAGChat, upstash } from "@upstash/rag-chat";
import { redis } from "./redis";

// Create a new RAGChat instance/specify with the model and redis instance as parameters to get started
// The model is the key of the model stored in the database
// This model is a expecting QStash model API key from Upstash QStash Token
export const ragChat = new RAGChat({
  model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
  redis: redis,
});
