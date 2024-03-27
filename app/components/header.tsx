import { MapPinIcon, UserIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import Link from "next/link"

const MetaBadge = ({
	label,
	...props
}: {
	label: string
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => {
	return (
		<div className="flex gap-1.5 items-center">
			<div className="w-4 h-4 rounded flex items-center justify-center bg-gray-600 text-white">
				<props.icon className="w-3 h-3" />
			</div>
			<div>
				<span>{label}</span>
			</div>
		</div>
	)
}

const links = [
	{
		label: "Email",
		href: "mailto:hello@frasercook.co",
	},
	{
		label: "Twitter",
		href: "https://twitter.com/fraser_cook",
		external: true,
	},
	{
		label: "Dribbble",
		href: "https://dribbble.com/fraser_cook",
		external: true,
	},
]

export default function Header({
	role = "Frontend & Design at Covie",
	showLinks = false,
}: {
	role?: string
	showLinks?: boolean
}) {
	return (
		<>
			<header className="flex flex-col sm:flex-row gap-6 sm:items-center">
				<Link href="/" className="relative w-24 h-24 shrink-0">
					<Image
						src="/headshot.jpeg"
						alt="Fraser Cook headshot"
						className="rounded-full shadow-lg shadow-gray-200"
						fill
					/>
				</Link>
				<div className="flex-1">
					<h1 className="font-medium text-lg">Fraser Cook</h1>
					<div className="mt-2 text-gray-500 space-y-1 text-sm">
						<MetaBadge label={role} icon={UserIcon} />
						<MetaBadge
							label={`Birmingham, United Kingdom (${new Date().toLocaleString(
								"en-US",
								{
									hour: "2-digit",
									minute: "2-digit",
									hour12: false,
									timeZone: "Europe/London",
								}
							)})`}
							icon={MapPinIcon}
						/>
					</div>
					{showLinks && (
						<div className="mt-3 flex gap-3">
							{links.map((link) => (
								<Link
									href={link.href}
									target={link.external ? "_blank" : "_self"}
									className="text-sm text-gray-600 underline duration-150 hover:text-gray-600"
								>
									{link.label}
								</Link>
							))}
						</div>
					)}
				</div>
			</header>
		</>
	)
}
