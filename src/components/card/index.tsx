import { Box } from "@mui/material";
import React from "react";
import { CryptoCards } from "./crypto-cards";

const Card = () => {
  return (
    <Box sx={{ width: "700px", height: "500px" }}>
      <CryptoCards
        cards={[
          {
            id: "79f8212e4245e4c11952f2cf",
            brand: "Mastercard",
            cardNumber: "5823 4492 2385 1102",
            expiryDate: "05/28",
            holderName: "John Carter",
          },
          {
            id: "99f231b1c079b810ba66bef1",
            brand: "VISA",
            cardNumber: "3455 4562 7710 3507",
            expiryDate: "02/30",
            holderName: "John Carter",
          },
        ]}
      />
    </Box>
  );
};

export default Card;
