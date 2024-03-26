import ContentGroup from "@/app/tailwind/components/content-group"

export default function SkillsetPage() {
	return (
		<>
			<dl className="space-y-6">
				<ContentGroup
					label="2012 - 2016"
					prefix="MEng Computer Science w/ Software Engineering"
					title="University of Birmingham"
				/>
				<ContentGroup
					label="2010 - 2012"
					prefix="BTEC Level 3 Extended Diploma"
					title="Stourbridge College"
				/>
				<ContentGroup
					label="2005 - 2010"
					prefix="8 GCSEs"
					title="	Windsor High School"
				/>
			</dl>
		</>
	)
}
