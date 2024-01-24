'use client'
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import cn from "classnames";

interface MenuItem {
  label: string;
  href?: string;
}

export interface Props {
  className?: string;
  imageSrc?: string;
  menuItems?: Array<MenuItem>;
}

export default ({ className, imageSrc, menuItems }: Props) => {

  const isAuthenticated = false;

  if(!isAuthenticated){
    return <a className="text-slate-100" href="/sign-in">Iniciar Sesión</a>
  }



  return (
    <Menu data-id="UserMenu" as="div" className={cn("relative", className)}>
      <div>
        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src={imageSrc} alt="" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menuItems?.map((item) => (
            <Menu.Item key={item.label} >
              {({ active }) => (
                <a
                  href={item.href}
                  className={cn(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {item.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
