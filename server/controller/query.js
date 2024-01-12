const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const optimize = async (req, res, next) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const codeToOptimize = req.body.code;

    if (!codeToOptimize) {
      return res
        .status(400)
        .json({ error: "Code is required in the request body." });
    }

    const result = await model.generateContent(
      `Optimize the following code: 
        ${codeToOptimize}`
    );

    const response = await result.response;
    const optimizedCode = response.text();

    if (optimizedCode && optimizedCode !== codeToOptimize) {
      res.status(200).json({
        message: "Code optimization successful",
        optimizedCode,
      });
    } else {
      res.status(200).json({
        message: "Code optimization failed or no changes were made",
        optimizedCode: codeToOptimize,
      });
    }
  } catch (error) {
    next(error);
  }
};

const translate = async (req, res, next) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const textToTranslate = req.body.code;
    const targetLanguage = req.body.translate_to;

    if (!textToTranslate || !targetLanguage) {
      return res
        .status(400)
        .json({
          error:
            'Both "code" and "translate_to" are required in the request body.',
        });
    }

    const result = await model.generateContent(
      `Translate the following text to ${targetLanguage}: 
        ${textToTranslate}`
    );

    const response = await result.response;
    const translatedText = response.text();

    res.status(200).json({
      message: "Translation successful",
      translatedText,
    });
  } catch (error) {
    next(error);
  }
};

const review = async (req, res, next) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const code = req.body.code;

    if (!code) {
      return res
        .status(400)
        .json({ error: "Code is required in the request body." });
    }

    const result = await model.generateContent(
      `Review the following code: 
        ${code}`
    );

    const response = await result.response;
    const reviewedContent = response.text();

    res.status(200).json({
      message: "Code review successful",
      reviewedContent,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  optimize,
  translate,
  review,
};
