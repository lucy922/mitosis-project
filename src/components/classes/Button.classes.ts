import { IButtonClasses } from "../Button.lite";

export default <IButtonClasses> {
  base: "p-2 rounded text-center text-white",
  variant: {
    default: "bg-green-800",
    primary: "bg-blue-800" ,
    secondary: 'bg-red-800'
  },
  size: {
    sm: "w-24",
    md: " w-32",
    lg: "w-64"
  }
  }