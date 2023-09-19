import { useState } from 'react';
import styles from './ContactPage.module.scss';

export default function Contact(props) {
	return (
		<div className="ContactPage">
			<h1>This is the {props.page} page</h1>
			<div>
				<p>Terrance Hill</p>
				<p>912.744.6648</p>
				<p>terrance.jdhill@yahoo.com</p>
			</div>
		</div>
	);
}
