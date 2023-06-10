import { Avatar, Button, Menu } from "@mantine/core";
import React from "react";

const UseridentityMenu = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar
          src="https://avatars.githubusercontent.com/u/7611746?v=4"
          alt="it's me"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UseridentityMenu;
