import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown = ({input}) => {

    return (
        <div>
            <ReactMarkdown children={input} />
        </div>
    )
}

export default Markdown;