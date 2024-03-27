import Prose from "@/app/components/prose"
import Header from "../components/header"
import Navigation from "./components/navigation"

export const metadata = {
	title: "Fraser Cook | Tailwind Application",
	description: "My application to the Design Engineer role at Tailwind Labs",
}

export default function PageLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between px-6 py-12">
			<div className="max-w-xl mx-auto w-full">
				<Header role="Design Engineer Application, Tailwind Labs" />
				<div className="sticky top-0 z-20">
					<Navigation />
				</div>
				<div className="mt-8">
					<Prose>{children}</Prose>
				</div>
			</div>
		</main>
	)
}
