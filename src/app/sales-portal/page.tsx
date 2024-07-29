import { Box, Heading } from "@chakra-ui/react";

export default async function SalesPortalPage() {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Sales Portal
      </Heading>
      <p>Welcome to the sales portal!</p>
    </Box>
  );
}
