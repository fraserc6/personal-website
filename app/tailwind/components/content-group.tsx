import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

export default function ContentGroup({
	label,
	title,
	href,
	prefix,
	children,
}: {
	label: string
	title?: string
	prefix?: string
	href?: string
	children?: React.ReactNode
}) {
	return (
		<div className="sm:grid sm:grid-cols-12 sm:gap-4">
			<dt className="text-sm text-gray-400 not-prose sm:col-span-3">
				<div className="sm:sticky sm:top-0 sm:pt-14 sm:-mt-14">{label}</div>
			</dt>
			<dd className="mt-1 pl-0 text-sm leading-6 text-gray-800 sm:col-span-9 sm:mt-0 space-y-3">
				{(prefix || title) && (
					<div className="not-prose ">
						{prefix && <h4 className="text-gray-500 mb-1 text-sm">{prefix}</h4>}
						{title && (
							<>
								{href ? (
									<Link
										href={href}
										target="_blank"
										className="flex justify-between gap-3"
									>
										<div>
											<h3 className="font-medium text-sm">{title}</h3>
										</div>
										<div>
											<ArrowUpRightIcon className="w-4 h-4" />
										</div>
									</Link>
								) : (
									<h3 className="font-medium text-sm">{title}</h3>
								)}
							</>
						)}
					</div>
				)}
				{children && <div>{children}</div>}
			</dd>
		</div>
	)
}
