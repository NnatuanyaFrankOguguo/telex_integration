import express from "express";
import cors from "cors";
import axios from "axios";
import {integrationConfig} from "./integration"
import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());


// Sample Route
app.get("/test/:text", async (req, res) => {
    try {
  
      const { text } = req.params
  
  
      const client = new HfInference(process.env.HUGGING_FACE_SECRETS as string);
      
      const output = await client.summarization({
          model: "facebook/bart-large-cnn",
          inputs: text,
          provider: "hf-inference",
      });
      
      res.status(200).send({
          success: true,
          output});
      
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Something went wrong" });
    }
  });


app.get("/integration-spec", async(req, res) => {
    res.json(integrationConfig)
})


app.post("/webhook", async(req: any, res: any) => {

    const { message, settings } = req.body;
    if (!message){
        return res.status(400).json({error : "No text Provided"})
    }
    //console.log("body", req.body)

    const client = new HfInference(process.env.HUGGING_FACE_SECRETS as string);
    
    const output = await client.summarization({
        model: "facebook/bart-large-cnn",
        inputs: message,
        provider: "hf-inference",
    });

    const summaryText = typeof output === "string" ? output :  output.summary_text;

    const messageWordCount = message.trim().split(/\s+/).length;
    const summaryWordCount = summaryText.trim().split(/\s+/).length;
    const messageLenString = messageWordCount.toString();
    
    const outputLenString = (summaryWordCount).toString();

    return res.json({
        message: `${summaryText} \n
         Original word count: ${messageLenString}\n
         Summarised word count: ${outputLenString}` });
   
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
