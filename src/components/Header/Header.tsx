"use client";

import React from "react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

//The name of each Link desired in the NavBar.
//Note: The name of each Link is how it will appear on the screen. The number of elements is also the number of navbar buttons
const Links = ["Home", "Gallery", "My Collection", "About"];

/**
 * A single Navigation link using a Box with certain styling
 * @param param0
 * @returns A single Navigation button link
 */
const NavLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Header() {
  //Custom hook from Chakra
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* The horizontal Stack (row of items) holding the picture */}
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img
                src="src\assets\fragranceBtl.jpg"
                alt="Fragrance Icon"
                style={{ height: "3rem" }}
              />
            </Box>

            {/* The horizontal Stack (row of items) holding the navbar buttons (Ex: home, gallery, about) */}
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {/* Mapping each of the things in the Links const (see above) as its own NavLink item, therefore using all stlying and formatting from NavLink*/}
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              {/* The button to open the menu, in this case, its the profile image */}
              <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              {/* List of options for the dropdown menu (via clicking profile icon) */}
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Collection</MenuItem>
                <MenuDivider />
                <MenuItem>Wishlist</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {/* Determines if the box is open, which it always is since the navigation bar should always be showing */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* Same as above Mapping example*/}
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
