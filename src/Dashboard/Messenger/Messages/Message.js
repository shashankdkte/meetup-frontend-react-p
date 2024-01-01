import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../shared/components/Avatar";
import Typography from "@mui/material/Typography";

const MainContainer = styled("div")({
  width: "35%",
  display: "flex",
  marginTop: "10px",
  padding: "1rem",
  backgroundColor: "#232323",
  margin: "1rem",
  borderRadius:"10px"
});

const AvatarContainer = styled("div")({
  width: "70px",
  textAlign:"center"
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width:"80%"
});

const MessageContent = styled("div")({
  color: "#DCDDDE",
});

const SameAuthorMessageContent = styled("div")({
  color: "#DCDDDE",
  width: "97%",
  backgroundColor:"pink"
});

const SameAuthorMessageText = styled("span")({
  marginLeft: "70px",
});

const Message = ({ content, sameAuthor, username, date, sameDay }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: "16px", color: "white", display:"flex"}}>
          {username}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" , marginLeft:"auto"}}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
