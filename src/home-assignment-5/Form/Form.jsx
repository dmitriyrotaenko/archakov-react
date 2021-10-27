import { v4 as uuidv4 } from "uuid";

import React from "react";

import { Box, TextField, Button, Typography } from "@mui/material";

import { initialFormState, FormReducer } from "./FormReducer";
import * as FormReducerTypes from "./FormReducer.types";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  maxWidth: 300,
  p: 2.5,
  "& > div": { mb: 2 },
  border: 1,
  borderColor: "grey.500",
  borderRadius: 1,
};

function Form({ onAddComment }) {
  // Я усложнил и можно было через useState, но хотел попрактиковать reducer
  const [formState, dispatch] = React.useReducer(FormReducer, initialFormState);

  function handleInputChange({ target }) {
    dispatch({
      type: FormReducerTypes.HANDLE_INPUT_CHANGE,
      field: target.name,
      value: target.value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    const withValuesTrimmed = {};

    // убираем GMT и прочую инфу
    const createdAt = new Date().toString().split(" ").splice(0, 5).join(" ");

    // наверное, этого как-то можно избежать
    for (const field in formState) {
      withValuesTrimmed[field] = formState[field].trim();
    }
    onAddComment({ ...withValuesTrimmed, createdAt, id: uuidv4() });
    dispatch({
      type: FormReducerTypes.FORM_RESET,
    });
  }

  return (
    <Box onSubmit={handleOnSubmit} component="form" sx={formStyles}>
      <Typography variant="h6" component="div">
        Обратная связь:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Имя"
        variant="outlined"
        required
        onChange={handleInputChange}
        value={formState.name}
        name="name"
      />
      <TextField
        id="outlined-basic"
        label="Почта"
        variant="outlined"
        required
        onChange={handleInputChange}
        value={formState.email}
        name="email"
      />
      <TextField
        id="outlined-basic"
        label="Текст..."
        variant="outlined"
        multiline
        minRows={4}
        required
        onChange={handleInputChange}
        value={formState.message}
        name="message"
      />
      <Button variant="contained" type="submit">
        отправить
      </Button>
    </Box>
  );
}

export default Form;
