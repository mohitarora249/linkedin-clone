"use client";
import { Avatar, Flex, List, Typography } from "antd"

type NotificationInfo = {
    src: string;
    title: string;
    postTime: string;
    isRead: boolean;
}

type Props = {
    notification: NotificationInfo;
}

const NotificationListItem = ({ notification }: Props) => {
    return (
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar size="large" src={notification.src} />}
                title={<a href="https://ant.design">{notification.title}</a>}
            />
        </List.Item>
    )
}

export default NotificationListItem;