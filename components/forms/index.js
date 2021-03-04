import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    height: 48,
    padding: "0 30px",
    width: "100%",
  },
});

const MyCheckbox = ({
  label,
  value,
  name,
  id,
  checked,
  onChange,
  ...props
}) => {
  return (
    <label>
      <Checkbox
        {...props}
        checked={checked}
        name={name}
        onChange={onChange}
        value={value}
      />
      {label}
    </label>
  );
};

const MyRadio = ({ value, label, ...props }) => {
  return (
    <label>
      <Radio {...props} value={value} />
      {label}
    </label>
  );
};

const MyTextField = ({ label, ...props }) => {
  return (
    <TextField
      {...props}
      style={{ width: "100%" }}
      id="outlined-basic"
      label={label}
      variant="outlined"
    />
  );
};

const FormControl = React.memo(function FormControl({
  children,
  description,
  error,
  label,
  labelFor,
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <div>
          <label style={{ fontSize: "1rem" }} htmlFor={labelFor}>
            {label}
          </label>
        </div>
      )}
      {description && <div>{description}</div>}
      <div>{children}</div>
      {error && <div>{error}</div>}
    </div>
  );
});

const components = {
  Checkbox: MyCheckbox,
  TextInput: MyTextField,
  Radio: MyRadio,
  FormControl,
  Button,
};

export default components;
