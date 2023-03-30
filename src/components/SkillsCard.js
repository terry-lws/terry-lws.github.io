import { Heading, WrapItem, Center, Card, CardBody, Stack } from "@chakra-ui/react";
import React from "react";

const SkillsCard = ({ title, imageSrc }) => {
    return (
        <WrapItem boxShadow="lg">
            <Center>
                <Card maxW='sm'>
                    <CardBody>
                        <img src={imageSrc} />
                        <Stack mt='6'>
                            <Heading size='md'>{title}</Heading>
                        </Stack>
                    </CardBody>
                </Card>
            </Center>
        </WrapItem>
    );
};

export default SkillsCard;
