import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import FeaturedPromotionCard from "./FeaturedPromotionCard";

export default function FeaturedPromotionsList() {
  return (
    <Box>
      <Heading size="lg">โปรโมชั่นยอดนิยม</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        <FeaturedPromotionCard />
        <FeaturedPromotionCard />
        <FeaturedPromotionCard />
        <FeaturedPromotionCard />
        <FeaturedPromotionCard />
        <FeaturedPromotionCard />
      </SimpleGrid>
    </Box>
  );
}
