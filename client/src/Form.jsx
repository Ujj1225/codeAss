import "./Form.css";

const Form = () => {
  return (
    <>
      <form action="post" className="code-form">
        <div className="input-boxes">
          <textarea
            name="code"
            id="code"
            cols="50"
            rows="10"
            placeholder="Paste your code here!"
            className="input"
            style={{ overflow: "scroll" }}
          ></textarea>
          <textarea
            name="documentation"
            id="documentation"
            cols="50"
            rows="10"
            className="documentation"
            placeholder="Relevant Documentation!"
          ></textarea>
        </div>
        <div className="translate">
          <p>TRANSLATE TO: </p>
          <select name="language" className="language">
            <option value="Cpp">CPP</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Dart">Dart</option>
            <option value="GoLang">GoLang</option>
          </select>
        </div>

        <button type="button" className="clear">
          CLEAR
        </button>
        <button type="submit" className="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Form;
