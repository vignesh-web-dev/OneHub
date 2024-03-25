export function generateMetadata(customTitle, customDescription) {
  return {
    title: customTitle || "Default Title",
    description: customDescription || "Default Description",
    // Add more metadata properties as needed
  };
}
