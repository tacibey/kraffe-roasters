---
title: "Température du grain vs température environnementale : où placer les sondes thermocouples ?"
description: "Découvrez les différences fondamentales entre température du grain (BT) et température environnementale (ET), l'emplacement idéal des sondes, le choix des thermocouples et les diagnostics clés."
author: "Kraffe Team"
authorImage: "@/images/blog/polat.jpeg"
authorImageAlt: "Kraffe Technics Team Avatar"
pubDate: 2026-09-29
cardImage: "@/images/blog/Bean Temperature vs Environmental Temperature Where Should Thermocouples Be Placed.webp"
cardImageAlt: "Température du grain vs température environnementale : où placer les sondes thermocouples ?"
readTime: 8
tags: ["machine à torréfier le café", "température du grain", "température environnementale", "emplacement des thermocouples", "bt vs et", "sondes de torréfaction", "torréfacteur commercial", "torréfacteur à tambour", "artisan scope", "cropster", "kraffe roasters"]
keyTakeaways:
  - "Une sonde BT mesure la température de sa propre extrémité, influencée par les grains et l'air interstitiel — et non la température exacte au cœur du grain."
  - "La sonde BT doit rester entièrement immergée dans la masse de grains, même avec votre plus petite taille de lot habituelle."
  - "Une règle éprouvée consiste à insérer la sonde à une profondeur d'au moins 10 fois son diamètre pour éviter la conduction thermique de la paroi."
  - "Les sondes ET peuvent être situées dans l'air du tambour, l'échappement ou l'entrée d'air. Chaque emplacement donne une valeur différente."
  - "Les thermocouples non mis à la terre de type K ou J d'environ 3 mm sont recommandés pour leur équilibre optimal entre vitesse, stabilité et robustesse."
---

Chaque profil de torréfaction, chaque courbe de RoR et chaque cuisson de référence que vous enregistrez dépendent directement de la fidélité des sondes de température qui les alimentent. Déplacez une sonde de quelques centimètres, ou torréfiez un lot plus modeste qu'à l'accoutumée, et le même café semblera soudainement « entrer en premier crack » à une température totalement différente. C'est pourquoi le positionnement des sondes est l'un des détails les plus déterminants — et pourtant les plus négligés — dans un atelier de torréfaction commerciale.

> **Réponse rapide :** La température du grain (BT - Bean Temperature) est mesurée par une sonde entièrement immergée dans la masse de grains en mouvement, généralement située en bas de la face avant du tambour, du côté où les grains s'élèvent sous l'effet de la rotation. La température environnementale (ET - Environmental Temperature) est mesurée par une sonde placée dans l'air chaud, soit dans le tambour au-dessus des grains, soit dans le conduit d'échappement. La BT indique la réaction des grains ; l'ET montre la quantité d'énergie transmise par le torréfacteur. La majorité des artisans torréfacteurs suivent les deux courbes.

---

## Qu'est-ce que la température du grain (BT) mesure réellement ?

La température du grain est la valeur relevée par une sonde enfouie au cœur de la masse de café en rotation. Elle constitue le repère directeur pour identifier les jalons de torréfaction : le point de retournement (turning point), le jaunissement, le premier crack et le point de déchargement.

Il est tout aussi capital de comprendre ce que la BT **n'est pas**. Un thermocouple mesure la température d'équilibre de sa propre pointe métallique. Comme l'explique [Barista Hustle](https://www.baristahustle.com/lesson/htr-1-06-temperature-probes/), la valeur BT découle du contact direct avec la surface des grains et de l'air chaud circulant dans les interstices de la masse. Elle ne représente en aucun cas la température exacte au cœur d'un grain individuel.

Voilà pourquoi deux ateliers de torréfaction peuvent enregistrer le premier crack à 196°C et 204°C pour un même café vert, tout en ayant chacun raison : leurs sondes relèvent des conditions physiques différentes.

---

## Qu'est-ce que la température environnementale (ET) mesure réellement ?

