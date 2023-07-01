import "./HomePageView.styles.scss";
import { HeaderSection } from "./partials";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../helpers/firebase";
import { Button } from "../../components";

export const HomePageView = () => {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.location.reload();
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setIsAuth(true);
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <div className="home-section">
      <HeaderSection />
      {isAuth && <p className="message-logged-in">Logged in!</p>}
      <div className="home-section-descripton-container">
        <div className="home-section-description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            consequuntur neque, magnam aut, libero commodi laborum, optio culpa
            quidem suscipit recusandae aspernatur nam adipisci? Magni maiores
            quo fuga incidunt eius.
          </p>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          consequuntur neque, magnam aut, libero commodi laborum, optio culpa
          quidem suscipit recusandae aspernatur nam adipisci? Magni maiores quo
          fuga incidunt eius.
        </div>
      </div>
      {isAuth && (
        <Button
          type="button"
          label="Logout"
          handleClick={handleLogout}
          variant="logout"
        />
      )}
    </div>
  );
};

export default HomePageView;
