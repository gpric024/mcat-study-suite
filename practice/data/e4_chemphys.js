window.MCAT_DATA = window.MCAT_DATA || {};
window.MCAT_DATA["e4_chemphys"] = {
 "passages": [
  {
   "id": "e4_chemphys_p1",
   "label": "Passage I — Calorimetry of Protein Unfolding",
   "html": "<p>Differential scanning calorimetry (DSC) measures the heat absorbed by a sample as temperature is increased at a constant rate. When a globular protein is heated, it undergoes a cooperative two-state unfolding transition, N ⇌ U, that absorbs heat. The midpoint of the transition is the melting temperature, T<sub>m</sub>, where the equilibrium constant for unfolding K = [U]/[N] = 1.</p><p>Researchers studied a small enzyme using DSC at pH 7.0. The thermogram showed a single sharp endothermic peak centered at T<sub>m</sub> = 328 K. Integration of the peak gave a calorimetric enthalpy of unfolding ΔH = +250 kJ/mol. At the transition midpoint the process is at equilibrium.</p><p>In a second experiment, a stabilizing osmolyte was added. The thermogram peak shifted to T<sub>m</sub> = 340 K, and the measured ΔH was essentially unchanged. The researchers noted that the area under the DSC peak is proportional to the total heat absorbed during unfolding at constant pressure.</p>"
  },
  {
   "id": "e4_chemphys_p2",
   "label": "Passage II — Acid–Base Titration of an Amino Acid",
   "html": "<p>The amino acid glycine has two ionizable groups: an α-carboxyl group (pK<sub>a1</sub> = 2.3) and an α-amino group (pK<sub>a2</sub> = 9.6). A student titrates 50.0 mL of 0.10 M glycine hydrochloride (the fully protonated cationic form, in which the carboxyl is —COOH and the amino group is —NH<sub>3</sub><sup>+</sup>) with 0.10 M NaOH and records pH versus volume of titrant added.</p><p>The titration curve shows two distinct buffering regions separated by a steep rise. At certain volumes of added base, the solution is maximally resistant to pH change. The student also identifies the isoelectric point (pI), the pH at which glycine carries no net charge and exists predominantly as the zwitterion.</p><p>All measurements were made at 25°C. The student treats activity coefficients as unity and uses the Henderson–Hasselbalch equation, pH = pK<sub>a</sub> + log([A⁻]/[HA]), throughout the analysis.</p>"
  },
  {
   "id": "e4_chemphys_p3",
   "label": "Passage III — Optics of a Compound Microscope",
   "html": "<p>A compound microscope forms a magnified image of a small specimen using two converging lenses. The objective lens (focal length f<sub>o</sub>) forms a real, inverted, magnified intermediate image of the specimen, which is placed just outside the objective's focal point. The eyepiece (ocular) then acts as a simple magnifier, viewing this intermediate image.</p><p>A student builds a model microscope on an optical bench. The objective has focal length f<sub>o</sub> = 8.0 mm. A specimen is placed 8.8 mm from the objective. The intermediate image forms on the far side of the objective.</p><p>Light used to illuminate the specimen has a wavelength of 550 nm in air. The student also notes that resolution — the ability to distinguish two nearby points — improves as wavelength decreases and as the numerical aperture of the objective increases. The index of refraction of the air between specimen and objective is 1.00.</p>"
  },
  {
   "id": "e4_chemphys_p4",
   "label": "Passage IV — Reaction Kinetics of Ester Hydrolysis",
   "html": "<p>The base-promoted hydrolysis (saponification) of ethyl acetate proceeds as:</p><p>CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + OH⁻ → CH<sub>3</sub>COO⁻ + C<sub>2</sub>H<sub>5</sub>OH</p><p>The reaction is first order in ester and first order in hydroxide, so the rate law is rate = k[ester][OH⁻]. Mechanistically, hydroxide attacks the electrophilic carbonyl carbon to form a tetrahedral intermediate, which then collapses to expel the ethoxide-derived leaving group.</p><p>Researchers measured the rate constant k at several temperatures by following conductivity (OH⁻ has much higher molar conductivity than acetate). Data are given below.</p><p>T = 288 K, k = 0.040 M⁻¹s⁻¹<br>T = 298 K, k = 0.110 M⁻¹s⁻¹<br>T = 308 K, k = 0.280 M⁻¹s⁻¹</p><p>The data were analyzed using the Arrhenius equation, k = A·e<sup>(−E<sub>a</sub>/RT)</sup>. A plot of ln k versus 1/T was linear. (R = 8.314 J mol⁻¹ K⁻¹.)</p>"
  },
  {
   "id": "e4_chemphys_p5",
   "label": "Passage V — Ultracentrifugation and Sedimentation",
   "html": "<p>Analytical ultracentrifugation separates macromolecules by mass and shape. In a centrifuge spinning at angular velocity ω, a particle at radius r experiences a centrifugal acceleration ω²r. A particle of mass m and volume V suspended in a solvent of density ρ sediments toward the bottom of the tube; buoyancy and frictional drag oppose this motion.</p><p>At steady state (terminal velocity), the net driving force balances the viscous drag force f·v, where f is the frictional coefficient and v is the sedimentation velocity. The sedimentation coefficient is defined as s = v/(ω²r), reported in svedberg units (1 S = 10⁻¹³ s).</p><p>Two proteins were analyzed in the same solvent. Protein A had s = 4.0 S; Protein B had s = 7.0 S. Both proteins have the same partial specific volume (and thus the same density relative to solvent). The researchers noted that for particles of equal density and shape, sedimentation coefficient increases with mass, but frictional coefficient increases for elongated (less spherical) shapes at fixed mass.</p>"
  }
 ],
 "questions": [
  {
   "id": "e4_chemphys_q1",
   "section": "chemphys",
   "passageId": "e4_chemphys_p1",
   "stem": "At the melting temperature T<sub>m</sub> = 328 K, what is the value of ΔG for the unfolding process N ⇌ U?",
   "options": [
    "ΔG = −250 kJ/mol",
    "ΔG = +250 kJ/mol",
    "ΔG cannot be determined without the heat capacity change",
    "ΔG = 0"
   ],
   "answer": 3,
   "rationales": [
    "−250 kJ/mol confuses the sign and magnitude with ΔH; ΔG is zero at the midpoint.",
    "+250 kJ/mol is ΔH, the enthalpy of unfolding, not ΔG; these are different quantities.",
    "ΔC<sub>p</sub> affects how ΔH and ΔS vary with temperature, but ΔG at the equilibrium midpoint is exactly 0 by definition of K = 1.",
    "Correct: at T<sub>m</sub> the process is at equilibrium with K = [U]/[N] = 1, so ΔG = −RT ln K = −RT ln 1 = 0."
   ],
   "explanation": "By definition, T<sub>m</sub> is where folded and unfolded states are equally populated, so K = 1 and ΔG = −RT ln K = 0. The enthalpy ΔH = +250 kJ/mol is the heat absorbed, a separate quantity.",
   "source": "AAMC Content Category 5E; Lehninger Principles of Biochemistry",
   "topic": "Thermodynamics / equilibrium",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q2",
   "section": "chemphys",
   "passageId": "e4_chemphys_p1",
   "stem": "Using ΔH = +250 kJ/mol and the fact that ΔG = 0 at T<sub>m</sub> = 328 K, what is the approximate entropy change ΔS for unfolding at the transition midpoint?",
   "options": [
    "About −0.76 kJ·mol⁻¹·K⁻¹",
    "About +82 kJ·mol⁻¹·K⁻¹",
    "About +250 kJ·mol⁻¹·K⁻¹",
    "About +0.76 kJ·mol⁻¹·K⁻¹"
   ],
   "answer": 3,
   "rationales": [
    "The magnitude is right but the sign is wrong; unfolding a compact native state increases conformational entropy, so ΔS is positive.",
    "82 multiplies rather than divides (250 × 0.328); the correct operation is ΔH/T.",
    "250 ignores division by T entirely and confuses ΔS with ΔH.",
    "Correct: ΔG = ΔH − TΔS = 0, so ΔS = ΔH/T = 250 kJ/mol ÷ 328 K ≈ 0.76 kJ·mol⁻¹·K⁻¹ (positive, as unfolding increases disorder)."
   ],
   "explanation": "At T<sub>m</sub>, ΔG = ΔH − TΔS = 0, so ΔS = ΔH/T = 250/328 ≈ 0.76 kJ·mol⁻¹·K⁻¹. Unfolding increases disorder, so ΔS is positive.",
   "source": "AAMC Content Category 5E; Atkins Physical Chemistry",
   "topic": "Thermodynamics (Gibbs free energy)",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q3",
   "section": "chemphys",
   "passageId": "e4_chemphys_p1",
   "stem": "The stabilizing osmolyte raised T<sub>m</sub> from 328 K to 340 K with ΔH unchanged. Which statement best explains the shift in terms of stability?",
   "options": [
    "The osmolyte makes ΔG of unfolding more positive at physiological temperatures below T<sub>m</sub>, requiring more heat to reach the midpoint",
    "The osmolyte decreases the enthalpy of unfolding, stabilizing the native state",
    "The osmolyte converts the two-state transition into a multi-state transition",
    "The osmolyte lowers the activation energy of unfolding"
   ],
   "answer": 0,
   "rationales": [
    "Correct: a higher T<sub>m</sub> means the native state remains favored (ΔG of unfolding > 0) up to a higher temperature, so the protein is thermodynamically more stable and needs more heat input to reach K = 1.",
    "The passage states ΔH was essentially unchanged, so the stabilization is not due to a lower unfolding enthalpy.",
    "A single sharp peak still indicates a two-state transition; the osmolyte shifted, not split, the peak.",
    "DSC reports thermodynamics (ΔH, T<sub>m</sub>), not the kinetic activation barrier; T<sub>m</sub> reflects equilibrium stability, not reaction rate."
   ],
   "explanation": "Raising T<sub>m</sub> at constant ΔH means the folded state stays favored to higher temperature — the protein is more stable. Greater stability means ΔG of unfolding is more positive at any temperature below the new T<sub>m</sub>.",
   "source": "AAMC Content Category 5E; Voet & Voet Biochemistry",
   "topic": "Protein stability / thermodynamics",
   "difficulty": "hard"
  },
  {
   "id": "e4_chemphys_q4",
   "section": "chemphys",
   "passageId": "e4_chemphys_p1",
   "stem": "The DSC peak area is proportional to the heat absorbed at constant pressure. This heat corresponds most directly to which thermodynamic quantity?",
   "options": [
    "The change in enthalpy, ΔH",
    "The work done by the system, w",
    "The change in Gibbs free energy, ΔG",
    "The change in internal energy, ΔU"
   ],
   "answer": 0,
   "rationales": [
    "Correct: at constant pressure, q<sub>p</sub> = ΔH by definition, so the integrated heat from a DSC scan gives the enthalpy of the transition.",
    "Heat absorbed is q, not work w; for this process at constant P the relevant identity is q<sub>p</sub> = ΔH.",
    "ΔG is not measured as a heat; it combines enthalpy and entropy contributions.",
    "ΔU equals heat only at constant volume; DSC operates at constant pressure."
   ],
   "explanation": "Enthalpy is defined so that the heat exchanged at constant pressure equals ΔH. DSC measures heat flow at constant pressure, so the peak area directly gives the calorimetric ΔH.",
   "source": "AAMC Content Category 5E; Atkins Physical Chemistry",
   "topic": "Enthalpy / calorimetry",
   "difficulty": "easy"
  },
  {
   "id": "e4_chemphys_q5",
   "section": "chemphys",
   "passageId": "e4_chemphys_p1",
   "stem": "If the protein concentration in the DSC cell were doubled while keeping all else constant, what would happen to the measured T<sub>m</sub> and to the total integrated heat (in joules) of the peak?",
   "options": [
    "T<sub>m</sub> increases; total heat unchanged",
    "T<sub>m</sub> doubles; total heat unchanged",
    "Both T<sub>m</sub> and total heat double",
    "T<sub>m</sub> unchanged; total heat doubles"
   ],
   "answer": 3,
   "rationales": [
    "T<sub>m</sub> for a unimolecular two-state transition is an intensive property independent of concentration, and total heat scales with the number of molecules.",
    "T<sub>m</sub> is a temperature characterizing the equilibrium, not a quantity that scales with amount of material.",
    "Total heat (extensive) doubles, but T<sub>m</sub> (intensive) does not change.",
    "Correct: T<sub>m</sub> (set by where K = 1 for a unimolecular transition) is independent of concentration, but the total heat absorbed scales with the moles of protein, so doubling protein doubles the integrated joules."
   ],
   "explanation": "For a unimolecular N ⇌ U transition, the equilibrium position depends only on temperature, so T<sub>m</sub> is concentration-independent. Total heat is extensive and proportional to moles unfolded, so it doubles.",
   "source": "AAMC Content Category 5E; Voet & Voet Biochemistry",
   "topic": "Calorimetry / intensive vs extensive",
   "difficulty": "hard"
  },
  {
   "id": "e4_chemphys_q6",
   "section": "chemphys",
   "passageId": "e4_chemphys_p2",
   "stem": "At what volume of added 0.10 M NaOH does the solution have its greatest buffering capacity around the carboxyl group (i.e., where pH = pK<sub>a1</sub>)?",
   "options": [
    "75.0 mL",
    "12.5 mL",
    "50.0 mL",
    "25.0 mL"
   ],
   "answer": 3,
   "rationales": [
    "75.0 mL is the half-equivalence point of the second (amino) group, where pH = pK<sub>a2</sub>, not the carboxyl.",
    "12.5 mL is only one-quarter of the way to the first equivalence point, not the carboxyl half-equivalence point.",
    "50.0 mL is the first equivalence point (carboxyl fully deprotonated), where buffering is weakest, not strongest.",
    "Correct: the solution contains 5.0 mmol glycine (50.0 mL × 0.10 M). The carboxyl proton is fully neutralized at 5.0 mmol NaOH = 50.0 mL (the first equivalence point). Maximum buffering at pK<sub>a1</sub> occurs at the half-equivalence point, where 2.5 mmol of base has been added = 25.0 mL."
   ],
   "explanation": "5.0 mmol glycine has 2 titratable protons. The carboxyl proton requires 5.0 mmol NaOH (= 50.0 mL) to reach the first equivalence point, so its half-equivalence point — where pH = pK<sub>a1</sub> and buffering is maximal — occurs at 25.0 mL. (The amino group's half-equivalence falls at 75.0 mL.)",
   "source": "AAMC Content Category 5A; Lehninger Principles of Biochemistry",
   "topic": "Buffers / titration",
   "difficulty": "hard"
  },
  {
   "id": "e4_chemphys_q7",
   "section": "chemphys",
   "passageId": "e4_chemphys_p2",
   "stem": "What is the isoelectric point (pI) of glycine, and which species predominates there?",
   "options": [
    "pI = 7.0; an equal mix of cation and anion predominates",
    "pI = 2.3; the cationic form predominates",
    "pI = 9.6; the anionic form predominates",
    "pI = 5.95; the zwitterion predominates"
   ],
   "answer": 3,
   "rationales": [
    "7.0 is not the average of the two pK<sub>a</sub> values; while the zwitterion is dominant near neutral pH, the defined pI is 5.95.",
    "2.3 is pK<sub>a1</sub>, not the pI; at that pH the carboxyl is only half-deprotonated and the molecule is partly cationic.",
    "9.6 is pK<sub>a2</sub>; at that pH the amino group is half-deprotonated, giving net negative species, not the pI.",
    "Correct: for a molecule with no ionizable side chain, pI = (pK<sub>a1</sub> + pK<sub>a2</sub>)/2 = (2.3 + 9.6)/2 = 5.95, where the net-neutral zwitterion (—NH<sub>3</sub><sup>+</sup>, —COO⁻) predominates."
   ],
   "explanation": "The pI for an amino acid with two ionizable groups flanking the neutral zwitterion is the average of the two relevant pK<sub>a</sub> values: (2.3 + 9.6)/2 = 5.95. At this pH the zwitterion (net charge zero) predominates.",
   "source": "AAMC Content Category 5A; Lehninger Principles of Biochemistry",
   "topic": "Isoelectric point / amino acids",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q8",
   "section": "chemphys",
   "passageId": "e4_chemphys_p2",
   "stem": "At a pH of 9.6, what is the approximate ratio of the deprotonated amino species to the protonated amino species for the α-amino group?",
   "options": [
    "1:1",
    "1:10",
    "10:1",
    "100:1"
   ],
   "answer": 0,
   "rationales": [
    "Correct: when pH = pK<sub>a</sub>, the Henderson–Hasselbalch equation gives log([A⁻]/[HA]) = 0, so the ratio is 1:1 (the amino group is half-deprotonated).",
    "1:10 would require pH = pK<sub>a2</sub> − 1 = 8.6.",
    "10:1 would require pH = pK<sub>a2</sub> + 1 = 10.6, not 9.6.",
    "100:1 would require pH = pK<sub>a2</sub> + 2 = 11.6."
   ],
   "explanation": "By Henderson–Hasselbalch, pH = pK<sub>a</sub> + log([deprotonated]/[protonated]). At pH = pK<sub>a2</sub> = 9.6, the log term is 0, giving a 1:1 ratio.",
   "source": "AAMC Content Category 5A; Khan Academy MCAT",
   "topic": "Henderson–Hasselbalch",
   "difficulty": "easy"
  },
  {
   "id": "e4_chemphys_q9",
   "section": "chemphys",
   "passageId": "e4_chemphys_p2",
   "stem": "If the experiment were repeated at 25°C with a more concentrated 0.20 M glycine solution titrated with 0.20 M NaOH, how would the pK<sub>a1</sub> determined from the curve and the volume to reach the first equivalence point change (assuming ideal behavior)?",
   "options": [
    "pK<sub>a1</sub> unchanged; equivalence volume would double",
    "pK<sub>a1</sub> unchanged; equivalence volume unchanged",
    "pK<sub>a1</sub> would decrease; equivalence volume would halve",
    "pK<sub>a1</sub> would increase; equivalence volume unchanged"
   ],
   "answer": 1,
   "rationales": [
    "The titrant concentration also doubled, so the volume needed stays the same, not doubles.",
    "Correct: pK<sub>a1</sub> is a thermodynamic constant independent of concentration, and because both glycine and NaOH concentrations were doubled equally, the volume of titrant needed to reach equivalence is unchanged (the moles ratio is preserved).",
    "Neither pK<sub>a1</sub> nor the relative volume changes when both solutions are scaled by the same factor.",
    "pK<sub>a1</sub> is an intrinsic property of the acid at fixed temperature and does not change with concentration."
   ],
   "explanation": "pK<sub>a</sub> is concentration-independent. Doubling both analyte and titrant concentrations equally leaves the equivalence-point volume unchanged because the mole ratio at equivalence is identical.",
   "source": "AAMC Content Category 5A; Atkins Physical Chemistry",
   "topic": "Titration / equilibrium constants",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q10",
   "section": "chemphys",
   "passageId": "e4_chemphys_p2",
   "stem": "Near the first equivalence point, the predominant glycine species is the zwitterion. Why does this point correspond to a steep rise in pH on the titration curve rather than maximal buffering?",
   "options": [
    "Because at the equivalence point there is essentially no conjugate acid–base pair of a single group in comparable amounts, so small base additions change pH sharply",
    "Because the zwitterion precipitates, removing buffering species",
    "Because the zwitterion is a strong base that fully ionizes",
    "Because water autoionization dominates and fixes pH at 7.0"
   ],
   "answer": 0,
   "rationales": [
    "Correct: at the first equivalence point the carboxyl group is essentially fully titrated and the amino group not yet titrated, so neither group has a comparable HA/A⁻ pair; buffering capacity is minimal and pH rises steeply with added base.",
    "Glycine zwitterion is highly water-soluble; precipitation is not the cause of the steep region.",
    "The zwitterion is amphoteric, not a strong base; strong-base behavior would not explain a steep transition between two buffering regions.",
    "Water autoionization does not pin pH at 7.0 here; the pH at this equivalence point is near the pI (~5.95), not 7.0."
   ],
   "explanation": "Buffering requires comparable amounts of a conjugate acid–base pair. At the first equivalence point, one group is fully converted and the next has not begun titrating, so the buffer capacity is low and the curve is steep.",
   "source": "AAMC Content Category 5A; Lehninger Principles of Biochemistry",
   "topic": "Buffer capacity / titration curves",
   "difficulty": "hard"
  },
  {
   "id": "e4_chemphys_q11",
   "section": "chemphys",
   "passageId": "e4_chemphys_p3",
   "stem": "With the specimen 8.8 mm from the objective (f<sub>o</sub> = 8.0 mm), where does the intermediate image form?",
   "options": [
    "About 88 mm in front of the objective (same side as object), virtual",
    "At infinity",
    "About 88 mm beyond the objective, real and inverted",
    "About 4.2 mm in front of the objective, virtual and upright"
   ],
   "answer": 2,
   "rationales": [
    "A positive d<sub>i</sub> means the image is on the opposite side from the object; the sign here is positive.",
    "The image forms at infinity only when the object is exactly at the focal point (8.0 mm), not at 8.8 mm.",
    "Correct: 1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub> → 1/8.0 = 1/8.8 + 1/d<sub>i</sub>, giving 1/d<sub>i</sub> = 0.125 − 0.1136 = 0.01136 mm⁻¹, so d<sub>i</sub> ≈ 88 mm on the far side: a real, inverted, magnified image.",
    "A converging lens with the object outside the focal length forms a real image, not a virtual upright one."
   ],
   "explanation": "Using the thin-lens equation with d<sub>o</sub> = 8.8 mm and f = 8.0 mm: 1/d<sub>i</sub> = 1/8.0 − 1/8.8 ≈ 0.01136 mm⁻¹, so d<sub>i</sub> ≈ 88 mm. The positive value indicates a real, inverted image on the opposite side.",
   "source": "AAMC Content Category 4D; Halliday & Resnick Physics",
   "topic": "Geometric optics (thin lens)",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q12",
   "section": "chemphys",
   "passageId": "e4_chemphys_p3",
   "stem": "Given the image distance of about 88 mm and object distance 8.8 mm, what is the transverse magnification produced by the objective alone?",
   "options": [
    "About −0.1×",
    "About +10×",
    "About −1×",
    "About −10×"
   ],
   "answer": 3,
   "rationales": [
    "−0.1× inverts the ratio; magnification m = −d<sub>i</sub>/d<sub>o</sub>, not −d<sub>o</sub>/d<sub>i</sub>.",
    "The magnitude 10 is right, but the image is inverted (real image from a single converging lens), so the sign is negative.",
    "−1× would require equal object and image distances, which is not the case here.",
    "Correct: m = −d<sub>i</sub>/d<sub>o</sub> = −88/8.8 = −10×. The negative sign indicates an inverted image, magnified 10-fold."
   ],
   "explanation": "Transverse magnification m = −d<sub>i</sub>/d<sub>o</sub> = −88/8.8 = −10. The objective produces a 10× enlarged, inverted intermediate image.",
   "source": "AAMC Content Category 4D; Halliday & Resnick Physics",
   "topic": "Magnification",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q13",
   "section": "chemphys",
   "passageId": "e4_chemphys_p3",
   "stem": "The student switches the illuminating light from 550 nm (green) to 450 nm (blue). What is the predicted effect on the microscope's resolving power?",
   "options": [
    "Resolution worsens because shorter wavelengths diffract more",
    "Resolution worsens because blue light has lower energy",
    "Resolution improves because the minimum resolvable distance decreases with shorter wavelength",
    "Resolution is unaffected because resolution depends only on magnification"
   ],
   "answer": 2,
   "rationales": [
    "Shorter wavelengths actually reduce diffraction-limited blur, improving resolution, not worsening it.",
    "Blue light has higher energy than green, not lower, and energy is not the operative factor — wavelength is.",
    "Correct: the diffraction-limited minimum resolvable separation is proportional to wavelength (d<sub>min</sub> ∝ λ/NA), so decreasing λ from 550 to 450 nm decreases d<sub>min</sub> and improves resolution.",
    "Magnification without resolution just enlarges blur ('empty magnification'); resolution depends on wavelength and numerical aperture."
   ],
   "explanation": "Resolution is diffraction-limited: the smallest resolvable distance scales with λ/NA. Using a shorter wavelength reduces this distance, so resolving power improves.",
   "source": "AAMC Content Category 4D; Khan Academy MCAT",
   "topic": "Resolution / diffraction",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q14",
   "section": "chemphys",
   "passageId": "e4_chemphys_p3",
   "stem": "To increase numerical aperture, oil-immersion objectives replace the air gap with immersion oil (n ≈ 1.5). When green light (λ = 550 nm in air) enters the oil, how do its wavelength and frequency change?",
   "options": [
    "Wavelength increases; frequency increases",
    "Wavelength decreases to ~367 nm; frequency unchanged",
    "Wavelength unchanged; frequency decreases",
    "Both wavelength and frequency decrease by a factor of 1.5"
   ],
   "answer": 1,
   "rationales": [
    "Entering a higher-index medium decreases wavelength and speed; frequency is unchanged, so 'both increase' is wrong.",
    "Correct: frequency is set by the source and does not change across media; wavelength in the medium is λ/n = 550/1.5 ≈ 367 nm, since speed decreases in the denser medium.",
    "Wavelength does change in a new medium; it is frequency that stays constant.",
    "Frequency does not change when light enters a new medium; only wavelength and speed do."
   ],
   "explanation": "When light crosses into a medium of index n, its frequency stays constant (fixed by the source) while its speed and wavelength drop by the factor n: λ<sub>medium</sub> = λ<sub>vacuum</sub>/n = 550/1.5 ≈ 367 nm.",
   "source": "AAMC Content Category 4D; Halliday & Resnick Physics",
   "topic": "Wave optics / refractive index",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q15",
   "section": "chemphys",
   "passageId": "e4_chemphys_p3",
   "stem": "If the eyepiece provides an angular magnification of 10× and the objective produces a transverse magnification of 10×, what is the total magnification of the compound microscope?",
   "options": [
    "1×",
    "100×",
    "20×",
    "0.1×"
   ],
   "answer": 1,
   "rationales": [
    "1× would imply the lenses cancel, which is not how a compound microscope works.",
    "Correct: total magnification of a compound microscope is the product of the objective and eyepiece magnifications: 10 × 10 = 100×.",
    "20× adds the magnifications; for a two-lens compound system they multiply.",
    "0.1× would result from dividing; magnifications multiply."
   ],
   "explanation": "Total magnification of a compound microscope equals the product of the objective's transverse magnification and the eyepiece's angular magnification: M = M<sub>o</sub> × M<sub>e</sub> = 10 × 10 = 100×.",
   "source": "AAMC Content Category 4D; Halliday & Resnick Physics",
   "topic": "Compound microscope magnification",
   "difficulty": "easy"
  },
  {
   "id": "e4_chemphys_q16",
   "section": "chemphys",
   "passageId": "e4_chemphys_p4",
   "stem": "Based on the rate law rate = k[ester][OH⁻], what is the overall order of the saponification reaction?",
   "options": [
    "First order",
    "Third order",
    "Zeroth order",
    "Second order"
   ],
   "answer": 3,
   "rationales": [
    "First order overall would mean only one species appears to the first power; here two do.",
    "Third order would require the exponents to sum to 3; they sum to 2.",
    "Zeroth order would mean rate independent of all concentrations, contradicting the given rate law.",
    "Correct: the reaction is first order in ester and first order in hydroxide, so the overall order is 1 + 1 = 2 (second order)."
   ],
   "explanation": "Overall reaction order is the sum of the exponents in the rate law. With first order in ester and first order in OH⁻, the overall order is 2.",
   "source": "AAMC Content Category 5D; Khan Academy MCAT",
   "topic": "Reaction order",
   "difficulty": "easy"
  },
  {
   "id": "e4_chemphys_q17",
   "section": "chemphys",
   "passageId": "e4_chemphys_p4",
   "stem": "Using the data at 288 K (k = 0.040) and 308 K (k = 0.280), the rate constant increases by a factor of 7 over a 20 K rise. The activation energy E<sub>a</sub> is approximately:",
   "options": [
    "About 0.7 kJ/mol",
    "About 200 kJ/mol",
    "About 72 kJ/mol",
    "About 7 kJ/mol"
   ],
   "answer": 2,
   "rationales": [
    "0.7 kJ/mol is unreasonably small and off by orders of magnitude.",
    "200 kJ/mol would predict a far larger rate increase than the observed 7-fold over 20 K.",
    "Correct: ln(k₂/k₁) = −(E<sub>a</sub>/R)(1/T₂ − 1/T₁). ln 7 ≈ 1.95; (1/288 − 1/308) ≈ 2.25×10⁻⁴ K⁻¹; E<sub>a</sub> = R·ln(k₂/k₁)/(1/T₁ − 1/T₂) ≈ 8.314 × 1.95 / 2.25×10⁻⁴ ≈ 72,000 J/mol ≈ 72 kJ/mol.",
    "7 kJ/mol is far too small; such a low barrier would produce far weaker temperature dependence than a 7-fold change over 20 K."
   ],
   "explanation": "Apply the two-point Arrhenius form: ln(k₂/k₁) = (E<sub>a</sub>/R)(1/T₁ − 1/T₂). With ln 7 ≈ 1.95 and (1/288 − 1/308) ≈ 2.25×10⁻⁴ K⁻¹, E<sub>a</sub> ≈ 8.314 × 1.95 / 2.25×10⁻⁴ ≈ 72 kJ/mol.",
   "source": "AAMC Content Category 5D; Atkins Physical Chemistry",
   "topic": "Arrhenius / activation energy",
   "difficulty": "hard"
  },
  {
   "id": "e4_chemphys_q18",
   "section": "chemphys",
   "passageId": "e4_chemphys_p4",
   "stem": "A plot of ln k versus 1/T is linear with a negative slope. What does the slope of this line equal?",
   "options": [
    "−E<sub>a</sub>/R",
    "ln A",
    "+E<sub>a</sub>/R",
    "−E<sub>a</sub>·R"
   ],
   "answer": 0,
   "rationales": [
    "Correct: taking ln of the Arrhenius equation gives ln k = ln A − (E<sub>a</sub>/R)(1/T), so a plot of ln k vs 1/T has slope −E<sub>a</sub>/R.",
    "ln A is the y-intercept of the plot, not the slope.",
    "The slope is negative for a positive E<sub>a</sub>, so +E<sub>a</sub>/R has the wrong sign.",
    "−E<sub>a</sub>·R has the wrong form; E<sub>a</sub> is divided by R, not multiplied."
   ],
   "explanation": "Linearizing k = A·e^(−E<sub>a</sub>/RT) gives ln k = ln A − (E<sub>a</sub>/R)(1/T). Thus the slope is −E<sub>a</sub>/R and the intercept is ln A.",
   "source": "AAMC Content Category 5D; Atkins Physical Chemistry",
   "topic": "Arrhenius plot",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q19",
   "section": "chemphys",
   "passageId": "e4_chemphys_p4",
   "stem": "The mechanism proceeds through a tetrahedral intermediate formed when hydroxide attacks the carbonyl carbon. The hybridization of that carbonyl carbon changes during this step from:",
   "options": [
    "sp² to sp³",
    "sp to sp²",
    "sp³ to sp²",
    "sp² to sp"
   ],
   "answer": 0,
   "rationales": [
    "Correct: the planar sp² carbonyl carbon becomes a tetrahedral sp³ carbon once the nucleophile adds, forming the tetrahedral intermediate.",
    "The carbonyl carbon is sp² (not sp) before attack; sp would imply two groups and linear geometry.",
    "This is the reverse of what occurs during nucleophilic addition to the carbonyl.",
    "The carbon does not become sp; nucleophilic addition increases the number of attached groups, raising the hybridization to sp³."
   ],
   "explanation": "A carbonyl carbon is trigonal planar (sp²). When hydroxide adds, the carbon gains a fourth σ bond and becomes tetrahedral (sp³), defining the tetrahedral intermediate.",
   "source": "AAMC Content Category 5D; Klein Organic Chemistry",
   "topic": "Carbonyl mechanism / hybridization",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q20",
   "section": "chemphys",
   "passageId": "e4_chemphys_p4",
   "stem": "The researchers chose to follow the reaction by conductivity because OH⁻ has much higher molar conductivity than acetate. As the reaction proceeds, the solution's conductivity is expected to:",
   "options": [
    "Stay constant, because the number of ions is conserved",
    "First increase, then decrease",
    "Increase, because more ions are produced",
    "Decrease, because high-mobility OH⁻ is replaced by lower-mobility acetate"
   ],
   "answer": 3,
   "rationales": [
    "Although ion count is conserved, the species differ in mobility, so conductivity changes (decreases).",
    "The change is monotonic (steady decrease), not an increase followed by a decrease.",
    "The total ion count is roughly conserved (OH⁻ → acetate), so conductivity is not driven up by 'more ions.'",
    "Correct: the reaction converts each highly mobile hydroxide ion into a less mobile acetate ion (a one-for-one ion swap), so overall conductivity falls as the reaction proceeds — which is exactly what makes conductivity a useful probe."
   ],
   "explanation": "Saponification replaces a fast-moving OH⁻ with a slow-moving acetate ion in a 1:1 ratio. Because conductivity depends on ionic mobility, the solution's conductivity decreases steadily as OH⁻ is consumed.",
   "source": "AAMC Content Category 5D; Atkins Physical Chemistry",
   "topic": "Conductivity / monitoring kinetics",
   "difficulty": "hard"
  },
  {
   "id": "e4_chemphys_q21",
   "section": "chemphys",
   "passageId": "e4_chemphys_p5",
   "stem": "Protein B has a higher sedimentation coefficient (7.0 S) than Protein A (4.0 S). Assuming identical shape and density, which protein has the greater mass, and why?",
   "options": [
    "Protein B, because at equal density and shape a higher s reflects greater mass",
    "They have equal mass; s depends only on rotor speed",
    "Protein A, because lower s means higher mass",
    "Cannot be determined without knowing the rotor radius"
   ],
   "answer": 0,
   "rationales": [
    "Correct: the passage states that for equal density and shape, sedimentation coefficient increases with mass; therefore the higher-s Protein B is more massive.",
    "Mass is not equal, and s is a property of the particle/solvent, not merely the rotor speed (s = v/ω²r normalizes out ω).",
    "Lower s corresponds to lower, not higher, mass for particles of equal density and shape.",
    "s is defined to be independent of rotor radius and speed (it is normalized by ω²r), so mass can be compared directly from s under the stated assumptions."
   ],
   "explanation": "Sedimentation coefficient s normalizes velocity by centrifugal acceleration, so it is an intrinsic particle property. For particles of equal density and shape, s rises with mass, so Protein B (7.0 S) is heavier.",
   "source": "AAMC Content Category 4B; Voet & Voet Biochemistry",
   "topic": "Sedimentation / centrifugation",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q22",
   "section": "chemphys",
   "passageId": "e4_chemphys_p5",
   "stem": "Two proteins have the same mass and density, but one is highly elongated (rod-like) and the other is compact (spherical). How will their sedimentation coefficients compare?",
   "options": [
    "The elongated protein sediments faster (higher s) due to larger surface area",
    "They sediment identically because mass and density are equal",
    "The compact protein sediments faster (higher s) because it has a smaller frictional coefficient",
    "The elongated protein has zero sedimentation coefficient"
   ],
   "answer": 2,
   "rationales": [
    "Larger surface area of an elongated shape increases drag, slowing sedimentation rather than speeding it.",
    "Shape affects the frictional coefficient even at equal mass and density, so the two do not sediment identically.",
    "Correct: at equal mass, the more compact (spherical) particle has a smaller frictional coefficient f, so for the same driving force it reaches a higher terminal velocity and thus a higher s.",
    "An elongated protein still sediments; its s is merely lower, not zero."
   ],
   "explanation": "s is inversely related to the frictional coefficient f. A sphere has the minimum f for a given mass, so the compact protein experiences less drag and sediments faster (higher s) than an elongated protein of equal mass.",
   "source": "AAMC Content Category 4B; Voet & Voet Biochemistry",
   "topic": "Frictional coefficient / molecular shape",
   "difficulty": "hard"
  },
  {
   "id": "e4_chemphys_q23",
   "section": "chemphys",
   "passageId": "e4_chemphys_p5",
   "stem": "At terminal (steady-state) sedimentation velocity, what is true of the net force on the particle?",
   "options": [
    "The net force equals the centrifugal force",
    "The net force increases linearly with radius",
    "The net force is zero because drag and buoyancy balance the centrifugal driving force",
    "The net force points toward the rotor center"
   ],
   "answer": 2,
   "rationales": [
    "If net force equaled the full centrifugal force, the particle would keep accelerating, contradicting terminal velocity.",
    "At true terminal velocity the forces balance (net zero); the driving force grows with radius, but so does drag as velocity adjusts, keeping the instantaneous net force ~0.",
    "Correct: at terminal velocity there is no acceleration, so by Newton's second law the net force is zero — the centrifugal driving force is balanced by buoyant and viscous drag forces.",
    "At terminal velocity the particle moves outward at constant speed; the net force is zero, not directed inward."
   ],
   "explanation": "Terminal velocity means constant velocity and zero acceleration, so the net force is zero: the centrifugal force is exactly balanced by buoyancy and the viscous drag force f·v.",
   "source": "AAMC Content Category 4B; Halliday & Resnick Physics",
   "topic": "Terminal velocity / force balance",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q24",
   "section": "chemphys",
   "passageId": "e4_chemphys_p5",
   "stem": "If the rotor's angular velocity ω is doubled, how does the sedimentation velocity v of a given particle change, and does its sedimentation coefficient s change?",
   "options": [
    "v is unchanged; s quadruples",
    "v quadruples; s is unchanged",
    "v doubles; s is unchanged",
    "v doubles; s doubles"
   ],
   "answer": 1,
   "rationales": [
    "v is not unchanged — it scales with ω² — and s is constructed to be independent of ω.",
    "Correct: the driving force ∝ ω²r, so terminal velocity v ∝ ω²; doubling ω quadruples v. Because s = v/(ω²r) normalizes out ω², s is unchanged.",
    "v scales with ω², not ω, so doubling ω quadruples v (not doubles it).",
    "s = v/(ω²r) is defined to be independent of ω, so s does not double."
   ],
   "explanation": "The centrifugal driving force scales as ω²r, so terminal velocity v ∝ ω²; doubling ω makes v 4×. The sedimentation coefficient s = v/(ω²r) is normalized to remove the ω² dependence, so s is unchanged.",
   "source": "AAMC Content Category 4B; Voet & Voet Biochemistry",
   "topic": "Centrifugation / scaling",
   "difficulty": "hard"
  },
  {
   "id": "e4_chemphys_q25",
   "section": "chemphys",
   "stem": "A 2.0 kg block slides down a frictionless incline that makes a 30° angle with the horizontal. What is the magnitude of its acceleration along the incline? (g = 10 m/s²)",
   "options": [
    "5.0 m/s²",
    "2.5 m/s²",
    "10 m/s²",
    "8.7 m/s²"
   ],
   "answer": 0,
   "rationales": [
    "Correct: on a frictionless incline, a = g·sinθ = 10 × sin30° = 10 × 0.5 = 5.0 m/s², independent of mass.",
    "2.5 m/s² would require sin30° = 0.25; sin30° = 0.5, giving 5.0 m/s².",
    "10 m/s² is g itself, which would apply only to free fall, not motion constrained to a 30° incline.",
    "8.7 m/s² equals g·cos30°, but the acceleration along a frictionless incline is g·sin30°, not g·cos30°."
   ],
   "explanation": "On a frictionless incline the net force along the slope is mg·sinθ, so acceleration a = g·sinθ = 10 × 0.5 = 5.0 m/s². The mass cancels.",
   "source": "AAMC Content Category 4A; Halliday & Resnick Physics",
   "topic": "Kinematics / inclined plane",
   "difficulty": "medium"
  },
  {
   "id": "e4_chemphys_q26",
   "section": "chemphys",
   "stem": "A 12 V battery is connected to two resistors, 4 Ω and 8 Ω, wired in parallel. What is the total current drawn from the battery?",
   "options": [
    "0.67 A",
    "1.0 A",
    "4.5 A",
    "12 A"
   ],
   "answer": 2,
   "rationales": [
    "0.67 A inverts the relationship; it uses 12 ÷ 18 or a similar error rather than V/R<sub>parallel</sub>.",
    "1.0 A would correspond to a 12 Ω total resistance (the series sum), but these resistors are in parallel.",
    "Correct: parallel resistance R = (4×8)/(4+8) = 32/12 ≈ 2.67 Ω; total current I = V/R = 12/2.67 ≈ 4.5 A (equivalently 12/4 + 12/8 = 3 + 1.5 = 4.5 A).",
    "12 A would require a 1 Ω total resistance; the parallel combination is about 2.67 Ω."
   ],
   "explanation": "For parallel resistors, the equivalent resistance is less than the smallest resistor: 1/R = 1/4 + 1/8 = 3/8, so R = 2.67 Ω. Total current I = V/R = 12/2.67 ≈ 4.5 A, matching the sum of branch currents (3 A + 1.5 A).",
   "source": "AAMC Content Category 4B; Halliday & Resnick Physics",
   "topic": "Circuits / parallel resistors",
   "difficulty": "medium"
  }
 ]
};
