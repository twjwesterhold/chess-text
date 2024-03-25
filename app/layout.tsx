import { inter } from "./style/fonts";
import "./styles.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>{children}</body>
    </html>
  );
};

export default RootLayout;