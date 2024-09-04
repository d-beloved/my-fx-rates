import React from "react";
import { DropdownProps } from "../lib/definitions";

const Dropdown: React.FC<DropdownProps> = ({
	label,
	options,
	value,
	onChange,
}) => {
	return (
		<div>
			<label>{label}</label>
			<select value={value} onChange={(e) => onChange(e.target.value)}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
