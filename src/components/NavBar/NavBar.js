import styles from './NavBar.module.scss';

export default function NavBar() {
	return (
		<main className={styles.NavBar}>
			<section className={styles.King}>
				<img
					src="https://t4.ftcdn.net/jpg/05/81/63/95/360_F_581639565_fU0bn8qxi1vWnTMOj1QermBHvF7QVwts.jpg"
					alt="Gold Chess King" width="100px" height="100px"
				></img>
			</section>
			<section className={styles.HomeButtons}>
				<button >Contact Me</button>
				<button >Resume</button>
				<button >Projects</button>
			</section>
			<section className={styles.LogoStatement}>
			<h1 >
				Hi! Im Terrance Hill A Software Engineer changing the world one line of
				code at a time!
			</h1>
			</section>
			<section className={styles.Icons}>
				<a
					href="https://github.com/Tstreets1000?tab=projects"
					className="fa fa-github"
				></a>
				<a
					href="https://twitter.com/Tstreets10001"
					className="fa fa-twitter"
				></a>
				<a
					href="https://www.linkedin.com/in/terrancejdhill19283737/"
					className="fa fa-youtube"
				></a>
			</section>
		</main>
	);
}
