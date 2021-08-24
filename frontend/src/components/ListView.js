import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const ListView = ({ products }) => {
	return (
		<Wrapper>
			<div className="products-container">
				{products.map((product) => {
					return (
						<article key={product._id}>
							<div className="container">
								<img
									src={product.images[0].url}
									alt={product.name}
								/>
								<Link
									to={`/products/${product._id}`}
									className="link"
								>
									<FaSearch />
								</Link>
							</div>
							<div>
								<Link
									to={`/products/${product._id}`}
								>
									<h4 style={{color: "black"}}>{product.name}</h4>
								</Link>
								<h5 className="price">
									{formatPrice(product.price)}
								</h5>
								<p>{product.description.substring(150)}...</p>
								<Link
									to={`/product/${product._id}`}
									className="btn"
								>
									Details
								</Link>
							</div>
						</article>
					);
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: grid;
	row-gap: 3rem;

	.container {
		position: relative;
		border-radius: var(--radius);
	}

	.link {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--clr-primary-5);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		transition: var(--transition);
		opacity: 0;
		cursor: pointer;
		svg {
			font-size: 1.25rem;
			color: var(--clr-white);
		}
	}
	.container:hover img {
		opacity: 0.5;
	}
	.container:hover .link {
		opacity: 1;
	}
	.product-name {
		color: black;
		text-decoration: underline;
	}
	img {
		width: 100%;
		display: block;
		width: 300px;
		height: 200px;
		object-fit: cover;
		border-radius: var(--radius);
		transition: var(--transition);
		margin-bottom: 1rem;
	}
	h4 {
		margin-bottom: 0.5rem;
	}
	.price {
		color: var(--clr-primary-6);
		margin-bottom: 0.75rem;
	}
	p {
		max-width: 45em;
		margin-bottom: 1rem;
	}
	.btn {
		font-size: 0.5rem;
		padding: 0.25rem 0.5rem;
	}
	@media (min-width: 992px) {
		article {
			display: grid;
			grid-template-columns: auto 1fr;
			column-gap: 2rem;
			align-items: center;
		}
	}
`;

export default ListView;
