import React from 'react';
import styles from './HomePage.module.scss';
import NavBar from	'../../components/NavBar/NavBar';
import Footer from	'../../components/Footer/Footer';


export default function Homescreen() {
	return (
		<main className={styles.Home}>
			<NavBar />	
			



			<Footer />
		</main>
	);
}
