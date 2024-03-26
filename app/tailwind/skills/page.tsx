import ContentGroup from "@/app/tailwind/components/content-group"

export default function SkillsPage() {
	return (
		<dl className="space-y-6">
			<ContentGroup label="Frontend">
				<ul className="my-0">
					<li>Experienced in building high quality user interfaces.</li>
					<li>Proficient in building versatile component libraries.</li>
					<li>Comfortable integrating APIs and external services.</li>
					<li>Passionate about detail and writing clean, efficient code.</li>
				</ul>
			</ContentGroup>
			<ContentGroup label="Design">
				<ul className="my-0">
					<li>Able to produce high fidelity, interactive designs.</li>
					<li>Adept at establishing and expanding on design systems.</li>
					<li>Focused on consistency and scalability.</li>
					<li>
						Confident translating designs into code accurately and with care.
					</li>
				</ul>
			</ContentGroup>
			<ContentGroup label="Backend">
				<ul className="my-0">
					<li>Experienced in developing RESTful API&rsquo;s.</li>
					<li>Comfortable designing databases.</li>
					<li>Familiar with various authentication patterns.</li>
					<li>Adaptable to a range of languages &amp; frameworks.</li>
				</ul>
			</ContentGroup>
			<ContentGroup label="DevOps">
				<ul className="my-0">
					<li>
						Accomplished at enforcing good coding practices via formatting and
						linting.
					</li>
					<li>Knowledge of CI pipelines and automation.</li>
					<li>
						Experienced with a variety of platforms (Vercel, Supabase, Laravel
						Forge, AWS, Digital Ocean etc).
					</li>
					<li>Able to plan and write effective tests.</li>
				</ul>
			</ContentGroup>
		</dl>
	)
}
