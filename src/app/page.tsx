import HeroSectionCentered from "@/components/hero-section-centered";
import ProductsGroup from "@/components/products-group";
import ProductSimple from "@/components/product-simple";

const productItems = [
  {
    name: "Earthen Bottle",
    price: "$78",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  },
  {
    name: "Nomad Tumbler",
    price: "$129",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
  },
  {
    name: "Hanging Beste",
    price: "$78",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <HeroSectionCentered />

      <ProductsGroup title="Recientes">
        {[...productItems, ...productItems, ...productItems].map(
          (item, index) => (
            <ProductSimple
              key={index}
              href="#"
              name={item.name}
              price={item.price}
              imageSrc={item.imageSrc}
            />
          )
        )}
      </ProductsGroup>
    </main>
  );
}
