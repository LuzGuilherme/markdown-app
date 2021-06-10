import React from "react";

const Text = ({onChange}) => {

    return (
        <div className="container">
            <textarea onChange={onChange} type="text" id="editor"></textarea>
        </div>
    )
}

export default Text;