---
translationKey: "rate-of-rise-ror-explained"
title: "Tasa de Incremento (RoR) Explicada: Control de la Curva de Tueste"
metaTitle: "Tasa de Incremento (RoR) Explicada"
description: "Domine la tasa de incremento (RoR) en el tueste de café: interpretación por fases, prevención de crash y flick, y calibración en Artisan y Cropster."
author: "Kraffe Team"
authorImage: "@/images/blog/polat.jpeg"
authorImageAlt: "Avatar del equipo técnico de Kraffe"
pubDate: 2026-09-29T10:00:00Z
cardImage: "@/images/blog/Rate of Rise (RoR) Explained How to Read and Control Your Roast Curve in Artisan & Cropster.webp"
cardImageAlt: "Tasa de incremento (RoR) explicada: control de curvas en Artisan y Cropster"
readTime: 8
tags: ["tostadora de café", "tasa de incremento", "ror", "artisan scope", "cropster", "curva de tueste", "tostadora comercial", "tostadora de tambor", "perfiles de tueste", "kraffe roasters"]
keyTakeaways:
  - "El RoR mide la velocidad a la que se incrementa la temperatura, no la temperatura absoluta de los granos."
  - "En un tueste de tambor óptimo, el RoR alcanza su pico tras el turning point y desciende progresivamente hasta la descarga."
  - "Una caída brusca en el primer crack (crash) o un repunte tardío (flick) son los defectos más frecuentes de RoR, asociados a sabores planos o ahumados."
  - "El RoR se controla modulando la potencia del quemador, flujo de aire, velocidad de tambor y temperatura de carga, anticipando acciones de 30 a 60 segundos."
  - "En Artisan el parámetro esencial es Delta Span; en Cropster es el ajuste de RoR (Recomendado, Sensible o Filtro de ruido) junto a la expresión temporal."
---

Dos tuestes pueden alcanzar exactamente la misma temperatura de primer crack y la misma temperatura final de descarga, y sin embargo manifestar sabores completamente diferentes en taza. La discrepancia radica habitualmente en la velocidad térmica con la que los granos recorrieron cada fase. Esa velocidad tiene un nombre técnico: **tasa de incremento o Rate of Rise (RoR)**, y constituye la métrica más valiosa de su gráfica de tueste una vez que aprende a interpretarla con criterio.

> **Respuesta Rápida:** La tasa de incremento (RoR) es la velocidad a la que aumenta la temperatura de los granos de café durante el tueste, expresada en grados por minuto (por ejemplo, 10 °C/min). Los programas de perfilado como Artisan y Cropster la calculan en tiempo real a partir de la termocupla del grano y la representan como una curva independiente. Los tostadores profesionales utilizan el RoR para anticipar hacia dónde se dirige el tueste y ajustar la potencia del quemador, el tiro de aire y la rotación del tambor antes de que surjan defectos en la taza.

---

## ¿Qué es la tasa de incremento (RoR) en el tueste de café?

La tasa de incremento (RoR) es la variación de temperatura que experimentan los granos en un intervalo de tiempo determinado. Desde la perspectiva matemática, representa la primera derivada de la curva de temperatura del grano (BT).

Una analogía práctica para comprenderla: la temperatura del grano indica **dónde** se encuentra el tueste en cada momento; el RoR indica **a qué velocidad** avanza y hacia dónde se orienta la energía:

* Un **RoR en descenso continuo** indica que la tasa de calentamiento se desacelera de manera progresiva.
* Un **RoR en ascenso** significa que el tueste se está acelerando.
* Un **RoR cercano a cero** señala que el desarrollo térmico se ha estancado (stall).

Dado que la curva de RoR responde con mayor anticipación que la lectura directa de temperatura, actúa como un sistema de aviso previo. Plataformas como Cropster destacan que comparar el RoR en tiempo real contra un perfil maestro revela desvíos térmicos de 30 a 60 segundos antes de que se reflejen en la línea de temperatura del grano.

