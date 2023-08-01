import "./HomePageView.styles.scss";
import { HeaderSection, ProjectSection } from "./partials";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../helpers/firebase";
import { ProjectForm, ProjectFormButton, Button } from "../../components";

export const HomePageView = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [openAddProjectForm, setOpenAddProjectForm] = useState(false);

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
    <>
      <div className="home-section" id="home">
        <HeaderSection />
        {isAuth && <p className="message-logged-in">Logged in!</p> && (
          <Button
            type="button"
            label="Logout"
            handleClick={handleLogout}
            variant="logout"
          />
        )}
        <div className="home-section-container">
          <div className="home-section-container-slogan">
            <p className="slogan">
              Transforming <span className="slogan--span">design</span>s into{" "}
              engaging <span className="slogan--span">experience</span>
            </p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            consequuntur neque, magnam aut, libero commodi laborum, optio culpa
            quidem suscipit recusandae aspernatur nam adipisci? Magni maiores
            quo fuga incidunt eius.
          </div>
        </div>
        {isAuth && (
          <ProjectFormButton
            handleClick={() => setOpenAddProjectForm(!openAddProjectForm)}
          />
        )}
        {openAddProjectForm && <ProjectForm />}
      </div>
      <ProjectSection />
    </>
  );
};

export default HomePageView;
