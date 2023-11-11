import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;


const Navbar = () => {
    return (
        <Header>
            <Menu
                // theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(5).fill(null).map((_, index) => {
                    const key = index + 1;
                    return {
                        key,
                        label: `nav ${key}`,
                    };
                })}
            />
        </Header>
    )
}

export default Navbar;