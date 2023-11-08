import { Draw } from "./sections/Draw";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Intro } from "./sections/Intro";
import { Statistics } from "./sections/Statistics";

export const App = (): JSX.Element => {
	return (
		<>
			<Header />
			<main>
				<Intro />
				<Statistics />
				<Draw />
			</main>
			<Footer />
		</>
	);
};
