import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Smartphone X1",
    description:
      "A sleek and powerful smartphone with 128GB storage and 6GB RAM.",
    price: "799",
    image:
      "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/2024/06/samsung-galaxy-s.jpg",
  },
  {
    id: 2,
    title: "Laptop Pro 15",
    description:
      "A high-performance laptop with a 15-inch screen, 16GB RAM, and 512GB SSD.",
    price: "1499",
    image:
      "https://th.bing.com/th/id/OIP.X2LslisYCzWfssCzT1_XAAHaFr?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    description:
      "Noise-canceling over-ear wireless headphones with 30 hours of battery life.",
    price: "199",
    image:
      "https://store.sony.co.nz/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dw11be308e/images/WHXB700L/WHXB700L.png",
  },
  {
    id: 4,
    title: '4K Smart TV 50"',
    description:
      "50-inch 4K UHD smart television with built-in Alexa and Google Assistant.",
    price: "799",
    image:
      "https://cdn.hughes.co.uk/live-trade/media/image/02/49/78/lg-50un70006lab.jpg",
  },
  {
    id: 5,
    title: "Smart Watch Z",
    description:
      "A stylish smartwatch with heart rate monitoring, GPS, and sleep tracking.",
    price: "299",
    image:
      "https://th.bing.com/th/id/OIP.4gpULBct9v_KJEmoqLgYzQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with 360-degree sound and 12-hour battery life.",
    price: "129",
    image:
      "https://th.bing.com/th/id/OIP.ME7w8biTCoGCGAD20L1S6wHaHX?rs=1&pid=ImgDetMain",
  },
  {
    id: 7,
    title: "Tablet Pro 10",
    description:
      "A 10-inch tablet with high-resolution screen, 4GB RAM, and 64GB storage.",
    price: "349",
    image:
      "https://th.bing.com/th/id/OIP.5EBaBeJjWaYfgOpx_Ev6pQHaFP?rs=1&pid=ImgDetMain",
  },
  {
    id: 8,
    title: "Gaming Mouse X",
    description:
      "Precision gaming mouse with customizable buttons and RGB lighting.",
    price: "59",
    image:
      "https://th.bing.com/th/id/OIP.BC2H5w0p_Ya-r8xd4sRTBgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 9,
    title: "Portable Charger 20000mAh",
    description:
      "A powerful portable charger with 20000mAh capacity, suitable for multiple devices.",
    price: "49",
    image: "https://m.media-amazon.com/images/I/61NMFZ7RycL.jpg",
  },
  {
    id: 10,
    title: "Smart Home Hub",
    description: "A smart home hub to control all your IoT devices with ease.",
    price: "89",
    image:
      "https://p.globalsources.com/IMAGES/PDT/B1176669329/ip-set-top-box.jpg",
  },
  {
    id: 11,
    title: "Electric Toothbrush",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes and long-lasting battery.",
    price: "99",
    image:
      "https://sacramentofamilydentist.com/wp-content/uploads/2023/07/Manual-vs.-Electric-Toothbrush-A-Comprehensive-Comparison-768x903.webp",
  },
  {
    id: 12,
    title: "Digital Camera 20MP",
    description:
      "A 20MP digital camera with 4K video recording and WiFi connectivity.",
    price: "499",
    image: "https://m.media-amazon.com/images/I/81FCE9iVnbL._AC_SL1500_.jpg",
  },
  {
    id: 13,
    title: "Virtual Reality Headset",
    description:
      "Immersive VR headset compatible with PC and console for an amazing gaming experience.",
    price: "299",
    image:
      "https://img.freepik.com/premium-photo/close-up-man-with-virtual-reality-headset-vaporwave-colors_1160123-14.jpg",
  },
  {
    id: 14,
    title: "Smart Refrigerator",
    description:
      "A smart fridge with touch screen control, WiFi connectivity, and temperature monitoring.",
    price: "1799",
    image:
      "https://www.lifewire.com/thmb/n-IN0wi82xrosSrbPipFhjQBt3U=/1440x960/filters:fill(auto,1)/samsung-ha-ref-rf56k9540sr-family-hub-overview-5aa18f0e18ba010037c023a5.jpg",
  },
  {
    id: 15,
    title: "Electric Kettle",
    description:
      "Stainless steel electric kettle with rapid boiling and automatic shut-off feature.",
    price: "39",
    image:
      "https://images.bonanzastatic.com/afu/images/661a/19f2/c728_6888681725/51zOI1j-GXL._SX522_.jpg",
  },
  {
    id: 16,
    title: "Cordless Vacuum Cleaner",
    description:
      "Lightweight cordless vacuum cleaner with powerful suction and a long battery life.",
    price: "179",
    image:
      "https://m.media-amazon.com/images/S/aplus-media/vc/71ea685a-2cc7-43c0-bcd3-b4c122f9f8ab.jpg",
  },
  {
    id: 17,
    title: "Smart Light Bulbs",
    description:
      "Energy-efficient smart light bulbs that can be controlled via voice or app.",
    price: "25",
    image:
      "https://th.bing.com/th/id/R.d9527a98b7761aece4ced0304b079b3c?rik=3EQlaz6o7h33Wg&pid=ImgRaw&r=0",
  },
  {
    id: 18,
    title: "Wireless Router",
    description:
      "High-speed wireless router with dual-band support for seamless internet connectivity.",
    price: "149",
    image:
      "https://routermag.com/wp-content/uploads/netgear-r7000p-100nas-nighthawk-wifi-router-r7000p-ac2300-wireless-2048x2048.jpg",
  },
  {
    id: 19,
    title: "Air Purifier",
    description:
      "Air purifier with HEPA filter for clean and fresh air in your home.",
    price: "229",
    image: "https://m.media-amazon.com/images/I/61pkngoRMyL._AC_SL1500_.jpg",
  },
  {
    id: 20,
    title: "Electric Skateboard",
    description:
      "Portable electric skateboard with 20 mph speed and 15-mile range.",
    price: "499",
    image:
      "https://th.bing.com/th/id/R.136c936140720995376f475054e83cc9?rik=ktLRgKNEELnGAw&pid=ImgRaw&r=0",
  },
];

export default products;
