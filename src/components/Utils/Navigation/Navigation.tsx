import { ReactElement } from "react";
import "./Navigation.styles.scss";

type NavigationProps = {
  navigationItems: {
    label?: string | ReactElement;
    route: string;
  }[];
};

export const Navigation = (props: NavigationProps) => {
  const { navigationItems } = props;
  return (
    <ul className="navigation">
      {navigationItems.map((items, index) => (
        <li className="navigation-list-item" key={index}>
          <a
            href={items.route}
            className="navigation-list-item-link"
            target="_blank"
            rel="noreferrer"
          >
            {items.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
