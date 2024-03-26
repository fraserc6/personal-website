import ContentGroup from "@/app/tailwind/components/content-group"
import PortfolioGrid from "../components/portfolio-grid"

const portfolio = {
	covie: [
		"covie-portfolio-1.png",
		"covie-portfolio-2.png",
		"covie-portfolio-3.png",
		"covie-portfolio-4.png",
		"covie-portfolio-5.png",
		"covie-portfolio-6.png",
	],
	nhs: ["nhs-portfolio-1.png", "nhs-portfolio-2.png", "nhs-portfolio-3.png"],
	tnl: ["tnl-portfolio-1.png", "tnl-portfolio-2.png", "tnl-portfolio-3.png"],
}

export default function SkillsetPage() {
	return (
		<>
			<h2 className="mb-6">Work Experience</h2>
			<dl className="space-y-6">
				<ContentGroup
					label="2021 - present"
					title="Lead Frontend Developer & Designer at Covie"
				>
					<p>
						Covie was founded to streamline the access of insurance data. Users
						have access to various API's and tools that allow their own
						customers to login and connect their insurance data which is
						accessible to them via webhooks or the user dashboard.
					</p>
					<p>
						Being the lead frontend engineer at Covie since its inception, my
						role is to establish the core design system and build anything the
						users interact with, such as:
					</p>
					<ul>
						<li>Marketing sites</li>
						<li>Dashboards</li>
						<li>Documentation</li>
						<li>Policy access tools</li>
					</ul>
					<p>
						Being the primary contributor to the frontend codebase, I am also
						responsible for:
					</p>
					<ul>
						<li>
							Setting up and maintaining various CI pipelines and automation to
							reduce regression, potential bugs and promote best practices.
						</li>
						<li>Translating specifications into actionable tasks.</li>
						<li>Working closely with the backend team to steer API design.</li>
					</ul>
					<p>
						Covie has evolved over time to encompass a series of niche products,
						to include OneFix; a membership for restaurant owners offering an
						exclusive concierge service, and Airjuster; a platform to help
						insurers process claims efficiently.
					</p>
					{/* <ul>
						<li>Established the core design system and component library.</li>
						<li>
							Lead on the design and frontend code for applications central to
							the product including the marketing website, customer dashboard
							and policy access tooling.
						</li>
						<li>
							Established{" "}
							<a
								href="https://developer.covie.com/docs/link-access"
								target="_blank"
							>
								documentation for the JS SDK
							</a>
							.
						</li>
						<li>
							Implemented automated testing and wider CI / deployment pipeline.
						</li>
						<li>
							Work product specifications into functional requirements and
							actionable tasks.{" "}
						</li>
					</ul> */}
					<PortfolioGrid items={portfolio.covie} />
				</ContentGroup>
				<br />
				<ContentGroup
					label="2021 - 2022"
					title="Frontend & Design at NHSX AI Lab (National COVID-19 Chest Image Database)"
				>
					<p>
						The NCCID was set up in response to COVID-19 in order to establish a
						national database of various medical imagery in order to increase
						understanding of the virus and interface with technology to improve
						response and care.
					</p>
					<p>
						I joined the team to help communicate the project with key
						stakeholders and the wider public, improve on the existing database
						architecture and build interfaces required by the core research and
						development team:
					</p>
					<ul>
						<li>
							Rebuilt the{" "}
							<a
								href="https://nhsx.github.io/covid-chest-imaging-database/"
								target="_blank"
							>
								NCCID website
							</a>{" "}
							to showcase the project&rsquo;s objectives, technical
							documentation and contextual information.
						</li>
						<li>
							Developed an{" "}
							<a href="https://nhsx.github.io/ai-dictionary" target="_blank">
								AI Dictionary
							</a>
							, allowing users to quickly access definitions of common AI terms
							and their context within health and care.
						</li>
						<li>
							Built{" "}
							<a
								href="https://nhsx.github.io/covid-chest-imaging-database/experiments"
								target="_blank"
							>
								a visualiser
							</a>{" "}
							to communicate key AI model metrics such as the operating point
							and model fairness.
						</li>
						<li>
							Built a model card to demonstrate the Chest X-ray Covid Detection
							AI model&rsquo;s effectiveness at predicting the presence of Covid
							from a given X-ray image.
						</li>
						<li>
							Developed a high fidelity prototype in order to explore the
							potential next phase of the project; the focus being a platform
							that allows models to be uploaded and trained against remote,
							anonymised data sets.{" "}
						</li>
					</ul>
					<PortfolioGrid items={portfolio.nhs} />
				</ContentGroup>
				<br />
				<ContentGroup label="2015 - present" title="Founder at TNL Digital">
					<p>
						I founded TNL Digital while at University to deliver high quality
						digital experiences and strategy. The agencies portfolio includes
						multiple national and international companies and brands.
					</p>
					<ul>
						<li>
							Worked with Coeliac UK to develop an{" "}
							<a href="https://isitcoeliacdisease.org.uk/" target="_blank">
								online assessment platform
							</a>{" "}
							to drive awareness and offer medical recommendations. To date it
							has advised over 350,000 users.
						</li>
						<li>
							Built and managed a number of{" "}
							<a href="https://www.refresco.com/en/" target="_blank">
								Refresco's
							</a>{" "}
							core brand websites to include Emerge, Red Rooster and Old
							Jamaica.
						</li>
						<li>
							Migrated a regional auction house&rsquo;s in-person payment
							solution to online payments powered by Stripe, processing
							~&pound;1.9m in its first year.
						</li>
						<li>
							Implemented a bespoke real-time bidding system to provide an
							alternative platform to their existing external solution.
						</li>
						<li>
							Supported the national launch of the{" "}
							<a
								target="_blank"
								href="https://www.birminghammail.co.uk/whats-on/arts-culture-news/staffordshire-hoard-comes-life-new-7934198"
							>
								Staffordshire Hoard exhibition
							</a>{" "}
							at Birmingham Museum &amp; Art Gallery.
						</li>
						<li>
							Designed, built and maintained a large quantity of other projects.
						</li>
					</ul>
					<PortfolioGrid items={portfolio.tnl} />
				</ContentGroup>
			</dl>
			<hr />
			<h2 className="mb-6">Side Projects</h2>
			<dl className="not-prose space-y-6">
				<ContentGroup label="2020" title="Mailbum" href="https://mailbum.io/">
					<p className="text-sm text-gray-500 leading-6">
						Built as a weekend project, Mailbum provides a number of
						customisable, minimalistic email signature templates. It achieved
						2nd spot for Product of the Day on Product Hunt and has been used by
						over 40,000 people to date.{" "}
					</p>
				</ContentGroup>
				<ContentGroup
					label="2021"
					title="Better Cookies"
					href="https://cookies.so"
				>
					<p className="text-sm text-gray-500 leading-6">
						Providing a simple way to add a decent looking cookie banner to your
						website with just a few lines of code.
					</p>
				</ContentGroup>
			</dl>
		</>
	)
}
