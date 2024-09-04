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
		<div className="flex flex-col">
			<label className="mb-2">{label}</label>
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="p-2"
			>
				{options.map((option, index) => {
					const { value, label } = option;
					return (
						<option
							key={value}
							value={value}
							disabled={index === 0}
							className="p-2"
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
