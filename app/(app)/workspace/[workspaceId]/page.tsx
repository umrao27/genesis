type WorkspacePageProps = {
	params: Promise<{ workspaceId: string }>;
};

export default async function WorkspacePage({ params }: WorkspacePageProps) {
	const { workspaceId } = await params;

	return (
		<main className="px-6 py-10">
			<h1 className="text-3xl font-semibold">Workspace</h1>
			<p className="mt-3" style={{ color: "var(--muted-foreground)" }}>
				Workspace ID: {workspaceId}
			</p>
		</main>
	);
}
