import { MetadataRoute } from "next";

// Function to escape XML special characters
const escapeXml = (unsafe: string) => {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "contact"].map((route) => ({
    url: escapeXml(`https://www.chachowino.com/${route}`),
    lastModified: escapeXml(new Date().toISOString()),
  }));

  // Concatenate all arrays into a single array
  const allUrls = [...routes];

  return allUrls;
}