### RoR del grano (BT RoR) vs RoR ambiental (ET RoR)

La mayoría de los tostadores de especialidad monitorizan dos curvas de RoR simultáneamente:

1. **RoR de la temperatura del grano (BT RoR):** Registrado por la sonda inmersa en la masa de café. Es la curva de referencia sobre la que se articula el perfil.
2. **RoR de la temperatura ambiental o de escape (ET RoR):** Registrado por la sonda situada en la cámara de tostado o en la extracción de aire. Cuando el ET RoR se eleva de forma abrupta hacia el final del ciclo, suele alertar de que el BT RoR está a punto de repuntar, avisando con valiosos segundos de antelación sobre un posible flick.

---

## ¿Cómo se calcula el RoR?

El RoR se obtiene dividiendo la diferencia de temperatura entre el tiempo transcurrido:

<div class="my-6 overflow-x-auto rounded-xl border border-neutral-200/80 bg-neutral-100/60 p-5 text-center dark:border-neutral-700/60 dark:bg-neutral-900/60">
  <div class="inline-flex flex-wrap items-center justify-center gap-3 text-lg font-semibold text-neutral-800 dark:text-neutral-100 sm:text-xl">
    <span class="font-bold text-orange-600 dark:text-orange-400">RoR</span>
    <span>=</span>
    <span class="inline-flex flex-col items-center">
      <span class="border-b-2 border-neutral-700 px-2 pb-1 dark:border-neutral-300">T<sub>actual</sub> − T<sub>anterior</sub></span>
      <span class="px-2 pt-1">t<sub>actual</sub> − t<sub>anterior</sub></span>
    </span>
    <span class="mx-2 text-neutral-400">=</span>
    <span class="inline-flex flex-col items-center">
      <span class="border-b-2 border-neutral-700 px-2 pb-1 dark:border-neutral-300">ΔT</span>
      <span class="px-2 pt-1">Δt</span>
    </span>
  </div>
</div>

* **Ejemplo práctico:** Si la sonda de grano marca 175 °C en el minuto 6:00 y 184 °C en el minuto 7:00, la diferencia es de 9 °C en un minuto. El RoR de ese intervalo equivale a **9 °C/min**.

### Unidades de RoR: Por minuto vs cada 30 segundos

Un mismo lote puede mostrar valores numéricos distintos en pantalla dependiendo de la unidad configurada en su software. Compruebe siempre las unidades antes de contrastar curvas con otros profesionales o equipos:

| Valor en pantalla | Unidad configurada | Equivalente por minuto |
| :--- | :--- | :--- |
| **5** | °C / 30 s | 10 °C/min |
| **10** | °C / 60 s | 10 °C/min |
| **18** | °F / 60 s | 10 °C/min |

En Cropster, modificar la expresión temporal solo varía el número mostrado, sin alterar la geometría de la gráfica. En Artisan, el RoR se expresa por defecto en grados por minuto.

---

## Cómo interpretar la curva de RoR fase por fase

En un tueste en tambor bien conducido, el RoR se eleva con rapidez tras la carga, alcanza su valor máximo poco después del turning point y emprende un descenso suave y continuo hasta el momento de la descarga. Cada fase presenta su propio comportamiento y sus señales de alerta:

| Fase del tueste | Comportamiento típico del RoR | Parámetros a vigilar |
| :--- | :--- | :--- |
| **De carga a Turning Point** | Inicia en negativo (el café frío absorbe calor del metal) y luego repunta rápidamente | Tiempo y temperatura del punto de retorno; validan si la temperatura de carga fue la adecuada para el tamaño de lote. |
| **Pico de RoR (Peak RoR)** | Valor máximo de la curva, alcanzado en los primeros 2 a 3 minutos | Un pico tardío o excesivamente plano delata falta de energía térmica en la carga inicial. |
| **Fase de secado (hasta amarilleo)** | Inicia un descenso suave y continuo | Evitar mesetas o escalones planos, que indican que el aporte de gas no se redujo a tiempo. |
| **Fase de Maillard (amarilleo a crack)** | Continúa descendiendo a ritmo moderado | Cuidar que la curva no se aplane en el último minuto previo al crack, antesala común del crash. |
| **Primer crack** | Tiende a caer debido a la evaporación de vapor de agua y gases | Vigilar caídas abruptas y verticales (crash). |
| **Desarrollo (post-primer crack)** | Desciende de forma controlada hacia la descarga | Evitar repuntes al final de la curva (flick), habituales entre los 90 y 120 segundos tras el crack. |

### El aspecto de una curva de RoR armoniosa

No existe un valor numérico universal e idéntico para todos los cafés, ya que el tamaño del lote, el diseño del tambor y la densidad del grano condicionan las cifras. Lo que los maestros tostadores persiguen es la **forma de la curva**: una línea suavemente descendente tras el pico inicial, exenta de mesetas horizontales, colapsos térmicos (crash) o rebotes tardíos (flick).

Si bien el principio del RoR en declive constante es una directriz de oro, debe entenderse como una guía metodológica y no como un dogma rígido. Lo fundamental es que cada variación de la curva sea **deliberada, reproducible y confirmada en mesa de cata**.

### Tres hitos de RoR recomendados para cada registro

* **RoR Máximo (Peak RoR):** Refleja la energía térmica inicial transmitida al grano.
* **RoR al inicio del Primer Crack:** Indica la inercia energética con la que el café ingresa a la fase de desarrollo.
* **RoR en la Descarga:** Muestra con cuánta suavidad finalizó el proceso de caramelización.

El seguimiento de estos tres puntos a lo largo de las jornadas es la forma más rápida de detectar desviaciones operativas en la tostaduría.

---

## Influencia del RoR en el perfil sensorial

El RoR determina directamente qué familias de compuestos aromáticos se sintetizan y con qué homogeneidad se cocina el grano desde la superficie hasta su núcleo:

| Patrón de RoR | Impacto probable en la taza |
| :--- | :--- |
| **Demasiado alto durante mucho tiempo** | Desarrollo superficial por delante del núcleo; notas astringentes, agrias o riesgo de quemaduras en los extremos. |
| **Demasiado bajo o estancado** | Café horneado (baked), plano, con notas acartonadas y dulzor y acidez apagados. |
| **Caída abrupta (crash) en primer crack** | Pérdida de acidez viva y notas ahuecadas, aun cuando el tiempo total parezca normal. |
| **Repunte (flick) en desarrollo** | Sabores ahumados, cenizos o amargos con pérdida de nitidez aromática. |
| **Descenso constante y uniforme** | Dulzor y acidez balanceados, gran limpieza en taza y curvas fácilmente reproducibles. |

Las propiedades del grano verde también influyen en su comportamiento:
* Los cafés de altura y granos de alta densidad demandan y asimilan mayor entrega inicial de energía.
* Los cafés de proceso natural presentan menor propensión al crash en el primer crack que los cafés de proceso lavado.
* Los cafés descafeinados o de baja densidad exigen entregas térmicas más suaves para evitar embalamientos descontrolados.

---

## Crash y Flick del RoR: Causas y cómo prevenirlos

El **RoR crash** es una caída repentina y vertical en la velocidad de calentamiento del grano justo al iniciarse el primer crack. El **flick** es un repunte indeseado de la tasa de incremento hacia el final del desarrollo, frecuentemente posterior a un crash previo. El crash se asocia a sabores planos y horneados; el flick, a notas a ceniza y amargor. Ambos términos fueron ampliamente documentados por el especialista en tueste Scott Rao.

### Causas del Crash

