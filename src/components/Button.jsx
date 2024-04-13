import React from "react";

const Button = ({ text, className, ...props }) => (
	<button className={`${className} border px-2 py-1 rounded-md text-slate-600`} {...props}>
		{text || "Button"}
	</button>
);

export default Button;
