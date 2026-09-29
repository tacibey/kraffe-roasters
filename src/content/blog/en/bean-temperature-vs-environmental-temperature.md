---
title: "Bean Temperature vs Environmental Temperature: Where Should Thermocouples Be Placed?"
description: "Discover the critical differences between bean temperature (BT) and environmental temperature (ET), optimal probe placement, thermocouple sizing, and diagnostic tips for consistent roasting."
author: "Kraffe Team"
authorImage: "@/images/blog/polat.jpeg"
authorImageAlt: "Kraffe Technics Team Avatar"
pubDate: 2026-09-29T20:00:00Z
cardImage: "@/images/blog/Bean Temperature vs Environmental Temperature Where Should Thermocouples Be Placed.webp"
cardImageAlt: "Bean Temperature vs Environmental Temperature Where Should Thermocouples Be Placed"
readTime: 8
tags: ["coffee roaster machine", "bean temperature", "environmental temperature", "thermocouple placement", "bt vs et", "coffee roasting probes", "commercial roaster", "drum roaster", "artisan scope", "cropster", "kraffe roasters"]
keyTakeaways:
  - "A BT probe reads the temperature of its own tip, influenced by both the beans and the hot air between them — not the exact core temperature of the beans."
  - "The BT probe must stay fully covered by beans at your smallest regular batch size, or readings stop being comparable."
  - "A common rule is to immerse the probe at least 10 times its diameter to avoid heat conducted from the roaster wall."
  - "ET probes are placed in the drum air, the exhaust or the inlet air. Each gives a different number, so profiles only transfer between machines when ET positions match."
  - "Around 3 mm, ungrounded K- or J-type thermocouples are widely recommended as the best balance of speed, stability and durability."
---

Every roast profile, RoR curve and reference roast you save is only as reliable as the temperature probes feeding it. Move a probe a few centimeters, or roast a smaller batch than usual, and the same coffee can suddenly “hit first crack” at an entirely different temperature. That is why probe placement is one of the most critical — and most overlooked — details in a commercial roastery.

> **Quick Answer:** Bean temperature (BT) is measured by a probe fully immersed in the tumbling bean mass, usually in the lower front of the drum on the side where beans rise with rotation. Environmental temperature (ET) is measured by a probe in the hot air, either inside the drum above the beans or in the exhaust. BT shows how the beans are responding; ET shows how much energy the roaster is delivering. Most professional roasters track both.

---

## What Does Bean Temperature (BT) Actually Measure?

Bean temperature is the reading from a probe buried in the moving bean mass. It is the primary reference for roast milestones such as the turning point, yellowing, first crack and drop.

