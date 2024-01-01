import React from "react";
import { styled } from "@mui/system";

const AvatarPreview = styled("div")({
  height: "42px",
  width: "42px",
  backgroundColor: "#4EF0B5",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  color: "#16172B",
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview style={large ? { height: "80px", width: "80px", margin:"auto" } : {}}>
      {username.substring(0, 2)}
    </AvatarPreview>
  );
};

export default Avatar;
