import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { CART_URL } from "../utils/constants";
import {
	CART_LOADING,
	COUNT_CART_TOTALS,
	CART_ERROR,
	UPDATE_CART,
} from "../actions";

const initialState = {
	cart: JSON.parse(localStorage.getItem("localCart")) || [],
	totalItems: 0,
	totalAmount: 0,
	shippingFee: 499,
	cartError: false,
	loading: false,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { isAuthenticated, getAccessTokenSilently } = useAuth0();
	useEffect(() => {
		dispatch({ type: CART_LOADING, payload: true });
		async function load() {
			if (isAuthenticated) await mergeCarts();
			dispatch({ type: CART_LOADING, payload: false });
		}
		load();
	}, [isAuthenticated]);

	useEffect(() => {
		if (!isAuthenticated) {
			localStorage.setItem("localCart", JSON.stringify(state.cart));
		}
		dispatch({ type: COUNT_CART_TOTALS });
		dispatch({ type: CART_ERROR, payload: false });
	}, [state.cart, isAuthenticated]);

	const fetchCart = async () => {
		let cart = [];
		if (isAuthenticated) {
			try {
				let token = await getAccessTokenSilently();
				let res = await axios.get(CART_URL, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				if (res.data && res.data.length > 0) {
					cart = res.data;
				}
			} catch (error) {
				dispatch({ type: CART_ERROR, payload: true });
			}
		}
		return cart;
	};

	const updateCart = async (cart) => {
		let updatedCart = [];
		if (isAuthenticated) {
			try {
				let token = await getAccessTokenSilently();
				let dbCart = await axios.post(
					CART_URL,
					{ cart },
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				updatedCart = dbCart.data;
			} catch (error) {
				dispatch({ type: CART_ERROR, payload: true });
			}
		}
		return updatedCart;
	};

	const mergeCarts = async () => {
		let cart = await fetchCart();
		let storageCart = JSON.parse(localStorage.getItem("localCart"));
		if (!Array.isArray(storageCart) || !storageCart.length > 0) {
			storageCart = [];
		}
		if (storageCart.length > 0) {
			storageCart.forEach((storageProduct) => {
				let cartItem = cart.find(
					(cartProduct) =>
						cartProduct._id === storageProduct._id &&
						cartProduct.color === storageProduct.color
				);
				if (cartItem) {
					cartItem.quantity += storageProduct.quantity;
				} else {
					cart.push(storageProduct);
				}
			});
			cart = await updateCart(cart);
			storageCart = [];
		}
		dispatch({ type: UPDATE_CART, payload: cart });
		localStorage.setItem("localCart", JSON.stringify(storageCart));
	};

	const checkCartAddition = (product, amt, color) => {
		let cart = [...state.cart];
		const {
			_id,
			stock,
			price,
			name,
			images: [image],
		} = product;
		let tempItem = cart.find((i) => i._id === _id && i.color === color);
		if (tempItem) {
			let currAmount = tempItem.amount;
			if (currAmount + amt > tempItem.max) {
				tempItem.amount = tempItem.max;
			} else {
				tempItem.amount += amt;
			}
		} else {
			let newItem = {
				_id,
				name,
				color,
				amount: amt,
				image: image.url,
				price,
				max: stock,
			};
			cart.push(newItem);
		}
		return cart;
	};

	const addToCart = async (product, amt, color) => {
		dispatch({ type: CART_LOADING, payload: true });
		let cart = checkCartAddition(product, amt, color);
		if (isAuthenticated) {
			cart = await updateCart(cart);
		}
		dispatch({ type: UPDATE_CART, payload: cart });
		dispatch({ type: CART_LOADING, payload: false });
	};

	const removeItem = async (id, color) => {
		let cart = [...state.cart];
		cart = cart.filter((item) => {
			if (item._id === id) {
				if (item.color === color) {
					return false;
				}
			}
			return true;
		});
		if (isAuthenticated) {
			cart = await updateCart(cart);
		}
		dispatch({ type: UPDATE_CART, payload: cart });
	};

	const toggleAmount = async (id, color, value) => {
		let cart = [...state.cart];
		let item = cart.find((item) => item._id === id && item.color === color);
		if (item) {
			item.amount = value;
		}
		if (isAuthenticated) {
			cart = await updateCart(cart);
		}
		dispatch({ type: UPDATE_CART, payload: cart });
	};

	const clearCart = async () => {
		let cart = [];
		if (isAuthenticated) {
			cart = await updateCart(cart);
		}
		dispatch({ type: UPDATE_CART, payload: cart });
	};

	return (
		<CartContext.Provider
			value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};
