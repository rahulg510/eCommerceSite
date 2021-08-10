import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
	return (
		<main>
			<PageHero title="Checkout" />
			<Wrapper className="page-100">
				<h2>You have reached the checkout page</h2>
				<Link to="/cart" className="btn">
					Go back to Cart
				</Link>
			</Wrapper>
		</main>
	);
};
const Wrapper = styled.div`
	text-align: center;
`;
export default CheckoutPage;