It is equally vital to understand what BT is **not**. A thermocouple measures the temperature of its own tip. As [Barista Hustle explains](https://www.baristahustle.com/lesson/htr-1-06-temperature-probes/), the BT reading depends on bean surface contact and on the hot air flowing between the beans. It is not the core temperature of any individual bean.

This is why two roasters can report first crack at 196°C and 204°C for the exact same coffee and both be completely right. Their probes are simply measuring different physical conditions.

---

## What Does Environmental Temperature (ET) Actually Measure?

Environmental temperature is the reading from a probe placed in the hot air stream rather than in the bean mass. It reveals how much heat energy the roaster is delivering and how rapidly the roasting atmosphere is shifting.

Importantly, “ET” is not a single standardized location. Depending on the manufacturer, it can represent:

1. **Drum air temperature:** A probe mounted inside the drum, well above the bean mass.
2. **Exhaust temperature:** A probe located in the air stream exiting the drum, just before the exhaust blower.
3. **Inlet air temperature:** A probe measuring heated air immediately before it enters the drum chamber.

Each position produces different values throughout the roast. Before comparing ET curves with another roaster or machine model, always verify the exact physical location of their ET probe.

---

## Bean Temperature vs Environmental Temperature: Key Differences

BT tells you what the coffee is doing; ET tells you what the machine is doing. You need both to understand thermal cause and effect during roasting.

| Feature | Bean Temperature (BT) | Environmental Temperature (ET) |
| :--- | :--- | :--- |
| **What it measures** | Probe tip in the bean mass (beans plus inter-bean air) | Hot air in the drum, exhaust or inlet |
| **Typical position** | Lower front of the drum, on the side where beans rise | Upper drum, exhaust duct or inlet air path |
| **Reading during roast** | Drops after charge, then climbs steadily; lower than ET | Usually higher than BT through most of the roast |
| **Main use** | Roast milestones, drop temperature, BT RoR | Energy input, preheat, between-batch protocol, early warning for flicks |
| **Most sensitive to** | Batch size, probe immersion, drum speed | Airflow and burner modulation |
| **Used in automation** | Profile tracking and repeat batching | Charge temperature and gas/air control logic |

### Why You Should Track Both

* **Diagnosing problems:** If BT RoR stalls while ET continues to rise, heat is not reaching the beans efficiently — usually pointing to an airflow or drum-speed imbalance.
* **Anticipating the flick:** A sharp late spike in ET RoR almost always precedes a bean RoR flick. Learn more in our comprehensive guide to [Rate of Rise (RoR)](https://krafferoasters.com/blog/rate-of-rise-ror-explained/).
* **Consistent preheat and between-batch protocols:** ET, or a dedicated drum probe, is far more reliable than an empty-drum BT reading for determining when the roaster is truly heat-soaked and ready to charge.

---

## Where Should the Bean Temperature Probe Be Placed?

The BT probe must sit low in the front of the drum, on the side where the beans are carried upward by rotation, ensuring it stays fully submerged in the bean mass for the entire roast duration.

```
       Drum Rotation (Counterclockwise)
                 [  Top  ]
             /               \
            |                 |
     Exhaust|                 |
            |       Beans     |
             \     /~~~~~\   /  <-- BT Probe mounted here
                 [~Bottom~]         (on rising bean side)
```

### 1. Choose the Correct Side of the Drum
In a front-loading drum roaster, the bean mass does not stay at bottom dead center. Rotation carries it up one wall. Looking at the roaster from the front:
* A **clockwise-rotating drum** piles beans on the lower left.
* A **counterclockwise drum** piles beans on the lower right.

The BT probe belongs in that lower quadrant on the rising side.

### 2. Set the Height for Your Smallest Batch
The probe must remain submerged at the smallest batch size you roast regularly, not just at nominal capacity. If the probe is buried at 12 kg but partly exposed to air at 6 kg, you are measuring two different environments, and your profiles will not translate between batch sizes. The smaller your minimum batch, the lower the probe must sit.

### 3. Get the Immersion Depth Right
A widely accepted engineering rule, cited by [Barista Hustle](https://www.baristahustle.com/lesson/rs-4-08-probe-size-and-placement/), states that a probe should extend into the drum at least **10 times its diameter**. For a 3 mm probe, that means at least **30 mm** fully surrounded by tumbling beans. Shallower insertion allows conductive heat from the thick front faceplate to distort the sensor tip.

### 4. Reduce Conduction from the Roaster Body
The probe penetrates a heavy metal faceplate that gets intensely hot. Using an insulated mounting sleeve, or a properly dimensioned probe sheath, minimizes conductive heat traveling down the shaft and artificially elevating readings.

### 5. Keep Clear of Moving Parts
The probe must maintain generous clearance from internal drum vanes, paddles and drum walls. Always inspect clearances by spinning the drum by hand and checking under full operational load.

### 6. Never Move It Once Profiles Are Built
Once locked in place, treat probe position as permanent. Moving it by even a few millimeters will shift your milestone temperatures, rendering your historic profiles and reference curves inaccurate.

---

## Where Should the Environmental Temperature Probe Be Placed?

The ET probe must sit in a clean, stable hot-air stream where green or roasted beans cannot touch it. Three common locations exist, each answering a slightly different operational question:

| ET Position | What It Tells You | Strengths | Limitations |
| :--- | :--- | :--- | :--- |
| **Inside the drum, above the beans** | Air temperature the beans are exposed to | Closest to the roasting environment; ideal for between-batch protocols | Must clear bean mass at maximum batch size and during charge tumble |
| **Exhaust, before the fan** | Energy leaving the drum after heating the beans | Reacts clearly to airflow shifts; standard for safety cut-off systems | Affected by duct length, chaff buildup and airflow damper position |
| **Inlet air, before the drum** | Thermal energy the burner is delivering | Direct view of burner responsiveness; useful for advanced automation | Provides less direct insight into what happens inside the bean mass |

### Practical Rules for ET Placement

1. **Keep it completely out of the bean mass:** If bouncing beans strike the ET probe during charge or at max capacity, ET turns into a noisy hybrid of bean contact and air temperature.
2. **Avoid direct flame or radiant hot spots:** A probe placed in direct line-of-sight of burner flames or glowing drum metal measures radiant heat rather than air temperature.
3. **Stay consistent across machines:** Log ET in the identical physical location on every roaster in your facility. Otherwise, charge temperatures and gas presets cannot be shared.
4. **Consider a third probe:** Many modern specialty roasteries monitor BT, drum ET and exhaust temperature simultaneously. Both Artisan and Cropster natively support multi-channel logging.

---

## Which Probe Type and Thickness Should You Use?

For commercial drum roasters, an **ungrounded K- or J-type thermocouple of approximately 3 mm diameter** represents the gold standard. It delivers the optimal compromise between response speed, noise rejection and physical longevity.

### Probe Diameter Changes the Roast Curve

Thicker probes possess higher thermal mass, causing them to heat up and cool down slowly. This creates an artificially smoothed, lagging roast curve. In benchmark tests [reported by Barista Hustle](https://www.baristahustle.com/lesson/rs-4-08-probe-size-and-placement/) based on research by roaster Rob Hoos, the thickest probe in a batch recorded temperatures up to 7°C (13°F) lower at the end of the roast compared to the thinnest probe, while also showing a delayed turning point.

| Probe Diameter | Response Speed | Signal Noise | Durability | Typical Use |
| :--- | :--- | :--- | :--- | :--- |
| **1.5–2 mm** | Fastest | Highest | Fragile in heavy commercial bean masses | Sample roasters, lab research setups |
| **~3 mm** | Fast | Moderate | Excellent | Recommended for commercial BT probes |
| **5–6 mm** | Slow (lags & smooths curve) | Low | Indestructible | Older industrial machinery; conceals rapid RoR shifts |

### Thermocouple vs RTD

* **Thermocouples:** The global specialty coffee standard. Fast, rugged, cost-effective, with typical accuracy around ±1°C.
* **RTDs (e.g. PT100):** Offer tighter laboratory accuracy (around ±0.1°C per [RoastLog](https://support.roastlog.com/en/articles/3400712-using-rtd-temperature-sensors)) and exceptionally clean signal lines. However, they are mechanically more fragile, respond more slowly, and require dedicated RTD input boards.

In production roasting, **repeatability trumps absolute accuracy**. A consistent, fast thermocouple in a fixed position is far superior to a laboratory RTD that lags behind real-time thermal changes.

### Grounded vs Ungrounded

* **Grounded thermocouples:** The sensing junction touches the outer sheath. They respond marginally faster but act like antennas for electrical motor noise.
* **Ungrounded thermocouples:** The junction is electrically isolated from the sheath, providing clean curves free of motor interference. Barista Hustle and leading roaster manufacturers recommend ungrounded probes. KRAFFE roasters are equipped with responsive, ungrounded 3 mm thermocouples by default.

---

## Common Probe Placement Problems and How to Diagnose Them

Most probe issues manifest as readings that contradict your visual, auditory and olfactory cues. Use this diagnostic table to troubleshoot:

| Symptom | Likely Cause | What to Check |
| :--- | :--- | :--- |
| **First crack temperature shifts with batch size** | BT probe partly exposed at smaller batches | Check probe height relative to the bean bed at your minimum batch size. |
| **Turning point is excessively late and low** | Thick/slow probe, or insufficient insertion depth | Verify probe diameter (~3 mm) and ensure at least 10x diameter depth. |
| **Jagged, spiky BT or RoR curve** | Electrical interference, damaged sheath, loose grounding | Inspect shielding and cable routing; test curves with motors turned off. |
| **BT reads abnormally high early in the roast** | Probe touching drum wall or absorbing faceplate conduction | Verify mechanical clearances and check insulating mounting collars. |
| **ET jumps erratically at charge** | Incoming bean stream striking the ET probe | Reposition ET probe above the bean trajectory during hopper discharge. |
| **Profiles do not transfer between identical roasters** | Mismatched probe depths, types or rotational alignments | Match probe specifications, insertion depths and angles across machines. |

### How to Calibrate and Verify Your Probes

* **Boiling water test:** Remove the probe (or calibrate with an identical backup) and test it against a certified reference thermometer in vigorously boiling water. Account for your local elevation and atmospheric pressure.
* **Software offset:** If a verified probe reads consistently offset (e.g. +1.5°C), apply a software calibration offset in Artisan or Cropster rather than bending or replacing hardware.
* **Idle noise test:** With the roaster preheated and drum/exhaust motors running, observe the idle RoR line. It should trace a flat line near zero. Erratic swings point to grounding or shielding problems.
* **Replace like-for-like:** When a probe reaches the end of its life, replace it with the identical diameter, junction type, sheath length and depth.

---

## How Probe Placement Affects RoR and Profile Transfer

Every curve on your screen — especially Rate of Rise — is mathematically derived from probe input. A sluggish or poorly placed BT probe delays the turning point, flattens the RoR peak, and masks real-world crashes and flicks happening inside the drum.

### Why “First Crack at 200°C” Is Not a Universal Number

Target temperatures are only meaningful on the specific machine and probe configuration that logged them. A profile downloaded online or shared by a friend will rarely match your roaster because:

* Their BT probe may be thinner, deeper or angled differently.
* Their ET probe may measure drum headspace while yours monitors exhaust air.
* Differences in drum speed and convection alter the air-to-bean contact ratio at the probe tip.

### How to Successfully Transfer a Profile Between Machines

1. **Anchor to physical events, not numbers:** Match the elapsed time and sequence of the turning point, yellowing phase, first crack onset and total development time first.
2. **Match the RoR trajectory:** Replicate the curve's geometric shape — peak timing, smooth rate of decline — rather than absolute numerical values.
3. **Re-map your temperature milestones:** Note the exact temperature where first crack reliably occurs on your specific machine, and shift your charge and drop targets accordingly.
4. **Confirm in the cup:** Software graphs guide your roast; sensory cupping validates it.

Standardizing probe type, diameter and mounting depth across all machines is the foundation of multi-roaster consistency. To understand the thermal engineering behind consistent probe readings, read our guide on [how professional coffee roasters are engineered](https://krafferoasters.com/blog/how-professional-coffee-roasters-are-engineered/).

---

## Frequently Asked Questions

### What is the difference between BT and ET in coffee roasting?
BT (bean temperature) is measured inside the tumbling bean mass and reflects how the coffee is absorbing thermal energy. ET (environmental temperature) is measured in the hot air inside the drum, exhaust or inlet duct, reflecting how much thermal energy the roaster is delivering. ET typically reads higher than BT through most of the roast.

### Where should the bean probe be placed in a drum roaster?
The bean probe should be mounted in the lower front faceplate, specifically on the side where drum rotation lifts the beans upward. It must remain fully buried in the bean bed at your minimum batch size and extend into the chamber at least 10 times its diameter.

### Where should the ET probe be placed?
The ET probe should sit in a clean hot-air stream clear of moving beans: either in the upper drum space above the bed, in the exhaust duct upstream of the fan, or in the inlet duct. Choose one consistent position across all roasters.

### What size thermocouple is best for coffee roasting?
An ungrounded K- or J-type thermocouple of approximately 3 mm diameter is widely recommended. Thinner probes (1.5 mm) are fast but fragile; thicker probes (5–6 mm) artificially smooth out vital short-term RoR fluctuations.

### Is an RTD better than a thermocouple for roasting?
RTDs offer higher laboratory accuracy and lower electrical noise, but thermocouples respond faster, tolerate mechanical vibration better, and cost significantly less. Consistency in probe placement and geometry matters far more than choosing between RTD and thermocouple sensors.

### Why does my first crack temperature change with batch size?
This almost always indicates that the BT probe is partly exposed to air at smaller batch volumes. Lowering the probe mounting position or establishing a minimum batch threshold that covers the probe solves this variation.

### Does bean temperature show the real internal core temperature of the bean?
No. A thermocouple measures the equilibrium temperature of its own metal tip, influenced by bean surface contacts and circulating interstitial air. BT is an indispensable repeatable benchmark, not a direct measurement of the bean's core.

---

## Conclusion: Consistent Probes Make Consistent Roasts

BT tells you what the coffee is doing; ET tells you what the machine is delivering. Place the bean probe low on the rising side of the drum, ensure it is completely immersed at your smallest batch, and position your ET probe in clean air. Select responsive 3 mm thermocouples, and lock their positions permanently once your recipes are built.

KRAFFE commercial and industrial roasters are engineered around data integrity from the ground up — featuring responsive 3 mm thermocouples, thermally stable drum architecture, and seamless native integration with Artisan and Cropster.

Planning a new roastery or looking to elevate roast repeatability? [Explore KRAFFE roasters](https://krafferoasters.com/products) or [contact our technical team](https://krafferoasters.com/contact) to find the perfect roasting machine.

---

### Sources

* [HTR 1.06 Temperature Probes — Barista Hustle](https://www.baristahustle.com/lesson/htr-1-06-temperature-probes/)
* [RS 4.08 Probe Size and Placement — Barista Hustle](https://www.baristahustle.com/lesson/rs-4-08-probe-size-and-placement/)
* [Coffee Roasting Probes and Tips on Using Them — Perfect Daily Grind](https://perfectdailygrind.com/2020/05/coffee-roasting-probes-and-tips-on-using-them/)
* [Using RTD temperature sensors — RoastLog](https://support.roastlog.com/en/articles/3400712-using-rtd-temperature-sensors)
