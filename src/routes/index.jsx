import { useRoutes } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';
import AboutRoutes from './AboutRoutes';
export default function ThemeRoutes() {
    return useRoutes([HomeRoutes,AboutRoutes]);
}