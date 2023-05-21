import { Nav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Nav to="/register">
        Register
      </Nav>
      <Nav to="/login">
        Log In
      </Nav>
    </div>
  );
};
