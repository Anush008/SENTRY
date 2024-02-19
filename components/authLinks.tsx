import { Button } from "./ui/button";
import Link from "next/link";
const AuthLinks = () => {
	return (
		<div>
			<Button className="font-medium ml-2" size="sm">
				<Link href="/signIn">Sign In</Link>
			</Button>
			<Button className="font-medium ml-2" size="sm" variant="secondary">
				<Link href="/signUp">Sign Up</Link>
			</Button>
		</div>
	);
};

export default AuthLinks;
