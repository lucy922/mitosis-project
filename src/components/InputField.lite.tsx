import classes from "./classes/InputField.classes";

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

export default function InputField(props: IinputFieldProps) {
  return (
    <input
      {...props}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      className={classes.base}
    />
  );
}
