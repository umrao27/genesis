type SectionPageProps = {
	title: string;
	description?: string;
};

export default function SectionPage({ title, description }: SectionPageProps) {
	return (
		<main className="px-6 py-10">
			<h1 className="text-3xl font-semibold">{title}</h1>
			{description ? (
				<p className="mt-3" style={{ color: "var(--muted-foreground)" }}>
					{description}
				</p>
			) : null}
		</main>
	);
}