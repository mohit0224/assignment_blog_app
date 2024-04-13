import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components";
import data from "../helper/blogData";
import { FaArrowLeftLong } from "react-icons/fa6";

const SingleBlogPage = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [singlePostData, setSinglePostData] = useState([]);
	setTimeout(() => {
		setSinglePostData(data.filter((data) => data.title.includes(id)));
		setIsLoading(false);
	}, 900);

	const backButton = () => {
		window.history.back(-1);
	};

	if (isLoading) {
		return (
			<div className="w-screen h-screen flex items-center justify-center">
				Loading...
			</div>
		);
	}
	return (
		<>
			<Container>
				<section>
					{singlePostData.map((post) => (
						<div key={post.title}>
							{/* image box */}
							<div className="w-full h-96 md:h-[500px] overflow-hidden border rounded-xl">
								<img
									className="h-full w-full object-cover"
									src={post.image}
									alt={post.title}
								/>
							</div>

							{/* content box */}
							<div className="mt-5 space-y-5">
								<div className="flex items-center justify-between px-7 md:px-10">
									<p
										onClick={() => backButton()}
										className="flex items-center gap-1 cursor-pointer"
									>
										<FaArrowLeftLong /> Back{" "}
									</p>
									<p className="capitalize font-semibold text-slate-700 px-4 py-2 bg-slate-100 rounded-md">
										{post.category}
									</p>
								</div>
								<h4 className="text-xl font-semibold text-slate-900 ">
									{post.title}
								</h4>
								<p className="text-lg text-justify text-slate-600">
									{post.description}
								</p>
							</div>
						</div>
					))}
				</section>
			</Container>
		</>
	);
};

export default SingleBlogPage;
