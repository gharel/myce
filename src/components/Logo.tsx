import React from "react";
import styled from "styled-components";

import THEME from "../theme/Theme";

const Logo = styled.a`
	display: inline-block;
	padding: ${THEME.padding.sm};
	font-size: 2rem;
	font-weight: 700;
	color: ${THEME.colors.primary};
	text-decoration: none;
	transition: color ${THEME.transition.duration};
	&:hover {
		color: ${THEME.colors.secondary};
	}
`;

export default () => <Logo href="/">MyCE</Logo>;
