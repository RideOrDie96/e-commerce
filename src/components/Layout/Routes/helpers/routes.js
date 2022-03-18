import HomePage from '../../../../pages/Home/HomePage';

export const routes = [
  { path: '/home', exact: true, component: (props) => <HomePage {...props} /> },
];
