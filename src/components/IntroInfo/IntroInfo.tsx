"use client";

import React from "react";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

//Imports from some outside react libraries containing various images/icons
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5";
import { ReactElement } from "react";

/**
 * Props for the feature interface.
 * Note that text and iconBg are mandatory, but Icon is not)
 * Ex: icon? means icon prop is not mandatory, but "text" is mandatory since it has no ? at the end
 */
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

/**
 * Create custom feature tag using the above feature interface props
 * @returns
 */
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    // Simple horizontal stack of an icon and text
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function IntroInfo() {
  return (
    <Container maxW={"5xl"} py={12}>
      {/* SimpleGrid makes a grid layout of base rows by md rows. If you only have one object (Ex: columns={2}), it will have 2 columns and then as many rows as needed*/}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Stack for the initial heading and subtext, as well as contains another stack of the three key points (Discover. Explore, Build)*/}
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>Fragrance Foundry</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            The one-stop-shop for all your fragrance collection needs.
          </Text>
          {/* Stack of three custom tag we made above */}
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}
          >
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Discover new fragrances"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Explore brands"}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Build your collection"}
            />
          </Stack>
        </Stack>
        {/* Flex box to contain the image on the right side of the page */}
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
