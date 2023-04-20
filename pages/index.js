import Head from "next/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faGithub,
	faTwitter,
	faLinkedinIn,
	faDribbble,
} from "@fortawesome/free-brands-svg-icons"

export default function Home() {
	return (
		<div className="bg-gray-900 flex flex-grow">
			<Head>
				<title>Fraser Cook - Software Developer / UI Designer</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<div className="flex flex-col flex-grow">
				<div className="flex-none bg-white">
					<img
						src="/gummy-coding-clipped.svg"
						className="mx-auto w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2"
						alt="Illustration by Ouch.pics"
					/>
				</div>
				<div className="flex flex-grow items-end p-5 lg:p-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 w-full">
						<div>
							<a
								href="https://twitter.com/fraser_cook"
								target="_BLANK"
								className="mr-4"
							>
								<FontAwesomeIcon icon={faTwitter} size="2x" color="#FFF" />
							</a>
							<a
								href="https://github.com/fraserc6"
								target="_BLANK"
								className="mr-4"
							>
								<FontAwesomeIcon icon={faGithub} size="2x" color="#FFF" />
							</a>
							<a
								href="https://dribbble.com/fraser_cook"
								target="_BLANK"
								className="mr-4"
							>
								<FontAwesomeIcon icon={faDribbble} size="2x" color="#FFF" />
							</a>
							<h1 className="text-2xl font-bold text-white mt-5">
								Fraser Cook
							</h1>
							<h2 className="text-lg text-gray-500">
								Software Developer / UI Designer
							</h2>
						</div>
						<div className="flex justify-start items-end lg:justify-end text-right pt-5 lg:pt-0">
							<span className="text-gray-500">
								Illustration by{" "}
								<a href="https://icons8.com" target="_BLANK">
									Ouch.pics
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
