"use client";
import { Box, Badge, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
export default function FeaturedPromotionCard() {
  return (
    <Link href="/promotions/1">
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          w="full"
          maxHeight="200px"
          src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/453091706_122123113772339902_8656006775669008033_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=WpiLQ51gxrgQ7kNvgHxubFN&_nc_ht=scontent.fbkk28-1.fna&oh=00_AYAjExDoHi4XcFjn_jCGCEKQHo-BiiwaECB_-dc3LUog5w&oe=66AD629B"
          alt="promotion"
        />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              16 มีนาคม 2564
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            Yaris Cross รับรถได้ทันที่ ส่วนลดสูง
          </Box>
          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              รายละเอียดโปรโมชั่น
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
