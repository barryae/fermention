import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import API from "../utils/API";

export default function CloseButton(props) {
  const handleDelete = e => {
    e.preventDefault();
    console.log("I deleted");
    console.log("props", props);
    API.deleteRecipe(props.id).then(response => {
      console.log("Delete Complete");
      props.loadRecipes();
    });
  };

  return (
    <IconButton aria-label="delete" onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  );
}
