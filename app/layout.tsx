import { inter } from "./style/fonts";

const RootLayout = ({
                      children
}) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;
