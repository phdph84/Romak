import React from "react";

import { CustomButtonContainer } from "./Custom-Button.style";
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
