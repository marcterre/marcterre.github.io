import "./HomePageView.styles.scss";
import { HeaderSection, ProjectSection } from "./partials";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../helpers/firebase";
import { ProjectForm, ProjectFormButton, Button, Section } from "../../components";
import StyledCorner from "../../components/Utils/StyledCorner/StyledCorner";

export const HomePageView = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [openAddProjectForm, setOpenAddProjectForm] = useState(false);

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				window.location.reload();
				console.log("Signed out successfully");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				setIsAuth(true);
				console.log("uid", uid);
			} else {
				console.log("user is logged out");
			}
		});
	}, []);

	return (
		<>
			<HeaderSection />
			<Section id="home">
				{isAuth && <p className="message-logged-in">Logged in!</p> && (
					<Button
						type="button"
						label="Logout"
						handleClick={handleLogout}
						variant="logout"
					/>
				)}
				{isAuth && (
					<ProjectFormButton
						handleClick={() => setOpenAddProjectForm(!openAddProjectForm)}
					/>
				)}
				{openAddProjectForm && <ProjectForm />}
				<StyledCorner />
			</Section>
			<ProjectSection />
		</>
	);
};

export default HomePageView;
