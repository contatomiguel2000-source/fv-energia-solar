/** Slug do site no hub (invia-sites.vercel.app/fv-energia). Remover se o site ganhar domínio próprio. */
export const basePath = "/fv-energia";

/** Prefixa arquivos de /public com o basePath (o next/image e o <video> não fazem isso sozinhos). */
export function asset(path: string) {
  return `${basePath}${path}`;
}
