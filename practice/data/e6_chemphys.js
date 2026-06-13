window.MCAT_DATA = window.MCAT_DATA || {};
window.MCAT_DATA["e6_chemphys"] = {
 "passages": [
  {
   "id": "e6_chemphys_p1",
   "label": "Passage I — Hydrostatics and the Glomerular Filter",
   "html": "<p>Filtration of plasma in the kidney occurs across the glomerular capillary wall. The net filtration pressure (NFP) driving fluid from capillary to Bowman's space is the difference between the hydrostatic pressure gradient and the oncotic (colloid osmotic) pressure gradient produced by plasma proteins that cannot cross the filter.</p><p>In a healthy glomerulus, the glomerular capillary hydrostatic pressure is P<sub>GC</sub> = 55 mmHg and the hydrostatic pressure in Bowman's space is P<sub>BS</sub> = 15 mmHg. The plasma colloid osmotic pressure is π<sub>GC</sub> = 30 mmHg, and because the filtrate is normally protein-free, the colloid osmotic pressure in Bowman's space π<sub>BS</sub> ≈ 0 mmHg. The glomerular filtration rate (GFR) is the product of NFP and the ultrafiltration coefficient K<sub>f</sub>, which reflects the permeability and surface area of the filter.</p><p>A researcher modeled the filter as a set of cylindrical pores and applied Poiseuille's law for laminar flow, Q = (πr⁴ΔP)/(8ηL), where r is pore radius, η is viscosity, and L is pore length. In a disease model, podocyte injury reduced both the number of functional pores and the effective pore radius. Separately, a ureteral obstruction was modeled by raising P<sub>BS</sub>. (1 mmHg ≈ 133 Pa.)</p>"
  },
  {
   "id": "e6_chemphys_p2",
   "label": "Passage II — Electrochemistry of a Glucose Biosensor",
   "html": "<p>An amperometric glucose biosensor uses the enzyme glucose oxidase (GOx) to oxidize β-D-glucose to gluconolactone, transferring electrons to a mediator that is re-oxidized at a working electrode held at a fixed potential. The measured current is proportional to glucose concentration.</p><p>The relevant standard reduction potentials (25°C, pH 7) are:</p><p>Mediator<sub>ox</sub> + e⁻ → Mediator<sub>red</sub>, E°' = +0.20 V<br>O<sub>2</sub> + 4H⁺ + 4e⁻ → 2H<sub>2</sub>O, E°' = +0.82 V<br>Gluconolactone + 2H⁺ + 2e⁻ → glucose, E°' = −0.45 V</p><p>In the sensor, glucose is oxidized (the reverse of the listed glucose half-reaction) and the mediator is reduced; the reduced mediator then diffuses to the electrode and is re-oxidized, generating the current. The Nernst equation, E = E°' − (RT/nF)ln Q, governs the electrode potentials, where F = 96 485 C/mol and at 25°C the term (RT/F) ≈ 0.0257 V. The researchers note that dissolved O<sub>2</sub> can compete with the mediator as an alternative electron acceptor.</p>"
  },
  {
   "id": "e6_chemphys_p3",
   "label": "Passage III — Spectroscopy and Separation of a Reaction Mixture",
   "html": "<p>A chemist monitors the conversion of an α,β-unsaturated ketone (the reactant) into a saturated ketone product by catalytic hydrogenation. The reactant absorbs strongly in the UV near 320 nm due to conjugation between the C=C and C=O groups; the saturated product, lacking conjugation, absorbs only near 280 nm with much lower intensity.</p><p>Reaction progress was followed by UV-Vis using the Beer–Lambert law, A = εcl, with a 1.00-cm cuvette. The molar absorptivity of the reactant at 320 nm is ε = 1.2 × 10⁴ M⁻¹cm⁻¹.</p><p>After hydrogenation, the mixture (containing residual reactant, product, and catalyst) was analyzed. The two ketones were separated by silica-gel thin-layer chromatography (TLC) using a nonpolar/moderately polar eluent; silica is a polar stationary phase. The compounds were also examined by IR spectroscopy: the conjugated reactant shows a carbonyl stretch near 1680 cm⁻¹, whereas a typical isolated (nonconjugated) ketone carbonyl stretches near 1715 cm⁻¹. Proton NMR was used to confirm loss of the vinyl protons upon reduction.</p>"
  },
  {
   "id": "e6_chemphys_p4",
   "label": "Passage IV — Buffering and Titration of Phosphoric Acid",
   "html": "<p>Phosphoric acid (H<sub>3</sub>PO<sub>4</sub>) is a triprotic acid with stepwise dissociation constants pK<sub>a1</sub> = 2.1, pK<sub>a2</sub> = 7.2, and pK<sub>a3</sub> = 12.4. The phosphate system is a major intracellular buffer.</p><p>A biochemist prepares a phosphate buffer for an enzyme assay that must hold pH = 7.2. The buffer is made by mixing NaH<sub>2</sub>PO<sub>4</sub> and Na<sub>2</sub>HPO<sub>4</sub>. The student treats activity coefficients as unity and applies the Henderson–Hasselbalch equation, pH = pK<sub>a</sub> + log([A⁻]/[HA]).</p><p>In a separate exercise, 50.0 mL of 0.10 M H<sub>3</sub>PO<sub>4</sub> is titrated with 0.10 M NaOH, producing a curve with multiple equivalence points and buffering plateaus. The temperature is 25°C throughout. The biochemist also notes that the third proton (pK<sub>a3</sub> = 12.4) is not cleanly titrated in aqueous solution because its equivalence region overlaps the strongly basic end of the pH scale.</p>"
  },
  {
   "id": "e6_chemphys_p5",
   "label": "Passage V — Enzyme Kinetics of a Competitive Inhibitor",
   "html": "<p>The enzyme dihydrofolate reductase (DHFR) catalyzes reduction of dihydrofolate (substrate, S) using NADPH. A pharmacology lab studied DHFR kinetics by measuring initial velocity v<sub>0</sub> as a function of [S] at fixed, saturating NADPH. Data were fit to the Michaelis–Menten equation, v<sub>0</sub> = V<sub>max</sub>[S]/(K<sub>M</sub> + [S]).</p><p>Without inhibitor, the enzyme showed V<sub>max</sub> = 100 µmol·min⁻¹ and K<sub>M</sub> = 2.0 µM. A drug candidate, compound X, was then added at a fixed concentration. In the presence of compound X the apparent K<sub>M</sub> rose to 8.0 µM while V<sub>max</sub> was unchanged at 100 µmol·min⁻¹.</p><p>The researchers analyzed the data using a Lineweaver–Burk (double-reciprocal) plot, 1/v<sub>0</sub> = (K<sub>M</sub>/V<sub>max</sub>)(1/[S]) + 1/V<sub>max</sub>, in which the y-intercept equals 1/V<sub>max</sub> and the slope equals K<sub>M</sub>/V<sub>max</sub>. They noted that the catalytic efficiency of an enzyme is reflected by k<sub>cat</sub>/K<sub>M</sub>.</p>"
  }
 ],
 "questions": [
  {
   "id": "e6_chemphys_q1",
   "section": "chemphys",
   "passageId": "e6_chemphys_p1",
   "stem": "Using the values given for the healthy glomerulus, what is the net filtration pressure (NFP) favoring filtration from capillary into Bowman's space?",
   "options": [
    "10 mmHg",
    "70 mmHg",
    "40 mmHg",
    "25 mmHg"
   ],
   "answer": 0,
   "rationales": [
    "Correct: NFP = (P<sub>GC</sub> − P<sub>BS</sub>) − (π<sub>GC</sub> − π<sub>BS</sub>) = (55 − 15) − (30 − 0) = 40 − 30 = 10 mmHg.",
    "70 mmHg adds pressures that should be subtracted; the oncotic and Bowman's pressures oppose filtration.",
    "40 mmHg is just the hydrostatic gradient (55 − 15) and ignores the opposing oncotic pressure of 30 mmHg.",
    "25 mmHg results from subtracting only π<sub>GC</sub>/something incorrectly; the hydrostatic gradient is 40, not 55, after subtracting P<sub>BS</sub>."
   ],
   "explanation": "NFP balances the favoring hydrostatic gradient against the opposing oncotic gradient: (55 − 15) − (30 − 0) = 10 mmHg. The net positive value means fluid is filtered into Bowman's space.",
   "source": "AAMC Content Category 4B; Guyton & Hall Textbook of Medical Physiology",
   "topic": "Fluids / hydrostatic pressure",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q2",
   "section": "chemphys",
   "passageId": "e6_chemphys_p1",
   "stem": "In the disease model, the effective pore radius r falls to half its original value while all other Poiseuille variables are held constant. By what factor does the volume flow rate Q through a single pore change?",
   "options": [
    "It falls to 1/8 of the original",
    "It falls to 1/16 of the original",
    "It falls to 1/4 of the original",
    "It falls to 1/2 of the original"
   ],
   "answer": 1,
   "rationales": [
    "1/8 corresponds to r³; the correct exponent is 4.",
    "Correct: Q ∝ r⁴, so halving r gives (1/2)⁴ = 1/16 of the original flow.",
    "1/4 corresponds to an r² dependence (as in area), not the r⁴ dependence of Poiseuille flow.",
    "1/2 would apply if Q were linear in r; Poiseuille's law has r to the fourth power."
   ],
   "explanation": "Poiseuille's law, Q = πr⁴ΔP/(8ηL), makes Q proportional to r⁴. Halving the radius multiplies Q by (1/2)⁴ = 1/16, showing why small radius changes drastically reduce filtration.",
   "source": "AAMC Content Category 4B; Halliday, Resnick & Walker Fundamentals of Physics",
   "topic": "Fluids / Poiseuille flow",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q3",
   "section": "chemphys",
   "passageId": "e6_chemphys_p1",
   "stem": "In the ureteral obstruction model, P<sub>BS</sub> rises from 15 mmHg to 35 mmHg while all other pressures stay constant. What happens to the GFR?",
   "options": [
    "GFR decreases because the rise in P<sub>BS</sub> reduces the net filtration pressure",
    "GFR is unchanged because P<sub>BS</sub> does not appear in the NFP equation",
    "GFR increases because Bowman's-space pressure now helps push fluid out",
    "GFR drops to zero because filtration always stops once P<sub>BS</sub> exceeds π<sub>GC</sub>"
   ],
   "answer": 0,
   "rationales": [
    "Correct: NFP = (P<sub>GC</sub> − P<sub>BS</sub>) − π<sub>GC</sub>. Raising P<sub>BS</sub> from 15 to 35 lowers NFP from 10 to −10 mmHg region, so GFR falls (here filtration would actually reverse/cease).",
    "P<sub>BS</sub> is a key term in NFP; it directly subtracts from the favoring gradient.",
    "P<sub>BS</sub> opposes filtration; raising it works against, not with, the capillary hydrostatic pressure.",
    "Recomputing: NFP = (55 − 35) − 30 = −10 mmHg, so net filtration ceases here, but the general reason GFR falls is the loss of net pressure, not a fixed rule about exceeding π<sub>GC</sub>."
   ],
   "explanation": "Bowman's-space hydrostatic pressure opposes filtration. With P<sub>BS</sub> = 35: NFP = (55 − 35) − (30 − 0) = −10 mmHg. Net filtration falls and would cease, illustrating how downstream obstruction reduces GFR.",
   "source": "AAMC Content Category 4B; Guyton & Hall Textbook of Medical Physiology",
   "topic": "Fluids / filtration pressure",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q4",
   "section": "chemphys",
   "passageId": "e6_chemphys_p1",
   "stem": "Approximately what pressure, in pascals, does the healthy net filtration pressure of 10 mmHg correspond to?",
   "options": [
    "About 133 Pa",
    "About 13 Pa",
    "About 13 300 Pa",
    "About 1330 Pa"
   ],
   "answer": 3,
   "rationales": [
    "133 Pa is the value of 1 mmHg, not 10 mmHg.",
    "13 Pa corresponds to about 0.1 mmHg, off by a factor of 100.",
    "13 300 Pa corresponds to about 100 mmHg, an order of magnitude too large.",
    "Correct: 10 mmHg × 133 Pa/mmHg ≈ 1330 Pa."
   ],
   "explanation": "Unit conversion: 10 mmHg × 133 Pa/mmHg ≈ 1330 Pa. This is a small fraction of atmospheric pressure (~101 000 Pa), consistent with the gentle driving pressure of filtration.",
   "source": "AAMC Content Category 4B; standard unit conversions",
   "topic": "Fluids / pressure units",
   "difficulty": "easy"
  },
  {
   "id": "e6_chemphys_q5",
   "section": "chemphys",
   "passageId": "e6_chemphys_p1",
   "stem": "If podocyte injury reduces only the ultrafiltration coefficient K<sub>f</sub> (e.g., by reducing the number of functional pores) without changing any of the pressures, the GFR will:",
   "options": [
    "Increase, because fewer pores raises pressure per pore",
    "Decrease, because GFR = K<sub>f</sub> × NFP and K<sub>f</sub> has fallen",
    "Increase, because reduced surface area concentrates filtrate",
    "Remain unchanged, because NFP is unchanged"
   ],
   "answer": 1,
   "rationales": [
    "Pressure per pore is set by the systemic/glomerular hemodynamics, not the pore count; this does not raise GFR.",
    "Correct: GFR = K<sub>f</sub> × NFP. With NFP fixed, lowering K<sub>f</sub> (permeability × surface area) lowers GFR proportionally.",
    "Reducing surface area lowers total filtration; it does not concentrate or increase the rate.",
    "GFR depends on both NFP and K<sub>f</sub>; reducing K<sub>f</sub> reduces GFR even when NFP is constant."
   ],
   "explanation": "GFR = K<sub>f</sub> × NFP. The ultrafiltration coefficient captures permeability and surface area. Reducing functional pores lowers K<sub>f</sub>, so GFR falls even when the driving pressure is unchanged.",
   "source": "AAMC Content Category 4B; Guyton & Hall Textbook of Medical Physiology",
   "topic": "Fluids / filtration",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q6",
   "section": "chemphys",
   "passageId": "e6_chemphys_p2",
   "stem": "For the overall sensor reaction in which glucose is oxidized and the oxidized mediator is reduced, what is the standard cell potential E°'<sub>cell</sub>?",
   "options": [
    "+1.02 V",
    "+0.65 V",
    "−0.25 V",
    "+0.25 V"
   ],
   "answer": 1,
   "rationales": [
    "+1.02 V improperly uses the O<sub>2</sub> potential (+0.82) as the cathode rather than the mediator.",
    "Correct: E°'<sub>cell</sub> = E°'<sub>cathode</sub> − E°'<sub>anode</sub> = E°'(mediator, reduced) − E°'(glucose half) = (+0.20) − (−0.45) = +0.65 V.",
    "−0.25 V has the wrong sign; the spontaneous direction has glucose as the anode (oxidation).",
    "+0.25 V would result from using the wrong half-reaction (e.g., subtracting the wrong potentials)."
   ],
   "explanation": "The mediator is reduced (cathode, +0.20 V) and glucose is oxidized (anode; its reduction potential is −0.45 V). E°'<sub>cell</sub> = (+0.20) − (−0.45) = +0.65 V, which is positive, so the reaction is spontaneous and drives the sensor.",
   "source": "AAMC Content Category 5D; Atkins' Physical Chemistry",
   "topic": "Electrochemistry / cell potential",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q7",
   "section": "chemphys",
   "passageId": "e6_chemphys_p2",
   "stem": "Why can dissolved O<sub>2</sub> interfere with the mediator-based sensor by acting as an alternative electron acceptor for the reduced enzyme?",
   "options": [
    "O<sub>2</sub> has a more positive reduction potential than the mediator, so it is thermodynamically a stronger oxidizing agent",
    "O<sub>2</sub> cannot accept electrons at neutral pH",
    "O<sub>2</sub> has a more negative reduction potential than the mediator, so it accepts electrons less readily",
    "O<sub>2</sub> oxidizes glucose directly without the enzyme"
   ],
   "answer": 0,
   "rationales": [
    "Correct: E°'(O<sub>2</sub>) = +0.82 V > E°'(mediator) = +0.20 V. A more positive reduction potential means O<sub>2</sub> is the stronger oxidant and will compete to grab electrons, diverting them from the mediator.",
    "O<sub>2</sub>/H<sub>2</sub>O reduction occurs readily at pH 7 (E°' = +0.82 V is the standard biochemical value).",
    "O<sub>2</sub> actually has a more positive (not more negative) potential, making it a better, not worse, electron acceptor.",
    "Glucose oxidase is required to oxidize glucose; uncatalyzed O<sub>2</sub> oxidation is negligibly slow and not the interference mechanism here."
   ],
   "explanation": "The more positive the standard reduction potential, the stronger the oxidizing agent. Because O<sub>2</sub> (+0.82 V) exceeds the mediator (+0.20 V), it competes for electrons from reduced GOx, diverting current away from the mediator and corrupting the signal.",
   "source": "AAMC Content Category 5D; Lehninger Principles of Biochemistry",
   "topic": "Electrochemistry / reduction potentials",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q8",
   "section": "chemphys",
   "passageId": "e6_chemphys_p2",
   "stem": "For the spontaneous sensor reaction (n = 2 electrons, E°'<sub>cell</sub> = +0.65 V), what is the approximate sign and magnitude of the standard Gibbs free energy ΔG°'? (F = 96 485 C/mol)",
   "options": [
    "About +63 kJ/mol",
    "About −63 kJ/mol",
    "About +125 kJ/mol",
    "About −125 kJ/mol"
   ],
   "answer": 3,
   "rationales": [
    "+63 kJ/mol has both the wrong n and the wrong sign.",
    "−63 kJ/mol uses n = 1 instead of n = 2.",
    "The magnitude is right but the sign is wrong; a positive E°'<sub>cell</sub> gives a negative ΔG°'.",
    "Correct: ΔG°' = −nFE°' = −(2)(96 485)(0.65) ≈ −1.25 × 10⁵ J/mol ≈ −125 kJ/mol; negative confirms spontaneity."
   ],
   "explanation": "ΔG°' = −nFE°' = −(2 mol e⁻)(96 485 C/mol)(0.65 V) ≈ −125 000 J/mol = −125 kJ/mol. The negative value confirms the cell reaction is spontaneous, consistent with the positive cell potential.",
   "source": "AAMC Content Category 5D; Atkins' Physical Chemistry",
   "topic": "Electrochemistry / thermodynamics",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q9",
   "section": "chemphys",
   "passageId": "e6_chemphys_p2",
   "stem": "Using the Nernst equation at 25°C, by approximately how much does the half-cell potential of the mediator couple change if the ratio [Mediator<sub>red</sub>]/[Mediator<sub>ox</sub>] increases by a factor of 10 (n = 1)?",
   "options": [
    "It falls by about 59 mV",
    "It is unchanged because E°' is fixed",
    "It rises by about 26 mV",
    "It rises by about 59 mV"
   ],
   "answer": 0,
   "rationales": [
    "Correct: E = E°' − (0.0257)ln Q. For the reduction with Q = [red]/[ox], a 10-fold rise in Q lowers E by 0.0257 × ln 10 ≈ 0.0257 × 2.303 ≈ 0.059 V = 59 mV.",
    "E°' is fixed, but the actual potential E shifts with concentration via the Nernst equation.",
    "26 mV is (RT/F) itself, the natural-log coefficient; a factor-of-10 (base-10) change requires multiplying by ln 10 ≈ 2.303, giving ~59 mV.",
    "Increasing the reduced/oxidized ratio drives E down, not up; reduction is less favorable when product (reduced) accumulates."
   ],
   "explanation": "At 25°C the Nernst slope is (RT/F)ln10 ≈ 0.059 V per decade for n = 1. Increasing [red]/[ox] tenfold raises Q for the reduction, decreasing E by about 59 mV.",
   "source": "AAMC Content Category 5D; Atkins' Physical Chemistry",
   "topic": "Electrochemistry / Nernst equation",
   "difficulty": "hard"
  },
  {
   "id": "e6_chemphys_q10",
   "section": "chemphys",
   "passageId": "e6_chemphys_p2",
   "stem": "The measured steady-state current is proportional to glucose concentration only when glucose, not the enzyme or mediator regeneration, is rate-limiting. This regime is best described as:",
   "options": [
    "First-order in glucose",
    "Second-order in glucose",
    "Zero-order in glucose",
    "Independent of glucose entirely"
   ],
   "answer": 0,
   "rationales": [
    "Correct: a current directly proportional to glucose concentration is, by definition, first-order in glucose.",
    "Second-order would make current proportional to [glucose]², not linearly proportional.",
    "Zero-order would mean the current is independent of glucose concentration, contradicting a proportional (linear) response.",
    "If current were independent of glucose, the sensor could not report concentration; this contradicts the stated proportionality."
   ],
   "explanation": "A signal directly proportional to concentration reflects first-order dependence on that species. The linear calibration regime of the biosensor corresponds to glucose being rate-limiting and the response being first-order in glucose.",
   "source": "AAMC Content Category 5E; standard chemical kinetics",
   "topic": "Kinetics / reaction order",
   "difficulty": "easy"
  },
  {
   "id": "e6_chemphys_q11",
   "section": "chemphys",
   "passageId": "e6_chemphys_p3",
   "stem": "At the start of the reaction the absorbance at 320 nm in the 1.00-cm cuvette is 0.60. What is the molar concentration of the conjugated reactant? (ε = 1.2 × 10⁴ M⁻¹cm⁻¹)",
   "options": [
    "7.2 × 10³ M",
    "5.0 × 10⁻⁴ M",
    "2.0 × 10⁻⁴ M",
    "5.0 × 10⁻⁵ M"
   ],
   "answer": 3,
   "rationales": [
    "7.2 × 10³ M multiplies A by ε instead of dividing, and is physically impossible.",
    "5.0 × 10⁻⁴ M is off by a factor of 10 (misplaced decimal in ε).",
    "2.0 × 10⁻⁴ M comes from dividing ε by A rather than A by ε with a slip.",
    "Correct: c = A/(εl) = 0.60/(1.2 × 10⁴ × 1.00) = 5.0 × 10⁻⁵ M."
   ],
   "explanation": "Beer–Lambert law: A = εcl, so c = A/(εl) = 0.60 / (1.2 × 10⁴ M⁻¹cm⁻¹ × 1.00 cm) = 5.0 × 10⁻⁵ M.",
   "source": "AAMC Content Category 5D; Skoog Principles of Instrumental Analysis",
   "topic": "Spectroscopy / Beer–Lambert law",
   "difficulty": "easy"
  },
  {
   "id": "e6_chemphys_q12",
   "section": "chemphys",
   "passageId": "e6_chemphys_p3",
   "stem": "The reactant absorbs near 320 nm while the product absorbs near 280 nm. The shift to shorter wavelength (higher energy) upon reduction is best explained by:",
   "options": [
    "Loss of conjugation, which decreases the energy gap",
    "Loss of conjugation, which increases the HOMO–LUMO energy gap",
    "An increase in molar mass that raises absorption energy",
    "Gain of conjugation, which increases the energy gap"
   ],
   "answer": 1,
   "rationales": [
    "Loss of conjugation increases the gap (blue shift); a decreasing gap would red-shift toward longer wavelengths.",
    "Correct: hydrogenation removes the C=C, breaking conjugation with the carbonyl. Less conjugation raises the HOMO–LUMO gap, so a higher-energy (shorter-wavelength) photon is needed.",
    "Absorption energy is governed by the electronic energy gap, not directly by molar mass.",
    "Reduction removes, not adds, conjugation; the C=C is hydrogenated."
   ],
   "explanation": "Extended conjugation lowers the HOMO–LUMO gap, red-shifting absorption. Hydrogenating the C=C destroys conjugation with the carbonyl, widening the gap, so the product absorbs at shorter wavelength (280 vs 320 nm).",
   "source": "AAMC Content Category 5D; Clayden Organic Chemistry",
   "topic": "Spectroscopy / UV-Vis and conjugation",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q13",
   "section": "chemphys",
   "passageId": "e6_chemphys_p3",
   "stem": "On a silica-gel TLC plate developed with a nonpolar/moderately polar eluent, which compound would generally have the higher R<sub>f</sub> (travel farther up the plate)?",
   "options": [
    "The compound with the larger molar mass, regardless of polarity",
    "The less polar (saturated) compound, because it interacts less with the polar stationary phase",
    "Both compounds travel identically because they are both ketones",
    "The more polar compound, because silica retains nonpolar compounds"
   ],
   "answer": 1,
   "rationales": [
    "Retention on TLC is governed primarily by polarity and adsorption, not simply molar mass.",
    "Correct: on polar silica, the less polar compound binds the stationary phase weakly and spends more time in the mobile phase, so it travels farther (higher R<sub>f</sub>).",
    "The two ketones differ in conjugation/polarity and thus in retention; they do not co-elute.",
    "Silica (polar) retains polar compounds more strongly, not nonpolar ones; the statement is reversed."
   ],
   "explanation": "In normal-phase TLC, the polar silica stationary phase retains polar analytes. Less polar compounds elute faster and have higher R<sub>f</sub>. The conjugated, more polar enone is retained more than the saturated product.",
   "source": "AAMC Content Category 5D; Pavia Introduction to Organic Laboratory Techniques",
   "topic": "Separations / chromatography",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q14",
   "section": "chemphys",
   "passageId": "e6_chemphys_p3",
   "stem": "Why does the conjugated reactant show a carbonyl IR stretch (~1680 cm⁻¹) at lower wavenumber than the nonconjugated product ketone (~1715 cm⁻¹)?",
   "options": [
    "Hydrogen bonding in the product lowers its stretch frequency",
    "Conjugation delocalizes electrons, giving the C=O partial single-bond character and lowering its force constant",
    "Conjugation increases the C=O bond order, stiffening the bond",
    "The reactant has a heavier reduced mass at the carbonyl"
   ],
   "answer": 1,
   "rationales": [
    "The data describe the conjugated reactant absorbing lower, not a product H-bonding effect; conjugation is the operative cause.",
    "Correct: conjugation delocalizes π electrons, giving the carbonyl partial single-bond character. A weaker bond has a smaller force constant, and since ν ∝ √(k/µ), the stretch shifts to lower wavenumber.",
    "Conjugation lowers, not raises, effective C=O bond order; higher bond order would raise the frequency.",
    "Reduced mass at the carbonyl is essentially the same; the difference is the force constant, not mass."
   ],
   "explanation": "Vibrational frequency scales with √(k/µ). Conjugation delocalizes the C=O π electrons, reducing the bond's force constant k, which lowers the carbonyl stretching wavenumber (1680 vs 1715 cm⁻¹).",
   "source": "AAMC Content Category 5D; Clayden Organic Chemistry",
   "topic": "Spectroscopy / IR",
   "difficulty": "hard"
  },
  {
   "id": "e6_chemphys_q15",
   "section": "chemphys",
   "passageId": "e6_chemphys_p3",
   "stem": "The disappearance of which ¹H NMR feature upon hydrogenation most directly confirms reduction of the C=C double bond?",
   "options": [
    "Vinyl (alkene) proton signals near 5–7 ppm",
    "Aromatic proton signals near 7–8 ppm",
    "Aldehyde proton signal near 9–10 ppm",
    "Carboxylic acid proton near 11–12 ppm"
   ],
   "answer": 0,
   "rationales": [
    "Correct: protons on the C=C (vinyl/alkene protons) resonate near 5–7 ppm. Their loss upon hydrogenation directly signals saturation of the double bond.",
    "These are aliphatic enones, not aromatic compounds, so aromatic signals are not the diagnostic feature.",
    "These ketones have no aldehyde proton; an aldehyde C–H is absent in a ketone.",
    "There is no carboxylic acid in this enone/ketone system."
   ],
   "explanation": "Alkene (vinyl) protons appear at roughly 5–7 ppm. Hydrogenating the C=C converts them to aliphatic CH protons (~1–2 ppm), so the disappearance of the downfield vinyl signals confirms the double bond was reduced.",
   "source": "AAMC Content Category 5D; Pavia Introduction to Spectroscopy",
   "topic": "Spectroscopy / ¹H NMR",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q16",
   "section": "chemphys",
   "passageId": "e6_chemphys_p3",
   "stem": "If the absorbance at 320 nm drops from 0.60 to 0.15 over the reaction (path length and ε unchanged), what fraction of the conjugated reactant remains?",
   "options": [
    "About 25%",
    "About 50%",
    "About 15%",
    "About 75%"
   ],
   "answer": 0,
   "rationales": [
    "Correct: because A ∝ c at fixed ε and l, the fraction remaining = 0.15/0.60 = 0.25 = 25%.",
    "50% would correspond to A dropping to 0.30, not 0.15.",
    "15% confuses the final absorbance value (0.15) with a percentage; the fraction is the ratio 0.15/0.60.",
    "75% is the fraction consumed, not the fraction remaining."
   ],
   "explanation": "Beer–Lambert law makes absorbance proportional to concentration. The fraction of reactant remaining equals the absorbance ratio: 0.15/0.60 = 0.25, so about 25% remains and 75% has reacted.",
   "source": "AAMC Content Category 5D; Skoog Principles of Instrumental Analysis",
   "topic": "Spectroscopy / quantitative analysis",
   "difficulty": "easy"
  },
  {
   "id": "e6_chemphys_q17",
   "section": "chemphys",
   "passageId": "e6_chemphys_p4",
   "stem": "To prepare a buffer at pH 7.2 from NaH<sub>2</sub>PO<sub>4</sub> and Na<sub>2</sub>HPO<sub>4</sub>, what molar ratio of [HPO<sub>4</sub>²⁻]/[H<sub>2</sub>PO<sub>4</sub>⁻] is required?",
   "options": [
    "10:1",
    "2:1",
    "1:1",
    "1:10"
   ],
   "answer": 2,
   "rationales": [
    "10:1 would give pH = pK<sub>a</sub> + 1 = 8.2, not 7.2.",
    "2:1 gives pH = 7.2 + log2 ≈ 7.5, not exactly 7.2.",
    "Correct: the relevant couple is H<sub>2</sub>PO<sub>4</sub>⁻/HPO<sub>4</sub>²⁻ with pK<sub>a2</sub> = 7.2. Since target pH = pK<sub>a</sub>, log([A⁻]/[HA]) = 0, so the ratio is 1:1.",
    "1:10 would give pH = pK<sub>a</sub> − 1 = 6.2, not 7.2."
   ],
   "explanation": "Henderson–Hasselbalch: pH = pK<sub>a2</sub> + log([HPO<sub>4</sub>²⁻]/[H<sub>2</sub>PO<sub>4</sub>⁻]). Setting pH = pK<sub>a2</sub> = 7.2 makes the log term zero, so the conjugate base/acid ratio is 1:1 — also the point of maximum buffering capacity.",
   "source": "AAMC Content Category 5A; Lehninger Principles of Biochemistry",
   "topic": "Acid-base / buffers",
   "difficulty": "easy"
  },
  {
   "id": "e6_chemphys_q18",
   "section": "chemphys",
   "passageId": "e6_chemphys_p4",
   "stem": "During the titration of 50.0 mL of 0.10 M H<sub>3</sub>PO<sub>4</sub> with 0.10 M NaOH, what volume of NaOH is required to reach the FIRST equivalence point (conversion of H<sub>3</sub>PO<sub>4</sub> to H<sub>2</sub>PO<sub>4</sub>⁻)?",
   "options": [
    "100.0 mL",
    "25.0 mL",
    "50.0 mL",
    "75.0 mL"
   ],
   "answer": 2,
   "rationales": [
    "100.0 mL corresponds to the second equivalence point (two protons removed).",
    "25.0 mL is the half-equivalence (buffer midpoint of the first proton), where pH = pK<sub>a1</sub>, not the first equivalence point.",
    "Correct: moles H<sub>3</sub>PO<sub>4</sub> = 0.050 L × 0.10 M = 5.0 mmol. One equivalent of OH⁻ requires 5.0 mmol/0.10 M = 50.0 mL to remove the first proton.",
    "75.0 mL lies between the first and second equivalence points."
   ],
   "explanation": "The first proton requires moles of base equal to moles of acid: 5.0 mmol of H<sub>3</sub>PO<sub>4</sub> needs 5.0 mmol NaOH = 50.0 mL of 0.10 M. Each subsequent equivalence point adds another 50.0 mL.",
   "source": "AAMC Content Category 5A; standard analytical chemistry",
   "topic": "Acid-base / titration",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q19",
   "section": "chemphys",
   "passageId": "e6_chemphys_p4",
   "stem": "At the first equivalence point, the dominant species is the amphoteric ion H<sub>2</sub>PO<sub>4</sub>⁻. The pH there is approximately:",
   "options": [
    "2.1 (equal to pK<sub>a1</sub>)",
    "9.7 (the average of pK<sub>a2</sub> and pK<sub>a3</sub>)",
    "4.65 (the average of pK<sub>a1</sub> and pK<sub>a2</sub>)",
    "7.2 (equal to pK<sub>a2</sub>)"
   ],
   "answer": 2,
   "rationales": [
    "pK<sub>a1</sub> is the pH at the first half-equivalence (buffer midpoint), not the first equivalence point.",
    "9.7 is the average of pK<sub>a2</sub> and pK<sub>a3</sub>, which approximates the SECOND equivalence point (HPO<sub>4</sub>²⁻), not the first.",
    "Correct: for an amphoteric intermediate, pH ≈ ½(pK<sub>a1</sub> + pK<sub>a2</sub>) = ½(2.1 + 7.2) = 4.65.",
    "pK<sub>a2</sub> = 7.2 is the buffer midpoint of the second proton (second half-equivalence), not the first equivalence point."
   ],
   "explanation": "At an equivalence point dominated by an amphoteric species, pH ≈ ½(pK<sub>a,before</sub> + pK<sub>a,after</sub>). For H<sub>2</sub>PO<sub>4</sub>⁻ this is ½(2.1 + 7.2) = 4.65.",
   "source": "AAMC Content Category 5A; Harris Quantitative Chemical Analysis",
   "topic": "Acid-base / polyprotic titration",
   "difficulty": "hard"
  },
  {
   "id": "e6_chemphys_q20",
   "section": "chemphys",
   "passageId": "e6_chemphys_p4",
   "stem": "Why is the third proton of phosphoric acid (pK<sub>a3</sub> = 12.4) NOT cleanly titrated in aqueous solution with NaOH?",
   "options": [
    "PO<sub>4</sub>³⁻ precipitates immediately and removes itself",
    "The third proton has no measurable acidity at all",
    "The pK<sub>a3</sub> is so high that the equivalence region is leveled by water near the strongly basic end of the pH scale",
    "HPO<sub>4</sub>²⁻ is too strong an acid to titrate"
   ],
   "answer": 2,
   "rationales": [
    "There is no general precipitation of PO<sub>4</sub>³⁻ in the absence of multivalent cations; this is not the reason.",
    "The third proton does have measurable acidity (pK<sub>a3</sub> = 12.4); the issue is that this is near water's limit, not zero acidity.",
    "Correct: with pK<sub>a3</sub> = 12.4, the equivalence point falls in a region where the leveling effect of water (and small differences from added strong base) blur the endpoint, so it cannot be sharply titrated.",
    "HPO<sub>4</sub>²⁻ is a very weak acid (pK<sub>a3</sub> = 12.4), not too strong; weak acidity is exactly the problem."
   ],
   "explanation": "A pK<sub>a</sub> of 12.4 means the third equivalence point sits at very high pH, where the water leveling effect and the buffering of OH⁻ itself prevent a sharp endpoint. The proton is too weakly acidic to be titrated cleanly in water.",
   "source": "AAMC Content Category 5A; Harris Quantitative Chemical Analysis",
   "topic": "Acid-base / leveling effect",
   "difficulty": "hard"
  },
  {
   "id": "e6_chemphys_q21",
   "section": "chemphys",
   "passageId": "e6_chemphys_p4",
   "stem": "A phosphate buffer at pH 7.2 is diluted 10-fold with pure water (all phosphate species diluted equally). To a first approximation, how does the pH change?",
   "options": [
    "It falls by about 1 unit",
    "It rises to 7 (neutral) regardless of the ratio",
    "It stays essentially the same",
    "It rises by about 1 unit"
   ],
   "answer": 2,
   "rationales": [
    "Dilution does not lower pH by a unit either; the ratio that sets pH is preserved.",
    "The pH approaches the buffer's set point (pK<sub>a</sub> region), not necessarily 7; equal dilution preserves the ratio, so it stays near 7.2.",
    "Correct: pH ≈ pK<sub>a</sub> + log([A⁻]/[HA]). Diluting both species equally leaves their ratio unchanged, so to first approximation pH is unchanged — a hallmark of buffer behavior.",
    "Dilution does not raise pH by a full unit; the conjugate base/acid ratio is unchanged."
   ],
   "explanation": "Because Henderson–Hasselbalch depends on the RATIO of conjugate base to acid, diluting both equally does not change that ratio, and pH is essentially unchanged. (Only at extreme dilution do water autoionization effects matter.)",
   "source": "AAMC Content Category 5A; Lehninger Principles of Biochemistry",
   "topic": "Acid-base / buffer dilution",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q22",
   "section": "chemphys",
   "passageId": "e6_chemphys_p5",
   "stem": "Based on the effect of compound X (V<sub>max</sub> unchanged, K<sub>M</sub> increased from 2.0 to 8.0 µM), what type of inhibitor is compound X?",
   "options": [
    "Uncompetitive inhibitor",
    "Competitive inhibitor",
    "Pure noncompetitive inhibitor",
    "Irreversible inhibitor"
   ],
   "answer": 1,
   "rationales": [
    "Uncompetitive inhibition lowers both V<sub>max</sub> and K<sub>M</sub> in the same proportion.",
    "Correct: an unchanged V<sub>max</sub> with an increased apparent K<sub>M</sub> is the signature of a competitive inhibitor, which can be outcompeted by high substrate.",
    "Pure noncompetitive inhibition lowers V<sub>max</sub> while leaving K<sub>M</sub> unchanged — the opposite pattern.",
    "Irreversible inhibition typically reduces effective V<sub>max</sub> (active enzyme is permanently lost), not the reversible K<sub>M</sub> shift seen here."
   ],
   "explanation": "Competitive inhibitors bind the active site, raising the apparent K<sub>M</sub> (more substrate needed) but not changing V<sub>max</sub>, since saturating substrate displaces the inhibitor. The data (K<sub>M</sub> up, V<sub>max</sub> constant) match competitive inhibition.",
   "source": "AAMC Content Category 5E; Lehninger Principles of Biochemistry",
   "topic": "Enzyme kinetics / inhibition",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q23",
   "section": "chemphys",
   "passageId": "e6_chemphys_p5",
   "stem": "How do compound X's effects appear on a Lineweaver–Burk plot relative to the uninhibited line?",
   "options": [
    "Same slope, higher y-intercept, lines intersect on the x-axis",
    "Same y-intercept, steeper slope, lines intersect on the y-axis",
    "Lower y-intercept and shallower slope",
    "Identical line, since V<sub>max</sub> is unchanged"
   ],
   "answer": 1,
   "rationales": [
    "Same slope with a higher y-intercept describes noncompetitive inhibition (lowered V<sub>max</sub>), not competitive.",
    "Correct: competitive inhibition keeps 1/V<sub>max</sub> (the y-intercept) the same while raising K<sub>M</sub>/V<sub>max</sub> (the slope), so the inhibited line is steeper and the two lines cross on the y-axis.",
    "Competitive inhibition raises, not lowers, the slope; the y-intercept is unchanged, not lowered.",
    "Although V<sub>max</sub> is unchanged, the slope changes because K<sub>M</sub> rose, so the line is not identical."
   ],
   "explanation": "On a double-reciprocal plot, the y-intercept is 1/V<sub>max</sub> and the slope is K<sub>M</sub>/V<sub>max</sub>. Competitive inhibition leaves V<sub>max</sub> (and thus the y-intercept) fixed but increases K<sub>M</sub>, increasing the slope; the lines intersect on the y-axis.",
   "source": "AAMC Content Category 5E; Lehninger Principles of Biochemistry",
   "topic": "Enzyme kinetics / Lineweaver–Burk",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q24",
   "section": "chemphys",
   "passageId": "e6_chemphys_p5",
   "stem": "In the uninhibited reaction (K<sub>M</sub> = 2.0 µM, V<sub>max</sub> = 100 µmol·min⁻¹), what is the initial velocity v<sub>0</sub> when [S] = 2.0 µM?",
   "options": [
    "25 µmol·min⁻¹",
    "100 µmol·min⁻¹",
    "50 µmol·min⁻¹",
    "67 µmol·min⁻¹"
   ],
   "answer": 2,
   "rationales": [
    "25 µmol·min⁻¹ would require [S] = K<sub>M</sub>/3, not [S] = K<sub>M</sub>.",
    "100 µmol·min⁻¹ is V<sub>max</sub>, reached only at saturating [S] ≫ K<sub>M</sub>.",
    "Correct: when [S] = K<sub>M</sub>, v<sub>0</sub> = V<sub>max</sub>·K<sub>M</sub>/(K<sub>M</sub> + K<sub>M</sub>) = V<sub>max</sub>/2 = 50 µmol·min⁻¹.",
    "67 µmol·min⁻¹ would require [S] = 2·K<sub>M</sub> (giving 2/3 of V<sub>max</sub>)."
   ],
   "explanation": "By definition, K<sub>M</sub> is the substrate concentration giving half-maximal velocity. With [S] = K<sub>M</sub> = 2.0 µM, v<sub>0</sub> = V<sub>max</sub>/2 = 50 µmol·min⁻¹.",
   "source": "AAMC Content Category 5E; Lehninger Principles of Biochemistry",
   "topic": "Enzyme kinetics / Michaelis–Menten",
   "difficulty": "easy"
  },
  {
   "id": "e6_chemphys_q25",
   "section": "chemphys",
   "passageId": "e6_chemphys_p5",
   "stem": "Adding more substrate to a reaction inhibited by compound X tends to restore the velocity toward V<sub>max</sub>. This observation is most consistent with which mechanism?",
   "options": [
    "High substrate displaces the competitive inhibitor from the active site",
    "High substrate increases V<sub>max</sub> above its normal value",
    "High substrate covalently removes the inhibitor",
    "High substrate denatures the inhibitor"
   ],
   "answer": 0,
   "rationales": [
    "Correct: because competitive inhibitor and substrate compete for the same active site, raising [S] shifts the binding equilibrium toward substrate, overcoming inhibition and approaching the original V<sub>max</sub>.",
    "V<sub>max</sub> cannot be raised above its intrinsic value by substrate; it is the asymptotic ceiling set by enzyme amount and k<sub>cat</sub>.",
    "Competition is reversible and noncovalent; substrate does not covalently remove the inhibitor.",
    "Substrate does not denature inhibitors; the effect is competition for binding, not denaturation."
   ],
   "explanation": "Competitive inhibition is surmountable: substrate and inhibitor vie for the same site, so high [S] outcompetes the inhibitor and velocity approaches the unchanged V<sub>max</sub>. This is the defining behavioral test for competitive inhibition.",
   "source": "AAMC Content Category 5E; Lehninger Principles of Biochemistry",
   "topic": "Enzyme kinetics / competitive inhibition",
   "difficulty": "medium"
  },
  {
   "id": "e6_chemphys_q26",
   "section": "chemphys",
   "stem": "A radioactive isotope used in PET imaging has a half-life of 110 minutes. Approximately what fraction of an initial dose remains after 5.5 hours?",
   "options": [
    "1/16",
    "1/4",
    "1/2",
    "1/8"
   ],
   "answer": 3,
   "rationales": [
    "1/16 corresponds to four half-lives (440 min), longer than 5.5 hours.",
    "1/4 corresponds to two half-lives (220 min), still short of 5.5 hours.",
    "1/2 corresponds to a single half-life (110 min), but 5.5 hours is three half-lives.",
    "Correct: 5.5 hours = 330 minutes = 3 half-lives (3 × 110 min). The remaining fraction is (1/2)³ = 1/8."
   ],
   "explanation": "5.5 h = 330 min, which is exactly three half-lives (330/110 = 3). Each half-life halves the activity, so the fraction remaining is (1/2)³ = 1/8.",
   "source": "AAMC Content Category 4E; Khan Academy MCAT (nuclear chemistry)",
   "topic": "Atomic/nuclear / radioactive decay",
   "difficulty": "easy"
  }
 ]
};
