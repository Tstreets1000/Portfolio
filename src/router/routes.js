import About from '../pages/AboutPage';
import Contact from '../pages/ContactPage';
import Home from '../pages/HomePage';
import Project from '../pages/ProjectPage';


const routes = [
	{
		Component: About,
		key: 'About',
		path: './about'
	},
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
	{
		Component: Project,
		key: 'Project',
		path: '/project'
	}
];

export default routes;
