import { ReactNode } from "react";

interface Props{
      children: ReactNode; //using HTML elements or JSX elements in the component, so we use ReactNode. For example using <span> or smth different
}

const Alert = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default Alert