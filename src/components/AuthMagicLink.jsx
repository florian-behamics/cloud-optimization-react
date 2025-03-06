import {
	Box,
	Button,
	FilledInput,
	FormLabel,
	Link,
	Stack,
	Typography,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import * as React from "react";
import { Logo } from "../components/Logo";
export function AuthMagicLink() {
	const [email, setEmail] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [password, setPassword] = React.useState("");
	const handleLogin = async (email) => {
		// add login logic here
		console.log(email);
	};
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				width: "100%",
				gap: 3,
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					gap: 1,
				}}
			>
				{/* <Logo height={20} /> */}
				<Typography
					variant="h1"
					sx={{
						fontSize: { xs: "2xl", sm: "3xl" },
					}}
				>
					Welcome To Cloud Optimizer
				</Typography>
				<Typography>
					Sign in, or{" "}
					<Link
						href={undefined}
						sx={{
							textDecoration: "none",
						}}
					>
						create an account
					</Link>
				</Typography>
			</Box>
			<Stack
				spacing={2.5}
				component="form"
				onSubmit={(event) => {
					event.preventDefault();
					const formData = new FormData(event.target);
					const email = formData.get("email");
					handleLogin(email);
				}}
				sx={{
					maxWidth: "24rem",
					width: "100%",
				}}
			>
				<FormLabel sx={visuallyHidden}>First Name</FormLabel>
				<FilledInput
					placeholder="First Name"
					type="text"
					name="firstName"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					autoComplete="text"
				/>
				<FormLabel sx={visuallyHidden}>Last Name</FormLabel>
				<FilledInput
					placeholder="Last Name"
					type="text"
					name="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					autoComplete="text"
				/>
				<FormLabel sx={visuallyHidden}>Email</FormLabel>
				<FilledInput
					placeholder="E-mail"
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					autoComplete="email"
				/>
				<FormLabel sx={visuallyHidden}>Password</FormLabel>
				<FilledInput
					placeholder="password"
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button variant="contained" size="large" type="submit">
					Sign Up
				</Button>
				{/* <Link
					href={undefined}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						textDecoration: "none",
						color: "gray.400",
						fontSize: "xs",
					}}
				>
					Return to home
				</Link> */}
			</Stack>
		</Box>
	);
}
