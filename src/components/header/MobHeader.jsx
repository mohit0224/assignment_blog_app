import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import scrollTop from "../../helper/scrollToTop";

const MobHeader = () => {
	const [isToggle, setIstoggle] = useState(false);
	const scroll = () => {
		scrollTop();
	};
	return (
		<>
			<header className="fixed md:hidden top-0 left-0 min-h-16 w-full z-[999]">
				<div className="relative">
					<nav className="flex h-16 w-full px-6 items-center justify-between bg-white ">
						<div>
							<Link
								to={"/"}
								className="text-2xl font-bold text-slate-600"
								onClick={() => {
									setIstoggle(false), scrollTop();
								}}
							>
								Blog App
							</Link>
						</div>
						<div>
							<div
								className="cursor-pointer border rounded-md p-2 text-slate-600"
								onClick={() => setIstoggle(!isToggle)}
							>
								{!isToggle ? <RxHamburgerMenu /> : <RxCross2 />}
							</div>
						</div>
					</nav>
					<div
						className={`${!isToggle ? "h-0" : "h-screen"} absolute top-full 
                    w-full transition-[height] duration-300 overflow-hidden`}
					>
						<div
							className="h-full w-full bg-white/95"
							onClick={() => setIstoggle(false)}
						>
							<ul className="space-y-3 py-5 px-10 text-slate-600 font-medium">
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
					</div>
				</div>
			</header>
		</>
	);
};

export default MobHeader;
