export const createProject = async (formData: FormData) => {
  const projectName = formData.get("projectName");
  const projectDescription = formData.get("projectDescription");
  const selectedUserIds = formData.get("selectedUserIds");

  const memberIds = selectedUserIds
    ? JSON.parse(selectedUserIds as string)
    : [];

};
