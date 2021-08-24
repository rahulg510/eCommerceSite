import React from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import {
	CardElement,
	useStripe,
	Elements,
	useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { useHistory } from "react-router-dom";
// import {useUser} from "../context/user_context"

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const CheckoutForm = () => {
	return <h2>Hello from stripe checkout</h2>;
};

const StripeCheckout = () => {
	return (
		<Wrapper>
			<Elements stripe={promise}>
				<CheckoutForm />
			</Elements>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	section {
		background: #ffffff;
		display: flex;
		flex-direction: column;
		width: 400px;
		height: 112px;
		border-radius: 6px;
		justify-content: space-between;
	}
	.product {
		display: flex;
	}
	.description {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	p {
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: -0.154px;
		color: #242d60;
		height: 100%;
		width: 100%;
		padding: 0 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
	img {
		border-radius: 6px;
		margin: 10px;
		width: 54px;
		height: 57px;
	}
	h3,
	h5 {
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: -0.154px;
		color: #242d60;
		margin: 0;
	}
	h5 {
		opacity: 0.5;
	}
	#checkout-button {
		height: 36px;
		background: #556cd6;
		color: white;
		width: 100%;
		font-size: 14px;
		border: 0;
		font-weight: 500;
		cursor: pointer;
		letter-spacing: 0.6;
		border-radius: 0 0 6px 6px;
		transition: all 0.2s ease;
		box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
	}
	#checkout-button:hover {
		opacity: 0.8;
	}
`;

export default StripeCheckout;
