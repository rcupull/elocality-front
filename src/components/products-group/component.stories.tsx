import Component from ".";
import ProductSimple from "../product-simple"
import ProductInlinePrice from "../product-inline-price"

export default {
  component: Component,
};

const productItems = [
  {
    title: "Earthen Bottle",
    price: '$78',
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  },
  {
    title: "Nomad Tumbler",
    price: '$129',
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
  },
  {
    title: "Hanging Beste",
    price: '$78',
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
  }
]


export const WithProductSimple = (): JSX.Element => (
  <Component
    title="Products"
  >
    {productItems.map((item) => (
      <ProductSimple
        key={item.title}
        href="#"
        name={item.title}
        price={item.price}
        imageSrc={item.imageSrc}
      />
    ))}
  </Component>
);

export const WithProductInlinePrice = (): JSX.Element => (
  <Component
    title="Products"
  >
    {productItems.map((item) => (
      <ProductInlinePrice
        key={item.title}
        href="#"
        name={item.title}
        price={item.price}
        imageSrc={item.imageSrc}
      />
    ))}
  </Component>
);
