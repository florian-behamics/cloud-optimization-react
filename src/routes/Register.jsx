import { Button } from "@mui/material";
import { TbArrowRight } from "react-icons/tb";
import { AuthMagicLink } from "../components/AuthMagicLink";
import { PageContainer } from "../components/PageContainer";
import { FrameworkLink } from "../framework/FrameworkLink";
export function Register() {
	return (
		<PageContainer
			customSx={{
				minHeight: "80vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<AuthMagicLink />
			<FrameworkLink to="/login">
				<Button color="secondary" endIcon={<TbArrowRight />}>
					Already have an account? Sign in
				</Button>
			</FrameworkLink>
		</PageContainer>
	);
}
