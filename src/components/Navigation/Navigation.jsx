// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
// import css from './Navigation.module.css';
import { Link } from 'components/Navigation/Navigation.styled'
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link  to="/usercontacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};