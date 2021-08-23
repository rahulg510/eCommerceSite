import React from "react";
import styled from "styled-components";
import { CartContent, PageHero } from "../components";

const AccountPage = () => {
	return (
		<main>
			<PageHero title="Account" />
			<Wrapper className="page">
				<CartContent></CartContent>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.main`
	.empty {
		text-align: center;
		h2 {
			margin-bottom: 1rem;
			text-transform: none;
		}
	}
`;

export default AccountPage;
