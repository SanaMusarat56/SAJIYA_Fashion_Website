import {Nargis} from "./Nargis";
const bridalName = [
  "Bayaan",
  "Dill",
  "Gajar",
  "Gulab",
  "Hayaat",
  "Lakshami",
  "Motiya",
  "Naunihal",
  "Nawazishaat",
  "Numaish",
];
export const BridalCourture = Nargis.filter((product)=>
    bridalName.includes(product.name),
);