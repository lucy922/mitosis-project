import * as React from "react";

export interface IinputFieldClasses {
  base: string;
}
export interface IinputFieldProps {
  type?: string;
  placeholder?: string;
  name?: string;
  onChange?: () => void;
  value?: string;
}

import classes from "./classes/InputField.classes";

export default function InputField(props: IinputFieldProps) {
  return (
    <input
      {...props}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={(event) => props.onChange}
      value={props.value}
      className={classes.base}
    />
  );
}
