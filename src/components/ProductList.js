import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
	const {allProducts, filteredProducts} = useFilterContext();

	console.log(useFilterContext());
	return <>
	<GridView products={filteredProducts}/>

	</>
};

export default ProductList;
