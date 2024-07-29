import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

export default function PromotionForm() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Promotion Form
      </Heading>
      <form>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea />
        </FormControl>
        <FormControl id="startDate" isRequired>
          <FormLabel>Start Date</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl id="endDate" isRequired>
          <FormLabel>End Date</FormLabel>
          <Input type="date" />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Create Promotion
        </Button>
      </form>
    </Box>
  );
}
