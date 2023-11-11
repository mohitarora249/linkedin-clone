"use client";
import React from "react";
import { Card, Button, Flex, Avatar, Typography, notification, Popconfirm } from 'antd';
import { CommentOutlined, LikeOutlined, ShareAltOutlined, UserOutlined, CloseOutlined, EllipsisOutlined } from "@ant-design/icons";
const { Text } = Typography;

const PostInfo = () => {
    return (
        <Card
            className=""
            title={<UserInfo />}
            actions={[<ActionButtons key="action-buttons" />]}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            extra={<ExtraActions />}
        >

        </Card>
    )
}

const ExtraActions = () => {
    return (
        <>
            <Button shape="circle" type="text" icon={<EllipsisOutlined />} />
            <Popconfirm
                title="Remove post?"
                description="Are you sure to remove this post?"
                // onConfirm={confirm}
                // onCancel={cancel}
                okText="Yes"
                okButtonProps={{
                    type: "default"
                }}
                cancelText="No"
            >
                <Button shape="circle" type="text" icon={<CloseOutlined />} />
            </Popconfirm>
        </>
    )
}

const UserInfo = () => {
    return (
        <Flex align="center" gap={8}>
            <Avatar shape="circle" size={36} icon={<UserOutlined />} />
            <Flex vertical gap={0}>
                <Text>Mohit Arora</Text>
                <Text type="secondary">Web Developer</Text>
                <Text type="secondary">1h</Text>
            </Flex>
        </Flex>
    )
}

const ActionButtons = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = () => {
        api.success({
            message: 'Copied!',
            description: 'Post link copied to your clipbaord',
            placement: "bottomRight"
        });
    };

    return (
        <Flex gap="small" wrap="wrap" className="mt-2" justify="space-around">
            {contextHolder}
            <Button type="text" size="large" icon={<LikeOutlined />}>Like</Button>
            <Button type="text" size="large" icon={<CommentOutlined />}>Comment</Button>
            <Button type="text" size="large" icon={<ShareAltOutlined />}>Repost</Button>
            <Button onClick={openNotificationWithIcon} type="text" size="large" icon={<ShareAltOutlined />}>Share</Button>
        </Flex>
    )
}

export default PostInfo;
