import React, { useState } from "react";
import axios from "axios";

import "./Form.css";

const Form = () => {
  const [response, setResponse] = useState("");

  const [formData, setFormData] = useState({
    code: "",
    translate_to: "",
  });

  const handleApiResponse = async (e, requestType) => {
    e.preventDefault();
    try {
      const axiosConfig = {
        method: "post",
        url: `http://localhost:3000/api/v1/${requestType}`, 
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          code: formData.code,
          translate_to: formData.translate_to,
        },
      };

      const { data } = await axios(axiosConfig);

      switch (requestType) {
        case "translate":
        case "optimize":
        case "review":
          setResponse(
            data.reviewedContent ||
              data.translatedText ||
              data.optimizedCode ||
              "No data received from the server"
          );
          break;
        default:
          setResponse("Invalid request type");
          break;
      }
    } catch (error) {
      console.error("Error Encountered!", error);
      setResponse("Error communicating with the server");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({
      code: "",
      translate_to: "",
    });
    setResponse("");
  };

  return (
    <>
      <form className="code-form">
        <div className="input-boxes">
          <textarea
            name="code"
            cols="50"
            rows="30"
            placeholder="Paste your code here!"
            className="input"
            style={{ overflow: "scroll", border: "3px solid white" }}
            value={formData.code}
            onChange={handleChange}
          ></textarea>
          <textarea
            name="documentation"
            cols="50"
            rows="30"
            className="documentation"
            placeholder="Relevant Documentation!"
            style={{ border: "3px solid white" }}
            value={response}
            readOnly
          ></textarea>
        </div>
        <div className="translate">
          <p className="mrr">TRANSLATE TO: </p>
          <select
            name="translate_to"
            className="language"
            style={{ marginRight: ".25rem", padding: ".25rem" }}
            value={formData.translate_to}
            onChange={handleChange}
          >
            <option value="Cpp">CPP</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Dart">Dart</option>
            <option value="GoLang">GoLang</option>
          </select>
        </div>
        <div className="btn">
          <button class="glow-on-hover" type="button" onClick={handleClear}>
            CLEAR
          </button>
          <button
            type="button"
            class="glow-on-hover"
            onClick={(e) => handleApiResponse(e, "translate")}
          >
            TRANSLATE
          </button>
          <button
            type="button"
            class="glow-on-hover"
            onClick={(e) => handleApiResponse(e, "optimize")}
          >
            OPTIMIZE
          </button>
          <button
            type="button"
            class="glow-on-hover"
            onClick={(e) => handleApiResponse(e, "review")}
          >
            REVIEW
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
