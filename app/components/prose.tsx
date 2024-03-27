export default function Prose({ children }: { children: React.ReactNode }) {
	return (
		<div className="prose prose-sm prose-slate prose-p:text-gray-600 prose-p:leading-6 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-headings:font-medium prose-h1:text-lg prose-h2:text-base prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-sm prose-h3:mb-4 prose-h3:mt-10">
			{children}
		</div>
	)
}
