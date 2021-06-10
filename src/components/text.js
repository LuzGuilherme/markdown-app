import React from "react";

const Text = ({value, onChange}) => {

    return (
        <div className="container">
            <textarea onChange={onChange} value={value} id="editor"></textarea>
        </div>
    )
}

export default Text;