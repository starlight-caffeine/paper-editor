import { useLocation } from "preact-iso";

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav className="flex flex-row gap-2">
				<a href="/" className={url == "/" ? "active" : ""}>
					Home
				</a>
				<a href="/project/1234/research" className={url == "/" ? "active" : ""}>
					Research
				</a>
				<a href="/project/1234/edit" className={url == "/" ? "active" : ""}>
					Write
				</a>
				<a href="/project/1234/proofread" className={url == "/" ? "active" : ""}>
					Proofread
				</a>

				<a href="/project/1234/deliver" className={url == "/" ? "active" : ""}>
					Deliver
				</a>
			</nav>
		</header>
	);
}
