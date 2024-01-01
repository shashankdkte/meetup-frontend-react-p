import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { getDirectChatHistory } from "../../realtimeCommunication/socketConnection";
import Avatar from "../../shared/components/Avatar";

const Wrapper = styled("div")({
  flexGrow: 1,
  display: "grid",
  gridTemplateColumns:"1fr 4fr"

});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);

  return (
    <Wrapper>

      <div style={{
        backgroundColor: "#222", paddingTop: "48px", display: "flex", flexDirection: "column", textAlign: "center"
        , color:"#4EF0B5", fontFamily:"serif" , overflowY:"hidden", paddingBottom:"1rem"}}>
        {<Avatar large username={chosenChatDetails?.name} />}
        <div className="name-container">
          <h4>{chosenChatDetails?.name}</h4>
          <p>Member</p>
        </div>
        <div className="single-info-container">
          <div className="circle"><i class="fa fa-phone" aria-hidden="true"></i></div>
          <div className="single-info">
            <h4>+91927848624</h4>
            <p>Phone</p>
          </div>
        </div>
       <div className="single-info-container">
          <div className="circle"><i class="fa fa-user-circle" aria-hidden="true"></i></div>
          <div className="single-info">
            <h4>@{chosenChatDetails?.name?.toLowerCase()}</h4>
            <p>Username</p>
          </div>
        </div>
      
         <div className="setting-option">
          <div className="circle"><i class="fa fa-cog" aria-hidden="true"></i></div>
          <h4>General Setting</h4>
        </div>
         <div className="setting-option">
          <div className="circle"><i class="fa fa-bell" aria-hidden="true"></i></div>
          <h4>Notifications</h4>
        </div>
         <div className="setting-option">
          <div className="circle"><i class="fa fa-shield" aria-hidden="true"></i></div>
          <h4>Privacy and Security</h4>
        </div>
         <div className="setting-option">
          <div className="circle"><i class="fa fa-language" aria-hidden="true"></i></div>
          <h4>Language</h4>
        </div>
      </div>
      <div>
      <Messages />
      <NewMessageInput />
      </div>
    </Wrapper>
  );
};

export default MessengerContent;
