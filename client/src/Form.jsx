import React, { useState } from "react";
import axios from "axios";

import "./Form.css";

const Form = () => {
  const [response, setResponse] = useState("");

  const handleApiResponse = async () => {
    try {
      console.log("here");
      const apiResponse = await axios.get("https://localhost:4000/api/v1", {
        params: { prompt: "hello" },
      });
      setResponse(apiResponse.data); // Assuming the API response contains the data you want to display
    } catch (error) {
      console.log("Error Encountered!");
    }
  };

  const handleClear = () => {
    // Implement clear functionality if needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement submit functionality if needed
  };

  return (
    <>
      <form action="" className="code-form" onSubmit={handleSubmit}>
        <div className="input-boxes">
          <textarea
            name="code"
            id="code"
            cols="50"
            rows="30"
            placeholder="Paste your code here!"
            className="input"
            style={{ overflow: "scroll" }}
            onChange={handleApiResponse}
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
            name="language"
            className="language"
            style={{ marginRight: ".25rem", padding: ".25rem" }}
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
          <button type="submit" className="submit">
            TRANSLATE
          </button>
          <button type="submit" className="submit">
            OPTIMIZE
          </button>
          <button type="submit" className="submit">
            REVIEW
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
