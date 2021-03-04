import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
      <Checkbox {...props} />
      {label}
    </label>
  );
};

const MyRadio = ({ label, ...props }) => {
  return (
    <label>
      <Radio {...props} />
      {label}
    </label>
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
    <div style={{ marginBottom: "0.5rem" }}>
      {label && (
        <div>
          <label style={{ fontSize: "1rem" }} htmlFor={labelFor}>
            {label}
          </label>
        </div>
      )}
      {description && <div>{description}</div>}
      {children}
      {/* {error && <div>{error}</div>} */}
    </div>
  );
});

const components = {
  Checkbox: MyCheckbox,
  TextInput: TextField,
  Radio: MyRadio,
  FormControl,
  Button,
};

export default components;
