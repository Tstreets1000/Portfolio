import React from 'react';
import Logo from '../../components/Logo/Logo';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import styles from './HomePage.module.scss';

export default function Homescreen() {
	return (
		<main>
			<div className={styles.Home}>
				<Logo />
				<p className={styles.LogoStatement}>
					Hi! Im Terrance Hill A Software Engineer changing the world one line
					of code at a time!
				</p>
			</div>
			<div className={styles.HomeButtons}>
				<button>Contact Me</button>
				<button>Resume</button>
				<button>Projects</button>
			</div>
			<SocialMedia />
		</main>
	);
}
