"use client";

import React from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FcAbout, FcAssistant, FcCollaboration, FcDonate, FcManager } from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function IntroCards() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Start Your Collection
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Start your Fragrance Foundry journey by adding fragrances to your collection
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Discover"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={"Discover your next fragrance by exploring the gallery"}
            href={"#"}
          />
          <Card
            heading={"View"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={"View and edit your collection of Fragrances"}
            href={"#"}
          />
          <Card
            heading={"Learn"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={"Learn how fragrances are designed, created, and produced"}
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
