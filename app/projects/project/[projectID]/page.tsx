export default async function ProjectPage(props: {params: Promise<{projectID: string}>}) {
  const params = await props.params;
  const projectID = params.projectID;
  return (
    <div>
      <h1>Project ID: {projectID}</h1>
    </div>
  );
} 