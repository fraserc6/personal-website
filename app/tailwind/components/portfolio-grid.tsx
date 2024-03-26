"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const PortfolioItem = ({ image, alt }: { image: string; alt: string }) => {
	const [isOpen, setOpen] = useState(false)
	function onBodyScroll() {
		setOpen(false)
	}

	useEffect(() => {
		window.addEventListener("scroll", onBodyScroll, true)
		return () => {
			window.removeEventListener("scroll", onBodyScroll)
		}
	}, [])

	return (
		<motion.div
			initial={false}
			animate={
				isOpen
					? {
							zIndex: 10,
							transitionEnd: {
								zIndex: 20,
							},
							transitionDelay: "1",
					  }
					: {
							zIndex: 20,
							transitionEnd: {
								zIndex: 10,
							},
							transitionDelay: "1",
					  }
			}
			className={`w-full shrink-0 aspect-video border bg-gray-50 rounded-lg relative ${
				isOpen
					? "cursor-zoom-out"
					: "cursor-zoom-in hover:opacity-75 duration-150"
			}`}
			onClick={() => setOpen(!isOpen)}
		>
			<motion.div
				initial={false}
				animate={{ opacity: isOpen ? 1 : 0 }}
				transition={{
					type: "spring",
					duration: 0.5,
				}}
				className={`bg-gray-50/75 inset-0 fixed pointer-events-none`}
				onClick={() => setOpen(false)}
			/>
			<motion.div
				initial={false}
				transition={{
					type: "spring",
					duration: 0.5,
				}}
				layout={true}
				className={`${
					isOpen
						? "fixed m-auto inset-6 max-w-6xl"
						: "w-full rounded-lg absolute inset-0"
				} aspect-video`}
			>
				<Image
					src={image}
					alt={alt}
					fill
					className={`${
						isOpen ? "rounded-2xl shadow-lg shadow-gray-100" : "rounded-lg"
					}`}
				/>
			</motion.div>
		</motion.div>
	)
}

export default function PortfolioGrid({ items }: { items: string[] }) {
	return (
		<div className="grid grid-cols-3 gap-3 items-start mb-3 mt-6 not-prose">
			{items.map((item) => (
				<PortfolioItem key={item} image={`/portfolio/${item}`} alt="" />
			))}
		</div>
	)
}
