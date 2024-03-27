import ContentGroup from "@/app/tailwind/components/content-group"

const SkillList = ({ items }: { items: string[] }) => {
	return (
		<div className="mt-2 flex flex-wrap gap-2 my-4">
			{items.map((item) => (
				<span
					key={item}
					className="bg-gray-100 border border-gray-200 text-gray-500 px-2 py-1 text-xs rounded"
				>
					{item}
				</span>
			))}
		</div>
	)
}

export default function SkillsetPage() {
	return (
		<>
			<dl className="sm:space-y-6 space-y-10">
				<ContentGroup label="2008" title="Adobe Flash">
					<p>
						My introduction to programming came during high school when my
						friend showed me how you could draw a red circle, write some code
						and make it bounce up and down in Flash. We would go on to spend our
						mid-teens getting ripped off, designing and coding a range of games
						for various publishers and{" "}
						<a
							href="https://www.newgrounds.com/portal/view/571353"
							target="_blank"
						>
							ourselves
						</a>
						.
					</p>
					<SkillList items={["ActionScript 2.0", "	ActionScript 3.0"]} />
				</ContentGroup>
				<ContentGroup label="2011" title="Discovering Web Development">
					<p>
						Despite becoming familiar with creating ridiculous 2D adventures,
						the concept of building a webpage was still pretty alien to me by
						the time I started college. Just like the red bouncing circle, a
						tutor showed me how you could write a few lines of code, open the
						file in your browser and see a webpage. No software, no bundling,
						just notepad and saving as *.html.
					</p>
					<p>
						This would kick start a summer of replicating various websites, over
						and over, until I became quite good and turning a design into code
						and even working on my own designs.
					</p>
					<SkillList items={["HTML", "CSS", "JavaScript", "jQuery"]} />
				</ContentGroup>
				<ContentGroup label="2015" title="Frameworks & Bootstrap">
					<p>
						I could only go on using HTML, CSS and JavaScript exclusively for so
						long. The benefit of taking on short term freelance projects meant I
						could experiment with different languages and frameworks; the main
						draw back being the client was expecting something functional in
						exchange for actual money, so I had to learn on the fly and not
						deliver something half baked. Frameworks really super charged my
						development output.
					</p>
					<p>
						During this time I began using Bootstrap - religiously. Moving away
						from my frankenstein base stylesheet to something way more
						extensive, well thought out and maintained was brilliant.
					</p>
					<SkillList
						items={[
							"Bootstrap",
							"Laravel",
							"React",
							"React Native",
							"Vue.js",
							"Node.js",
							"MySQL",
						]}
					/>
				</ContentGroup>
				<ContentGroup label="2020" title="Tailwind CSS">
					<p>
						Trawling Twitter one day, I saw a Tweet about this book called
						Refactoring UI. Skimming the pages, a lot of the lessons it was
						conveying about the importance of space, colors and typography made
						sense. I could instantly relate it to what I felt I had learned in
						my years replicating websites and developing my own “palette”.
					</p>
					<p>
						I then discovered Tailwind CSS and began hacking away at building
						out some designs with it. Funnily enough, it turned out I was
						shoe-horning Bootstrap to do a similar job by leveraging a lot of
						their utility classes. It highlighted a number of things I didn’t
						even know I didn’t particularly like about Bootstrap and I couldn’t
						go back.
					</p>
					<SkillList items={["Tailwind CSS"]} />
				</ContentGroup>
				<ContentGroup label="2021" title="Figma">
					<p>
						Much like moving from Bootstrap to Tailwind CSS or from Vanilla JS
						to React, the jump from Photoshop to Figma really had me wondering
						how I spent so long designing everything in Photoshop to begin with.
						Figma is quick, optimised for designing UI and makes it easy to
						collaborate.
					</p>
					<SkillList items={["Figma"]} />
				</ContentGroup>
				<ContentGroup label="2021" title="Next.js & Vercel">
					<p>
						One thing I dislike about development is battling with tooling to
						get a single pixel rendering on screen. Next.js cracked this for me.
					</p>
					<p>
						Whether it’s a late night harebrained idea or the beginning of a new
						project, there’s no initial gulp of having to jump through a tedious
						set of hoops before I can be working on actual output.
					</p>
					<p>
						Discovering Vercel around the same time allowed me to move away from
						my Digital Ocean droplets into something tailor made for the shiny
						new framework I was using.
					</p>
					<SkillList items={["Next.js", "Vercel"]} />
				</ContentGroup>
				<ContentGroup label="2022" title="TypeScript & DevOps">
					<p>
						Working primarily freelance up until 2021, and naturally being the
						sole contributor to any given codebase, I didn't give much thought
						to DevOps. Sure - I'd leave myself helpful comments, abstract my
						code nicely and use Git to house my code... but that was largely it.
					</p>
					<p>
						Once I began working as part of a team more regularly, the benefits
						of type safety, linting and DevOps as a practice didn't take long to
						make themselves obvious. Fairly quickly I began to employ different
						tooling to help reduce bugs, avoid regression, and make projects
						easier to collaborate on.
					</p>
					<SkillList
						items={[
							"TypeScript",
							"Jest",
							"Playwright",
							"Cypress",
							"Github Actions",
							"Storybook",
							"ESLint",
						]}
					/>
				</ContentGroup>
			</dl>
		</>
	)
}
