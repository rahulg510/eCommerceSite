import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/bcg.jpeg";

const AboutPage = () => {
	return (
		<main>
			<PageHero title="About" />
			<Wrapper className="page section section-center">
				<img src={aboutImg} alt="a brown table" />
				<article>
					<div>
						<h2>Our Story</h2>
						<div className="underline"></div>
					</div>
					<p>
						Sit officia adipisicing nisi nisi esse consequat
						voluptate consectetur est. Aliqua nisi ea consequat
						incididunt ipsum enim anim irure fugiat mollit anim
						dolore non voluptate. Id consequat amet reprehenderit
						incididunt Lorem veniam id mollit ut eiusmod id.
						Occaecat nulla consectetur anim laborum elit duis do.
					</p>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;
export default AboutPage;
