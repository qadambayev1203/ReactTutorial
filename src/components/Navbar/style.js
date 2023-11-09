import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
height : 55px;
background : black;
justify-content : space-evenly;
display : flex;
align-items : center;
`

export const Link = styled(NavLink)`
color : white;
font-weight : 600;
font-size : 24px;
text-decoration : none;
`