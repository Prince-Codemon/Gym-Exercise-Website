import { Stack, Typography } from "@mui/material";
import { borderTop } from "@mui/system";
import React from "react";
import Icon from "../assets/icons/gym.png";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
   
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : " ",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={()=>{setBodyPart(item)
    window.scrollTo({top:1800, left:100, behaviour:'smooth'})
    }}
      
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography fontSize='24px' fontWeight="bold" textTransform="capitalize" color="3A1212">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
