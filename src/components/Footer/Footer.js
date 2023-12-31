import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<section className={styles.Icons}>
			<a
				href="https://github.com/Tstreets1000?tab=projects"
				className="fa fa-github"
			></a>
			<a href="https://twitter.com/Tstreets10001" className="fa fa-twitter"></a>
			<a
				href="https://www.linkedin.com/in/terrancejdhill19283737/"
				className="fa fa-youtube"
			></a>
		</section>
	);
}
