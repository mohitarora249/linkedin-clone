import { Button, Card, Flex } from "antd"

const FILTERS = [
    { title: "All", value: "all" },
    { title: "My posts", value: "my-posts" },
    { title: "Mentions", value: "mentions" }
]

const NotificationFilter = () => {
    return (
        <Card className="">
            <Flex gap={8}>
                {FILTERS.map(filter => <Button key={filter.value}>{filter.title}</Button>)}
            </Flex>
        </Card>
    )
}

export default NotificationFilter;