import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Godsgift | Portofolio",

    description:
		"My name is I'm Godsgift, a Data Scientist with 3+ years of experience in Data Analytics and Data Science.",

    author: "Godsgift Braimah",
    siteUrl: "https://brymahh.github.io",
    applicationName: "Godsgift's Portofolio",

    keywords: [
		"Godsgift",
		"Godsgift Braimah",
		"Data Scientist",
		"Data Analyst",
		"Data Science",
		"artificial intelligence",
		"AI less complicated",
		"AI for kids",
		"Machine Learning",
	],

    openGraph: {
		type: "website",
		url: "https://brymahh.github.io",
		title: "Godsgift Braimah | Portofolio",
		site_name: "Godsgift Braimah | Portofolio",
		description: "Data Professional Portfolio for Godsgift Braimah.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Godsgift Braimah | Portofolio",
			},
		],
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
