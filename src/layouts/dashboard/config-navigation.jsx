import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Executive',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Utilities',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Zone',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'S & D List',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'User',
    path: '/user',
    icon: icon('ic_lock'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'All Tickets',
    path: '/',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
