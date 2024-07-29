import { Box, Button, Container, Input, Select } from "@chakra-ui/react";
import SearchForm from "./home/SearchForm";
import FeaturedPromotionsList from "./home/FeaturedPromotionsList";

export default function Home() {
  return (
    <Container mt={4}>
      <SearchForm />
      <FeaturedPromotionsList />
    </Container>
  );
}
