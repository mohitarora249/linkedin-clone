"use client"
import { Divider, Flex, List, Typography } from "antd";
import Link from "next/link";

type NewsType = {
    title: string;
    postTime: string;
    id: string;
    readers: number;
}

type Props = {
    news: NewsType
}
const NewsListItem = ({ news }: Props) => {
    return (
        <List.Item>
            <List.Item.Meta
                title={<Title title={news.title} postTime={news.postTime} readers={news.readers}/>}
            />
        </List.Item>
    )
}

const Title = ({ title, postTime, readers }: Omit<NewsType, "id">) => {
    return (
        <Flex vertical gap={2}>
            <Link href="/">
                <Typography.Text className="text-sm font-semibold">{title}</Typography.Text>
                <Flex gap={2} align="center">
                    <Typography.Text className="text-xs" type="secondary">{postTime}</Typography.Text>
                    <Divider orientation="center" type="vertical" />
                    <Typography.Text className="text-xs" type="secondary">{readers} readers</Typography.Text>
                </Flex>
            </Link>
        </Flex>
    )

}

export default NewsListItem;