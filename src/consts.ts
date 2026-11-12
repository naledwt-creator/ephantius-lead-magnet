/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Vos Trois Voiles · Éphantius Lémurien";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "Entrez votre date de naissance et levez le premier de vos Trois Voiles : une lame du Tarot de Marseille à regarder, ressentir et relier. Ni voyance, ni prédiction. Avec Éphantius Lémurien.";
/**
 * Canonical origin. Resolves canonical URLs, social images and the QR code of
 * the stand poster. Set `PUBLIC_SITE_URL` at build time to the final address.
 */
export const SITE_URL = (import.meta.env?.PUBLIC_SITE_URL ?? process.env.PUBLIC_SITE_URL ?? "https://voile.eclipsedetoile.com").replace(/\/$/, "");
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "fr-BE";
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = ["/affiche", "/og"];
