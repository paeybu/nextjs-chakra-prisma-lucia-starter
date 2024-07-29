import { Box, Button, Select } from "@chakra-ui/react";

export default function SearchForm() {
  const CAR_BRANDS = [
    "Toyota",
    "Honda",
    "Nissan",
    "Mitsubishi",
    "Isuzu",
    "Mazda",
    "Ford",
    "Chevrolet",
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Volkswagen",
    "Volvo",
    "Subaru",
    "Suzuki",
    "MG",
    "Mini",
    "Peugeot",
    "Lexus",
    "Hyundai",
    "Kia",
    "Jeep",
    "Porsche",
    "Land Rover",
    "Jaguar",
    "Bentley",
    "Rolls-Royce",
    "Ferrari",
    "Lamborghini",
    "Maserati",
    "McLaren",
    "Aston Martin",
    "Lotus",
    "Bugatti",
    "Pagani",
    "Koenigsegg",
    "Tesla",
    "Alfa Romeo",
    "Genesis",
    "Infiniti",
    "Lincoln",
    "Cadillac",
    "Chrysler",
    "Dodge",
    "Ram",
    "Buick",
    "GMC",
    "Acura",
    "Fiat",
    "Smart",
    "Hummer",
    "Saturn",
    "Pontiac",
    "Oldsmobile",
    "Saab",
    "Plymouth",
    "Mercury",
    "Scion",
    "Polestar",
  ];

  return (
    <Box>
      <form action="">
        {/* <Input placeholder="Enter your name" /> */}
        <Select placeholder="เลือกยี่ห้อรถ">
            {CAR_BRANDS.map((brand) => (
                <option key={brand} value={brand}>
                {brand}
                </option>
            ))}
        </Select>
        <Button>ค้นหา</Button>
      </form>
    </Box>
  );
}