* **Exceso de inercia térmica antes del primer crack:** Si el RoR se acelera o se mantiene plano en el minuto previo al crack, la repentina evaporación endotérmica de agua al romper el grano hace desplomar la temperatura bruscamente.
* **Reducción de gas tardía y desmedida:** Cortar la potencia de forma brusca justo cuando estalla el crack acentúa la caída de la curva.
* **Exceso de energía acumulada en el tambor durante el secado:** El calor residual acumulado desestabiliza la curva en las fases finales.

### Causas del Flick

* **Exceso de calor residual en las paredes del tambor:** Un tambor sobrecalentado tuesta por contacto directo las capas externas del grano deshidratado, provocando un tostado acelerado similar a un sellado superficial.
* **Reacciones exotérmicas internas del grano:** En el desarrollo final, la descomposición de la celulosa libera calor propio no compensado por el operador.
* **Sobrerreacción del operador:** Aumentar el gas de forma brusca para intentar compensar un crash previo.

### Protocolo para prevenir Crash y Flick

Este procedimiento escalonado representa un punto de partida contrastado para tuestes comerciales de 10 a 14 minutos en tostadoras de tambor:

1. **Asegurar un RoR descendente antes del crack:** En cafés lavados, disminuya la potencia de llama aproximadamente 45 segundos antes del inicio del primer crack para evitar que la curva se aplane.
2. **Mantener la potencia estable durante el inicio del desarrollo:** Evite cortar el gas entre el 0 % y el 12 % del ratio de desarrollo (DTR), lo que profundizaría el crash.
3. **Escalonar el descenso de gas:** Reduzca la llama aproximadamente a la mitad al 12 % de DTR, vuelva a atenuarla al 14 % de DTR y déjela al mínimo o apáguela al 16 % de DTR.
4. **Supervisar el ET RoR:** Una subida en el RoR de temperatura ambiental es la primera alerta visual de un flick inminente en los granos.
5. **Actuar con anticipación:** El RoR responde con inercia; cuando el repunte se hace evidente en pantalla, ya no es posible corregirlo en ese lote.

---

## Cómo controlar el RoR en una tostadora de tambor comercial

El tostador gobierna el RoR interactuando sobre cinco parámetros operativos esenciales:

| Variable | Efecto sobre el RoR | Recomendación práctica |
| :--- | :--- | :--- |
| **Potencia del quemador** | Control más directo: más potencia eleva el RoR; menor potencia lo reduce | La inercia térmica genera una demora de 30 a 60 segundos; ajuste con anticipación. |
| **Flujo de aire** | Incrementa la transferencia convectiva al inicio y evacúa cascarilla; en exceso enfría el tambor | Modifique el tiro de aire de forma gradual y anote cada cambio en el software. |
| **Velocidad del tambor** | Modula el tiempo de contacto de los granos con la pared y la mezcla | Se suele fijar como constante por receta en lugar de variarla a mitad del tueste. |
| **Temperatura de carga** | Determina la energía inicial del sistema y el turning point | Cargas demasiado calientes queman el exterior; cargas frías generan tuestes lentos y planos. |
| **Tamaño de lote** | Lotes mayores demandan más energía y reaccionan con más lentitud | Recalibre la temperatura de carga y potencia al alterar el peso del lote. |

La rapidez de reacción del equipo es tan determinante como los controles. Un quemador modulante premix responde a las variaciones de gas de manera inmediata en comparación con un quemador atmosférico convencional, lo que facilita ejecutar reducciones escalonadas alrededor del primer crack. Asimismo, un tambor de doble pared debidamente aislado absorbe y cede calor con suavidad, evitando sobrecalentamientos superficiales que derivan en flicks. Para profundizar en esta física, revise nuestras guías sobre [transferencia de calor en el tueste de café](/es/blog/transferencia-calor-tueste-cafe/) y [control del flujo de aire en tostadoras comerciales](/es/blog/control-flujo-aire-tostadoras-comerciales/).

---

## Configuración de RoR en Artisan

