---
title: "Taux de montée (RoR) expliqué : comment lire et maîtriser votre courbe de torréfaction avec Artisan et Cropster"
description: "Maîtrisez le taux de montée (RoR) en torréfaction du café. Apprenez à interpréter votre courbe phase par phase, à éviter le crash et le flick, et à paramétrer Artisan et Cropster."
author: "Kraffe Team"
authorImage: "@/images/blog/polat.jpeg"
authorImageAlt: "Kraffe Technics Team Avatar"
pubDate: 2026-09-29T10:00:00Z
cardImage: "@/images/blog/Rate of Rise (RoR) Explained How to Read and Control Your Roast Curve in Artisan & Cropster.webp"
cardImageAlt: "Taux de montée (RoR) expliqué : comment lire et maîtriser votre courbe de torréfaction avec Artisan et Cropster"
readTime: 8
tags: ["machine à torréfier le café", "taux de montée", "ror", "artisan scope", "cropster", "courbe de torréfaction", "torréfacteur commercial", "torréfacteur à tambour", "profils de torréfaction", "kraffe roasters"]
keyTakeaways:
  - "Le RoR mesure la vitesse à laquelle la torréfaction progresse, et non la température absolue des grains."
  - "Dans une torréfaction classique à tambour, le RoR atteint son pic peu après le point de retournement, puis décroît régulièrement jusqu'au déchargement."
  - "Une chute brutale au premier crack (crash) ou une remontée tardive (flick) sont les deux défauts majeurs de RoR, associés à des saveurs plates ou cendrées."
  - "Vous contrôlez le RoR grâce à la puissance du brûleur, au flux d'air, à la vitesse du tambour, à la température de chargement et à la taille du lot — en anticipant 30 à 60 secondes à l'avance."
  - "Dans Artisan, le réglage clé est le Delta Span ; dans Cropster, il s'agit du préréglage RoR (Recommandé, Sensible ou Lissage de bruit) et de l'intervalle temporel."
---

Deux torréfactions peuvent atteindre exactement la même température de premier crack et la même température de déchargement, tout en offrant un profil en tasse totalement différent. La différence réside presque toujours dans la vitesse à laquelle les grains ont atteint ces paliers. Cette vitesse porte un nom : le **taux de montée (Rate of Rise ou RoR)**. Dès lors que l'on sait l'interpréter, c'est la courbe la plus précieuse et déterminante de votre graphique de cuisson.

> **Réponse rapide :** Le taux de montée (RoR - Rate of Rise) correspond à la vitesse à laquelle la température du grain augmente pendant la torréfaction, exprimée en degrés par minute (par exemple 10°C/min). Les logiciels de torréfaction tels qu'Artisan et Cropster le calculent à partir de la sonde de température du grain et le tracent sous forme d'une courbe séparée. Les maîtres torréfacteurs l'utilisent pour anticiper la trajectoire thermique et ajuster le brûleur, le flux d'air et la vitesse du tambour bien avant que d'éventuels défauts ne se manifestent en tasse.

---

## Qu'est-ce que le taux de montée (RoR) dans la torréfaction du café ?

Le taux de montée représente la variation de température du grain sur un intervalle de temps donné. D'un point de vue mathématique, il s'agit de la dérivée première de la courbe de température du grain (BT - Bean Temperature).

Une analogie simple permet de bien le visualiser : la température du grain vous indique **où** se trouve votre torréfaction ; le RoR vous indique **à quelle vitesse** elle s'y dirige et dans quelle direction.

* Un **RoR descendant** indique que la torréfaction ralentit son ascension thermique.
* Un **RoR ascendant** indique qu'elle accélère.
* Un **RoR proche de zéro** signifie que la torréfaction cale ou stagne (stalling).

Puisque le RoR réagit bien plus vite que la courbe de température brute elle-même, il sert de véritable système d'alerte précoce. [Cropster souligne](https://help.cropster.com/en_US/using-roasting-intelligence/about-rate-of-rise-ror) que la comparaison en direct de votre RoR avec une courbe de référence révèle les dérives 30 à 60 secondes avant qu'elles ne soient visibles sur la courbe de température du grain.

