import { AppShell, Header, NavLink, Navbar } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import IconCart from "../icons/IconCart";
import { adminMenu } from "@/config/menu.config";
import Link from "next/link";
import { useRouter } from "next/router";
import UseridentityMenu from "../admin-components/UseridentityMenu";

const AdminLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <AppShell
      padding="xs"
      layout="alt"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Navbar.Section grow mt="md">
            {adminMenu.map((item) => (
              <NavLink
                label={item.label}
                icon={<item.icon />}
                component={Link}
                href={item.href}
                active={router.pathname === item.href}
              />
            ))}
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs" className="flex justify-end">
          <UseridentityMenu />
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default AdminLayout;
