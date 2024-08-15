import React, { useState } from "react";

function AddPost() {
  const [postText, setPostText] = useState("");

  const handleAddPost = () => {
    if (postText.trim() === "") {
      alert("Please enter some text.");
      return;
    }
    console.log("Post added:", postText);
    setPostText("");
  };

  return (
    <div className="add my-3 text-center">
      <input
        className="w-[550px] h-8 rounded-xl p-2"
        type="text"
        placeholder="Add post"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <button className="w-7 h-5 ml-2" onClick={handleAddPost}>
        <img src={send} alt="Send" />
      </button>
    </div>
  );
}

export default AddPost;