### RoR du grain vs RoR environnemental

La majorité des professionnels suivent deux courbes de RoR en simultané :

1. **RoR de température du grain (BT RoR) :** Mesuré par la sonde plongée au cœur de la masse des grains. C'est sur cette courbe que s'articulent la quasi-totalité des profils.
2. **RoR de température environnementale (ET RoR) :** Mesuré par la sonde placée dans l'atmosphère du tambour ou à l'extraction d'air. Lorsqu'un ET RoR grimpe brutalement en fin de cuisson, il avertit que le RoR du grain s'apprête à faire de même — constituant une alerte décisive pour prévenir un "flick".

---

## Comment le RoR est-il calculé ?

Le RoR s'obtient en divisant la variation de température par le temps écoulé :

<div class="my-6 overflow-x-auto rounded-xl border border-neutral-200/80 bg-neutral-100/60 p-5 text-center dark:border-neutral-700/60 dark:bg-neutral-900/60">
  <div class="inline-flex flex-wrap items-center justify-center gap-3 text-lg font-semibold text-neutral-800 dark:text-neutral-100 sm:text-xl">
    <span class="font-bold text-orange-600 dark:text-orange-400">RoR</span>
    <span>=</span>
    <span class="inline-flex flex-col items-center">
      <span class="border-b-2 border-neutral-700 px-2 pb-1 dark:border-neutral-300">T<sub>actuelle</sub> − T<sub>précédente</sub></span>
      <span class="px-2 pt-1">t<sub>actuel</sub> − t<sub>précédent</sub></span>
    </span>
    <span class="mx-2 text-neutral-400">=</span>
    <span class="inline-flex flex-col items-center">
      <span class="border-b-2 border-neutral-700 px-2 pb-1 dark:border-neutral-300">ΔT</span>
      <span class="px-2 pt-1">Δt</span>
    </span>
  </div>
</div>

* **Exemple concret :** Si votre sonde indique 175°C à 6:00 et 184°C à 7:00, l'élévation est de 9°C en une minute. Le RoR pour cette minute s'élève à **9°C/min**.

### Unités de RoR : par minute vs par 30 secondes

Une même fournée peut afficher des valeurs de RoR différentes selon l'unité paramétrée dans votre logiciel. Vérifiez systématiquement cette unité avant de comparer deux courbes.

| Valeur affichée | Unité | Équivalent par minute |
| :--- | :--- | :--- |
| **5** | °C / 30 s | 10°C/min |
| **10** | °C / 60 s | 10°C/min |
| **18** | °F / 60 s | 10°C/min |

Dans Cropster, changer l'expression temporelle ne modifie que l'unité affichée, sans altérer la forme de la courbe. Dans Artisan, le RoR est affiché par défaut en degrés par minute.

---

## Comment lire une courbe de RoR, phase par phase

Dans une torréfaction à tambour bien maîtrisée, la courbe de RoR augmente rapidement après l'enfournement, atteint son point culminant peu après le point de retournement (turning point), puis entame une descente fluide et progressive jusqu'au déchargement. Chaque phase possède sa propre dynamique et ses signes avant-coureurs.

