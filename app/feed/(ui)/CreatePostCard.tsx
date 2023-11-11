"use client";
import React from "react";
import { Card, Avatar, Input, Button, Flex } from 'antd';
import { UserOutlined, CalendarTwoTone, FileImageTwoTone, FileMarkdownTwoTone } from '@ant-design/icons';

const CreatePostCard = () => {
    return (
        <Card className="">
            <div className="flex space-x-4">
                <Avatar shape="circle" size={36} icon={<UserOutlined />} />
                <Input size="large" placeholder="Start a post" />
            </div>
            <ActionButtons />
        </Card>
    )
}

const ActionButtons = () => {
    return (
        <Flex gap="small" wrap="wrap" className="mt-2" justify="space-around">
            <Button type="text" size="large" icon={<FileImageTwoTone />}>Media</Button>
            <Button type="text" size="large" icon={<CalendarTwoTone />}>Event</Button>
            <Button type="text" size="large" icon={<FileMarkdownTwoTone />}>Write Article</Button>
        </Flex>
    )
}

export default CreatePostCard;