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
		<div>
			<label>{label}</label>
			<select value={value} onChange={(e) => onChange(e.target.value)}>
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
