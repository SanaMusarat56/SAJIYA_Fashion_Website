import new1 from "../../assets/images/MegaMenu/new-arrivals/img1.webp";
import new2 from "../../assets/images/MegaMenu/new-arrivals/img2.webp";
import new3 from "../../assets/images/MegaMenu/new-arrivals/img3.webp";
import new4 from "../../assets/images/MegaMenu/new-arrivals/img4.webp";
import new5 from "../../assets/images/MegaMenu/new-arrivals/img5.webp";

import bridal1 from "../../assets/images/MegaMenu/Bridals/img1.webp";
import bridal2 from "../../assets/images/MegaMenu/Bridals/img2.webp";
import bridal3 from "../../assets/images/MegaMenu/Bridals/img3.webp";

import formal1 from "../../assets/images/MegaMenu/Formals/img1.webp";
import formal2 from "../../assets/images/MegaMenu/Formals/img2.webp";
import formal3 from "../../assets/images/MegaMenu/Formals/img3.webp";

import pret1 from "../../assets/images/MegaMenu/Pret/img1.webp";
import pret2 from "../../assets/images/MegaMenu/Pret/img2.webp";
import pret3 from "../../assets/images/MegaMenu/Pret/img3.webp";
import pret4 from "../../assets/images/MegaMenu/Pret/img4.webp";
import pret5 from "../../assets/images/MegaMenu/Pret/img5.webp";

import luxury1 from "../../assets/images/MegaMenu/Luxury/img1.webp";
import luxury2 from "../../assets/images/MegaMenu/Luxury/img2.webp";
import luxury3 from "../../assets/images/MegaMenu/Luxury/img3.webp";

import menwear1 from "../../assets/images/MegaMenu/Menswear/img1.webp";
import menwear2 from "../../assets/images/MegaMenu/Menswear/img2.webp";
import menwear3 from "../../assets/images/MegaMenu/Menswear/img3.webp";
import menwear4 from "../../assets/images/MegaMenu/Menswear/img4.webp";
import menwear5 from "../../assets/images/MegaMenu/Menswear/img5.webp";

import others1 from "../../assets/images/MegaMenu/Others/img1.webp";
import others2 from "../../assets/images/MegaMenu/Others/img2.webp";
import others3 from "../../assets/images/MegaMenu/Others/img3.webp";

export const row1Items = [
  "New Arrivals",
  "Bridals",
  "Formals",
  "Pret",
  "Luxury Pret",
  "Unstitched",
  "Menswear",
];

export const row2Items = ["Best Sellers", "Others"];

