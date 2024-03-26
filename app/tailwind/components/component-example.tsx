"use client"

import { MoonIcon } from "@heroicons/react/16/solid"
import { MoonIcon as MoonIconOutline } from "@heroicons/react/24/outline"
import { cva } from "class-variance-authority"
import { useState } from "react"

const colors = ["black", "white", "blue", "green", "red"] as const
const sizes = ["xs", "sm", "md", "lg", "xl"] as const
const radii = [
	"none",
	"sm",
	"base",
	"md",
	"lg",
	"xl",
	"2xl",
	"3xl",
	"full",
] as const

type Color = (typeof colors)[number]
type Size = (typeof sizes)[number]
type Radius = (typeof radii)[number]

const buttonClass = cva("font-medium shadow", {
	variants: {
		color: {
			black: "bg-black hover:bg-gray-800 text-white",
			white:
				"bg-white hover:bg-gray-100 text-gray-800 ring-1 ring-inset ring-gray-300",
			blue: "bg-blue-600 hover:bg-blue-800 text-white",
			green: "bg-green-600 hover:bg-green-800 text-white",
			red: "bg-red-600 hover:bg-red-800 text-white",
		},
		radius: {
			none: "",
			base: "rounded",
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			xl: "rounded-xl",
			"2xl": "rounded-2xl",
			"3xl": "rounded-3xl",
			full: "rounded-full",
		},
		size: {
			xs: "text-xs px-2 py-1",
			sm: "text-sm px-2 py-1",
			md: "px-2.5 py-1.5 text-sm",
			lg: "px-3 py-2 text-sm",
			xl: "px-3.5 py-2.5 text-sm",
		},
	},
})

const colorPickerClass = cva("w-6 aspect-square shrink-0 rounded-full border", {
	variants: {
		state: {
			default: "",
			selected: "ring-2 ring-blue-600 ring-offset-1",
		},
		color: {
			black: "bg-black",
			white: "bg-white",
			blue: "bg-blue-600",
			green: "bg-green-600",
			red: "bg-red-600",
		},
	},
	defaultVariants: {
		state: "default",
		color: "black",
	},
})

export default function ComponentExample() {
	const [lightMode, setLightMode] = useState(true)
	const [selectedColor, setColor] = useState<Color>(colors[0])
	const [selectedSize, setSize] = useState<Size>(sizes[0])
	const [selectedRadius, setRadius] = useState<Radius>(radii[0])
	return (
		<div>
			<div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 gap-4 grid sm:grid-cols-2">
				<div className="flex flex-col sm:px-2">
					<div className="flex-1 flex justify-center items-center">
						<div className="w-full space-y-4">
							<div>
								<label className="block mb-2 text-sm">Color</label>
								<div className="flex gap-2">
									{colors.map((color) => (
										<button
											type="button"
											onClick={() => setColor(color)}
											className={colorPickerClass({
												color,
												state: selectedColor == color ? "selected" : "default",
											})}
										/>
									))}
								</div>
							</div>
							<div>
								<div className="flex justify-between">
									<div>
										<label className="block text-sm">Size</label>
									</div>
									<div>
										<span className="text-sm text-gray-400">
											{selectedSize}
										</span>
									</div>
								</div>
								<input
									type="range"
									min="0"
									max={sizes.length - 1}
									step="1"
									className="cursor-pointer w-full appearance-none bg-zinc-200 h-1.5 rounded-full"
									value={sizes.findIndex((size) => size == selectedSize)}
									onChange={(e) => setSize(sizes[parseInt(e.target.value)])}
								/>
							</div>
							<div>
								<div className="flex justify-between">
									<div>
										<label className="block text-sm">Radius</label>
									</div>
									<div>
										<span className="text-sm text-gray-400">
											{selectedRadius}
										</span>
									</div>
								</div>
								<input
									type="range"
									min="0"
									max={radii.length - 1}
									step="1"
									className="cursor-pointer w-full appearance-none bg-zinc-200 h-1.5 rounded-full"
									value={radii.findIndex((radius) => radius == selectedRadius)}
									onChange={(e) => setRadius(radii[parseInt(e.target.value)])}
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`relative rounded-2xl p-4 flex flex-col border border-black/5 justify-center items-center ${
						lightMode ? "bg-white" : "bg-zinc-900"
					}`}
				>
					<div className="flex-1 flex justify-center items-center py-10">
						<button
							type="button"
							className={buttonClass({
								size: selectedSize,
								radius: selectedRadius,
								color: selectedColor,
							})}
						>
							Get started
						</button>
					</div>
					<div className="absolute bottom-3 right-3">
						<button
							type="button"
							className="border border-gray-200 bg-white aspect-square p-1 rounded-md"
							onClick={() => setLightMode(!lightMode)}
						>
							{lightMode ? (
								<MoonIcon className="w-3 h-3" />
							) : (
								<MoonIconOutline className="w-3 h-3" />
							)}
						</button>
					</div>
				</div>
			</div>
			<div className="text-center py-3">
				<p className="text-gray-400 text-xs">
					Basic customisable button example
				</p>
			</div>
		</div>
	)
}
