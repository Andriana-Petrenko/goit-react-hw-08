import css from './UserMenu.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper} >
      <p className={css.name_user}>Welcome, {user.name}</p>
          <button className={css.logOut_button} type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu