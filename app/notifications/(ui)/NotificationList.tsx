"use client"
import { Card } from "antd"
import NotificationListItem from "./NotificationListItem";
import { List } from 'antd';

const NOTIFICATIONS = [
    {
        src: 'https://placekitten.com/200/300',
        title: 'Networking Event',
        postTime: '2h',
        isRead: false
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Networking Event',
        postTime: '22h',
        isRead: false
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Success Stories',
        postTime: '20h',
        isRead: false
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Career Opportunities',
        postTime: '6h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Exciting News!',
        postTime: '1h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Join the Discussion',
        postTime: '22h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Exciting News!',
        postTime: '4h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Product Launch',
        postTime: '6h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Career Opportunities',
        postTime: '19h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Career Opportunities',
        postTime: '20h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Career Opportunities',
        postTime: '12h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Career Opportunities',
        postTime: '16h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Inspiration of the Day',
        postTime: '18h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Tips for Success',
        postTime: '24h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Product Launch',
        postTime: '16h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Inspiration of the Day',
        postTime: '4h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Success Stories',
        postTime: '20h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Exciting News!',
        postTime: '3h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Success Stories',
        postTime: '13h',
        isRead: true
    },
    {
        src: 'https://placekitten.com/200/300',
        title: 'Tech Trends',
        postTime: '18h',
        isRead: true
    }
]

const NotificationList = () => {
    return (
        <Card>
            <List
                size="large"
                dataSource={NOTIFICATIONS}
                renderItem={(item, idx) => <NotificationListItem key={idx} notification={item} />}
            />
        </Card>
    )
}

export default NotificationList;