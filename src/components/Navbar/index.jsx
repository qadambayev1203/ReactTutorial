import React from 'react'
import { Container, Link } from './style';
import { Outlet } from 'react-router-dom';
import { navbar } from '../../utils/navbar';

export const Navbar = () => {
  return (
    <>
      <Container>

        {
          navbar.map((item) => {
            return (
              <Link style={({ isActive }) => { return { color: isActive ? 'red' : 'white' } }} to={item.path}>{item.title}</Link>
            )
          })
        }
      </Container>
      <Outlet />
    </>
  )
}
export default Navbar;