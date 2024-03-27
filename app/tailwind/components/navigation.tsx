"use client"

import { cva } from "class-variance-authority"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navbarItemClass = cva(
	"text-sm px-5 py-3 border-b-2 -mb-px duration-150",
	{
		variants: {
			state: {
				active: "border-black text-black",
				default:
					"bg-transparent text-gray-500 hover:border-gray-300 border-transparent",
			},
		},
		defaultVariants: {
			state: "default",
		},
	}
)

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

export default function Navigation() {
	const pathname = usePathname()
	const items: NavBarItem[] = [
		{
			label: "Cover",
			href: "/tailwind",
			active: pathname == "/tailwind",
		},
		{
			label: "Experience",
			href: "/tailwind/experience",
			active: pathname == "/tailwind/experience",
		},
		{
			label: "Skills",
			href: "/tailwind/skills",
			active: pathname == "/tailwind/skills",
		},
		{
			label: "Education",
			href: "/tailwind/education",
			active: pathname == "/tailwind/education",
		},
		{
			label: "Journey",
			href: "/tailwind/journey",
			active: pathname == "/tailwind/journey",
		},
	]
	return (
		<div className="mt-6 pb-3 -mb-3 overflow-x-auto overflow-y-hidden">
			<nav className="flex border-b bg-white">
				{items.map((item) => (
					<NavbarItem key={item.label} {...item} />
				))}
			</nav>
		</div>
	)
}
