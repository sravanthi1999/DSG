import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./note.css";

const CreateNote = () => {
  return (
    <>
      <div className="main_note">
        <form>
          <input type="text" placeholder="Title" />
          <textarea
            rows=""
            column=""
            placeholder="write a note..."
            autoComplete="off"
          ></textarea>
          <Button className="submit">
            <AddIcon className="plus" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
