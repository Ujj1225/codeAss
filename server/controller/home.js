const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function api_call() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Write a story about magic stick";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

const home = async (req, res) => {
  const display = await api_call();
  res.json({
    message: "Welcome first response of this API",
    story: `${display}`,
  });
};

const optimize = (req, res) => {
  
  res.send("This is optimize");
};

const review = (req, res) => {
  res.send("This is review");
};

module.exports = { home, optimize, review };
