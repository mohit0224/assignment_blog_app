import React from "react";
import { Button, Container } from "../components";

const Contact = () => {
	const handlesubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<Container>
				<section>
					<div className="text-center space-y-3">
						<h1 className="text-3xl font-bold text-slate-900 ">Contact Us</h1>
						<p className="text-lg font-semibold text-slate-700">
							Got a technical issue? Want to send feedback about a beta feature?
							Need details about our Business plan? Let us know.
						</p>
					</div>
					<div className="mt-16">
						<form onSubmit={(e) => handlesubmit(e)}>
							<div className="space-y-8">
								{/* email input */}
								<div className="space-y-2">
									<label htmlFor="email" className="text-lg">
										Your email
									</label>
									<div>
										<input
											type="email"
											name="email"
											id="email"
											className="w-full px-5 py-3 border border-slate-100 outline-none shadow-lg shadow-slate-200 rounded-xl"
										/>
									</div>
								</div>
								{/* subject input */}
								<div className="space-y-2">
									<label htmlFor="subject" className="text-lg">
										subject
									</label>
									<div>
										<input
											type="text"
											name="subject"
											id="subject"
											className="w-full px-5 py-3 border border-slate-100 outline-none shadow-lg shadow-slate-200 rounded-xl"
										/>
									</div>
								</div>
								{/* message input */}
								<div className="space-y-2">
									<label htmlFor="message" className="text-lg">
										Your message
									</label>
									<div>
										<textarea
											name="message"
											id="message"
											cols="30"
											rows="10"
											className="w-full px-5 py-3 border border-slate-100 outline-none shadow-lg shadow-slate-200 rounded-xl"
										></textarea>
									</div>
								</div>
								{/* submit button */}
								<Button
									text="Submit"
									className="w-full px-5 py-3 border border-slate-100 outline-none shadow-lg shadow-slate-200 rounded-xl text-lg text-slate-900"
								/>
							</div>
						</form>
					</div>
				</section>
			</Container>
		</>
	);
};

export default Contact;