| Phase de torréfaction | Comportement type du RoR | Points de vigilance |
| :--- | :--- | :--- |
| **Chargement au point de retournement** | Démarre en négatif (les grains froids absorbent l'énergie), puis remonte en flèche | L'heure et la température du turning point ; elles confirment si la température de charge était adaptée à la taille du lot. |
| **Pic de RoR (Peak RoR)** | Valeur maximale atteinte durant la cuisson, généralement dans les 2 à 3 premières minutes | Un pic tardif ou aplati traduit un manque d'énergie au départ. |
| **Phase de séchage (jusqu'au jaunissement)** | Amorce une descente régulière et continue | Bosses ou paliers, signalant généralement que la puissance thermique n'a pas été réduite à temps. |
| **Phase de Maillard (jaunissement au 1er crack)** | Poursuit sa descente à un rythme maîtrisé | Un RoR qui s'aplatit dans la minute précédant le 1er crack — le piège classique menant au crash. |
| **Premier crack** | Chute sous l'effet de l'évaporation d'humidité et des gaz | Une chute abrupte et vertigineuse (crash). |
| **Développement (après le 1er crack)** | Continue de descendre doucement vers la fin de cuisson | Une remontée tardive (flick), apparaissant en général 90 à 120 secondes après le début du 1er crack. |

### À quoi ressemble une « bonne » courbe de RoR

Il n'existe pas de chiffre absolu idéal, car la taille du lot, la conception du tambour, la densité du grain vert et le profil souhaité modifient les valeurs cibles. Ce que recherchent les professionnels chevronnés est avant tout une **forme** : une ligne descendante, continue et sans à-coups après le pic, sans plateaux stagnants, sans crash et sans rebond.

Ceci étant dit, le principe souvent enseigné du « RoR constamment décroissant » reste une ligne directrice et non un dogme absolu. Certains artisans maintiennent volontairement un RoR stable pendant la phase de Maillard pour révéler le corps de certains cafés. L'essentiel est que chaque variation de la courbe soit **délibérée, maîtrisée et reproductible**.

### Trois repères de RoR à consigner à chaque fournée

* **Pic de RoR :** Quantité d'énergie initiale emmagasinée.
* **RoR au premier crack :** Élan thermique avec lequel le grain aborde la phase de développement.
* **RoR au déchargement :** Douceur avec laquelle la torréfaction s'achève.

Consigner ces trois repères à chaque fournée est l'un des moyens les plus rapides pour détecter la moindre dérive dans votre régularité de production.

---

## Pourquoi le RoR est déterminant pour le profil aromatique

La vitesse à laquelle chaque phase est franchie détermine la synthèse des composés aromatiques et l'homogénéité de cuisson entre la surface et le cœur du grain.

| Profil de RoR | Résultat probable en tasse |
| :--- | :--- |
| **Trop élevé, trop longtemps** | Développement de surface plus rapide qu'au cœur ; notes acides agressives, astringence ; risque de brûlure superficielle (scorching/tipping). |
| **Trop faible ou décrochage** | Goût de pain, profil plat, fade et pâteux (« baked »), sucres et acidités étouffés. |
| **Crash au premier crack** | Caractère « cuit » et sans éclat, même si la durée totale semble normale. |
| **Flick en développement** | Notes amères de cendre, fumée, goût toasté excessif et perte de netteté aromatique. |
| **Descente fluide et continue** | Équilibre idéal entre sucres et acidité, avec un profil facile à reproduire d'un lot à l'autre. |

La nature du grain modifie également la dynamique du RoR :
* **Cafés de haute altitude denses :** Tolèrent et réclament davantage d'énergie.
* **Cafés traités par voie naturelle (naturels) :** Sont généralement moins sujets au crash lors du premier crack que les cafés lavés, d'après les analyses du [cours de torréfaction de Barista Hustle](https://www.baristahustle.com/lesson/htr-3-03-approaching-first-crack/).
* **Cafés décaféinés ou de faible densité :** Exigent une chauffe plus douce pour éviter toute accélération incontrôlée.

---

## Crash et Flick de RoR : causes et prévention

Un **RoR crash** est une chute subite et prononcée du RoR de grain au déclenchement du premier crack. Un **flick** est une remontée soudaine du RoR plus tard durant le développement, survenant fréquemment après un crash. Les crashs engendrent des tasses plates et pâteuses (« baked »), tandis que les flicks apportent des goûts cendrés et âcres. Ces concepts ont été largement popularisés par le consultant en torréfaction Scott Rao.

### Ce qui provoque un crash

* **Trop d'élan à l'approche du premier crack :** Si le RoR stagne ou remonte dans la minute précédant le crépitement, la libération massive d'humidité et de vapeur d'eau à l'ouverture de la fente fait chuter brutalement la sonde.
* **Baisse de chauffe trop tardive, puis excessive :** Réduire brutalement les gaz au moment précis où le premier crack éclate accentue la chute thermique.
* **Excès d'énergie pendant le séchage et le début de Maillard :** L'énergie emmagasinée dans le tambour et l'air chaud déstabilise la courbe dans le dernier tiers.

### Ce qui provoque un flick

* **Chaleur résiduelle excessive dans l'acier du tambour et l'environnement :** Une paroi de tambour trop chaude surchauffe la périphérie du grain par conduction excessive.
* **Réactions exothermiques du grain :** Durant le développement avancé, la dégradation cellulaire du bois libère de la chaleur interne que l'opérateur n'a pas anticipée.
* **Surcompensation :** Pas assez de réduction de gaz après le premier crack, ou tentative paniquée de réinjecter de la puissance suite à un crash précédent.

### Comment prévenir le crash et le flick : protocole type

Cette méthodologie, enseignée par [Barista Hustle](https://www.baristahustle.com/lesson/htr-3-03-approaching-first-crack/) et [Cropster](https://help.cropster.com/en/knowledge/how-to-use-flick-prediction) sur la base des travaux de Scott Rao, constitue une base solide pour des cuissons de 10 à 14 minutes sur torréfacteur à tambour :

1. **Maintenez le RoR en baisse continue vers le premier crack :** Pour les cafés lavés, réduisez l'apport thermique environ 45 secondes avant le début du premier crack pour empêcher tout aplatissement de la courbe.
2. **Conservez une puissance constante en tout début de développement :** Évitez de modifier brutalement le gaz entre 0% et 12% de ratio de temps de développement (DTR), ce qui aggraverait un crash naissant.
3. **Réduisez la chauffe par paliers successifs :** Diminuez la puissance thermique d'environ moitié à 12% DTR, réduisez à nouveau à 14% DTR, puis baissez encore (ou coupez) à 16% DTR.
4. **Surveillez l'ET RoR :** Une hausse de la température environnementale en fin de cuisson est le premier avertissement d'un flick imminent sur les grains.
5. **Agissez avec anticipation :** Le RoR réagit avec un temps de latence. Dès qu'un flick devient nettement visible à l'écran, il est souvent trop tard pour le corriger sur la fournée en cours.

Les torréfacteurs qui déchargent leurs grains à la fin immédiate du premier crack rencontrent rarement de flick majeur. Le risque s'accroît à mesure que la torréfaction s'oriente vers des profils plus foncés.

---

## Comment contrôler le RoR sur un torréfacteur à tambour commercial

Le contrôle du RoR repose sur cinq leviers fondamentaux. La puissance du brûleur est le levier principal ; les autres paramètres façonnent la façon dont l'énergie pénètre le grain.

| Variable | Effet sur le RoR | Remarque pratique |
| :--- | :--- | :--- |
| **Puissance du brûleur / gaz** | Action la plus directe : plus de gaz élève le RoR, moins de gaz l'abaisse | Les effets se manifestent avec un temps de retard ; ajustez 30 à 60 secondes avant l'effet souhaité. |
| **Flux d'air (Airflow)** | Augmente la chaleur convective au début mais peut refroidir l'enceinte ensuite ; évacue fumée et pellicules | Les variations soudaines d'air créent des pics ou creux de RoR : ajustez avec méthode et notez chaque palier. |
| **Vitesse du tambour** | Détermine la durée de contact du grain avec les parois et l'absorption conductive | Se calibre généralement une fois par profil plutôt que d'être modulée en pleine cuisson. |
| **Température de charge** | Fixe l'élan initial et détermine le turning point | Trop haute, elle risque de brûler le grain ; trop basse, elle cause un pic insuffisant et une cuisson amorphe. |
| **Taille de la fournée** | Les charges importantes absorbent plus d'énergie et réagissent plus lentement | Réajustez la température de charge et la puissance de chauffe lorsque le volume de lot varie. |

La réactivité de la machine est tout aussi cruciale que les commandes elles-mêmes. Un brûleur premix modulant réagit aux ajustements de gaz bien plus rapidement et fidèlement qu'un brûleur atmosphérique rudimentaire, rendant les réductions étagées autour du premier crack bien plus simples à exécuter. Un tambour à double paroi parfaitement isolé stocke la chaleur de façon homogène, évitant les surchauffes de surface responsables des flicks. Pour approfondir ces aspects techniques, consultez nos guides sur le [transfert de chaleur dans la torréfaction du café](https://krafferoasters.com/fr/blog/transfert-chaleur-torrefaction-cafe/) et le [contrôle du flux d'air sur torréfacteur commercial](https://krafferoasters.com/fr/blog/controle-flux-air-torrefacteurs-commerciaux/).

---

## Comment configurer le RoR dans Artisan

Dans Artisan, le réglage fondamental est le **Delta Span** : la fenêtre temporelle sur laquelle le logiciel calcule chaque valeur de RoR. Un intervalle plus large lisse la courbe mais engendre de la latence ; un intervalle plus court réagit instantanément mais laisse passer plus de bruit de signal.

1. **Réglez l'intervalle d'échantillonnage :** Allez dans `Config › Sampling`. Le [guide de démarrage rapide d'Artisan](https://artisan-scope.org/docs/quick-start-guide/) recommande de conserver les 3 secondes par défaut durant la phase d'apprentissage, puis de le réduire si vos capteurs le permettent.
2. **Activez les courbes de RoR :** Rendez-vous dans `Config › Curves › RoR` et cochez **BT RoR**. Activer également **ET RoR** vous apportera une détection précieuse des risques de flick.
3. **Ajustez le Delta Span :** Réglez-le à au moins deux fois votre intervalle d'échantillonnage (par exemple 6 secondes pour un échantillonnage de 3 s). La [documentation officielle d'Artisan](https://artisan-scope.org/docs/curves/) plafonne cette valeur à 30 secondes.
4. **Commencez sans lissage artificiel :** Définissez *Smooth Curves* et *Smooth Deltas* sur `0`, puis cochez *Drop Spikes* et *Smooth Spikes*. N'augmentez le lissage que très progressivement si le tracé s'avère illisible.
5. **Verrouillez vos axes :** Sous `Config › Axes`, fixez une plage de RoR constante (par exemple 0–25°C/min) afin que les profils de fournées successives soient comparables au premier coup d'œil.
6. **Chargez un profil d'arrière-plan :** Superposez une torréfaction de référence pour identifier les dérives en temps réel.

---

## Comment configurer le RoR dans Cropster

Dans Cropster Roasting Intelligence, le comportement du RoR se configure via un préréglage et une expression temporelle, accessibles sous `Préférences (icône engrenage) › Torréfaction › Rate of Rise`.

1. **Sélectionnez le profil de RoR :** [Cropster propose trois modes](https://help.cropster.com/en_US/using-roasting-intelligence/about-rate-of-rise-ror) : **Recommandé** (le réglage par défaut et idéal pour débuter), **Sensible** (proche du temps réel, pour installations sans interférences) et **Lissage du bruit** (pour machines sujettes aux perturbations électriques).
2. **Choisissez l'expression temporelle :** Elle définit l'unité affichée (par exemple °C/60 s ou °C/30 s). Elle met à jour les chiffres visibles sans modifier l'allure graphique de la courbe.
3. **Définissez une torréfaction de référence :** Affichez votre profil cible en filigrane pour corriger les écarts dès les premières secondes.
4. **Activez les prédictions intelligentes :** La prédiction de courbe projette la température et le RoR deux minutes dans le futur. La prédiction de flick est également proposée (nécessitant l'activation préalable de la prédiction du premier crack).
5. **Verrouillez l'échelle de l'axe RoR :** Figez l'échelle graphique pour assurer une cohérence visuelle constante entre vos fournées.

---

## Artisan vs Cropster pour la gestion du RoR

| Fonctionnalité | Artisan | Cropster |
| :--- | :--- | :--- |
| **Coût** | Gratuit, open-source | Abonnement payant |
| **Personnalisation RoR** | Ultra-précise : échantillonnage, Delta Span, lissage courbe et delta | Trois profils préconfigurés + intervalle temporel |
| **Courbes de référence** | Superposition d'un profil de fond | Superposition de référence et rapports comparatifs avancés |
| **Prédictions algorithmiques** | Lecture et interprétation manuelle | Prédiction de courbe, de 1er crack et de flick |
| **Idéal pour** | Torréfacteurs souhaitant un contrôle absolu sur chaque paramètre | Ateliers de production recherchant une suite unifiée (data, prédictions, stocks) |

Aucun des deux n'est intrinsèquement supérieur pour le RoR. Comme le rappelle Scott Rao dans ses [analyses techniques](https://www.scottrao.com/blog/2019/7/3/how-to-manage-roast-software-settings), il n'existe pas de paramètre magique universel : les réglages optimaux dépendent de la sensibilité de vos sondes et du blindage de votre équipement. Les torréfacteurs KRAFFE intègrent une compatibilité native complète avec Artisan et Cropster, vous laissant choisir selon vos habitudes de travail sans contrainte matérielle.

---

## Pourquoi le matériel de votre torréfacteur influence la courbe de RoR

Un logiciel ne peut analyser que le signal brut qu'il reçoit. Trois facteurs matériels dictent la fiabilité de votre courbe de RoR :

* **Diamètre et technologie de sonde :** Des thermocouples fins réagissent beaucoup plus promptement, réduisant l'écart temporel entre l'affichage et ce qui se déroule au cœur de la masse des grains. C'est pourquoi les torréfacteurs KRAFFE utilisent des thermocouples de 3 mm ultra-réactifs.
* **Positionnement de la sonde :** La sonde de grain doit être totalement immergée dans la masse en mouvement, quel que soit le volume chargé. Une sonde partiellement à l'air libre relève une moyenne bâtarde d'air et de grains, faussant lourdement le RoR.
* **Blindage contre le bruit électrique :** Les moteurs, variateurs et ventilateurs mal isolés injectent des parasites dans le signal. Un bruit électrique excessif contraint à forcer le lissage, ce qui introduit une latence néfaste.

La stabilité thermique de la machine est tout aussi déterminante. Un torréfacteur dont les pertes de chaleur varient d'une fournée à l'autre produira des courbes de RoR disparates malgré des réglages identiques. Un tambour à double paroi isolé et un protocole strict d'entre-deux-lots (between-batch protocol) neutralisent ces fluctuations.

---

## Erreurs courantes à éviter avec le RoR

1. **Sur-réagir à la courbe (chasing the curve) :** Corriger chaque micro-vibration déstabilise la cuisson. Privilégiez des interventions rares, franches et décisives.
2. **Abuser du lissage pour embellir le tracé :** Une courbe parfaitement lisse accusant 20 secondes de retard sur la réalité vous induit en erreur.
3. **Comparer des profils aux unités discordantes :** Un RoR de 5 sur 30 secondes et un RoR de 10 par minute traduisent exactement la même vitesse.
4. **Copier aveuglément les valeurs d'un confrère :** Les valeurs brutes ne sont pas transposables entre machines, volumes de charge ou sondes différentes. Reproduisez la silhouette générale de la courbe, puis étalonnez sur votre matériel.
5. **Négliger l'impact de la taille du lot :** Un profil élaboré pour 12 kg réagira tout à fait différemment avec 8 kg sur le même torréfacteur.
6. **Juger uniquement à l'écran :** Le RoR est un instrument d'analyse, pas une finalité. Le cupping reste le juge de paix absolu de tout profil de torréfaction.

Si vous souhaitez concevoir un profil étape par étape, notre [guide complet sur la création de profils de torréfaction](https://krafferoasters.com/fr/blog/guide-complet-creation-profils-torrefaction-cafe/) détaille la démarche pas à pas.

---

## Foire aux questions (FAQ) sur le Rate of Rise

### Qu'est-ce qu'un bon RoR en torréfaction du café ?
Il n'existe aucun chiffre universel. Tout dépend du modèle de torréfacteur, de la taille de fournée, de la densité du café vert et du style de torréfaction visé. Le critère fondamental demeure la régularité de la trajectoire : un pic net précoce suivi d'une descente harmonieuse jusqu'au déchargement, sans affaissement (crash) ni sursaut final (flick).

### Le RoR doit-il obligatoirement diminuer pendant toute la torréfaction ?
Après le pic initial, la trajectoire constamment descendante est la recommandation la plus éprouvée pour prévenir les goûts cuits ou cendrés. Ce n'est toutefois pas une obligation absolue : certains artisans choisissent de stabiliser le RoR pendant la réaction de Maillard sur certains terroirs, tant que cette décision est volontaire et reproductible.

### Qu'est-ce qui cause un RoR crash au premier crack ?
Le crash est le plus souvent provoqué par un élan thermique excessif à l'entrée du premier crack. Lorsque le RoR stagne ou remonte juste avant le crack, l'expulsion violente de vapeur d'eau refroidit brusquement la sonde. Réduire l'apport en gaz environ 45 secondes avant le premier crack permet d'amortir cette cassure.

### Comment éliminer le flick en fin de cuisson ?
Diminuez l'énergie thermique par étapes successives après le début du premier crack (par exemple des réductions de moitié à 12%, 14% et 16% de DTR). Surveiller le RoR environnemental (ET RoR) aide également, car celui-ci amorce sa remontée avant le RoR des grains.

### Qu'est-ce que le Delta Span dans Artisan ?
Le Delta Span est la durée, en secondes, utilisée par Artisan pour calculer chaque valeur instantanée de RoR. Un span plus étendu atténue les secousses de la courbe mais augmente la latence. Il doit équivaloir au minimum au double de l'intervalle d'échantillonnage, sans excéder 30 secondes.

### Quel mode de RoR choisir dans Cropster ?
Privilégiez le mode « Recommandé », configuré par les ingénieurs de Cropster pour convenir à l'immense majorité des torréfacteurs. Passez en mode « Sensible » uniquement si votre équipement est exempt de parasites électriques, ou en « Lissage du bruit » si la courbe tremble de façon marquée.

### Le RoR s'exprime-t-il par minute ou par 30 secondes ?
Les deux conventions coexistent. Artisan affiche par défaut le RoR par minute, tandis que Cropster permet de basculer entre les deux affichages. Un RoR de 5°C/30 s équivaut rigoureusement à 10°C/min : vérifiez toujours l'échelle avant toute analyse comparative.

---

## Conclusion : observez la vitesse, pas seulement la température

Le taux de montée métamorphose le graphique de torréfaction : d'un simple constat a posteriori, il devient un instrument prédictif de ce qui va se produire dans les prochaines secondes. Maîtrisez la silhouette idéale de votre courbe, traquez les crashs et les flicks, agissez avec 30 à 60 secondes d'anticipation et configurez Artisan ou Cropster pour obtenir un tracé lisible sans perdre en réactivité.

L'autre facette de la maîtrise thermique relève de la conception du torréfacteur : des brûleurs réactifs, une masse thermique stable et des sondes fidèles garantissent que chaque décision produit l'effet escompté. Les torréfacteurs commerciaux et industriels KRAFFE sont conçus selon ces exigences d'ingénierie, avec une compatibilité native complète avec Artisan et Cropster.

Prêt à hisser votre précision de torréfaction au niveau supérieur ? [Découvrez les torréfacteurs KRAFFE](https://krafferoasters.com/fr/products) ou [échangez avec notre équipe d'ingénieurs](https://krafferoasters.com/fr/contact) pour sélectionner l'équipement adapté à votre atelier.

---

### Sources

* [About Rate of Rise (RoR) — Cropster Help Center](https://help.cropster.com/en_US/using-roasting-intelligence/about-rate-of-rise-ror)
* [How to use the Flick Prediction — Cropster Help Center](https://help.cropster.com/en/knowledge/how-to-use-flick-prediction)
* [Curves — Artisan documentation](https://artisan-scope.org/docs/curves/)
* [Quick-Start Guide — Artisan documentation](https://artisan-scope.org/docs/quick-start-guide/)
* [HTR 3.03 Approaching First Crack — Barista Hustle](https://www.baristahustle.com/lesson/htr-3-03-approaching-first-crack/)
* [Idle noise, ROR intervals, and analyzing roast curves — Scott Rao](https://www.scottrao.com/blog/2019/7/3/how-to-manage-roast-software-settings)
