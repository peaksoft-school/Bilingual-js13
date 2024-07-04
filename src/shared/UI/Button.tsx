import { Button as MuiButton, ButtonProps, styled } from "@mui/material";
import { FC, MouseEvent } from "react";

interface CustomButtonProps extends ButtonProps {
	children: React.ReactNode;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	type?: "button" | "submit" | "reset";
	customVariant?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "Quaternary"
		| "Quinary"
		| "Senary"
		| "Septenary"
		| "Octonary"
		| "Undenary"
		| "Denary"
		| "Nonary";
}

const Button: FC<CustomButtonProps> = ({
	onClick,
	type = "button",
	customVariant = "primary",
	children,
	disabled,
	variant,
	...rest
}) => {
	return (
		<StyledButton
			onClick={onClick}
			type={type}
			customVariant={customVariant}
			disabled={disabled}
			variant={variant}
			{...rest}>
			{children}
		</StyledButton>
	);
};

export default Button;

const buttonStyles = {
	primary: {
		backgroundColor: "rgba(58, 16, 229, 1)",
		color: "#ffffff",
		padding: "12px 24px 12px 16px",
		fontSize: "14px",
		borderRadius: "8px",

		"&:hover": {
			backgroundColor: "rgba(58, 16, 229, 0.9)",
		},
		"&:active": {
			backgroundColor: "rgba(48, 7, 218, 1)",
		},
		"&.Mui-disabled": {
			backgroundColor: "#fefeff",
			color: "#c4c4c4",
			border: "2px solid #c4c4c4",
		},
	},
	secondary: {
		backgroundColor: "rgba(42, 185, 48, 1)",
		color: "#ffffff",
		padding: "12.5px 20px",
		fontSize: "14px",
		borderRadius: "8px",
		"&:hover": {
			backgroundColor: "#31cf38",
		},
		"&:active": {
			backgroundColor: "#08af10",
		},
		"&.Mui-disabled": {
			backgroundColor: "#fefeff",
			color: "#c4c4c4",
			border: "2px solid #c4c4c4",
		},
	},

	tertiary: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		color: "rgba(58, 16, 229, 1)",
		padding: "13px 24px 13px 24px",
		fontSize: "14px",
		borderRadius: "8px",
		border: "2px solid rgba(58, 16, 229, 1)",

		"&:hover": {
			backgroundColor: "rgba(58, 16, 229, 1)",
			color: "#ffffff",
			border: "none",
		},
		"&:active": {
			backgroundColor: "rgba(48, 7, 218, 1)",
		},
		"&.Mui-disabled": {
			backgroundColor: "#fefeff",
			color: "#c4c4c4",
			border: "2px solid #c4c4c4",
		},
	},
	Quaternary: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		color: "rgba(58, 16, 229, 1)",
		padding: "13px 24px 13px 24px",
		fontSize: "14px",
		borderRadius: "8px",
		border: "2px solid rgba(58, 16, 229, 1)",

		"&:hover": {
			backgroundColor: "rgba(58, 16, 229, 1)",
			color: "#ffffff",
			border: "none",
		},
		"&:active": {
			backgroundColor: "rgba(48, 7, 218, 1)",
		},
		"&.Mui-disabled": {
			backgroundColor: "#fefeff",
			color: "#c4c4c4",
			border: "2px solid #c4c4c4",
		},
	},
	Quinary: {
		backgroundColor: "rgba(58, 16, 229, 1)",
		color: "rgba(255, 255, 255, 1)",
		width: "150px",
		height: "50px",
		fontSize: "14px",
		borderRadius: "8px",
		border: "none",

		"&:hover": {
			backgroundColor: "rgba(78, 40, 232, 1)",
		},
		"&:active": {
			backgroundColor: "rgba(48, 7, 218, 1)",
		},
		"&.Mui-disabled": {
			backgroundColor: "rgba(196, 196, 196, 1)",
			color: "rgba(255, 255, 255, 1)",
		},
	},
	Senary: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		color: "rgba(58, 16, 229, 1)",
		padding: "13px 24px 13px 24px",
		fontSize: "14px",
		borderRadius: "8px",
		border: "2px solid rgba(58, 16, 229, 1)",

		"&:hover": {
			backgroundColor: "rgba(58, 16, 229, 1)",
			color: "#ffffff",
			border: "none",
		},
		"&:active": {
			backgroundColor: "rgba(48, 7, 218, 1)",
		},
		"&.Mui-disabled": {
			backgroundColor: "#fefeff",
			color: "#c4c4c4",
			border: "2px solid #c4c4c4",
		},
	},
	Septenary: {
		backgroundColor: "rgba(58, 16, 229, 1)",
		color: "#ffffff",
		padding: "13px 24px 13px 24px",
		fontSize: "14px",
		borderRadius: "8px",
		width: "500px",

		"&:hover": {
			backgroundColor: "rgba(58, 16, 229, 0.9)",
		},
		"&:active": {
			backgroundColor: "rgba(48, 7, 218, 1)",
		},
		"&.Mui-disabled": {
			backgroundColor: "#fefeff",
			color: "#c4c4c4",
			border: "2px solid #c4c4c4",
		},
	},
	Octonary: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		color: "rgba(76, 76, 76, 1)",
		padding: "13px 24px 13px 24px",
		fontSize: "14px",
		borderRadius: "8px",
		border: "2px solid rgba(76, 72, 89, 1)",

		"&:hover": {
			backgroundColor: "rgba(58, 16, 229, 1)",
			color: "#ffffff",
			border: "none",
		},
		"&:active": {
			backgroundColor: "rgba(48, 7, 218, 1)",
		},
		"&.Mui-disabled": {
			backgroundColor: "#fefeff",
			color: "#c4c4c4",
			border: "2px solid #c4c4c4",
		},
	},
	Undenary: {
		width: "200px",
		height: "60px",
		backgroundImage: "url(https://i.postimg.cc/138RYYKW/button.png)",
		backgroundSize: "cover",
		backgroundPosition: "center",
		color: "white",
		fontWeight: "bold",
		fontSize: "15px",
		paddingBottom: "15px",
		transition: "opacity 0.3s ease-in-out",
		"&:hover": {
			opacity: 0.8,
		},
		"&:active": {
			opacity: 1,
		},
	},
	Denary: {
		backgroundColor: "#3a10e5",
		color: "#ffffff",
		padding: "13px 24px 13px 24px",
		fontSize: "14px",
		borderRadius: "8px",
		"&:hover": {
			backgroundColor: "#340ad8",
		},
		"&:active": {
			backgroundColor: "#2505a9",
		},
		"&.Mui-disabled": {
			backgroundColor: "#fefeff",
			color: "#c4c4c4",
			border: "2px solid #c4c4c4",
		},
	},
	Nonary: {
		color: "black",
		backgroundColor: "#ededf0",
		padding: "13px 24px",
		borderRadius: "12px",
		"&:hover": {
			backgroundColor: "#f3eded",
			border: "none",
		},
		"&:active": {
			backgroundColor: "#e9e3e3",
		},
	},
};

const StyledButton = styled(MuiButton)<{
	customVariant: keyof typeof buttonStyles;
}>(({ customVariant }) => ({
	...buttonStyles[customVariant],
}));
