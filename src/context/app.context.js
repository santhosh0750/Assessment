import React, { createContext, useMemo, useState } from "react";
export const AppContext = createContext();
export default function AppcontextProvider({ children }) {
  const [ProductsList, setProductsList] = useState([
    {
      id: 1,
      imageUrl: "https://m.media-amazon.com/images/I/71XHEQZZW+L.jpg",
      productName: "Samsung 990 PRO 2 PCIe 4.0 NVMe SSD",
      category: "storage",
      price: "$149.99",
      availableUnits: 34,
    },
    {
      id: 2,
      imageUrl:
        "https://www.networkhardwares.com/cdn/shop/products/1074602290_971a6d21-fc4a-4e21-9de2-44a1ddc76fcc.jpg?v=1706961637",
      productName: "AMD Ryzen 5 7600X Processor",
      category: "processors",
      price: "$229.00",
      availableUnits: 0,
    },
    {
      id: 3,
      imageUrl:
        "https://www.gigabyte.com/FileUpload/Global/KeyFeature/2491/innergigabyteimages/diagram.png",
      productName: "Gigabyte B650M Gaming X AX Motherboard",
      category: "motherboards",
      price: "$159.99",
      availableUnits: 27,
    },
    {
      id: 4,
      imageUrl: "https://m.media-amazon.com/images/I/81g1TvyvbYL.jpg",
      productName: "MSI Pro B650M-B Motherboard",
      category: "motherboards",
      price: "$139.99",
      availableUnits: 18,
    },
    {
      id: 5,
      imageUrl:
        "https://antesports.com/wp-content/uploads/2023/12/Listing_1-removebg-preview.png?x98404",
      productName: "Ant Esports Carbonflow 120mm Case Fan",
      category: "cooling",
      price: "$19.99",
      availableUnits: 0,
    },
    {
      id: 6,
      imageUrl:
        "https://www.silicon-power.com/upload/catalog_m/SiliconPower-SSD-M2%202280%20A55-Product2-2100x1500__25H06Ouo4X.png",
      productName: "Silicon Power A55 128GB M.2 Internal SSD",
      category: "storage",
      price: "$24.99",
      availableUnits: 40,
    },
    {
      id: 7,
      imageUrl: "https://m.media-amazon.com/images/I/61LjnKSImPL.jpg",
      productName: "Crucial RAM 8GB DDR4 3200MHz",
      category: "memory",
      price: "$34.99",
      availableUnits: 60,
    },
    {
      id: 8,
      imageUrl: "https://m.media-amazon.com/images/I/61PSIJjdEoL.jpg",
      productName: "EVM 1TB M.2 SATA SSD",
      category: "storage",
      price: "$79.99",
      availableUnits: 6,
    },
    {
      id: 9,
      imageUrl: "https://m.media-amazon.com/images/I/71XHEQZZW+L.jpg",
      productName: "MSI A320M-A PRO mATX Motherboard",
      category: "motherboards",
      price: "$89.99",
      availableUnits: 20,
    },
    {
      id: 10,
      imageUrl: "https://m.media-amazon.com/images/I/71XHEQZZW+L.jpg",
      productName: "Ant Esports Elite 1100 Gaming Cabinet",
      category: "cases",
      price: "$49.99",
      availableUnits: 0,
    },
    {
      id: 11,
      imageUrl:
        "https://www.networkhardwares.com/cdn/shop/products/1074602290_971a6d21-fc4a-4e21-9de2-44a1ddc76fcc.jpg?v=1706961637",

      productName: "Intel Core i9-14900K Processor",
      category: "processors",
      price: "$589.00",
      availableUnits: 15,
    },
    {
      id: 12,
      imageUrl:
        "https://www.gigabyte.com/FileUpload/Global/KeyFeature/2491/innergigabyteimages/diagram.png",
      productName: "Corsair Vengeance LPX 32GB DDR4 3600MHz",
      category: "memory",
      price: "$129.99",
      availableUnits: 25,
    },
    {
      id: 13,
      imageUrl:
        "https://www.gigabyte.com/FileUpload/Global/KeyFeature/2491/innergigabyteimages/diagram.png",

      productName: "ASUS TUF RTX 4070 Super 8GB Graphics Card",
      category: "graphics-cards",
      price: "$699.99",
      availableUnits: 10,
    },
    {
      id: 14,
      imageUrl: "https://m.media-amazon.com/images/I/81g1TvyvbYL.jpg",
      productName: "NZXT Kraken 240 RGB Liquid Cooler",
      category: "cooling",
      price: "$129.00",
      availableUnits: 18,
    },
    {
      id: 15,
      imageUrl:
        "https://antesports.com/wp-content/uploads/2023/12/Listing_1-removebg-preview.png?x98404",

      productName: "Cooler Master Hyper 212 Black Edition Air Cooler",
      category: "cooling",
      price: "$49.99",
      availableUnits: 40,
    },
    {
      id: 16,
      imageUrl:
        "https://www.silicon-power.com/upload/catalog_m/SiliconPower-SSD-M2%202280%20A55-Product2-2100x1500__25H06Ouo4X.png",
      productName: "EVGA SuperNOVA 850 G5 Power Supply (80+ Gold)",
      category: "power-supplies",
      price: "$139.99",
      availableUnits: 17,
    },
    {
      id: 17,
      imageUrl: "https://m.media-amazon.com/images/I/61LjnKSImPL.jpg",

      productName: "Lian Li Lancool II Mesh Performance Case",
      category: "cases",
      price: "$109.99",
      availableUnits: 22,
    },
    {
      id: 18,
      imageUrl: "https://m.media-amazon.com/images/I/61PSIJjdEoL.jpg",
      productName: "ASRock B760 Steel Legend WiFi Motherboard",
      category: "motherboards",
      price: "$189.99",
      availableUnits: 0,
    },
    {
      id: 19,
      imageUrl:
        "https://www.networkhardwares.com/cdn/shop/products/1074602290_971a6d21-fc4a-4e21-9de2-44a1ddc76fcc.jpg?v=1706961637",
      productName: "WD Black SN850X 1TB NVMe SSD",
      category: "storage",
      price: "$99.99",
      availableUnits: 33,
    },
    {
      id: 20,
      imageUrl: "https://m.media-amazon.com/images/I/61PSIJjdEoL.jpg",

      productName: "Seagate Barracuda 2TB HDD 7200 RPM",
      category: "storage",
      price: "$54.99",
      availableUnits: 50,
    },
    {
      id: 21,
      imageUrl: "https://via.placeholder.com/150",
      productName: "Noctua NF-A12x25 PWM Case Fan",
      category: "cooling",
      price: "$29.95",
      availableUnits: 70,
    },
    {
      id: 22,
      imageUrl: "https://via.placeholder.com/150",
      productName: "ASUS ROG Strix Z790-E Gaming WiFi II Motherboard",
      category: "motherboards",
      price: "$449.99",
      availableUnits: 9,
    },
    {
      id: 23,
      imageUrl: "https://via.placeholder.com/150",
      productName: "Crucial P5 Plus 2TB PCIe 4.0 SSD",
      category: "storage",
      price: "$169.99",
      availableUnits: 26,
    },
    {
      id: 24,
      imageUrl: "https://via.placeholder.com/150",
      productName: "Kingston FURY Beast RGB 16GB DDR5 6000MHz",
      category: "memory",
      price: "$94.99",
      availableUnits: 35,
    },
    {
      id: 25,
      imageUrl: "https://via.placeholder.com/150",
      productName: "Be Quiet! Pure Power 11 600W 80+ Gold",
      category: "power-supplies",
      price: "$79.99",
      availableUnits: 24,
    },
    {
      id: 26,
      imageUrl: "https://via.placeholder.com/150",
      productName: "Fractal Design Pop Air ATX Case",
      category: "cases",
      price: "$89.99",
      availableUnits: 29,
    },
    {
      id: 27,
      imageUrl: "https://via.placeholder.com/150",
      productName: "Thermaltake Toughpower GF3 1000W ATX 3.0 PSU",
      category: "power-supplies",
      price: "$179.99",
      availableUnits: 13,
    },
    {
      id: 28,
      imageUrl: "https://via.placeholder.com/150",
      productName: "DeepCool AK400 Performance CPU Cooler",
      category: "cooling",
      price: "$34.99",
      availableUnits: 48,
    },
    {
      id: 29,
      imageUrl: "https://via.placeholder.com/150",
      productName: "Zotac RTX 4060 Ti Twin Edge OC 8GB",
      category: "graphics-cards",
      price: "$449.99",
      availableUnits: 14,
    },
    {
      id: 30,
      imageUrl: "https://via.placeholder.com/150",
      productName: "G.Skill Trident Z RGB 64GB DDR5 5600MHz",
      category: "memory",
      price: "$269.99",
      availableUnits: 12,
    },
  ]);
  const [CategoryList, setCategoryList] = useState([
    {
      id: 1,
      category: "storage",
    },
    {
      id: 2,
      category: "processors",
    },
    {
      id: 3,
      category: "motherboards",
    },
    {
      id: 4,
      category: "cooling",
    },
    {
      id: 5,
      category: "memory",
    },
    {
      id: 6,
      category: "cases",
    },
    {
      id: 7,
      category: "graphics-cards",
    },
    {
      id: 8,
      category: "graphics-cards",
    },
    {
      id: 9,
      category: "power-supplies",
    },
  ]);

  const values = useMemo(
    () => ({
      ProductsList,
      setProductsList,
      CategoryList,
      setCategoryList,
    }),
    [ProductsList]
  );
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
