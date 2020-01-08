import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import API from "../utils/API";

export default function CloseButton(props) {
  const handleDelete = e => {
    e.preventDefault();
    API.deleteRecipe(props.id).then(response => {
      props.loadRecipes();
    });
  };

  return (
    <IconButton aria-label="delete" onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  );
}
