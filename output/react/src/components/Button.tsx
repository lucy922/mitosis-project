import * as React from "react";

export interface IButtonClasses {
  base: string;
  variant: {
    default: string;
    primary: string;
    secondary: string;
  };
  size: {
    sm: string;
    md: string;
    lg: string;
  };
}
export interface IButtonProps {
  children?: string;
  variant?: keyof IButtonClasses["variant"];
  size?: keyof IButtonClasses["size"];
  disabled?: boolean;
  name?: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
}

import classes from "./classes/Button.classes";
import classNames from "classnames";

export default function Button(props: IButtonProps) {
  return (
    <div>
      <button
        data-testid="button"
        type="submit"
        disabled={props.disabled}
        onClick={(event) => props.onClick && props.onClick()}
        className={classNames(
          classes.base,
          classes.variant[props.variant ?? "default"],
          classes.size[props.size ?? "sm"]
        )}
      >
        {props.children}
      </button>
    </div>
  );
}
