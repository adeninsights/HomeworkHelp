const express = require("express");
const openai = require("openai");

openai.apiKey = "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";

const app = express();

app.use(express.json());

app.post("/answer", async (req, res) => {
  try {
    const { question } = req.body;
    const response = await openai.Completion.create({
      prompt: question,
      engine: "davinci-codex",
    });
    res.send({ answer: response.choices[0].text });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
