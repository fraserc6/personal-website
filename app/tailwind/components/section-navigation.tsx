import { cva } from "class-variance-authority"
import Link from "next/link"

const navbarItemClass = cva("text-sm px-4 py-0.5 rounded-full duration-150", {
	variants: {
		state: {
			active: "bg-black text-white",
			default: "bg-transparent text-gray-500 hover:bg-gray-50",
		},
	},
	defaultVariants: {
		state: "default",
	},
})

type NavBarItem = {
	label: string
	href: string
	active: boolean
}
const NavbarItem = ({ label, active, href }: NavBarItem) => {
	return (
		<Link
			href={href}
			className={navbarItemClass({ state: active ? "active" : "default" })}
		>
			{label}
		</Link>
	)
}

export default function SectionNavigation({ items }: { items: NavBarItem[] }) {
	return (
		<nav className="-mx-2 inline-flex border border-gray-100 bg-white/90 backdrop-blur-sm p-1 rounded-full gap-1 shadow-md shadow-gray-200/50">
			{items.map((item) => (
				<NavbarItem key={item.label} {...item} />
			))}
		</nav>
	)
}
