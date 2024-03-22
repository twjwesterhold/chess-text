import { inter } from "./style/fonts";

const RootLayout = ({
                      children
}) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}

export default RootLayout;
