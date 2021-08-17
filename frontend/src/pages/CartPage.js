import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
	const { cart, loading, cartError } = useCartContext();
	if (loading || cartError) {
		return (
			<Wrapper className="page-100">
				<div className="empty">
					{cartError ? (
						<h2>Opps, an error occured. Try Again!</h2>
					) : loading ? (
						<h2>Loading...</h2>
					) : ""
					}
					<Link to="/products" className="btn">
						Shop
					</Link>
				</div>
			</Wrapper>
		);
	}
	if (cart.length === 0) {
		return (
			<Wrapper className="page-100">
				<div className="empty">
					<h2>Your cart is empty</h2>
					<Link to="/products" className="btn">
						Shop
					</Link>
				</div>
			</Wrapper>
		);
	}
	return (
		<main>
			<PageHero title="cart" />
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

export default CartPage;
