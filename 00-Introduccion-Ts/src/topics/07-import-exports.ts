import { product, taxCalculator } from "./06-function-destructuration";
const shoppingCart: product[] = [
  {
    desc: "Samsung A71",
    price: 699,
  },
  {
    desc: "Ipad Air",
    price: 499.99,
  },
];

const tax = 0.2;
const [total, impuesto] = taxCalculator({ tax: tax, products: shoppingCart });