La température environnementale est le relevé d'une sonde positionnée dans le flux d'air chaud et non dans les grains. Elle indique l'intensité thermique transmise par la machine et la rapidité avec laquelle l'atmosphère de cuisson évolue.

Le terme « ET » ne renvoie pas à un emplacement universellement standardisé. Selon les constructeurs, il peut désigner :

1. **La température de l'air du tambour :** Une sonde installée dans la partie haute du tambour, bien au-dessus de la masse de grains.
2. **La température d'échappement :** Une sonde placée dans la gaine d'extraction des fumées, juste avant la turbine d'aspiration.
3. **La température de l'air entrant (inlet) :** Une sonde mesurant l'air chauffé par le brûleur avant son introduction dans le tambour.

Chacune de ces positions livre des valeurs très différentes au fil de la cuisson. Avant de comparer vos chiffres d'ET avec un autre torréfacteur, vérifiez toujours l'emplacement physique exact de ses capteurs.

---

## Température du grain vs température environnementale : principales différences

La BT indique le comportement du café ; l'ET indique le comportement de la machine. Les deux sont indispensables pour décrypter les relations de cause à effet thermique.

| Caractéristique | Température du grain (BT) | Température environnementale (ET) |
| :--- | :--- | :--- |
| **Ce qu'elle mesure** | La pointe de la sonde au sein de la masse (grains + air interstitiel) | L'air chaud dans le tambour, l'échappement ou l'admission |
| **Positionnement classique** | Bas de la face avant du tambour, côté montée des grains | Partie haute du tambour, conduit d'échappement ou d'entrée |
| **Comportement en cuisson** | Chute après le chargement puis remonte continuellement ; inférieure à l'ET | Généralement supérieure à la BT durant la quasi-totalité du cycle |
| **Utilisation majeure** | Jalons de torréfaction, température de fin, RoR de grain | Gestion énergétique, préchauffe, protocole entre-lots, alerte de flick |
| **Facteurs d'influence** | Taille du lot, immersion de la sonde, vitesse du tambour | Réglages du débit d'air et puissance du brûleur |
| **Rôle en automatisation** | Suivi de profils et reproductibilité des cuissons | Température d'enfournement et régulation gaz/air |

### Pourquoi suivre les deux courbes simultanément

* **Diagnostic des dysfonctionnements :** Si le RoR de grain stagne alors que l'ET grimpe en flèche, l'énergie thermique ne pénètre pas efficacement la masse — signe classique d'un débit d'air inadapté ou d'une vitesse de rotation mal calibrée.
* **Anticipation du flick :** Une remontée marquée de l'ET RoR en fin de torréfaction précède presque systématiquement le flick du grain. Pour en savoir plus, consultez notre guide sur le [taux de montée (RoR) expliqué](https://krafferoasters.com/fr/blog/taux-de-montee-ror-explique/).
* **Préchauffage et protocoles d'entre-deux-lots rigoureux :** L'ET (ou une sonde dédiée au tambour) s'avère bien plus fiable qu'une sonde BT dans un tambour vide pour juger si la masse thermique de la machine est stabilisée et prête pour l'enfournement.

---

## Où placer la sonde de température du grain (BT) ?

La sonde BT doit être positionnée en bas de la façade avant, du côté où les grains sont soulevés par la rotation du tambour, de manière à rester totalement immergée dans le lit de café tout au long de la torréfaction.

```
       Rotation du Tambour (Sens Anti-horaire)
                 [  Sommet  ]
             /                \
            |                  |
   Extraction                  |
            |       Grains     |
             \     /~~~~~~\   /  <-- Sonde BT installée ici
                 [~ Fond ~]           (côté ascension des grains)
```

### 1. Choisir le bon côté du tambour
Dans un torréfacteur à chargement frontal, la masse de grains ne stagne pas au centre du fond. La rotation l'entraîne vers le haut d'une paroi :
* Un **tambour tournant dans le sens horaire** accumule les grains dans le quadrant inférieur gauche.
* Un **tambour tournant dans le sens anti-horaire** accumule les grains dans le quadrant inférieur droit.

