import React from "react";
import { inter } from "./style/fonts";
import "./styles.css";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Chess Text",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
