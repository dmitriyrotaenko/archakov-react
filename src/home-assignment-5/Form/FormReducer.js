import * as FormReducerTypes from "./FormReducer.types";

export const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export function initFormReducer(initialFormState) {
  return initialFormState;
}


export function FormReducer(state, action) {
  const { type, field, value } = action;
  switch (type) {
    case FormReducerTypes.HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [field]: value
      };
    case FormReducerTypes.FORM_RESET:
      return initFormReducer(initialFormState)
    default:
      return state;
  }
}

