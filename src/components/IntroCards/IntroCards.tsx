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

/**
 * Define an interface with 4 mandatory parts. TS allows for type declaration like Java
 * Ex: "heading: string;" says that the property heading must be of type string
 */
interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

/**
 * Create basic card to be reused down below
 * @returns One single Card with an icon, heading, subtext, and "learn more" button
 */
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
    // Large box to contain the cards in
    <Box p={4}>
      {/* Stack of two items (heading and text) for the titel of the IntroCards section*/}
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Start Your Collection
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Start your Fragrance Foundry journey by adding fragrances to your collection
        </Text>
      </Stack>

      {/* Container for the three cards */}
      <Container maxW={"5xl"} mt={12}>
        {/* 
        Flex is basically just a div with the "display: flex;" property.
        It comes with some helpful styling shorthands as seen below.
        */}
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {/* 3 instances of the Card component created above. Notice how all 4 properties (heading, icon, description, href) must be set to match the definition. */}
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
