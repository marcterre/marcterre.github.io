import { HeaderSection } from "./partials";
import "./HomePageView.styles.scss";

const image = require("../../assets/images/helmet-placeholder.png");

export const HomePageView = () => {
  return (
    <div className="home-section">
      <HeaderSection />
      <div className="home-section-descripton-container">
        <div className="home-section-description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            consequuntur neque, magnam aut, libero commodi laborum, optio culpa
            quidem suscipit recusandae aspernatur nam adipisci? Magni maiores
            quo fuga incidunt eius.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
