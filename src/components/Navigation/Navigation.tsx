import { ReactElement } from "react";
import "./Navigation.styles.scss";

type NavigationProps = {
  navigationItems: {
    label?: string | ReactElement;
    route: string;
  }[];
  variant?: string;
};

export const Navigation = (props: NavigationProps) => {
  const { navigationItems, variant } = props;
  return (
    <div
      className={`navigation-wrapper navigation-wrapper--${
        variant ? variant : ""
      }`}
    >
      <nav className={`navigation navigation--${variant ? variant : ""}`}>
        {navigationItems.map((items, index) => (
          <li key={index}>
            <a href={items.route}>{items.label}</a>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
