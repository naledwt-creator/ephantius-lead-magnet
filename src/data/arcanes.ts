import type { ImageMetadata } from "astro";

const hd = import.meta.glob<{ default: ImageMetadata }>("../assets/arcanes-hd/*.jpg", { eager: true });

/** Lame du Tarot de Jean Dodal (Lyon, vers 1701, domaine public). */
export const cardImg = (n: number): ImageMetadata => hd[`../assets/arcanes-hd/dodal-${String(n).padStart(2, "0")}.jpg`].default;

export type Arcane = {
  n: number;
  numeral: string;
  name: string;
  slug: string;
  family: string;
  /** Regarder : ce que montre l'image. */
  look: string;
  /** Ressentir : ce qu'elle fait résonner. */
  feel: string;
  /** Relier : la question à emporter. */
  link: string;
};

const A = (n: number, numeral: string, name: string, slug: string, family: string, look: string, feel: string, link: string): Arcane => ({
  n, numeral, name, slug, family, look, feel, link,
});

/** Textes repris de la refonte eclipsedetoile.com (méthode 3R). */
export const ARCANES: Arcane[] = [
  A(0, "", "Le Mat", "le-mat", "Arcanes de lumière",
    "Un homme marche, son baluchon sur l'épaule. Un animal lui griffe la jambe. Il n'a pas de numéro.",
    "Une liberté qui avance sans demander la permission, et ce qui la retient par le mollet.",
    "Qu'est-ce qui vous pousse à partir, et qu'est-ce qui s'accroche encore à vous ?"),
  A(1, "I", "Le Bateleur", "le-bateleur", "Figures initiatiques",
    "Debout derrière une table, il tient une baguette. Sur la table : pièces, gobelets, couteau. La table n'a que trois pieds visibles.",
    "Tout est là, mais rien n'est encore assemblé. L'envie de commencer, le doute de savoir faire.",
    "Quels outils avez-vous déjà sur la table sans vous en servir ?"),
  A(2, "II", "La Papesse", "la-papesse", "Forces féminines",
    "Assise, voilée, un livre ouvert sur les genoux. Elle ne lit pas : elle regarde ailleurs.",
    "Un savoir qui mûrit à l'abri. Le calme, ou l'attente.",
    "Que savez-vous déjà, sans l'avoir encore dit ?"),
  A(3, "III", "L'Impératrice", "l-imperatrice", "Forces féminines",
    "Assise de face, un sceptre et un écu à l'aigle. Elle nous regarde droit.",
    "Une force qui crée et qui l'assume. Pas de voile ici.",
    "Qu'avez-vous envie de faire naître, et que vous retenez ?"),
  A(4, "IIII", "L'Empereur", "l-empereur", "Figures d'autorité",
    "De profil, jambes croisées, appuyé sur son trône. L'écu est posé au sol.",
    "Une stabilité gagnée. Ou une rigidité qui ne bouge plus.",
    "Quelle structure vous protège, et laquelle vous enferme ?"),
  A(5, "V", "Le Pape", "le-pape", "Figures d'autorité",
    "Il bénit deux personnages vus de dos, plus petits. Deux colonnes derrière lui.",
    "Une transmission, une parole qui relie. Ou l'autorité qu'on ne questionne pas.",
    "De qui avez-vous appris ce que vous croyez, et qu'en gardez-vous ?"),
  A(6, "VI", "L'Amoureux", "l-amoureux", "Arcanes du mouvement",
    "Un jeune homme entre deux femmes. Au-dessus, un ange tire une flèche. Personne ne regarde dans la même direction.",
    "L'hésitation, les regards qui se croisent mal. Le choix n'est pas encore fait.",
    "Entre quoi et quoi hésitez-vous vraiment, une fois les prénoms retirés ?"),
  A(7, "VII", "Le Chariot", "le-chariot", "Arcanes du mouvement",
    "Un prince couronné dans un char, deux chevaux qui tirent chacun de leur côté.",
    "L'élan, la fierté d'avancer. La tension de tenir deux forces ensemble.",
    "Quelles deux forces tirent votre projet dans deux directions ?"),
  A(8, "VIII", "La Justice", "la-justice", "Figures d'autorité",
    "Assise de face, une épée droite et une balance. Son regard est droit.",
    "Le besoin de juste mesure. Le poids d'une décision qui tranche.",
    "Qu'est-ce qui doit être pesé, et qu'est-ce qui doit être tranché ?"),
  A(9, "VIIII", "L'Hermite", "l-hermite", "Figures initiatiques",
    "Un vieil homme marche, une lanterne à demi cachée par son manteau, un bâton dans l'autre main.",
    "Une solitude choisie, une lumière qu'on garde pour soi. Le temps long.",
    "Quelle lumière portez-vous sans la montrer à personne ?"),
  A(10, "X", "La Roue de Fortune", "la-roue-de-fortune", "Arcanes du mouvement",
    "Une roue à manivelle. Trois animaux : l'un monte, l'autre descend, un troisième couronné reste en haut.",
    "Le cycle, ce qui monte et ce qui descend. Personne ne tient la manivelle.",
    "Dans quel cycle êtes-vous, et qui tourne la manivelle ?"),
  A(11, "XI", "La Force", "la-force", "Forces féminines",
    "Une femme au grand chapeau ouvre ou ferme la gueule d'un lion. Sans effort apparent.",
    "Une puissance douce. L'instinct apprivoisé plutôt que combattu.",
    "Quelle part de vous demande à être apprivoisée, pas vaincue ?"),
  A(12, "XII", "Le Pendu", "le-pendu", "Arcanes du passage",
    "Suspendu par un pied entre deux arbres taillés, les mains derrière le dos. Son visage est calme.",
    "L'arrêt forcé, ou choisi. Voir le monde à l'envers.",
    "Que verriez-vous si vous regardiez votre situation à l'envers ?"),
  A(13, "XIII", "L'arcane sans nom", "l-arcane-sans-nom", "Arcanes du passage",
    "Un squelette fauche un sol où poussent des têtes et des mains. La lame n'a pas de nom.",
    "Ce qui doit être coupé pour que la suite pousse. Ce n'est pas une fin, c'est un labour.",
    "Que devez-vous faucher pour que quelque chose repousse ?"),
  A(14, "XIIII", "Tempérance", "temperance", "Arcanes du mouvement",
    "Un ange verse un liquide d'un vase dans l'autre. Le flux coule en biais, contre la gravité.",
    "La patience, le dosage. Ce qui circule entre deux états.",
    "Qu'est-ce qui, chez vous, demande à être dosé plutôt que tranché ?"),
  A(15, "XV", "Le Diable", "le-diable", "Arcanes du mouvement",
    "Une figure ailée sur un autel, deux petits personnages attachés par le cou. Les liens sont lâches.",
    "L'attachement, le désir, la peur. Et des liens qu'on pourrait retirer.",
    "À quoi tenez-vous qui vous tient en retour ?"),
  A(16, "XVI", "La Maison-Dieu", "la-maison-dieu", "Arcanes du passage",
    "Une tour dont le sommet s'ouvre. Deux personnages tombent, ou dansent, vers le sol.",
    "Le choc, l'ouverture brutale. Ce qui était enfermé sort enfin.",
    "Qu'est-ce qui a besoin de s'ouvrir, même si c'est bruyant ?"),
  A(17, "XVII", "L'Étoile", "l-etoile", "Arcanes de lumière",
    "Une femme nue, un genou à terre, verse deux cruches dans l'eau. Huit étoiles au-dessus, un oiseau sur un arbre.",
    "La confiance retrouvée, le don sans calcul. Le calme après le passage.",
    "Que donnez-vous sans compter, et à quoi ?"),
  A(18, "XVIII", "La Lune", "la-lune", "Arcanes de lumière",
    "Deux chiens hurlent vers une lune de profil. Une écrevisse sort de l'eau. Deux tours au loin.",
    "Le trouble, l'intuition, ce qui remonte de la profondeur. Ce qu'on ne voit qu'à moitié.",
    "Qu'est-ce qui remonte en vous, et que vous ne voyez qu'à moitié ?"),
  A(19, "XVIIII", "Le Soleil", "le-soleil", "Arcanes de lumière",
    "Deux enfants devant un muret, sous un grand soleil qui laisse tomber des gouttes.",
    "La clarté, la complicité, la joie simple. Le muret protège autant qu'il sépare.",
    "Avec qui partagez-vous ce qui vous éclaire ?"),
  A(20, "XX", "Le Jugement", "le-jugement", "Arcanes du passage",
    "Un ange sonne la trompette. Trois personnages se lèvent d'une tombe.",
    "L'appel, la renaissance. Entendre enfin ce qui vous appelle.",
    "Quel appel avez-vous entendu sans encore y répondre ?"),
  A(21, "XXI", "Le Monde", "le-monde", "Figures initiatiques",
    "Une figure dansante dans une mandorle. Aux quatre coins, un ange, un aigle, un lion, un bœuf.",
    "L'accomplissement, l'unité. Une œuvre qui tient en équilibre.",
    "Qu'est-ce qui, chez vous, est déjà accompli et mérite d'être reconnu ?"),
];
