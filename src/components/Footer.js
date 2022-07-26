import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="100px" height="40px" />
        <Typography variant="h5" pb="20px" mt="20px">
          Made with ❤️ by{" "}
          <a href="https://github.com/Prince-Codemon" style={{color:'#ff2526'}} target="_blank" rel="noreferrer">Prince Codemon</a>
        </Typography>
        <Typography variant="h5" pb="40px" mt="10px">
          Credit and love to ❤️‍🔥 Javascript Mastery
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
