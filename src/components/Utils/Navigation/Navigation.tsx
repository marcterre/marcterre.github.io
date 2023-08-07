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
    <div className="navigation-wrapper">
      <ul className="navigation">
        {navigationItems.map((items, index) => (
          <li className="navigation-list-item" key={index}>
            <a href={items.route} target="_blank" rel="noreferrer">
              {items.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
