import React from 'react';
import styles from './HomePage.module.scss';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import NavBar from	'../../components/NavBar/NavBar';

export default function Homescreen() {
	return (
		<main className={styles.Home}>
			<NavBar />	
			<SocialMedia />
		</main>
	);
}
