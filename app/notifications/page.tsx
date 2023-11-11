import { Flex } from "antd";
import ManageNotification from "./(ui)/ManageNotification";
import NotificationFilter from "./(ui)/NotificationFilter";
import NotificationList from "./(ui)/NotificationList";
import OtherInfo from "../(ui)/OtherInfo";

const NotificationsPage = () => {
  return (
    <main className="grid grid-cols-4 gap-4">
    <section>
      <ManageNotification />
    </section>
    <section className="col-span-2">
      <Flex gap={12} vertical>
        <NotificationFilter />
        <NotificationList />
      </Flex>
    </section>
    <section>
      <OtherInfo />
    </section>
  </main>
  )
}

export default NotificationsPage;