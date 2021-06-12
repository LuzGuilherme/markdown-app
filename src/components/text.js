import React from "react";

const Text = ({onChange, initial}) => {

    return (
        <div className="container">
            <textarea onChange={onChange} type="text" id="editor" defaultValue={initial}></textarea>
        </div>
    )
}

export default Text;