import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown = ({input}) => {

    return (
        <div id="preview" className="container">
            <ReactMarkdown children={input} />
        </div>
    )
}

export default Markdown;