export const megaMenu = {
  "New Arrivals": {
    images: [
      { title: "Pret SS26 Vol-II", image: new1 },
      { title: "Jinan 26", image: new2 },
      { title: "Eid Pret SS26", image: new3 },
      { title: "Zan SS26", image: new4 },
      { title: "Nargis Bridal", image: new5 },
    ],
  },
  Bridals: {
    images: [
      { title: "Nargis", image: bridal1 },
      { title: "Dilruba", image: bridal2 },
      { title: "Bridal Couture 24", image: bridal3 },
    ],
    collections: [
      ["Rehar Nagar", "Natak Bridal 24", "Moraan Sarkar Bridals"],
      ["Vava Voom Chapter III", "Nawab Zadiya Bridals"],
      ["Fateh Pur Bridals", "Ragyaal MO Bridals", "Celebrity Bridals"],
    ],
  },
  Formals: {
    images: [
      { title: "Nargis", image: formal1 },
      { title: "Dilruba", image: formal2 },
      { title: "Bridal Couture 24", image: formal3 },
    ],
    collections: [
      [
        "Sitaray",
        "Natak Formals 24",
        "Formals 24",
        "Parday ke Peechay",
        "Moraan Sarkar Formals",
      ],
      [
        "Vava Voom Chapter III",
        "Jhil Mil",
        "Tota Kahani",
        "VaVa Voom 2",
        "Nawab Zadiya Formals",
      ],
      [
        "Vava Voom",
        "Fateh Pur Formals",
        "Ragyaal MO Formals",
        "Lost Memories",
      ],
    ],
  },
  Pret: {
    images: [
      { title: "Pret SS 26", image: pret1 },
      { title: "Jinan 26", image: pret2 },
      { title: "Eid Pret SS 26", image: pret3 },
      { title: "Barmala Pret 26", image: pret4 },
      { title: "Khaddar Pret 25", image: pret5 },
    ],
  },
  "Luxury Pret": {
    images: [
      { title: "Luxury Pret 26 Eid Collection", image: luxury1 },
      { title: "New Year Special 26", image: luxury2 },
      { title: "Luxury Pret AW 25", image: luxury3 },
    ],
    nestedCategories: [
      [
        { heading: "Festive Pret 25", items: [] },
        { heading: "The Scent Luxury Pret SS 25", items: [] },
        { heading: "SS Luxury Pret 25", items: [] },
        {
          heading: "Basic Not Basic",
          items: [
            "Basic Not Basic V",
            "Basic Not Basic IV",
            "Basic Not Basic III",
            "Basic Not Basic II",
            "Basic Not Basic I",
          ],
        },
      ],
      [
        { heading: "Luxury Pret Eid 24", items: [] },
        {
          heading: "Pay Day",
          items: [
            "Pay Day Vol - V",
            "Pay Day Vol. IV",
            "Pay Day Volume - III",
            "Pay Day Volume - II",
          ],
        },
        { heading: "Luxury Pret Eid 23", items: [] },
        { heading: "Candy Soap", items: [] },
      ],
      [
        { heading: "Luxury Pret 23", items: [] },
        { heading: "Chamak Damak", items: [] },
        { heading: "Moon In The Golden Cup", items: [] },
        { heading: "Khawab Ghar", items: [] },
        { heading: "The Guestlist", items: [] },
        { heading: "Nizam Begums", items: [] },
      ],
    ],
  },
  Unstitched: {
    nestedCategories: [
      [
        {
          heading: "Lawn",
          items: [
            "Jinan 26",
            "Zan SS 26",
            "Luxury Lawn 26 Eid Edit",
            "Nirmal SS'25",
            "Luxury Lawn'25",
            "SS Lawn'24 Eid Edit",
            "SS Lawn 24",
          ],
        },
      ],
      [
        {
          heading: "Festive",
          items: [
            "Festive Unstitched 26",
            "Massarat - Festive Unstitched '25",
            "Darlings Festive'25",
            "Festive Unstitched'24",
          ],
        },
      ],
      [
        {
          heading: "Khaddar",
          items: ["Khaddar Unstitched 25"],
        },
        {
          heading: "Karandi",
          items: ["Karandi Unstitched 25", "Karandi A/W 24"],
        },
      ],
    ],
  },
  Menswear: {
    images: [
      { title: "Nargis-Menswear 26", image: menwear1 },
      { title: "Basic Not Basic V(Menswear)", image: menwear2 },
      { title: "Pay Day Vol-IV", image: menwear3 },
      { title: "Natak Menswear 24", image: menwear4 },
      { title: "Basic Not Basic IV-Menswear", image: menwear5 },
    ],
  },
  "Best Sellers": null,
  Others: {
    images: [
      { title: "Mix & Match", image: others1 },
      { title: "Ready to Ship", image: others2 },
      { title: "Clients", image: others3 },
    ],
  },
};

export const titleToRoute ={
  "Pret SS26 Vol-II" : "/Pret SS26",
  "Jinan 26" : "/Jinan",
  "Eid Pret SS26" : "/eidPret",
  "Zan SS26": "/Zan",
  "Nargis Bridal" : "/Nargis",

  "Nargis" : "/Nargis",
  "Diruba" : "/DilrubaFormalCollection",
  "Bridal Couture 24" : "/Bridal",
  "Rehar Nagar" : "/ReharNagar",

  Sitaray : "/StiarayCollections",

  "Pret SS 26" : "/PretSS26",
  "Eid Pret SS 26" : "/eidPret",
  "Barmala Pret SS 26" : "/BarmalaCollections",
  "Khaddar" : "/Khaddar",

  "Basic Not Basic" : "/BasicNotBasic",
  "Basic Not Basic V" : "/BasicNotBasic",
  "Basic Not Basic IV" : "/BasicNotBasic",
  "Basic Not Basic III" : "/BasicNotBasic",
  "Basic Not Basic II" : "/BasicNotBasic",
  "Basic Not Basic I" : "/BasicNotBasic",

  "Pay Day" : "/PayDol",
  "Pay Dol Vol -V": "/PayDol",
  "Pay Dol Vol IV": "/PayDol",
  "Pay Dol Vol III": "/PayDol",
  "Pay Dol Vol II": "/PayDol",

  Lawn : "/Lawn",
  "Zan SS 26" : "/Zan",
  Festive: "/Festive",
  "Khaddar Unstitched 25" : "/Khaddar",
  Karandi : "/Karandi",
  "Karandi Unstitched 25" : "/Karandi",
  "Kharandi A/W 24" : "/Karandi",

  "Nargis-Menswear 26":"/NargisMenswear",
  "Basic Not Basic V(Menswear)" : "/BasicNotBasic",
  "Pay Day Vol-IV" : "/PayDol",
  "Basic Not Basic IV-Menswear":"/BasicNotBasic",
};