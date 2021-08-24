import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain={process.env.REACT_APP_DOMAIN}
			clientId={process.env.REACT_APP_CLIENT_ID}
			redirectUri={process.env.REACT_APP_REDIRECT}
			audience={process.env.REACT_APP_AUDIENCE}
			scope={process.env.REACT_APP_SCOPE}
			useRefreshTokens={true}
			cacheLocation={process.env.REACT_APP_CACHE_LOCATION}
		>
			<ProductsProvider>
				<FilterProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</FilterProvider>
			</ProductsProvider>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