En Artisan, el parámetro primordial es el **Delta Span**: el intervalo de tiempo en segundos sobre el cual el software calcula la pendiente del RoR. Un lapso mayor suaviza la curva pero introduce retraso; un intervalo menor brinda inmediatez pero refleja más ruido eléctrico:

1. **Frecuencia de muestreo:** En `Configuración › Muestreo`, mantenga el valor inicial en 3 segundos.
2. **Habilitar curvas:** En `Configuración › Curvas › RoR`, active **BT RoR** y **ET RoR** para vigilar alertas de flick.
3. **Ajustar Delta Span:** Establezca un valor de al menos el doble del intervalo de muestreo (por ejemplo, 6 segundos para un muestreo de 3 segundos).
4. **Filtrado de picos:** En los ajustes de suavizado, comience con valores en `0` y active el descarte de picos (*Drop Spikes*). Aumente el suavizado solo si el gráfico muestra interferencias eléctricas severas.
5. **Fijar escalas de ejes:** En `Configuración › Ejes`, bloquee el rango de RoR (por ejemplo, de 0 a 25 °C/min) para comparar curvas de distintos días en igualdad de escala.
6. **Cargar perfil de referencia:** Superponga una curva maestra de fondo (*background profile*) para visualizar desvíos en tiempo real.

---

## Configuración de RoR en Cropster

En Cropster Roasting Intelligence, el comportamiento de la curva se calibra en `Preferencias › Tueste › Rate of Rise`:

1. **Ajuste de RoR:** Seleccione **Recomendado** (el valor equilibrado de fábrica), **Sensible** (para instalaciones limpias sin ruido eléctrico) o **Filtro de ruido**.
2. **Expresión temporal:** Elija la visualización en °C/60 s o °C/30 s según su criterio operativo.
3. **Cargar perfil maestro:** Seleccione el perfil objetivo como referencia superpuesta.
4. **Predicción inteligente:** Active la proyección visual de curva y la alerta de flick para prever la evolución del tueste con dos minutos de margen.
5. **Bloqueo de escala:** Fije la escala del eje vertical para garantizar coherencia visual lote tras lote.

---

## Factores de ingeniería que condicionan la señal de RoR

El software solo puede interpretar la información física que recibe de la máquina. Tres factores de hardware determinan la fidelidad de sus lecturas:

* **Diámetro y tipo de sonda:** Las termocuplas delgadas de 3 mm reaccionan mucho más rápido ante los cambios térmicos que las sondas gruesas de 6 mm, reduciendo drásticamente el desfase de la curva. En Kraffe instalamos termocuplas de 3 mm de respuesta inmediata por este motivo.
* **Ubicación de la sonda:** La termocupla debe hallarse completamente sumergida en la masa de café en movimiento. Si queda expuesta al aire libre del tambor, registrará una mezcla engañosa de aire y grano.
* **Estabilidad térmica estructural:** Una máquina con pérdidas térmicas irregulares arrojará curvas dispares aplicando los mismos parámetros. Tambores de fundición o doble pared con aislamiento cerámico mitigan estas variaciones.

---

## Errores habituales en el manejo del RoR

1. **Perseguir la curva en exceso:** Reaccionar a cada microoscilación del gráfico conduce a continuos bandazos de gas. Realice ajustes firmes y meditados.
2. **Sobresuavizar la gráfica para que parezca perfecta:** Una curva artificialmente lisa con 20 segundos de retraso oculta la realidad termodinámica del tambor.
3. **Comparar curvas con unidades distintas:** Un RoR de 5 °C cada 30 segundos equivale exactamente a 10 °C por minuto.
4. **Copiar cifras numéricas de otra tostaduría:** Las metas en números absolutos no son extrapolables entre máquinas con diferente masa térmica o grosor de sonda. Replique la forma geométrica de la curva y calibre según su cata.
5. **No calibrar al cambiar el peso del lote:** Un perfil diseñado para 12 kg responderá de forma distinta si se carga con 8 kg en el mismo equipo.
6. **Juzgar el resultado solo por la pantalla:** El RoR es un instrumento de control; la validación inapelable siempre se decide en la mesa de cata.

