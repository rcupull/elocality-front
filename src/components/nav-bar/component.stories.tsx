import Component from ".";
import UserMenu from "../user-menu";

export default {
  component: Component,
};

export const Default = (): JSX.Element => (
  <div style={{ height: "10rem" }}>
    <Component
      userMenu={
        <UserMenu
          imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          menuItems={[
            { label: "Your Profile", href: "/profile" },
            { label: "Settings", href: "/settings" },
            { label: "Sign out", href: "/signout" },
          ]}
        />
      }
      menuItems={[
        { name: "Dashboard", href: "#", current: true },
        { name: "Team", href: "#", current: false },
        { name: "Projects", href: "#", current: false },
        { name: "Calendar", href: "#", current: false },
      ]}
    />
  </div>
);
