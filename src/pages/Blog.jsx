import React from "react";
import { BlogCard, Container } from "../components";
import data from "../helper/blogData";

const Blog = () => {
	return (
		<>
			<Container>
			<section className="mt-10 flex flex-wrap justify-center gap-8">
					{data.map((data) => (
						<BlogCard key={data.title} data={data} />
					))}
				</section>
			</Container>
		</>
	);
};

export default Blog;
