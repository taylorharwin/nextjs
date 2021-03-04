import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { RadioGroup } from "formik-material-ui";

const Checkbox = ({ label, value, name, id, checked, onChange, ...props }) => {
  return (
    <label>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
        {...props}
      />
      {label}
    </label>
  );
};

const Radio = ({ label, ...props }) => {
  return (
    <label>
      <input type="radio" {...props} />
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
    <div style={{ marginBottom: "1.5rem" }}>
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
  Checkbox,
  TextInput: TextField,
  Radio,
  FormControl,
};

export default components;
