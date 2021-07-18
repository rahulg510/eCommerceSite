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
			filters: {
				...state.filters,
				minPrice: min,
				maxPrice: max,
				price: max,
			},
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
		let { filteredProducts } = state;
		if (sort === "name-a") {
			filteredProducts = filteredProducts.sort((a, b) => {
				return a.name <= b.name ? -1 : 1;
			});
		} else if (sort === "name-z") {
			filteredProducts = filteredProducts.sort((a, b) => {
				return a.name <= b.name ? 1 : -1;
			});
		} else if (sort === "price-highest") {
			filteredProducts = filteredProducts.sort((a, b) => {
				return b.price - a.price;
			});
		} else {
			filteredProducts = filteredProducts.sort((a, b) => {
				return a.price - b.price;
			});
		}

		return {
			...state,
			filteredProducts: [...filteredProducts],
			filters: { ...state.filters },
			sort,
		};
	}

	if (action.type === UPDATE_FILTERS) {
		if (action.payload) {
			const { filterChanged, value } = action.payload;
			return {
				...state,
				filters: { ...state.filters, [filterChanged]: value },
			};
		}
		return state;
	}

	if (action.type === CLEAR_FILTERS) {
		return {
			...state,
			filters: {
				...state.filters,
				text: "",
				company: "all",
				category: "all",
				color: "all",
				price: state.filters.maxPrice,
				shipping: false,
			},
		};
	}

	if (action.type === FILTER_PRODUCTS) {
		const {
			text,
			company,
			category,
			color,
			price,
			shipping,
		} = state.filters;

		let filteredProducts = [...state.allProducts];
		filteredProducts = filteredProducts.filter((product) => {
			return (
				(color === "all" || product.colors.includes(color)) &&
				(category === "all" || product.category === category) &&
				(company === "all" || product.company === company) &&
				product.price <= price &&
				product.name.toLowerCase().indexOf(text.toLowerCase()) > -1 &&
				(shipping === false || product.shipping === shipping)
			);
		});

		return {
			...state,
			filteredProducts,
			filters: {
				...state.filters,
			},
		};
	}
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
