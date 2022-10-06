import Button, { IButtonProps } from "../../output/react/src/components/Button";
import { create } from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import classNames from "classnames";
import classes from "../../output/react/src/components/classes/Button.classes";

describe("Button component", () => {
  it("should render button correctly", () => {
    render(<Button>Login</Button>);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should fire onClick event", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} type="submit">
        Login
      </Button>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("Button text", () => {
    render(<Button>Login</Button>);
    expect(screen.getByTestId("button")).toHaveTextContent("Login");
  });

  it("should be enabled", () => {
    render(<Button>Login</Button>);
    expect(screen.getByTestId("button")).not.toHaveAttribute("disabled");
  });

  it("should be disabled", () => {
    render(<Button disabled={true}>Login</Button>);
    expect(screen.getByTestId("button")).toBeDisabled();
  });

  it("Matches snapshot", () => {
    const tree = create(<Button>Login</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render primary button", () => {
    const variantProps: IButtonProps = {
      variant: "primary",
    };
    render(<Button {...variantProps}>Login</Button>);
    expect(screen.getByTestId("button")).toHaveClass(
      classNames(classes.variant.primary)
    );
    const tree = create(<Button {...variantProps}>primary</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render secondary button", () => {
    const variantProps: IButtonProps = {
      variant: "secondary",
    };
    render(<Button {...variantProps}>Login</Button>);
    expect(screen.getByTestId("button")).toHaveClass(
      classNames(classes.variant.secondary)
    );
    const tree = create(<Button {...variantProps}>secondary</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render size sm", () => {
    const sizeProps: IButtonProps = {
      size: "sm",
    };
    render(<Button {...sizeProps}>Login</Button>);
    expect(screen.getByTestId("button")).toHaveClass(
      classNames(classes.size.sm)
    );
    const tree = create(<Button {...sizeProps}>small</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render size md", () => {
    const sizeProps: IButtonProps = {
      size: "md",
    };
    render(<Button {...sizeProps}>Login</Button>);
    expect(screen.getByTestId("button")).toHaveClass(
      classNames(classes.size.md)
    );
    const tree = create(<Button {...sizeProps}>medium</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render size lg", () => {
    const sizeProps: IButtonProps = {
      size: "lg",
    };
    render(<Button {...sizeProps}>Login</Button>);
    expect(screen.getByTestId("button")).toHaveClass(
      classNames(classes.size.lg)
    );
    const tree = create(<Button {...sizeProps}>large</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
