import LoginDialog from "./account/LoginDialog";
import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import ChatDialog from "./account/chat/ChatDialog";
import { useContext } from "react";

import { AccountContext } from "./context/AccountProvide";
const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;
const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <ChatDialog />
          <Header>
            <Toolbar></Toolbar>
          </Header>
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />;
        </>
      )}
    </Component>
  );
};
export default Messenger;
