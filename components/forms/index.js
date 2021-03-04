import React from "react";

const Radio = ({ label, ...props }) => {
  return (
    <label>
      <input type="radio" {...props} />
      {label}
    </label>
  );
};

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

const TextInput = React.memo(function TextInput(props) {
  return <input {...props} />;
});

const components = {
  Checkbox,
  TextInput,
  Radio,
};

export default components;
