import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
import Forum from '@mui/icons-material/Forum';
import Analytics from '@mui/icons-material/Analytics';
import FolderOpen from '@mui/icons-material/FolderOpen';
import BorderColor from '@mui/icons-material/BorderColor';
import Search from '@mui/icons-material/Search';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const NavbarList = [
  {
    icon: InventoryIcon,
    desc: 'Stock Management',
    link:'/stocks',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: ProductionQuantityLimitsIcon,
    desc: 'Order Management',
    link:'/orders',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: LocationCityIcon,
    desc: 'Location Handling',
    link:'/locations',
    secondDesc: 'Message from andi',
    badge: 2,
    subList: [],
  },
  {
    icon: FolderOpen,
    desc: 'Purchase Reqs',
    secondDesc: '',
    link:'/purchaseReqs',
    badge: 0,
    subList: [],
  },
  {
    icon: Analytics,
    desc: 'Analytics',
    link:'/analytics',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: Analytics,
    desc: 'Business Inteligence',
    link:'/bi',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: Person,
    desc: 'Supplier Management',
    secondDesc: '',
    link:'/suppliers',
    badge: 0,
    subList: [],
  }
];

export default NavbarList;
