import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
	return (
		<div className="flex py-12 px-8">
			<Head>
				<title>Fraser Cook - Software Developer / UI Designer</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<article className="prose mx-auto">
				<h1>Hey, I'm Fraser.</h1>
				<p>
					I'm a software developer based in Birmingham, UK.
				</p>
				<p>
					But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
					springing up around the country.
				</p>
				<div className="flex gap-4 text-2xl mt-6">
					<a href="https://twitter.com/fraser_cook" target="_BLANK"><FontAwesomeIcon icon={faTwitter} /></a>
					<a href="https://github.com/fraserc6" target="_BLANK"><FontAwesomeIcon icon={faGithub} /></a>
					<a href="https://www.linkedin.com/in/fraser-cook-985b0b86/" target="_BLANK"><FontAwesomeIcon icon={faLinkedin} /></a>
				</div>
			</article>
		</div>
	)
}