La sonde BT doit impérativement être implantée dans ce quadrant inférieur, du côté ascendant.

### 2. Calibrer la hauteur pour votre plus petit lot
La sonde doit rester totalement recouverte de grains lors de votre plus petite taille de fournée courante, et pas seulement à pleine capacité. Si la sonde est immergée à 12 kg mais partiellement à découvert à 6 kg, vous mesurerez deux environnements distincts, empêchant tout transfert de profil entre volumes différents. Plus votre charge minimale est petite, plus la sonde doit être positionnée bas.

### 3. Respecter la profondeur d'immersion
Une règle d'ingénierie reconnue, mentionnée par [Barista Hustle](https://www.baristahustle.com/lesson/rs-4-08-probe-size-and-placement/), préconise que la sonde pénètre dans l'enceinte sur une longueur minimale de **10 fois son diamètre**. Pour une sonde de 3 mm, cela correspond à **30 mm** entièrement enfouis dans la masse en mouvement. Une insertion trop superficielle permet à la chaleur transmise par conduction depuis la façade métallique de fausser l'extrémité thermosensible.

### 4. Limiter la conduction thermique du châssis
La sonde traverse une plaque frontale métallique qui emmagasine une chaleur intense. L'utilisation d'une bague de montage isolante ou d'un doigt de gant adapté empêche la chaleur de se propager le long du fourreau et de gonfler artificiellement les mesures.

### 5. Préserver le jeu mécanique avec les pales
La sonde ne doit en aucun cas effleurer les pales de brassage, les aubes ou la virole interne du tambour. Vérifiez toujours les dégagements mécaniques en faisant tourner le tambour à la main, puis en conditions d'exploitation réelle.

### 6. Ne plus déplacer la sonde une fois les profils créés
Une fois le positionnement arrêté, considérez-le comme immuable. Déplacer la sonde ne serait-ce que de quelques millimètres décalera toutes vos températures repères et rendra obsolètes vos profils et courbes de référence.

---

## Où placer la sonde de température environnementale (ET) ?

La sonde ET doit être installée dans un flux d'air chaud stable, à l'écart de tout contact avec les grains verts ou torréfiés. Trois emplacements existent, répondant chacun à un objectif précis :

| Position de l'ET | Ce qu'elle indique | Avantages | Contraintes |
| :--- | :--- | :--- | :--- |
| **Dans le tambour, au-dessus des grains** | La température de l'air auquel les grains sont exposés | Mesure au plus près de la zone de torréfaction ; idéale pour les protocoles d'entre-deux-lots | Doit impérativement être hors de portée des grains lors de la charge et à capacité maximale |
| **À l'échappement, avant la turbine** | L'énergie thermique quittant le tambour après contact avec les grains | Réagit instantanément aux modulations du flux d'air ; standard pour la sécurité thermique | Sensible à la longueur des gaines, aux dépôts de pellicules et au registre d'air |
| **À l'admission d'air, avant le tambour** | L'énergie thermique directement transmise par le brûleur | Vision directe de la réactivité du brûleur ; très utile pour la régulation automatisée | Renseigne peu sur ce qui se produit effectivement au cœur de la masse des grains |

### Règles pratiques de placement pour l'ET

1. **Garantir l'absence totale de contact avec les grains :** Si des grains projetés heurtent la sonde ET lors de l'enfournement ou du brassage, le signal devient un hybride parasité de température de grain et d'air.
2. **Éviter le rayonnement direct des flammes ou des parois incandescentes :** Une sonde placée en vis-à-vis direct des rampes de gaz ou de parois surchauffées mesurera le rayonnement infrarouge plutôt que la température réelle de l'air.
3. **Garder une stricte cohérence d'un torréfacteur à l'autre :** Conservez le même emplacement physique d'ET sur toutes les machines de votre parc pour permettre la portabilité de vos réglages de puissance.
4. **Envisager l'ajout d'une troisième sonde :** Beaucoup d'ateliers professionnels surveillent en simultané la BT, l'ET dans le tambour et la température d'échappement. Artisan et Cropster gèrent nativement ces canaux multiples.

