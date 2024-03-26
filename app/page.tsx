import Header from "./components/header"

export const metadata = {
	title: "Fraser Cook",
	description: "My personal website",
}

export default function HomePage() {
	return (
		<div className="w-screen h-screen flex sm:justify-center sm:items-center p-6">
			<div>
				<Header showLinks />
			</div>
		</div>
	)
}
