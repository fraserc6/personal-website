"use client"

import { ArrowDownIcon, ArrowUpIcon, MoonIcon } from "@heroicons/react/16/solid"
import { MoonIcon as MoonIconOutline } from "@heroicons/react/24/outline"
import { useState } from "react"

const options = [
	"mix-blend-normal",
	"mix-blend-multiply",
	"mix-blend-screen",
	"mix-blend-overlay",
	"mix-blend-darken",
	"mix-blend-lighten",
	"mix-blend-color-dodge",
	"mix-blend-color-burn",
	"mix-blend-hard-light",
	"mix-blend-soft-light",
	"mix-blend-difference",
	"mix-blend-exclusion",
	"mix-blend-hue",
	"mix-blend-saturation",
	"mix-blend-color",
	"mix-blend-luminosity",
	"mix-blend-plus-lighter",
]

export default function MixBlendExample() {
	const [lightMode, setLightMode] = useState(true)
	const [selectedMode, setSelectedMode] = useState(options[0])
	return (
		<div>
			<div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 gap-4 grid sm:grid-cols-2">
				<div className="flex flex-col sm:px-2">
					<div className="flex-1 flex justify-center items-center">
						<div className="w-full">
							<div className="flex justify-between mb-1.5 items-end">
								<div>
									<label className="block text-sm">Mix blend mode</label>
								</div>
								<div className="flex gap-1.5 mt-2 justify-end">
									<div>
										<button
											type="button"
											className="border border-gray-200 bg-white aspect-square p-1 rounded-md"
											onClick={() => {
												const currentIndex = options.findIndex(
													(option) => option == selectedMode
												)
												if (currentIndex > 0) {
													setSelectedMode(options[currentIndex - 1])
												} else {
													setSelectedMode(options[options.length - 1])
												}
											}}
										>
											<ArrowUpIcon className="w-3 h-3" />
										</button>
									</div>
									<div>
										<button
											type="button"
											className="border border-gray-200 bg-white aspect-square p-1 rounded-md"
											onClick={() => {
												const currentIndex = options.findIndex(
													(option) => option == selectedMode
												)
												if (currentIndex < options.length - 1) {
													setSelectedMode(options[currentIndex + 1])
												} else {
													setSelectedMode(options[0])
												}
											}}
										>
											<ArrowDownIcon className="w-3 h-3" />
										</button>
									</div>
								</div>
							</div>
							<select
								value={selectedMode}
								onChange={(e) => setSelectedMode(e.target.value)}
								className="border-gray-200 text-sm rounded-md w-full capitalize"
							>
								{options.map((option) => (
									<option key={option} value={option}>
										{option.replace("mix-blend-", "").replace("-", " ")}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div
					className={`relative rounded-2xl p-4 flex flex-col border border-black/5 justify-center items-center ${
						lightMode ? "bg-white" : "bg-zinc-900"
					}`}
				>
					<div className="flex-1 flex justify-center -space-x-14 py-12">
						<div
							className={`${selectedMode} bg-blue-400 w-24 aspect-square rounded-full`}
						></div>
						<div
							className={`${selectedMode} bg-pink-400 w-24 aspect-square rounded-full`}
						></div>
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
				<p className="text-gray-400 text-xs">Interactive mix blend example</p>
			</div>
		</div>
	)
}
