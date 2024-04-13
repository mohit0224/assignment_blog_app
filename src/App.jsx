import React from "react";
import { Header, MobHeader } from "./components";
import { Route, Routes } from "react-router-dom";
import { Blog, Contact, Home, SingleBlogPage } from "./pages";

const App = () => {
	return (
		<>
			<Header />
			<MobHeader />

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/blog" element={<Blog/>} />
				<Route path="/contact" element={<Contact/>} />
				<Route path="/post/:id" element={<SingleBlogPage/>} />
			</Routes>
		</>
	);
};

export default App;
