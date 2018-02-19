import MainLayout from 'components/layouts/MainLayout';
import App from 'components/RootPage';


const Index = {
  path: '/',
  component: PostsContainer
};

export default  {
  component: MainLayout,
  childRoutes: [
    Index
  ]
};