---

## Quel type et quel diamètre de sonde privilégier ?

Pour la plupart des torréfacteurs à tambour commerciaux, le **thermocouple non mis à la terre de type K ou J d'environ 3 mm de diamètre** s'impose comme la solution de référence. Il offre le juste compromis entre réactivité, filtration du bruit de signal et résistance mécanique.

### L'impact du diamètre sur l'allure de la courbe

Des sondes plus épaisses possèdent une inertie thermique plus forte : elles chauffent et refroidissent avec retard, produisant une courbe artificiellement lissée mais décalée. Lors d'essais [rapportés par Barista Hustle](https://www.baristahustle.com/lesson/rs-4-08-probe-size-and-placement/) sur la base des recherches du torréfacteur Rob Hoos, la sonde la plus épaisse mesurait jusqu'à 7°C de moins en fin de fournée par rapport à la plus fine sur le même lot, tout en affichant un point de retournement retardé.

| Diamètre de sonde | Vitesse de réaction | Bruit de signal | Résistance mécanique | Utilisation courante |
| :--- | :--- | :--- | :--- | :--- |
| **1.5–2 mm** | Ultra-rapide | Élevé | Fragile dans les grosses charges de café | Torréfacteurs d'échantillons, laboratoires de R&D |
| **~3 mm** | Rapide | Modéré | Excellente | Recommandé pour les sondes BT commerciales |
| **5–6 mm** | Lente (retard et lissage) | Faible | Indestructible | Anciennes machines industrielles ; masque les variations de RoR |

### Thermocouple vs Sonde RTD (PT100)

