import {
	ADD_TO_CART,
	CLEAR_CART,
	COUNT_CART_TOTALS,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
	if (action.type === ADD_TO_CART) {
		const {
			product: {
				id,
				stock,
				price,
				name,
				images: [image],
			},
			amt,
			color,
		} = action.payload;
		const tempItem = state.cart.find((i) => i.id === id + color);
		if (tempItem) {
			let currAmount = tempItem.amount;
			if (currAmount + amt > tempItem.max) {
				tempItem.amount = tempItem.max;
			} else {
				tempItem.amount += amt;
			}
			return {
				...state,
				cart: [...state.cart],
			};
		} else {
			const newItem = {
				id: id + color,
				name,
				color,
				amount: amt,
				image: image.url,
				price,
				max: stock,
			};
			return {
				...state,
				cart: [...state.cart, newItem],
			};
		}
	}

	if (action.type === REMOVE_CART_ITEM) {
		const id = action.payload;
		const tCart = state.cart.filter((item) => item.id !== id);
		return {
			...state,
			cart: tCart,
		};
	}

	if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
		const { id, value } = action.payload;
		let item = state.cart.find(item=>item.id === id);
		if(item){
			item.amount = value;
		}
		return {
			...state, cart:[...state.cart]
		}
	}

	if(action.type === COUNT_CART_TOTALS){
		let total = 0;
		let items = 0;
		state.cart.forEach(item=>{
			total += item.amount * item.price;
			items += item.amount;
		})
		total += state.shippingFee;
		return {
			...state, totalItems: items, totalAmount:total
		}

	}

	if(action.type === CLEAR_CART){
		return {
			...state, cart:[]
		}
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
