import React from "react";
import { Link } from "react-router-dom";
import scrollTop from "../../helper/scrollToTop";

const Header = () => {
	const scroll = () => {
		scrollTop();
	};
	return (
		<>
			<header className="fixed top-0 left-0 h-16 w-full z-[999]">
				<nav className="hidden h-full w-full px-10 md:flex items-center justify-between bg-white ">
					<div>
						<Link
							to={"/"}
							className="text-2xl font-bold text-slate-600"
							onClick={() => scroll()}
						>
							Blog App
						</Link>
					</div>
					<div>
						<ul className="flex items-center gap-5 text-sm font-medium text-slate-600">
							<li>
								<Link to={"/blog"} onClick={() => scroll()}>
									Blogs
								</Link>
							</li>
							<li>
								<Link to={"/contact"} onClick={() => scroll()}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
