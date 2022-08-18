import NavbarLinks from "@/components/Layout/NavbarLinks";
import { List } from "@chakra-ui/react";

const SidebarContent = () => {
  return (
    <List display="flex" flexDir="column">
      <NavbarLinks />
    </List>
  );
};

export default SidebarContent;
