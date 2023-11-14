"use client"
import React from "react";
import { Layout, Menu } from "antd";
import { HomeFilled, MessageFilled, NotificationFilled, ShoppingFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Header } = Layout;

const ITEMS = [
    { key: "feed", label: "Home", icon: <HomeFilled />},
    { key: "mynetwork", label: "My Network", icon: ""},
    { key: "jobs", label: "Jobs", icon: <ShoppingFilled /> },
    { key: "messaging", label: "Messaging", icon: <MessageFilled />},
    { key: "notifications", label: "Notificarions", icon: <NotificationFilled /> },
]

const Navbar = () => {
    const router = useRouter();
    const onClick = (e) => {
        console.log('click ', e);
        router.push(`/${e.key}`);
    };
    return (
        <Header >
            <Menu
                onClick={onClick}
                // theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['Home']}
                items={ITEMS}
            />
        </Header>
    )
}

export default Navbar;