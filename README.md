# ephantius-lead-magnet

One-pager « Vos Trois Voiles » pour le stand d'Éphantius Lémurien (salon Parallèle, Ciney Expo, stand 114). Astro + Lumos, site 100 % statique, aucune donnée envoyée.

Le visiteur scanne le QR code du stand, entre sa date de naissance et lève son premier voile (le Reflet). La Vérité, le Devenir et la Clé restent cachés : Éphantius les lève au stand, en retombant sur les mêmes lames à partir de la date.

## Calcul des voiles

Réduction classique du Tarot de Marseille : on additionne les chiffres tant que le total dépasse 22, et 22 donne Le Mat (0, compté 22 dans les sommes).

| Voile | Calcul |
| --- | --- |
| I · Reflet | jour de naissance |
| II · Vérité | somme de tous les chiffres de la date (JJMMAAAA) |
| III · Devenir | Reflet + Vérité |
| Clé | Reflet + Vérité + Devenir |

Exemple : 13/12/1989 donne 13 (L'Arcane sans nom), 7 (Le Chariot), 20 (Le Jugement), clé 4 (L'Empereur). Formule à valider par Stéphan : elle se trouve dans `veilsOf`, `src/components/content/VeilDraw.astro`.

## Développement

```bash
npm install
npm run dev       # http://localhost:4321
```

## Mise en ligne et QR code

Le QR code de l'affiche se génère au build depuis l'URL d'hébergement :

```bash
PUBLIC_SITE_URL=https://url-du-site npm run build       # site dans dist/, affiche A5 sur /affiche
PUBLIC_SITE_URL=https://url-du-site node scripts/qr.mjs # QR seul en SVG et PNG dans qr/
```

Version de test : GitHub Pages, publiée automatiquement à chaque push sur `main` par `.github/workflows/deploy.yml`, sur https://naledwt-creator.github.io/ephantius-lead-magnet/ (QR seul : `qr/qr-voile-du-jour.png` sur le site). Pour le sous-domaine final, changer `PUBLIC_SITE_URL` dans ce fichier (l'URL peut porter un sous-chemin, il devient la base du site).

Lames : Tarot de Jean Dodal, Lyon, vers 1701 (domaine public).
