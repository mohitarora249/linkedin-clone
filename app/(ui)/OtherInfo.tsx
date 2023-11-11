import { Affix, Flex } from "antd";
import Link from "next/link";

const OtherInfo = () => {
    return (
        <Affix offsetTop={20}>
            <Flex vertical gap={8}>
                <Flex gap={8}>
                    <Link href="/about">About</Link>
                    <Link href="/accessibility">Accessibility</Link>
                    <Link href="/help-center">Help Center</Link>
                </Flex>
                <Flex gap={8}>
                    <Link href="/privacy-and-terms">Privacy & Terms</Link>
                    <Link href="/ad-choices">Ad Choices</Link>
                </Flex>
                <Flex gap={8}>
                    <Link href="/advertising">Advertising</Link>
                    <Link href="/business-services">Business Services</Link>
                </Flex>
                <Flex gap={8}>
                    <Link href="/get-app">Get App</Link>
                    <Link href="/more">More</Link>
                </Flex>
            </Flex>
        </Affix>
    )
}

export default OtherInfo;