export const formatPrice = (price) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price / 100);
};

export const getUniqueValues = (products, type) => {
	let unique = products.map((product) => product[type]);
	if(type === "colors"){
		unique = unique.flat();
	}
	return ["all", ...[...new Set(unique)].sort((a,b)=>{
		return a <= b ? -1 : 1;
	})];
};
