import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import HomePage from '../HomePage/HomePage';
import ProjectPage from '../ProjectPage/ProjectPage';

export default function App() {
 
	return (
		<main>
			<Routes>
				{/* client-side route that renders the component instance if the path matches the url in the address bar */}
				<Route
					path="/home"
					element={<HomePage />}
				/>
				<Route
					path="/about"
					element={<AboutPage />}
				/>
				<Route
					path="/contact"
					element={<ContactPage />}
				/>
				<Route
					path="/project"
					element={<ProjectPage />}
				/>
				{/* redirect to /home if path in address bar hasn't matched a <Route> above */}
				<Route path="/*" element={<Navigate to="/home" />} />
			</Routes>
		</main>
	);
}