* **Thermocouples :** La norme de l'industrie du café de spécialité. Rapides, économiques et robustes, avec une précision courante de ±1°C.
* **Sondes RTD (ex. PT100) :** Offrent une précision métrologique supérieure (±0,1°C d'après [RoastLog](https://support.roastlog.com/en/articles/3400712-using-rtd-temperature-sensors)) et un tracé très net. Elles sont en contrepartie plus fragiles mécaniquement, plus lentes à réagir et exigent des cartes d'acquisition compatibles.

En production quotidienne, **la reproductibilité prime sur la précision absolue**. Un thermocouple rapide et invariable placé au bon endroit surpasse une sonde de laboratoire sujette à la latence.

### Sondes mises à la terre vs non mises à la terre

* **Sondes mises à la terre (grounded) :** La jonction thermoélectrique est soudée au fourreau. Elles réagissent un cheveu plus vite mais captent facilement les interférences électromagnétiques des moteurs et variateurs.
* **Sondes non mises à la terre (ungrounded) :** La jonction est isolée électriquement du fourreau extérieur, offrant une courbe propre exempte de parasites. Barista Hustle et les constructeurs de pointe recommandent les sondes non mises à la terre. Les torréfacteurs KRAFFE sont équipés en standard de thermocouples 3 mm non mis à la terre.

---

## Problèmes courants de placement de sonde et diagnostics

La majorité des défaillances de sondes se traduisent par des graphiques en désaccord avec vos perceptions sensorielles (vue, odeur, son du crack). Ce tableau vous permet de cibler la cause :

| Symptôme observé | Cause probable | Vérifications à effectuer |
| :--- | :--- | :--- |
| **La température du 1er crack varie selon la taille du lot** | Sonde BT partiellement exposée à l'air sur petits lots | Vérifier la hauteur de la sonde par rapport au lit de grains de votre charge minimale. |
| **Point de retournement extrêmement tardif et bas** | Sonde trop épaisse ou profondeur d'immersion insuffisante | Contrôler le diamètre (~3 mm) et assurer au moins 10 fois le diamètre en immersion. |
| **Courbe de BT ou de RoR hérissée de pics parasites** | Bruit électrique, sonde endommagée, tresse de blindage coupée | Inspecter le câblage et le blindage ; tester le signal moteurs allumés puis éteints. |
| **BT anormalement élevée en tout début de torréfaction** | La sonde touche le tambour ou capte la conduction de la façade | S'assurer du jeu mécanique et installer des raccords isolants. |
| **Saut brutal de l'ET au moment de l'enfournement** | Les grains tombants heurtent directement la sonde ET | Repositionner la sonde ET hors de la trajectoire de déversement de la trémie. |
| **Profils non transposables entre deux machines identiques** | Profondeurs d'insertion, angles ou modèles de sonde différents | Aligner la référence, la pénétration et le positionnement exact sur chaque machine. |

### Comment étalonner et vérifier vos sondes

* **Test de l'eau bouillante :** Démontez la sonde (ou contrôlez un capteur de secours identique) et plongez-la dans une eau en franche ébullition aux côtés d'un thermomètre étalon certifié. Tenez compte de votre altitude géographique.
* **Offset logiciel :** Si une sonde affiche un écart régulier et constant (par exemple +1.5°C), appliquez un décalage de calibration dans Artisan ou Cropster plutôt que de modifier le matériel.
* **Contrôle du bruit à vide :** Avec le tambour préchauffé et les moteurs en marche, observez la ligne de RoR au repos. Elle doit demeurer quasi plate près de zéro. Des soubresauts trahissent un problème de masse ou de blindage.
* **Remplacement à l'identique :** En cas de défaillance, remplacez la sonde par un modèle strictement similaire (même diamètre, même type de thermocouple, même longueur et profondeur de montage).

---

## Comment le placement de sonde influence le RoR et le transfert de profils

Toutes les métriques logicielles — tout particulièrement le Rate of Rise — résultent d'un calcul mathématique appliqué au signal de la sonde. Une sonde BT lente ou mal immergée retarde le turning point, rabote le pic de RoR et camoufle les véritables crashs ou flicks subis par le café.

### Pourquoi « le premier crack à 200°C » n'est pas une vérité universelle

Les températures repères ne font sens que sur la machine et la configuration de sonde précises où elles ont été relevées. Un profil partagé par un confrère ne s'adaptera presque jamais tel quel sur votre équipement :

* Sa sonde BT peut être plus fine, plus longue ou inclinée différemment.
* Son ET peut relever l'air supérieur du tambour alors que la vôtre surveille l'échappement.
* Des différences de convection ou de vitesse de rotation altèrent le ratio de contact air/grain à la surface de la sonde.

### La méthode pour transférer un profil d'une machine à une autre

1. **Fondez-vous sur les événements physiques :** Reproduisez en priorité la chronologie et la durée de chaque phase (turning point, phase de séchage, déclenchement du 1er crack, ratio de temps de développement).
2. **Reproduisez la silhouette du RoR :** Copiez la forme de la courbe (moment du pic, régularité de la descente) plutôt que des valeurs thermiques chiffrées.
3. **Réétalonnez vos jalons thermiques :** Observez à quelle température réelle le premier crack survient sur votre équipement, et réajustez vos températures de charge et de déchargement en conséquence.
4. **Validez par la dégustation (cupping) :** Les graphiques orientent la cuisson, mais seule la tasse confirme la réussite du transfert.

Dans un atelier exploitant plusieurs torréfacteurs, standardiser les sondes (type, diamètre et profondeur) sur chaque unité est le secret d'une production reproductible. Pour découvrir l'ingénierie qui sous-tend la stabilité thermique de nos machines, lisez notre article sur la [conception des torréfacteurs professionnels](https://krafferoasters.com/fr/blog/comment-torrefacteurs-professionnels-sont-concus/).

---

## Foire aux questions (FAQ)

### Quelle est la différence fondamentale entre BT et ET en torréfaction ?
La BT (température du grain) mesure la chaleur absorbée par la masse de café en mouvement. L'ET (température environnementale) mesure la température de l'air chaud dans le tambour, l'échappement ou l'entrée d'air, reflétant la puissance thermique injectée. L'ET est habituellement plus élevée que la BT pendant la cuisson.

### Où positionner la sonde de grain sur un torréfacteur à tambour ?
Installez-la dans la façade avant inférieure, sur le côté où la rotation du tambour soulève le café. Elle doit être continuellement recouverte par les grains lors de vos plus petits lots et s'enfoncer d'au moins 10 fois son propre diamètre à l'intérieur du tambour.

### Où positionner la sonde de température environnementale (ET) ?
La sonde ET doit être logée dans un flux d'air chaud stable, totalement hors de portée des grains : dans la partie supérieure du tambour, dans la buse d'extraction avant la turbine, ou dans la gaine d'admission. Conservez la même position sur l'ensemble de votre parc de machines.

### Quel diamètre de thermocouple est idéal pour la torréfaction ?
Un thermocouple non mis à la terre de type K ou J d'environ 3 mm est recommandé. Les sondes de 1.5 mm sont réactives mais fragiles ; les sondes de 5 à 6 mm sont robustes mais induisent une latence qui masque les variations rapides de RoR.

### Une sonde RTD est-elle préférable à un thermocouple ?
Les RTD offrent une précision de laboratoire et un signal très propre, mais les thermocouples réagissent plus vite, supportent mieux les vibrations industrielles et coûtent moins cher. La cohérence du placement importe davantage que la technologie du capteur.

### Pourquoi ma température de premier crack change-t-elle avec la taille du lot ?
La cause la plus fréquente est une sonde BT qui n'est plus totalement submergée dans les petits lots, mesurant alors un mélange d'air et de grains. Abaisser la fixation de la sonde ou déterminer une taille de lot minimale remédie à cette dérive.

### La température du grain reflète-t-elle la température au cœur de la fève ?
Non. Le thermocouple mesure l'équilibre thermique de sa propre pointe, soumise au contact de la peau des grains et de l'air ambiant. La BT constitue un repère de comparaison fiable et indispensable, mais pas une mesure interne au cœur de la fève.

---

## Conclusion : des sondes constantes pour des torréfactions constantes

La BT vous renseigne sur le café ; l'ET vous renseigne sur le torréfacteur. Implantez la sonde de grain en bas du tambour du côté ascendant, assurez-vous qu'elle est immergée même sur vos plus petites fournées, et positionnez votre sonde ET dans un flux d'air propre. Optez pour des thermocouples réactifs de 3 mm et verrouillez définitivement leur position.

Les torréfacteurs commerciaux et industriels KRAFFE intègrent ces exigences d'ingénierie dès leur conception : thermocouples réactifs de 3 mm, tambours isolés à double paroi et compatibilité native avec Artisan et Cropster.

Vous préparez l'ouverture d'un atelier ou souhaitez améliorer la régularité de vos fournées ? [Découvrez la gamme de torréfacteurs KRAFFE](https://krafferoasters.com/fr/products) ou [contactez notre équipe d'ingénieurs](https://krafferoasters.com/fr/contact) pour configurer la machine idéale.

---

### Sources

* [HTR 1.06 Temperature Probes — Barista Hustle](https://www.baristahustle.com/lesson/htr-1-06-temperature-probes/)
* [RS 4.08 Probe Size and Placement — Barista Hustle](https://www.baristahustle.com/lesson/rs-4-08-probe-size-and-placement/)
* [Coffee Roasting Probes and Tips on Using Them — Perfect Daily Grind](https://perfectdailygrind.com/2020/05/coffee-roasting-probes-and-tips-on-using-them/)
* [Using RTD temperature sensors — RoastLog](https://support.roastlog.com/en/articles/3400712-using-rtd-temperature-sensors)
