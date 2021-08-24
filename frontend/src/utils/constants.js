import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
	{
		id: 1,
		text: "home",
		url: "/",
	},
	{
		id: 2,
		text: "about",
		url: "/about",
	},
	{
		id: 3,
		text: "products",
		url: "/products",
	},
];

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: "mission",
		text:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: "vision",
		text:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: "history",
		text:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
	},
];

const HOST = "http://192.168.99.101";
const PRODUCTS_PORT = ":30001";
const USER_PORT = ":30002";
const USER = "/user";
const CART = "/cart";
const PRODUCTS = "/products";
const SINGLE_PRODUCT = '/single-product'

export const PRODUCTS_URL = HOST + PRODUCTS_PORT + PRODUCTS;
export const SINGLE_PRODUCT_URL = HOST + PRODUCTS_PORT + PRODUCTS + SINGLE_PRODUCT;
export const CART_URL = HOST + USER_PORT + USER + CART;
