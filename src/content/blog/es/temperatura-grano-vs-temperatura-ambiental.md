---
translationKey: "bean-temperature-vs-environmental-temperature"
title: "Temperatura de Grano vs Ambiental en Tueste de Café"
metaTitle: "Temperatura de Grano vs Ambiental en Tueste"
description: "Diferencias clave entre temperatura del grano (BT) y ambiental (ET), ubicación de termocuplas, sondas de 3 mm y diagnóstico para un tueste consistente."
author: "Kraffe Team"
authorImage: "@/images/blog/polat.jpeg"
authorImageAlt: "Avatar del equipo técnico de Kraffe"
pubDate: 2026-09-29T20:00:00Z
cardImage: "@/images/blog/Bean Temperature vs Environmental Temperature Where Should Thermocouples Be Placed.webp"
cardImageAlt: "Sonda de temperatura de grano y temperatura ambiental en tostadora de tambor"
readTime: 8
tags: ["máquina tostadora de café", "temperatura del grano", "temperatura ambiental", "ubicación de termocuplas", "bt vs et", "sondas de tueste", "tostadora comercial", "tostadora de tambor", "artisan scope", "cropster", "kraffe roasters"]
keyTakeaways:
  - "La sonda BT mide la temperatura de su propia punta, influenciada por el contacto con los granos y el aire intersticial, no el núcleo exacto del grano."
  - "La sonda BT debe permanecer totalmente sumergida en la masa de granos incluso con su tamaño de lote habitual más reducido."
  - "Se recomienda insertar la sonda a una profundidad de al menos 10 veces su diámetro para evitar distorsiones por conducción de la pared frontal."
  - "Las sondas ET se ubican en el aire del tambor, el escape o la entrada de aire; cada posición ofrece valores distintos no intercambiables."
  - "Las termocuplas no aterrizadas tipo K o J de aproximadamente 3 mm representan el estándar de oro en equilibrio entre rapidez, señal limpia y durabilidad."
---

# Temperatura del Grano vs. Temperatura Ambiental: ¿Dónde Deben Colocarse las Termocuplas?

Cada perfil de tueste, curva de RoR y receta de referencia que usted guarda en su sistema es tan confiable como las sondas de temperatura que la registran. Si mueve una sonda unos pocos centímetros, o tuesta un lote más pequeño de lo habitual, el mismo café verde puede registrar el inicio del primer crack a una temperatura completamente diferente. Por esta razón, la ubicación de las sondas es uno de los detalles más críticos —y frecuentemente ignorados— en una tostaduría comercial.

> **Respuesta Rápida:** La temperatura del grano (BT - Bean Temperature) se mide con una sonda completamente sumergida en la masa de café en movimiento, situada habitualmente en la parte inferior frontal del tambor, en el lado donde los granos se elevan por la rotación. La temperatura ambiental (ET - Environmental Temperature) se mide con una sonda expuesta al flujo de aire caliente, ya sea en la parte superior del tambor o en el conducto de extracción. La BT indica cómo responde el café; la ET refleja cuánta energía térmica entrega la máquina. La mayoría de los tostadores profesionales monitorizan ambas variables.

---

## ¿Qué Mide Realmente la Temperatura del Grano (BT)?

La temperatura del grano es la lectura proporcionada por una sonda introducida en el corazón de la masa de café en rotación. Es la referencia fundamental para los hitos del tueste: punto de inflexión o retorno (turning point), fase de cambio de color (amarilleo), primer crack y punto de descarga.

