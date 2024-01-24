import Component from ".";

export default {
  component: Component,
};

export const Default = (): JSX.Element => (
  <Component
    imageSrc="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
    href="#"
    name="Earthen Bottle"
    price={'$78'}
    description="White"
  />
);
