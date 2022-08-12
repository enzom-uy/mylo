import { List } from "@chakra-ui/react";
import NavbarLinks from "../NavbarLinks";

const SidebarContent = () => {
  return (
    <List display="flex" flexDir="column">
      <NavbarLinks />
    </List>
  );
};

export default SidebarContent;
