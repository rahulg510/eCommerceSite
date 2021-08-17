import {
	CART_LOADING,
	COUNT_CART_TOTALS,
	UPDATE_CART,
	CART_ERROR,
} from "../actions";

const cart_reducer = (state, action) => {
	if (action.type === CART_LOADING) {
		let loading = action.payload;
		return {
			...state,
			loading,
		};
	}

	if (action.type === UPDATE_CART) {
		let newCart = action.payload;
		return {
			...state,
			cart: newCart,
		};
	}
	if (action.type === CART_ERROR) {
		let cartError = action.payload;
		return { ...state, cartError };
	}

	if (action.type === COUNT_CART_TOTALS) {
		let total = 0;
		let items = 0;
		state.cart.forEach((item) => {
			total += item.amount * item.price;
			items += item.amount;
		});
		total += state.shippingFee;
		return {
			...state,
			totalItems: items,
			totalAmount: total,
		};
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
