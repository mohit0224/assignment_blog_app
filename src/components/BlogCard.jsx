import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import scrollToTop from '../helper/scrollToTop'

const BlogCard = ({ data }) => {
	const navigate = useNavigate();
	const { title, description, image, category } = data;
	return (
		<>
			<div className="w-96 min-h-80 p-5 rounded-lg shadow-lg shadow-slate-200">
				<div className="w-full h-56 overflow-hidden relative">
					<div className="absolute top-2 right-2 px-1.5 py-1 bg-white/50 rounded-lg text-sm text-slate-800">
						{category}
					</div>
					<img
						src={image}
						alt={title}
						className="h-full w-full object-cover rounded-md"
					/>
				</div>
				<div className="mt-5 space-y-3">
					<h4 className="text-slate-900 font-semibold">{title}</h4>
					<p className="line-clamp-3 text-slate-600">{description}</p>
					<div>
						<Button
							text="Read more"
							onClick={() => {navigate(`/post/${title}`), scrollToTop()}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogCard;
