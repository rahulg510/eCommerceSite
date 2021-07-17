import {
	LOAD_PRODUCTS,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
	if (action.type === LOAD_PRODUCTS) {
		let filteredProducts = action.payload.sort((a, b) => {
			return a.price - b.price;
		});
		let min = 0,
			max = 0;
		if (filteredProducts.length > 0) {
			min = filteredProducts[0].price;
			max = filteredProducts[filteredProducts.length - 1].price;
		}

		return {
			...state,
			allProducts: action.payload,
			filteredProducts: [...filteredProducts],
			minPrice: min,
			maxPrice: max,
		};
	}
	if (action.type === SET_LISTVIEW) {
		return { ...state, gridView: false };
	}
	if (action.type === SET_GRIDVIEW) {
		return { ...state, gridView: true };
	}

	if (action.type === SORT_PRODUCTS) {
		let sort = action.payload;
		let minPrice = 0,
			maxPrice = 0;
		let { filteredProducts } = state;
		if (sort === "name-a") {
			filteredProducts = filteredProducts.sort((a, b) => {
				return a.name <= b.name ? -1 : 1;
			});

			filteredProducts.forEach((product) => {
				if (product.price > maxPrice) {
					maxPrice = product.price;
				}
				if (product.price < minPrice) {
					minPrice = product.price;
				}
			});
		} else if (sort === "name-z") {
			filteredProducts = filteredProducts.sort((a, b) => {
				return a.name <= b.name ? 1 : -1;
			});

			filteredProducts.forEach((product) => {
				if (product.price > maxPrice) {
					maxPrice = product.price;
				}
				if (product.price < minPrice) {
					minPrice = product.price;
				}
			});
		} else if (sort === "price-highest") {
			filteredProducts = filteredProducts.sort((a, b) => {
				return b.price - a.price;
			});
			if (filteredProducts.length > 0) {
				minPrice = filteredProducts[filteredProducts.length - 1].price;
				maxPrice = filteredProducts[0].price;
			}
		} else {
			filteredProducts = filteredProducts.sort((a, b) => {
				return a.price - b.price;
			});
			if (filteredProducts.length > 0) {
				maxPrice = filteredProducts[filteredProducts.length - 1].price;
				minPrice = filteredProducts[0].price;
			}
		}

		return {
			...state,
			filteredProducts: [...filteredProducts],
			filters: { ...state.filters, minPrice, maxPrice},
			sort
		};
	}

	if(action.type === UPDATE_FILTERS){
		if(action.payload){
			const {filterChanged, value} = action.payload;
			return {
				...state, filters: {...state.filters, [filterChanged]:value}
			}
		}
		return state;
	}
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
