import { Box, Heading } from "@chakra-ui/react";
import PromotionForm from "./PromotionForm";

export default function SalesPortalNewPage() {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Create a new promotion
      </Heading>
      <p>Fill out the form below to create a new promotion.</p>
      <PromotionForm />
    </Box>
  );
}