Para diseñar una curva desde sus cimientos, le recomendamos consultar nuestra [guía completa para crear perfiles de tueste de café](/es/blog/guia-creacion-perfiles-tueste-cafe/).

---

## Preguntas Frecuentes sobre la Tasa de Incremento

### ¿Cuál es un valor de RoR idóneo para tostar café?
No existe una cifra numérica única. Depende del tamaño de la tostadora, la densidad del café y el perfil deseado. Lo determinante es la geometría de la curva: un pico claro tras el turning point y un declive suave y constante hasta el final, sin caídas repentinas en el crack ni repuntes en el desarrollo.

### ¿Debe el RoR descender siempre a lo largo de todo el tueste?
Tras el pico inicial, el declive constante es la pauta más contrastada para evitar sabores planos o tostados. Sin embargo, algunos profesionales sostienen mesetas controladas en Maillard para cafés específicos con propósitos deliberados y repetibles.

### ¿Qué provoca el crash del RoR al comenzar el primer crack?
Se origina habitualmente por acumular demasiada energía antes de entrar al crack. La liberación masiva de vapor y la expansión de gases extraen calor del grano de golpe, haciendo caer la lectura si no se moduló la llama previamente.

### ¿Cómo se detiene el flick hacia el final del tueste?
Reduciendo el calor de forma escalonada tras el inicio del primer crack (por ejemplo, al 12 %, 14 % y 16 % de DTR) y monitorizando la curva de RoR ambiental para anticipar el repunte.

### ¿Qué representa el Delta Span en Artisan?
Es la ventana de tiempo en segundos empleada para calcular cada punto de RoR. Un lapso mayor produce curvas más suaves pero añade retraso; debe situarse al menos en el doble del intervalo de muestreo.

### ¿Se mide el RoR por minuto o cada 30 segundos?
Ambas unidades son válidas. Artisan emplea grados por minuto por defecto, mientras que Cropster permite alternar la escala. 5 °C cada 30 segundos equivale a 10 °C por minuto.

---

## Conclusión

La tasa de incremento transforma la gráfica de tueste de un simple registro histórico en una brújula predictiva de alta precisión. Aprender a interpretar sus fases, anticipar caídas y repuntes con 30 a 60 segundos de margen y calibrar su software le otorgará el control pleno sobre sus curvas.

La otra mitad del éxito reside en la propia tostadora: quemadores modulantes de alta sensibilidad, tambores de gran inercia y sondas ultrarrápidas garantizan que cada orden se ejecute al instante. Las tostadoras comerciales e industriales Kraffe están construidas bajo estos principios y ofrecen compatibilidad nativa con Artisan y Cropster.

¿Desea tostar con mayor precisión y consistencia? [Explore la gama de tostadoras Kraffe](/es/products/) o [consulte con nuestros especialistas](/es/contact/) sobre la solución idónea para su planta de producción.

---

## Fuentes

* [Cropster – Acerca de la Tasa de Incremento (RoR)](https://help.cropster.com/en_US/using-roasting-intelligence/about-rate-of-rise-ror)
* [Cropster – Cómo utilizar la predicción de Flick](https://help.cropster.com/en/knowledge/how-to-use-flick-prediction)
* [Artisan Scope – Documentación de Curvas](https://artisan-scope.org/docs/curves/)
* [Artisan Scope – Guía de Inicio Rápido](https://artisan-scope.org/docs/quick-start-guide/)
* [Barista Hustle – Aproximación al Primer Crack (HTR 3.03)](https://www.baristahustle.com/lesson/htr-3-03-approaching-first-crack/)
* [Scott Rao – Ruido en reposo, intervalos de RoR y análisis de curvas de tueste](https://www.scottrao.com/blog/2019/7/3/how-to-manage-roast-software-settings)
