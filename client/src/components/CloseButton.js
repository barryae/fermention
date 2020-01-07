import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import API from "../utils/API";

export default function CloseButton(props) {
  const handleDelete = e => {
    e.preventDefault();
    console.log("I deleted");
    API.deleteRecipe(props._id, response => {
      response.json("Delete Complete");
    });
  };

  return (
    <IconButton aria-label="delete" onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  );
}
