import React, { useState } from "react";
import { BlogCard, Container } from "../components";
import data from "../helper/blogData";

const Home = () => {
	const [categoryFilter, setCategoryFilter] = useState("national");

	const getCategory = data.map((data) => data.category);
	const filterDublicateCategory = [...new Set(getCategory)];
	const categoryFilterData = data.filter((data) => {
		if (categoryFilter === "all") return data;
		else {
			return data.category.includes(categoryFilter);
		}
	});

	return (
		<>
			<Container>
				<section className="">
					<ul className="hidden md:flex items-center justify-center gap-3 text-sm md:text-base">
						<li
							className={`capitalize font-semibold cursor-pointer 
              ${categoryFilter === "all" ? "text-slate-950" : "text-slate-500"}
              `}
							onClick={() => setCategoryFilter("all")}
						>
							All
						</li>
						{filterDublicateCategory.map((category, i) => (
							<li
								className={`capitalize font-semibold cursor-pointer ${
									categoryFilter === category
										? "text-slate-950"
										: "text-slate-500"
								}`}
								key={category}
								onClick={() => setCategoryFilter(category)}
							>
								{category}
							</li>
						))}
					</ul>

					<ul
						className=" flex md:hidden gap-3 overflow-x-scroll text-lg md:text-base"
						id="scrollCustom"
					>
						<li
							className={`capitalize font-semibold cursor-pointer inline-block
              							${categoryFilter === "all" ? "text-slate-950" : "text-slate-500"}
              						  `}
							onClick={() => setCategoryFilter("all")}
						>
							All
						</li>
						{filterDublicateCategory.map((category, i) => (
							<li
								className={`capitalize font-semibold cursor-pointer inline-block ${
									categoryFilter === category
										? "text-slate-950"
										: "text-slate-500"
								}`}
								key={category}
								onClick={() => setCategoryFilter(category)}
							>
								{category}
							</li>
						))}
					</ul>
				</section>

				<section className="mt-10 flex flex-wrap justify-center gap-8">
					{categoryFilterData.map((data) => (
						<BlogCard key={data.title} data={data} />
					))}
				</section>
			</Container>
		</>
	);
};

export default Home;
