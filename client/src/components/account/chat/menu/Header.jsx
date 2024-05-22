import { useContext } from "react";
import { Box, styled } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvide";
const Component = styled(Box)`
  height: 44px;

  background: #ededed;

  padding: 8px 16px;
`;

const Image = styled("img")({
  height: 40,

  width: 40,

  borderRadius: "50%",
});

const Header = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <Component>
        <Image referrerPolicy="no-referrer" src={account.picture} alt="dp" />
      </Component>
    </>
  );
};
export default Header;
