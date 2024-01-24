import cn from "classnames";
export interface Props {
  className?: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  name: string;
  price: string;
}

export default ({
  className,
  imageSrc,
  imageAlt,
  href,
  name,
  price,
}: Props) => {
  return (
    <a data-id="ProductSimple" className={cn("group", className)} href={href}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
    </a>
  );
};
