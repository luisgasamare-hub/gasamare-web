// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gasamare.es";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/empresa`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
    },
  ];
}
