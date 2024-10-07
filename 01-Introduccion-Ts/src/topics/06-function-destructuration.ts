export interface product {
  desc: string;
  price: number;
}

const phone: product = {
  desc: "Samsung A71",
  price: 699,
};

const tablet: product = {
  desc: "Ipad Air",
  price: 499.99,
};

const shoppingCart: product[] = [phone, tablet];
const tax = 0.2;

interface TaxCalculatorOptions {
  tax: number;
  products: product[];
}

export function taxCalculator({
  tax,
  products,
}: TaxCalculatorOptions): number[] {
  let total = 0;

  products.forEach(({ price }) => {
    // Destructuro el objeto product y obtengo el valor de la propiedad price
    total += price;
  });

  return [total, total * tax];
}

const [total, impuesto] = taxCalculator({ tax: tax, products: shoppingCart });
console.log(`Total: ${total}, Impuesto: ${impuesto}`);
