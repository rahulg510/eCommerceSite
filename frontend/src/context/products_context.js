import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { productsUrl as url, singleProductUrl } from "../utils/constants";
import {useAuth0} from "@auth0/auth0-react";
import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_SINGLE_PRODUCT_BEGIN,
	GET_SINGLE_PRODUCT_SUCCESS,
	GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
	isSidebarOpen: false,
	productsLoading: false,
	productsError: false,
	products: [],
	featuredProducts: [],
	singleProductLoading: false,
	singleProductError: false,
	singleProduct: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {getAccessTokenSilently} = useAuth0();


	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};

	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	const fetchProducts = async (url) => {
		url = url + "/products";
		dispatch({ type: GET_PRODUCTS_BEGIN });
		try {
			let token = await getAccessTokenSilently();
			const response = await axios.get(url,{
				headers:{
					Authorization: `Bearer ${token}`
				}
			});
			const products = response.data;
			dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
		} catch (error) {
			dispatch({ type: GET_PRODUCTS_ERROR, payload: error });
		}
	};

	const fetchSingleProduct = async (id) => {
		dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
		try {
			const res = await axios.get(`${singleProductUrl}${id}`);
			dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
		} catch (error) {
			dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: error });
		}
	};

	useEffect(() => {
		fetchProducts(url);
	}, []);

	return (
		<ProductsContext.Provider
			value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
		>
			{children}
		</ProductsContext.Provider>
	);
};
// make sure use
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
