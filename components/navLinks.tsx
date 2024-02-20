import Link from "next/link";

const NavLinks = () => {
	const routes = [
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Home",
			href: "/dashboard",
		},
	];
	return (
		<div className="flex">
			{routes.map((item, index) => {
				return (
					<Link
						href={item.href}
						key={index}
						className="p-2 text-sm bg-accent rounded-lg ml-2"
					>
						{item.label}
					</Link>
				);
			})}
		</div>
	);
};
export default NavLinks;
