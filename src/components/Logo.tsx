import { Box, Text } from '@radix-ui/themes'
import logo from "../assets/logo.webp";

const Logo = () => {
  return (
    <>
    <Box
        asChild
        width="auto"
        height="auto"
        display="block"
        as='span'
      >
        <img
          src={logo}
          alt="Company Logo"
          style={{
            height: "70px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
      <Text>GameHub</Text>
      </>
  )
}

export default Logo
