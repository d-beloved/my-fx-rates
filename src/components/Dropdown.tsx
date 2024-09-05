import React from "react";
import { DropdownProps } from "../lib/definitions";

const Dropdown: React.FC<DropdownProps> = ({
	label,
	options,
	value,
	onChange,
	appendShortCode = false,
}) => {
	return (
		<div className="flex flex-col flex-wrap items-start w-72">
			<label className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-12 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
			>
				{options.map((option, index) => {
					const { value, label } = option;
					return (
						<option
							key={value}
							value={value}
							disabled={index === 0}
						>
							{label}{" "}
							{appendShortCode &&
								value.length > 0 &&
								`(${value})`}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Dropdown;
