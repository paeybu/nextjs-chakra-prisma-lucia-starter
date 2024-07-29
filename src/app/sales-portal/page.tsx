"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Heading } from "@chakra-ui/react";

export default function SalesPortalPage() {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Sales Portal
      </Heading>
      <p>Welcome to the sales portal!</p>
      <Button colorScheme="blue" as={Link} href="/sales-portal/new">
        สร้างโปรโมชั่น
      </Button>
    </Box>
  );
}
