import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
	HomePage,
	AboutPage,
	ErrorPage,
	CheckoutPage,
	SingleProductPage,
	ProductsPage,
	CartPage,
	PrivateRoute,
	AuthWrapper,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

function App() {
	return (
		<AuthWrapper>
			<Router>
				<Navbar />
				<Sidebar />
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/about">
						<AboutPage />
					</Route>
					<PrivateRoute exact path="/checkout">
						<CheckoutPage />
					</PrivateRoute>
					<Route path="/products" exact>
						<ProductsPage />
					</Route>
					<Route
						path="/products/:id"
						children={<SingleProductPage />}
					></Route>
					<Route path="/cart" exact>
						<CartPage />
					</Route>
					<Route path="*">
						<ErrorPage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthWrapper>
	);
}

export default App;
