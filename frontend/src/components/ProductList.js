import React from "react";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import GridView from "./GridView";
import ListView from "./ListView";
import Loading from "./Loading";

const ProductList = () => {
	const { filteredProducts, gridView } = useFilterContext();
	const { productsLoading } = useProductsContext();

	if (productsLoading) return <Loading />;

	if (filteredProducts.length > 0) {
		if (gridView) return <GridView products={filteredProducts} />;
		else return <ListView products={filteredProducts} />;
	} else {
		return (
			<h4 style={{ textTransform: "none" }}>
				Sorry, no products matched your search
			</h4>
		);
	}
};

export default ProductList;
