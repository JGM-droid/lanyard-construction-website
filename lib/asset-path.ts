const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? '';

export function assetPath(path: string): string {
  if (!siteBasePath || !path.startsWith('/')) {
    return path;
  }

  return `${siteBasePath}${path}`;
}
