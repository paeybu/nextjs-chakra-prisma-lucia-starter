"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
export default function Promotion() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Container>
      <Card>
        <CardHeader>
          <Flex>
            <Link href='/'>Back</Link>
            <Heading>Promotion 1</Heading>
          </Flex>
        </CardHeader>
        <CardBody>
          <Image
            w="full"
            maxH="200px"
            rounded="lg"
            src="https://via.placeholder.com/300"
            alt="promotion"
          />
          <Text mt={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
            neque laborum, excepturi suscipit tempore commodi, rem amet maxime
            sint, voluptatum repellendus dolores. Temporibus voluptas nisi
            voluptate culpa quibusdam eos.
          </Text>
          <Flex align="center" justify="space-between">
            <Heading color="red.500">ส่วนลด</Heading>
            <Text>20,000.-</Text>
          </Flex>
          <Flex align="center" justify="space-between">
            <Heading color="red.500">หมดเขต</Heading>
            <Text>20 สิงหาคม 2567</Text>
          </Flex>
          <Button w="full" colorScheme="blue" onClick={onOpen}>
            สนใจโปรโมชั่นนี้ ติดต่อ เซลส์แซม
          </Button>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ติดต่อเซลส์</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="https://via.placeholder.com/300" alt="promotion" />
            <Text>ไลน์ sdf423</Text>
            <Text>โทร 089123213</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}
