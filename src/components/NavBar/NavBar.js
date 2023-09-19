import styles from './NavBar.module.scss';

export default function NavBar() {
	return (
		<main className={styles.NavBar}>
			<section className={styles.King}>
				<img
					src="https://t4.ftcdn.net/jpg/05/81/63/95/360_F_581639565_fU0bn8qxi1vWnTMOj1QermBHvF7QVwts.jpg"
					alt="Gold Chess King" width="200px" height="200px"
				></img>
			</section>
			<section className={styles.LogoStatement}>
			<p className={styles.P1}>
				Hi! Im Terrance Hill 
			</p>
			<p className={styles.P2}>
				A Software Engineer changing the world one line of code at a time!
			</p>
			<p className={styles.P3}>
			Thank you for visiting my portfolio. 
			</p>
			</section>
			<section className={styles.HomeButtons}>
				<button >Contact Me</button>
				<button >Resume</button>
				<button >Projects</button>
			</section>
		</main>
	);
}
