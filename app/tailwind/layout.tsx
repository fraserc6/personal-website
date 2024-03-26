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
				<div className="mt-8 prose prose-sm prose-slate prose-p:text-gray-600 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-headings:font-medium prose-h1:text-lg prose-h2:text-base prose-h3:text-sm prose-h3:mb-3">
					{children}
				</div>
			</div>
		</main>
	)
}
