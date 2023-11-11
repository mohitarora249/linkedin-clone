"use client";
import { Affix, Button, Card, Typography } from "antd"

const ManageNotification = () => {
    return (
        <Affix offsetTop={20}>
            <Card className="">
                <Typography.Title level={5}>
                    Manage your Notifications
                </Typography.Title>
                <Button type="link" className="text-primary hover:text-primary focus:text-primary font-semibold">
                    View Settings
                </Button>
            </Card>
        </Affix>
    )
}

export default ManageNotification;