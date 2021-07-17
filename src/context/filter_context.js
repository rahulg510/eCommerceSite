import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";
import {
	LOAD_PRODUCTS,
	SET_GRIDVIEW,
	SET_LISTVIEW,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from "../actions";

const initialState = {
	filteredProducts: [],
	allProducts: [],
	gridView: true,
	sort: "price-lowest",
	filters: {
		text: '',
		company: "all",
		category: "all",
		color: "all",
		minPrice: 0,
		maxPrice: 0,
		shipping: false
	}
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { products } = useProductsContext();

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products });
	}, [products]);

	useEffect(() => {
		dispatch({type: UPDATE_FILTERS});
		dispatch({type: SORT_PRODUCTS});
	}, [])

	const setView = (grid) => {
		if (grid === true) dispatch({ type: SET_GRIDVIEW });
		else {
			dispatch({ type: SET_LISTVIEW });
		}
	};

	const updateFilters = (e) =>{
		const filterChanged = e.target.name;
		const value = e.target.value || e.target.textContent;
		console.log(filterChanged, value);
		dispatch({type: UPDATE_FILTERS, payload:{filterChanged, value}})
	}

	const clearFilters = () =>{

	}

	const sortProducts = (e) => {
		let sort = e.target.value;
		dispatch({ type: SORT_PRODUCTS, payload: sort });
	};

	return (
		<FilterContext.Provider value={{ ...state, setView, sortProducts, clearFilters, updateFilters }}>
			{children}
		</FilterContext.Provider>
	);
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