Resulta igualmente crucial entender qué **no** es la BT. Una termocupla mide exclusivamente la temperatura de equilibrio de su propia punta metálica. Como explica [Barista Hustle](https://www.baristahustle.com/lesson/htr-1-06-temperature-probes/), la lectura de BT proviene del contacto superficial con los granos y del aire caliente que circula en los espacios intersticiales entre ellos. No representa la temperatura central interna de cada grano individual.

Por ello, dos tostadores pueden observar el primer crack a 196 °C y a 204 °C tostando el mismo lote de café verde y tener ambos absoluta razón: sus sondas están midiendo bajo condiciones físicas distintas.

---

## ¿Qué Mide Realmente la Temperatura Ambiental (ET)?

La temperatura ambiental es el registro de una sonda colocada directamente en la corriente de aire caliente, sin contacto con los granos. Revela cuánta energía térmica está suministrando la máquina y con qué velocidad evoluciona el ambiente interior.

Es importante señalar que la denominación «ET» no corresponde a una posición única estandarizada en la industria. Según el fabricante, puede referirse a:

1. **Temperatura del aire del tambor:** Sonda montada en la parte superior del tambor, claramente por encima de la masa de granos.
2. **Temperatura de escape:** Sonda situada en el conducto de salida de humos, justo antes del ventilador de extracción.
3. **Temperatura del aire de entrada:** Sonda que mide el aire calentado por el quemador inmediatamente antes de ingresar a la cámara de tostado.

Cada punto genera lecturas distintas a lo largo del proceso. Antes de comparar curvas de ET con otro tostador o entre modelos de máquinas, compruebe siempre la ubicación física exacta de las sondas.

---

## Temperatura del Grano vs. Temperatura Ambiental: Diferencias Clave

La BT indica qué le está ocurriendo al café; la ET indica qué está haciendo la máquina. Se requieren ambas lecturas para entender la relación de causa y efecto térmico.

| Característica | Temperatura del Grano (BT) | Temperatura Ambiental (ET) |
| :--- | :--- | :--- |
| **Qué mide** | Punta de la sonda en la masa (granos + aire intersticial) | Aire caliente en el tambor, escape o entrada |
| **Ubicación típica** | Parte inferior frontal del tambor, lado de subida de granos | Parte superior del tambor, conducto de escape o admisión |
| **Comportamiento en el tueste** | Cae tras la carga y luego sube de forma constante; inferior a ET | Generalmente superior a BT durante casi todo el ciclo |
| **Uso principal** | Hitos de tueste, temperatura de descarga, RoR del grano | Aporte energético, precalentamiento, protocolo entre lotes, prevención de flick |
| **Mayor sensibilidad a** | Tamaño del lote, inmersión de la sonda, velocidad del tambor | Modulación del flujo de aire y potencia del quemador |
| **Uso en automatización** | Seguimiento de perfiles y repetición de recetas | Temperatura de carga y lógica de control de gas/aire |

### Por Qué Conviene Registrar Ambas Curvas

* **Diagnóstico de anomalías:** Si el RoR de la BT se estanca mientras la ET continúa subiendo, el calor no se está transfiriendo eficazmente a los granos, lo que habitualmente señala un desequilibrio de flujo de aire o de velocidad del tambor.
* **Anticipación del flick:** Un incremento súbito en el RoR de la ET precede casi siempre a un flick no deseado en el RoR del grano. Puede profundizar en nuestra guía detallada sobre la [tasa de incremento (RoR)](/es/blog/tasa-de-incremento-ror-explicada/).
* **Protocolos consistentes entre lotes:** La ET, o una sonda dedicada al tambor, resulta mucho más confiable que una lectura de BT en tambor vacío para saber cuándo la máquina ha recuperado su equilibrio térmico y está lista para la siguiente carga.

---

## ¿Dónde Debe Colocarse la Sonda de Temperatura del Grano?

La sonda BT debe ubicarse en la parte inferior de la placa frontal del tambor, específicamente en el lado donde los granos ascienden por la rotación, garantizando que permanezca completamente sumergida durante todo el ciclo.

```
       Rotación del Tambor (Sentido Antihorario)
                 [  Parte Superior  ]
              /                        \
             |                          |
       Escape|                          |
             |          Granos          |
              \       /~~~~~~~~\       /  <-- Sonda BT montada aquí
                 [~Parte Inferior~]           (en el lado de subida de granos)
```

### 1. Seleccione el Lado Correcto del Tambor
En una tostadora de tambor de carga frontal, la masa de granos no permanece en el centro exacto del fondo. La rotación la desplaza hacia una de las paredes:
* En un **tambor con rotación horaria**, los granos se apilan en la parte inferior izquierda.
* En un **tambor con rotación antihoraria**, los granos se apilan en la parte inferior derecha.

La sonda BT debe montarse en ese cuadrante inferior del lado ascendente.

### 2. Ajuste la Altura para su Lote Más Pequeño
La sonda debe permanecer sumergida en el tamaño de lote mínimo que tueste regularmente, no solo con la capacidad nominal. Si la sonda queda cubierta con 12 kg pero queda expuesta al aire con 6 kg, medirá dos entornos térmicos distintos y los perfiles no serán transferibles entre diferentes cargas. Cuanto menor sea su lote mínimo habitual, más baja debe situarse la sonda.

### 3. Profundidad de Inserción Correcta
Una norma de ingeniería ampliamente aceptada, citada por [Barista Hustle](https://www.baristahustle.com/lesson/rs-4-08-probe-size-and-placement/), establece que la sonda debe penetrar en el tambor al menos **10 veces su diámetro**. Para una sonda de 3 mm, esto equivale a un mínimo de **30 mm** completamente rodeados por granos en movimiento. Una inserción más superficial permite que el calor por conducción de la gruesa placa frontal distorsione la medición.

### 4. Reduzca la Conducción Térmica del Chasis
La sonda atraviesa una placa metálica maciza que alcanza temperaturas elevadas. El uso de un casquillo de montaje aislante o una vaina adecuada minimiza la conducción térmica hacia el sensor.

### 5. Conserve la Separación con las Piezas Móviles
La sonda debe guardar una holgura prudencial respecto a las palas mezcladoras y las paredes del tambor. Verifique siempre el espacio libre girando el tambor a mano antes de operar la máquina.

### 6. No Modifique la Posición una vez Definidos los Perfiles
Una vez fijada la posición, considérela permanente. Moverla incluso unos milímetros modificará las temperaturas de referencia, invalidando el historial de sus curvas de tueste.

---

## ¿Dónde Debe Colocarse la Sonda de Temperatura Ambiental?

La sonda ET debe ubicarse en un flujo de aire caliente limpio y estable, donde los granos no puedan alcanzarla:

| Posición de ET | Información que Aporta | Ventajas | Limitaciones |
| :--- | :--- | :--- | :--- |
| **Dentro del tambor, sobre los granos** | Temperatura del aire a la que se exponen los granos | Máxima proximidad al tueste; ideal para protocolos entre lotes | Debe librar la masa con carga máxima y durante la caída inicial |
| **En el escape, antes del ventilador** | Energía térmica que sale del tambor tras calentar el café | Refleja de inmediato los cambios de flujo de aire; clave para seguridad | Afectada por longitud del conducto, acumulación de cascarilla y tiro |
| **Aire de entrada, antes del tambor** | Energía suministrada por el quemador | Vista directa de la respuesta del quemador; útil en automatización | Aporta menor información directa sobre el entorno inmediato del grano |

### Criterios Prácticos para la Sonda ET

1. **Completamente aislada de la masa de granos:** Si los granos golpean la sonda ET durante la carga o en batches grandes, la señal se contaminará con lecturas híbridas.
2. **Evite la llama directa y la radiación:** Una sonda alineada con la llama o con metal incandescente registrará calor radiante en lugar de temperatura de aire.
3. **Mantenga coherencia en su taller:** Sitúe la sonda ET en la misma posición en todas las máquinas de sus instalaciones para poder compartir referencias de carga y potencia.
4. **Considere un tercer sensor:** Muchas tostadurías de especialidad registran simultáneamente BT, ET de tambor y temperatura de escape. Software como Artisan y Cropster admiten registro multicanal de forma nativa.

---

## Qué Tipo y Grosor de Sonda Conviene Utilizar

Para tostadoras comerciales de tambor, una **termocupla no aterrizada tipo K o J de aproximadamente 3 mm de diámetro** constituye el estándar de referencia. Ofrece el mejor equilibrio entre velocidad de respuesta, estabilidad ante interferencias y durabilidad mecánica.

### El Diámetro de la Sonda Altera la Curva de Tueste

Las sondas más gruesas poseen mayor masa térmica, por lo que se calientan y enfrían con lentitud, dibujando una curva artificialmente suavizada con desfase temporal. En pruebas comparativas documentadas por [Barista Hustle](https://www.baristahustle.com/lesson/rs-4-08-probe-size-and-placement/) a partir de investigaciones de Rob Hoos, la sonda más gruesa registró hasta 7 °C (13 °F) menos al final del tueste respecto a la sonda más delgada, mostrando además un punto de inflexión demorado.

| Diámetro de Sonda | Velocidad de Respuesta | Ruido de Señal | Durabilidad | Uso Recomendado |
| :--- | :--- | :--- | :--- | :--- |
| **1,5–2 mm** | Máxima | Mayor | Frágil ante grandes cargas de café | Tostadoras de muestras, laboratorios |
| **~3 mm** | Rápida | Moderado | Excelente | Estándar recomendado para sondas BT comerciales |
| **5–6 mm** | Lenta (curva retrasada y suavizada) | Mínimo | Muy resistente | Maquinaria industrial antigua; oculta fluctuaciones del RoR |

### Termocuplas vs. Sondas RTD

* **Termocuplas:** El estándar universal en café de especialidad. Rápidas, robustas, económicas y con una precisión típica de ±1 °C.
* **RTD (como PT100):** Brindan mayor precisión de laboratorio (en torno a ±0,1 °C según [RoastLog](https://support.roastlog.com/en/articles/3400712-using-rtd-temperature-sensors)) y señales limpias. Sin embargo, son más frágiles mecánicamente, responden con mayor lentitud y requieren placas electrónicas específicas.

En el tueste de producción, **la repetibilidad prima sobre la precisión absoluta**. Una termocupla rápida y estable en posición fija resulta infinitamente más útil que una sonda de laboratorio lenta que retrasa las decisiones térmicas.

### Aterrizadas vs. No Aterrizadas (Grounded vs. Ungrounded)

* **Termocuplas aterrizadas:** La unión sensora hace contacto con la vaina metálica externa. Responden marginalmente más rápido pero captan ruido e interferencias de los motores eléctricos.
* **Termocuplas no aterrizadas:** La unión interna está eléctricamente aislada de la vaina, ofreciendo curvas limpias sin perturbaciones electromagnéticas. Las tostadoras KRAFFE incorporan de serie termocuplas no aterrizadas de 3 mm de alta respuesta.

---

## Problemas Habituales y Cómo Diagnosticarlos

| Síntoma | Causa Probable | Verificación Recomendada |
| :--- | :--- | :--- |
| **La temperatura de primer crack cambia con el tamaño del lote** | Sonda BT parcialmente expuesta con lotes pequeños | Compruebe la altura de la sonda frente al lecho de granos en su carga mínima. |
| **Punto de retorno excesivamente tardío y bajo** | Sonda muy gruesa/lenta o profundidad de inserción escasa | Verifique el diámetro (~3 mm) y asegure una inserción de al menos 10 veces el diámetro. |
| **Curva de BT o RoR con picos irregulares (ruido)** | Interferencia eléctrica, cable dañado o tierra deficiente | Revise el apantallamiento y trazado de cables; pruebe lecturas con motores apagados. |
| **BT marca anomalamente alto al inicio del tueste** | Sonda tocando la pared del tambor o conduciendo calor del frontal | Compruebe holguras mecánicas e instale casquillos de montaje aislantes. |
| **La ET salta bruscamente al cargar el café** | El flujo de granos entrantes golpea la sonda ET | Reubique la sonda ET fuera de la trayectoria de caída de los granos verdes. |
| **Las curvas no se reproducen entre tostadoras idénticas** | Diferencias de profundidad, tipo de sonda o alineación | Unifique especificaciones de sondas, profundidades y ángulos de montaje. |

### Cómo Calibrar y Verificar sus Sondas

* **Prueba de agua hirviendo:** Pruebe la sonda frente a un termómetro calibrado de referencia en agua hirviendo vigorosamente, considerando la altitud y presión atmosférica de su localidad.
* **Ajuste por software (offset):** Si una sonda verificada muestra un desfase constante (por ejemplo +1,5 °C), aplique una corrección en Artisan o Cropster en lugar de manipular o forzar el sensor.
* **Prueba de ruido en ralentí:** Con la tostadora caliente y los motores en marcha, observe la línea del RoR en reposo. Debe ser plana y próxima a cero; cualquier oscilación acusada denota problemas de aislamiento.
* **Reemplazo idéntico:** Al sustituir una sonda, utilice exactamente el mismo diámetro, longitud de vaina y tipo de unión.

---

## Cómo Afecta la Sonda al RoR y a la Transferencia de Perfiles

Todas las curvas en pantalla —especialmente la tasa de incremento (RoR)— se calculan a partir de los datos de la sonda. Una sonda BT lenta amortigua el punto de retorno, aplana el pico del RoR y oculta descensos bruscos (crashes) o aceleraciones (flicks) que ocurren dentro del tambor.

### Por Qué el «Primer Crack a 200 °C» No es una Cifra Universal

Las temperaturas objetivo solo cobran validez en la máquina concreta donde se originaron:

* Otra máquina puede emplear una sonda más delgada o con distinto ángulo.
* Su sonda ET puede estar en la cámara del tambor mientras la suya mide el aire de escape.
* Las variaciones en la velocidad de rotación y convección modifican la proporción de contacto aire-grano en la punta del sensor.

Para comprender la ingeniería térmica que respalda las lecturas de temperatura precisas, consulte nuestra guía sobre [cómo se diseñan las tostadoras de café profesionales](/es/blog/como-se-disenan-tostadoras-profesionales/).

---

## Preguntas Frecuentes

### ¿Cuál es la diferencia entre BT y ET en el tueste de café?
La BT (temperatura del grano) se mide dentro de la masa en movimiento e indica cómo absorbe el calor el café. La ET (temperatura ambiental) se mide en el aire caliente del tambor o conductos e indica la energía térmica que la máquina suministra. Por lo general, la ET es más alta que la BT durante el tueste.

### ¿Dónde debe instalarse la sonda del grano en una tostadora de tambor?
Debe montarse en la placa frontal inferior, en el cuadrante donde los granos suben por la rotación del tambor. Debe quedar totalmente cubierta por el café con la carga mínima regular y penetrar al menos 10 veces su diámetro.

### ¿Dónde debe colocarse la sonda de temperatura ambiental (ET)?
Debe instalarse en una corriente de aire caliente sin contacto con los granos: en la parte superior del tambor, en el conducto de extracción antes del ventilador, o en la admisión de aire caliente.

### ¿Qué tamaño de termocupla es el más adecuado?
Se recomiendan termocuplas no aterrizadas tipo K o J de unos 3 mm de diámetro. Las de 1,5 mm son muy veloces pero frágiles en entornos comerciales; las de 5–6 mm enmascaran cambios térmicos rápidos indispensables para el control del RoR.

### ¿Es mejor una sonda RTD que una termocupla?
Las RTD aportan gran precisión de laboratorio, pero las termocuplas son más rápidas, soportan mejor las vibraciones mecánicas continuas y tienen menor costo. La consistencia y ubicación de la sonda importan mucho más que la diferencia técnica entre RTD y termocupla.

### ¿Por qué la temperatura del primer crack varía según el tamaño del lote?
Casi siempre se debe a que la sonda BT queda parcialmente descubierta al tostar lotes más pequeños. Bajar la posición de la sonda o respetar el tamaño mínimo de carga soluciona este inconveniente.

### ¿La temperatura del grano refleja el núcleo interno del grano de café?
No. La termocupla registra la temperatura de su propia punta, condicionada por el contacto con la corteza del grano y el aire circundante. Es una referencia empírica indispensable, no la medición del núcleo.

---

## Conclusión

La BT muestra la evolución del café; la ET muestra la energía aportada por la máquina. Sitúe la sonda de grano baja en el lado ascendente del tambor, asegure su inmersión total en sus lotes habituales y coloque la sonda ET en aire limpio. Emplee termocuplas de 3 mm de respuesta rápida y conserve su posición de forma permanente.

Las tostadoras comerciales e industriales KRAFFE están concebidas desde su diseño base para la integridad de datos, incorporando termocuplas de 3 mm de alta fidelidad, tambores de gran estabilidad térmica e integración directa con Artisan y Cropster.

¿Planea una nueva tostaduría o busca mejorar la repetibilidad de sus perfiles? [Explore las tostadoras KRAFFE](/es/products/) o [contacte a nuestro equipo técnico](/es/contact/) para recibir asesoramiento especializado.

---

### Fuentes

* [HTR 1.06 Temperature Probes — Barista Hustle](https://www.baristahustle.com/lesson/htr-1-06-temperature-probes/)
* [RS 4.08 Probe Size and Placement — Barista Hustle](https://www.baristahustle.com/lesson/rs-4-08-probe-size-and-placement/)
* [Coffee Roasting Probes and Tips on Using Them — Perfect Daily Grind](https://perfectdailygrind.com/2020/05/coffee-roasting-probes-and-tips-on-using-them/)
* [Using RTD temperature sensors — RoastLog](https://support.roastlog.com/en/articles/3400712-using-rtd-temperature-sensors)
