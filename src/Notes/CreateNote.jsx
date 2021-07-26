import React from "react";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const CreateNote = () => {
  return (
    <>
      <div className="main_note">
        <form>
          <input type="text" placeholder="Title" />
          <textarea rows="" column="" placeholder="write a note..."></textarea>
          <SendOutlinedIcon />
        </form>
      </div>
    </>
  );
};

export default CreateNote;
