import React from "react";
import { Box, Typography } from "@mui/material";

const Heading = ({ heading, description ,align}) => {
  return (
    <Box sx={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: align}}>
      <Box
        sx={{
          fontSize: { xs: "42px", sm: "60px" },
          lineHeight: "1",
          fontWeight: "700",
          mb: "15px",
        }}
      >
        {heading}
      </Box>
      <Typography
        sx={{
          color: 'cardTextGrey',
          fontSize: { xs: "15px", sm: "19px" },
          letterSpacing: "0.9px",
          width: { sm: "50%" }
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Heading;
