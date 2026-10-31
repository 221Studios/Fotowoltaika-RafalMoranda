const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path) {
  if (!path?.startsWith("/")) return path;
  const prefixedPath = `${basePath}${path}`;
  if (
    !basePath ||
    path.endsWith("/") ||
    path.includes("#") ||
    /\.[^/]+$/.test(path)
  ) {
    return prefixedPath;
  }
  return `${prefixedPath}/`;
}
