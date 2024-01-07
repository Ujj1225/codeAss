import React, { useState } from "react";

import "./Form.css";

const Form = () => {
  const [response, setResponse] = useState("");

  const [formData, setFormData] = useState({
    code: "",
    type: "",
    translate_to: "",
  });

  const handleApiResponse = async (e, requestType) => {
    e.preventDefault();
    try {
      const apiResponse = await fetch(
        `https://localhost:4000/api/v1/${requestType}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            language: formData.translate_to,
          }),
        }
      );
      const data = await apiResponse.json();
      setResponse(data.result || "No data received from the server");
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
    setResponse("");
  };

  return (
  <>
      <form className="code-form">
        <div className="input-boxes">
          <textarea
            name="code"
            id="code"
            cols="50"
            rows="30"
            placeholder="Paste your code here!"
            className="input"
            style={{ overflow: "scroll" }}
            onChange={handleChange}
          ></textarea>
          <textarea
            name="documentation"
            id="documentation"
            cols="50"
            rows="30"
            className="documentation"
            placeholder="Relevant Documentation!"
            value={response}
          ></textarea>
        </div>
        <div className="translate">
          <p className="mrr">TRANSLATE TO: </p>
          <select
            name="translate_to"
            className="language"
            style={{ marginRight: ".25rem", padding: ".25rem" }}
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
          <button type="button" className="clear" onClick={handleClear}>
            CLEAR
          </button>
          <button
            type="submit"
            className="submit"
            onClick={(e) => handleApiResponse(e, "translate")}
          >
            TRANSLATE
          </button>
          <button
            type="submit"
            className="submit"
            onClick={(e) => handleApiResponse(e, "optimize")}
          >
            OPTIMIZE
          </button>
          <button
            type="submit"
            className="submit"
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
