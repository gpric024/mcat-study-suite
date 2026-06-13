window.MCAT_DATA = window.MCAT_DATA || {};
window.MCAT_DATA["e2_chemphys"] = {
 "passages": [
  {
   "id": "e2_chemphys_p1",
   "label": "Passage I — Hemoglobin Oxygen Binding and Buffering",
   "html": "<p>Hemoglobin (Hb) is a tetrameric protein that binds O₂ cooperatively. The fraction of saturated binding sites, Y, as a function of partial pressure pO₂ follows a sigmoidal curve well-described by the Hill equation, Y = pO₂ⁿ / (P₅₀ⁿ + pO₂ⁿ), where P₅₀ is the partial pressure at half-saturation and n is the Hill coefficient (n ≈ 2.8 for normal human Hb).</p><p>The affinity of Hb for O₂ decreases as pH falls (the Bohr effect). In actively metabolizing tissue, CO₂ produced by respiration reacts with water:</p><p>CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻</p><p>The reversible hydration of CO₂ is catalyzed by carbonic anhydrase, a Zn²⁺ metalloenzyme. The pKa of the H₂CO₃/HCO₃⁻ pair relevant in blood is 6.1, and normal arterial blood pH is 7.4.</p><p>Researchers measured P₅₀ for purified Hb at pH 7.6 and pH 7.2 at 37°C. They found P₅₀ = 22 torr at pH 7.6 and P₅₀ = 31 torr at pH 7.2.</p>"
  },
  {
   "id": "e2_chemphys_p2",
   "label": "Passage II — Spectrophotometric Enzyme Kinetics",
   "html": "<p>Lactate dehydrogenase (LDH) catalyzes the interconversion of pyruvate and lactate using the NADH/NAD⁺ cofactor pair:</p><p>pyruvate + NADH + H⁺ ⇌ lactate + NAD⁺</p><p>NADH absorbs strongly at 340 nm (molar absorptivity ε = 6220 M⁻¹ cm⁻¹), whereas NAD⁺ does not absorb appreciably at this wavelength. A researcher monitors the reaction in the pyruvate-reducing direction by following the decrease in absorbance at 340 nm in a cuvette of 1.0 cm path length.</p><p>Initial-rate experiments were performed at fixed saturating NADH while varying pyruvate concentration. The data were fit to the Michaelis-Menten model, giving Kₘ = 0.14 mM and Vₘₐₓ = 48 μM/min. A second set of experiments was run in the presence of 2 mM oxamate, a structural analog of pyruvate. In the presence of oxamate, the apparent Kₘ increased to 0.42 mM while Vₘₐₓ was unchanged.</p>"
  },
  {
   "id": "e2_chemphys_p3",
   "label": "Passage III — Electrochemistry of a Galvanic Cell",
   "html": "<p>A student constructs a galvanic cell to study electrochemistry. One half-cell contains a Zn electrode in 1.0 M Zn²⁺; the other contains a Cu electrode in 1.0 M Cu²⁺. The two half-cells are connected by a salt bridge containing KNO₃, and the electrodes are connected through an external circuit with a voltmeter.</p><p>Standard reduction potentials at 25°C:</p><p>Cu²⁺ + 2e⁻ → Cu(s) E° = +0.34 V<br>Zn²⁺ + 2e⁻ → Zn(s) E° = −0.76 V</p><p>The cell operates spontaneously at standard conditions. The student then varies ion concentrations to test the Nernst equation, E = E° − (RT/nF) ln Q, where at 25°C the term (RT/F)·ln becomes (0.0592 V/n)·log Q.</p>"
  },
  {
   "id": "e2_chemphys_p4",
   "label": "Passage IV — Fluid Dynamics of Blood Flow",
   "html": "<p>Blood flow through vessels can be approximated using principles of fluid dynamics. For steady laminar flow of an incompressible fluid through a rigid cylindrical tube, the volume flow rate Q is given by Poiseuille's law: Q = πr⁴ΔP / (8ηL), where r is the tube radius, ΔP is the pressure difference across the tube, η is the dynamic viscosity, and L is the tube length.</p><p>For an incompressible fluid in a closed system, the continuity equation A₁v₁ = A₂v₂ relates cross-sectional area A and flow velocity v. Bernoulli's equation, P + ½ρv² + ρgh = constant, relates pressure, velocity, and height along a streamline for an ideal (nonviscous) fluid.</p><p>A researcher models a partially occluded artery as a tube whose radius narrows from 4.0 mm to 2.0 mm over a short region. The blood (ρ = 1060 kg/m³) is treated as approximately ideal for the velocity analysis. Upstream, the velocity is 0.20 m/s and the gauge pressure is 12.0 kPa.</p>"
  },
  {
   "id": "e2_chemphys_p5",
   "label": "Passage V — Organic Spectroscopy and Separation",
   "html": "<p>A chemist synthesizes an unknown compound, Compound X, believed to be one of two isomeric products from the oxidation of 1-phenylethanol. The two candidate products are acetophenone (a methyl aryl ketone) and 2-phenylacetic acid derivatives.</p><p>To characterize Compound X, the chemist uses infrared (IR) spectroscopy and ¹H NMR. The IR spectrum shows a strong, sharp absorption at 1685 cm⁻¹ and no broad absorption in the 2500–3300 cm⁻¹ region. The ¹H NMR shows a singlet integrating for 3H near 2.6 ppm and a complex multiplet integrating for 5H in the aromatic region (7.4–8.0 ppm).</p><p>The chemist also performs thin-layer chromatography (TLC) on silica gel (a polar stationary phase) using a nonpolar mobile phase. Compound X and a more polar carboxylic acid standard are spotted side by side.</p>"
  }
 ],
 "questions": [
  {
   "id": "e2_chemphys_q1",
   "section": "chemphys",
   "passageId": "e2_chemphys_p1",
   "stem": "Based on the data, how does decreasing pH from 7.6 to 7.2 affect hemoglobin's affinity for O₂, and is this consistent with the Bohr effect?",
   "options": [
    "Affinity decreases (P₅₀ rises), consistent with the Bohr effect",
    "Affinity increases (P₅₀ falls), inconsistent with the Bohr effect",
    "Affinity increases (P₅₀ rises), consistent with the Bohr effect",
    "Affinity decreases (P₅₀ falls), consistent with the Bohr effect"
   ],
   "answer": 0,
   "rationales": [
    "Correct: P₅₀ rises from 22 to 31 torr as pH falls, meaning more O₂ is needed for half-saturation, i.e., lower affinity — exactly the Bohr effect (acid lowers Hb O₂ affinity to release O₂ in active tissue).",
    "P₅₀ rises, not falls, and lower pH decreases affinity, so both clauses are wrong.",
    "A higher P₅₀ means lower affinity, not higher; binding is harder, so this is wrong.",
    "Affinity does decrease, but P₅₀ rises rather than falls; the data show 22 → 31 torr."
   ],
   "explanation": "P₅₀ is the pO₂ at half-saturation; a larger P₅₀ indicates that more O₂ pressure is required to half-saturate Hb, i.e., lower affinity. Falling pH (rising P₅₀) reduces affinity, promoting O₂ unloading in metabolically active, CO₂-rich tissue — the Bohr effect.",
   "source": "AAMC Content Category 5A; Lehninger Principles of Biochemistry",
   "topic": "Cooperative binding / Bohr effect",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q2",
   "section": "chemphys",
   "passageId": "e2_chemphys_p1",
   "stem": "At normal arterial pH 7.4, what is the approximate ratio of [HCO₃⁻] to [H₂CO₃] for the bicarbonate buffer system (pKa = 6.1)?",
   "options": [
    "About 1:20",
    "About 2:1",
    "About 1:1",
    "About 20:1"
   ],
   "answer": 3,
   "rationales": [
    "This ratio is inverted; it would correspond to pH below the pKa, which would be acidic, not pH 7.4.",
    "log(2) ≈ 0.3 would give pH ≈ 6.4, far below 7.4; the difference of 1.3 pH units gives ~20:1.",
    "A 1:1 ratio occurs only when pH equals pKa (6.1), not at 7.4.",
    "Correct: Henderson-Hasselbalch gives pH = pKa + log([HCO₃⁻]/[H₂CO₃]); 7.4 = 6.1 + log(ratio), so log(ratio) = 1.3, ratio ≈ 20:1."
   ],
   "explanation": "Using Henderson-Hasselbalch: pH − pKa = 7.4 − 6.1 = 1.3 = log([A⁻]/[HA]). Therefore [HCO₃⁻]/[H₂CO₃] = 10^1.3 ≈ 20. The buffer operates with far more conjugate base than acid at physiologic pH.",
   "source": "AAMC Content Category 5B; Khan Academy MCAT (buffers)",
   "topic": "Henderson-Hasselbalch / buffers",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q3",
   "section": "chemphys",
   "passageId": "e2_chemphys_p1",
   "stem": "Carbonic anhydrase contains a catalytic Zn²⁺ ion. Which role for Zn²⁺ is most consistent with accelerating the hydration of CO₂?",
   "options": [
    "Zn²⁺ lowers the pKa of a bound water molecule, generating a nucleophilic hydroxide that attacks CO₂",
    "Zn²⁺ is oxidized to Zn⁴⁺, transferring electrons to CO₂",
    "Zn²⁺ denatures the enzyme to expose hydrophobic residues that bind CO₂",
    "Zn²⁺ covalently binds CO₂ to form a stable carbonate that is the final product"
   ],
   "answer": 0,
   "rationales": [
    "Correct: the Lewis-acidic Zn²⁺ polarizes coordinated water, lowering its pKa so it loses a proton near neutral pH, yielding Zn-bound OH⁻ that nucleophilically attacks CO₂.",
    "Zn²⁺ is redox-inert in this enzyme; a Zn⁴⁺ state is not chemically reasonable here.",
    "Denaturation would abolish, not enhance, catalysis; the Zn is structural/catalytic, not denaturing.",
    "Bicarbonate, not a stable Zn-carbonate, is the product; the metal is a catalyst that turns over."
   ],
   "explanation": "Carbonic anhydrase uses Zn²⁺ as a Lewis acid to deprotonate bound water, forming a potent hydroxide nucleophile at physiological pH that attacks the electrophilic carbon of CO₂, producing bicarbonate. This is a classic metalloenzyme mechanism.",
   "source": "AAMC Content Category 5D; Lehninger Principles of Biochemistry",
   "topic": "Metalloenzyme catalysis",
   "difficulty": "hard"
  },
  {
   "id": "e2_chemphys_q4",
   "section": "chemphys",
   "passageId": "e2_chemphys_p1",
   "stem": "The Hill coefficient n ≈ 2.8 (greater than 1) for hemoglobin most directly indicates that:",
   "options": [
    "Hemoglobin binds O₂ with negative cooperativity",
    "Binding is noncooperative and identical to myoglobin",
    "Each Hb molecule binds at most one O₂",
    "O₂ binding at one site increases affinity at the remaining sites (positive cooperativity)"
   ],
   "answer": 3,
   "rationales": [
    "Negative cooperativity gives n < 1; n > 1 indicates the opposite.",
    "Myoglobin is monomeric with n = 1 (hyperbolic, noncooperative); Hb with n = 2.8 is clearly cooperative.",
    "Hb is tetrameric and binds up to four O₂; n reflects cooperativity, not stoichiometry of one.",
    "Correct: a Hill coefficient above 1 signals positive cooperativity — binding one O₂ raises affinity at remaining sites, producing the sigmoidal curve."
   ],
   "explanation": "A Hill coefficient greater than 1 indicates positive cooperativity. For Hb (n ≈ 2.8, less than the 4 binding sites), each O₂ bound shifts the tetramer toward the high-affinity R state, steepening the sigmoidal binding curve.",
   "source": "AAMC Content Category 5A; Lehninger Principles of Biochemistry",
   "topic": "Hill coefficient / cooperativity",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q5",
   "section": "chemphys",
   "passageId": "e2_chemphys_p1",
   "stem": "If a patient hyperventilates, blowing off excess CO₂, what is the expected immediate effect on blood pH and on Hb's O₂ affinity?",
   "options": [
    "pH falls (acidosis); affinity decreases",
    "pH rises (alkalosis); affinity increases",
    "pH rises (alkalosis); affinity decreases",
    "pH falls (acidosis); affinity increases"
   ],
   "answer": 1,
   "rationales": [
    "Hyperventilation removes acid-forming CO₂, producing alkalosis, not acidosis.",
    "Correct: lowering CO₂ pulls CO₂ + H₂O ⇌ H⁺ + HCO₃⁻ to the left, lowering [H⁺] (alkalosis); higher pH increases Hb O₂ affinity (reverse Bohr).",
    "pH does rise, but higher pH increases affinity (lower P₅₀), not decreases it.",
    "Removing CO₂ shifts the equilibrium to consume H⁺, raising pH, not lowering it."
   ],
   "explanation": "Exhaling CO₂ shifts CO₂ + H₂O ⇌ H⁺ + HCO₃⁻ leftward, consuming H⁺ and raising pH (respiratory alkalosis). By the Bohr effect, higher pH increases Hb's O₂ affinity (P₅₀ decreases).",
   "source": "AAMC Content Category 5B; Khan Academy MCAT (acid-base physiology)",
   "topic": "Acid-base equilibria / Le Chatelier",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q6",
   "section": "chemphys",
   "passageId": "e2_chemphys_p2",
   "stem": "Using oxamate at 2 mM raised the apparent Kₘ while leaving Vₘₐₓ unchanged. What type of inhibition does oxamate exhibit?",
   "options": [
    "Competitive inhibition",
    "Uncompetitive inhibition",
    "Irreversible inhibition",
    "Pure noncompetitive inhibition"
   ],
   "answer": 0,
   "rationales": [
    "Correct: an increased apparent Kₘ with unchanged Vₘₐₓ is the signature of competitive inhibition — the inhibitor competes at the active site but can be outcompeted by high substrate.",
    "Uncompetitive inhibition lowers both Kₘ and Vₘₐₓ; here Vₘₐₓ is unchanged.",
    "Irreversible inhibition typically lowers effective Vₘₐₓ by permanently removing active enzyme; it does not give the reversible competitive pattern, and oxamate is described as a structural analog (reversible).",
    "Pure noncompetitive inhibition lowers Vₘₐₓ with unchanged Kₘ; the opposite of what is observed."
   ],
   "explanation": "Oxamate is a substrate (pyruvate) analog that binds the active site reversibly. Competitive inhibitors raise apparent Kₘ (substrate must compete) but leave Vₘₐₓ unchanged because saturating substrate can displace the inhibitor.",
   "source": "AAMC Content Category 5D; Lehninger Principles of Biochemistry",
   "topic": "Enzyme inhibition",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q7",
   "section": "chemphys",
   "passageId": "e2_chemphys_p2",
   "stem": "At a pyruvate concentration equal to Kₘ (0.14 mM) with no inhibitor, the initial reaction velocity is closest to:",
   "options": [
    "12 μM/min",
    "24 μM/min",
    "48 μM/min",
    "96 μM/min"
   ],
   "answer": 1,
   "rationales": [
    "12 μM/min is one-quarter of Vₘₐₓ, which corresponds to [S] = Kₘ/3, not [S] = Kₘ.",
    "Correct: by definition, when [S] = Kₘ, v = Vₘₐₓ/2 = 48/2 = 24 μM/min.",
    "48 μM/min is Vₘₐₓ itself, approached only at saturating [S], not at [S] = Kₘ.",
    "96 μM/min exceeds Vₘₐₓ, which is impossible for Michaelis-Menten kinetics."
   ],
   "explanation": "The Michaelis constant Kₘ is the substrate concentration at which v = Vₘₐₓ/2. With Vₘₐₓ = 48 μM/min, v = 24 μM/min at [S] = Kₘ.",
   "source": "AAMC Content Category 5D; Voet & Voet Biochemistry",
   "topic": "Michaelis-Menten kinetics",
   "difficulty": "easy"
  },
  {
   "id": "e2_chemphys_q8",
   "section": "chemphys",
   "passageId": "e2_chemphys_p2",
   "stem": "In the pyruvate-reducing direction, NADH is consumed. How should the absorbance at 340 nm change over time, and why is 340 nm chosen?",
   "options": [
    "Absorbance stays constant because both forms absorb equally",
    "Absorbance increases because NAD⁺ accumulates and absorbs at 340 nm",
    "Absorbance decreases because NADH (which absorbs at 340 nm) is consumed",
    "Absorbance decreases because lactate quenches all UV light"
   ],
   "answer": 2,
   "rationales": [
    "Only NADH absorbs at 340 nm, so absorbance changes as the NADH/NAD⁺ balance shifts.",
    "NAD⁺ does not absorb appreciably at 340 nm, so its accumulation would not raise absorbance.",
    "Correct: NADH absorbs at 340 nm (ε = 6220 M⁻¹ cm⁻¹) but NAD⁺ does not; as NADH is consumed, A₃₄₀ falls, giving a direct readout of reaction progress.",
    "Lactate is not a UV chromophore here; the signal tracks NADH, not lactate quenching."
   ],
   "explanation": "The assay exploits the differential absorbance: NADH absorbs strongly at 340 nm while NAD⁺ does not. Consuming NADH lowers A₃₄₀, allowing Beer's law to convert the rate of absorbance decrease into a reaction rate.",
   "source": "AAMC Content Category 5D; Khan Academy MCAT (spectroscopy)",
   "topic": "Spectrophotometry / Beer's law",
   "difficulty": "easy"
  },
  {
   "id": "e2_chemphys_q9",
   "section": "chemphys",
   "passageId": "e2_chemphys_p2",
   "stem": "At one time point the measured absorbance at 340 nm is 0.311. Using ε = 6220 M⁻¹ cm⁻¹ and a 1.0 cm path length, the NADH concentration is closest to:",
   "options": [
    "5.0 × 10⁻⁵ M",
    "5.0 × 10⁻⁴ M",
    "2.0 × 10⁻⁴ M",
    "5.0 × 10⁻⁶ M"
   ],
   "answer": 0,
   "rationales": [
    "Correct: Beer's law c = A/(εl) = 0.311/(6220 × 1.0) ≈ 5.0 × 10⁻⁵ M.",
    "This is ten-fold too high; recheck the division 0.311/6220.",
    "2.0 × 10⁻⁴ M would require A ≈ 1.24, not 0.311.",
    "This is ten-fold too low; 0.311/6220 ≈ 5.0 × 10⁻⁵, not 10⁻⁶."
   ],
   "explanation": "Beer-Lambert law: A = εlc → c = A/(εl) = 0.311 / (6220 M⁻¹ cm⁻¹ × 1.0 cm) = 5.0 × 10⁻⁵ M.",
   "source": "AAMC Content Category 5D; Khan Academy MCAT (Beer's law)",
   "topic": "Beer-Lambert law",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q10",
   "section": "chemphys",
   "passageId": "e2_chemphys_p2",
   "stem": "The catalytic efficiency of an enzyme is best described by which quantity?",
   "options": [
    "The Hill coefficient",
    "Vₘₐₓ alone",
    "Kₘ alone",
    "k_cat / Kₘ"
   ],
   "answer": 3,
   "rationales": [
    "The Hill coefficient describes cooperativity, not catalytic efficiency.",
    "Vₘₐₓ depends on enzyme concentration and does not capture substrate affinity, so it alone is not catalytic efficiency.",
    "Kₘ reflects substrate affinity but not turnover; efficiency combines both.",
    "Correct: k_cat/Kₘ (the specificity constant) measures how effectively an enzyme converts substrate at low [S], approaching a diffusion limit near 10⁸–10⁹ M⁻¹s⁻¹."
   ],
   "explanation": "Catalytic (specificity) efficiency is k_cat/Kₘ. It accounts for both turnover number (k_cat) and substrate binding (Kₘ), and at low substrate it determines the second-order rate of the reaction.",
   "source": "AAMC Content Category 5D; Lehninger Principles of Biochemistry",
   "topic": "Enzyme kinetics / catalytic efficiency",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q11",
   "section": "chemphys",
   "passageId": "e2_chemphys_p3",
   "stem": "What is the standard cell potential E°_cell for this Zn/Cu galvanic cell?",
   "options": [
    "+0.42 V",
    "+0.34 V",
    "+1.10 V",
    "−1.10 V"
   ],
   "answer": 2,
   "rationales": [
    "+0.42 V results from incorrectly subtracting in the wrong direction or mis-assigning electrodes.",
    "+0.34 V ignores the zinc half-cell contribution entirely.",
    "Correct: E°_cell = E°_cathode − E°_anode = (+0.34) − (−0.76) = +1.10 V; Cu²⁺ is reduced (cathode), Zn is oxidized (anode).",
    "A negative value would mean a nonspontaneous cell; the cell is stated to operate spontaneously."
   ],
   "explanation": "For a galvanic cell, E°_cell = E°_cathode − E°_anode. Cu (higher reduction potential) is the cathode and Zn the anode: (+0.34) − (−0.76) = +1.10 V, positive and thus spontaneous.",
   "source": "AAMC Content Category 5E; Khan Academy MCAT (electrochemistry)",
   "topic": "Galvanic cells / cell potential",
   "difficulty": "easy"
  },
  {
   "id": "e2_chemphys_q12",
   "section": "chemphys",
   "passageId": "e2_chemphys_p3",
   "stem": "During operation, in which direction do cations from the KNO₃ salt bridge migrate, and why?",
   "options": [
    "K⁺ does not migrate; only electrons move through the salt bridge",
    "NO₃⁻ migrates toward the cathode to neutralize newly formed Zn²⁺",
    "K⁺ migrates toward the Zn (anode) half-cell to balance the buildup of Zn²⁺",
    "K⁺ migrates toward the Cu²⁺ (cathode) half-cell to balance charge as Cu²⁺ is consumed"
   ],
   "answer": 3,
   "rationales": [
    "Electrons travel through the external wire, not the salt bridge; ions carry charge in the bridge.",
    "Zn²⁺ forms at the anode, not the cathode; anions migrate toward the anode.",
    "The anode solution gains positive Zn²⁺, so it attracts anions (NO₃⁻), not more cations.",
    "Correct: as Cu²⁺ is reduced and removed at the cathode, that solution would become net negative; K⁺ cations flow in to maintain electroneutrality."
   ],
   "explanation": "The salt bridge maintains electroneutrality. At the cathode Cu²⁺ is consumed (solution turns relatively negative), so cations (K⁺) flow toward the cathode; anions (NO₃⁻) flow toward the anode where Zn²⁺ accumulates.",
   "source": "AAMC Content Category 5E; Khan Academy MCAT (electrochemistry)",
   "topic": "Salt bridge / electroneutrality",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q13",
   "section": "chemphys",
   "passageId": "e2_chemphys_p3",
   "stem": "If the student increases [Zn²⁺] to 10 M while keeping [Cu²⁺] at 1.0 M, how does the cell potential change relative to E°_cell? (n = 2)",
   "options": [
    "It increases by about 0.03 V",
    "It decreases by about 0.03 V",
    "It is unchanged because both metals are solids",
    "It increases by about 0.06 V"
   ],
   "answer": 1,
   "rationales": [
    "The sign is wrong; increasing the product (Zn²⁺) lowers E.",
    "Correct: Q = [Zn²⁺]/[Cu²⁺] = 10; E = E° − (0.0592/2)log10 = E° − 0.0296 ≈ E° − 0.03 V.",
    "The metals are solids (activity 1), but dissolved ion concentrations do appear in Q via the Nernst equation.",
    "The potential decreases, not increases; raising product ion concentration disfavors the forward reaction."
   ],
   "explanation": "The cell reaction is Zn + Cu²⁺ → Zn²⁺ + Cu, so Q = [Zn²⁺]/[Cu²⁺] = 10. Nernst: E = E° − (0.0592/2)log(10) = E° − 0.0296 V, a decrease of about 0.03 V.",
   "source": "AAMC Content Category 5E; Khan Academy MCAT (Nernst equation)",
   "topic": "Nernst equation",
   "difficulty": "hard"
  },
  {
   "id": "e2_chemphys_q14",
   "section": "chemphys",
   "passageId": "e2_chemphys_p3",
   "stem": "Which statement about mass change at the electrodes during discharge is correct?",
   "options": [
    "Both electrodes gain mass",
    "The Zn anode gains mass; the Cu cathode loses mass",
    "The Zn anode loses mass; the Cu cathode gains mass",
    "Neither electrode changes mass; only ions in solution change"
   ],
   "answer": 2,
   "rationales": [
    "Only the cathode gains mass; the anode dissolves.",
    "This reverses the chemistry: oxidation dissolves the anode (mass loss), and reduction plates metal onto the cathode (mass gain).",
    "Correct: Zn(s) → Zn²⁺ + 2e⁻ dissolves the anode (loses mass), and Cu²⁺ + 2e⁻ → Cu(s) plates onto the cathode (gains mass).",
    "Electrode masses do change — the anode dissolves and the cathode is plated."
   ],
   "explanation": "In a galvanic cell, the anode undergoes oxidation and dissolves (Zn loses mass), while the cathode is the site of reduction and metal deposition (Cu gains mass).",
   "source": "AAMC Content Category 5E; Khan Academy MCAT (electrochemistry)",
   "topic": "Electrode mass changes",
   "difficulty": "easy"
  },
  {
   "id": "e2_chemphys_q15",
   "section": "chemphys",
   "passageId": "e2_chemphys_p3",
   "stem": "A current of 2.0 A flows for 1930 s. Approximately how many moles of Cu are deposited at the cathode? (F ≈ 96,500 C/mol e⁻)",
   "options": [
    "0.020 mol",
    "0.040 mol",
    "0.080 mol",
    "0.010 mol"
   ],
   "answer": 0,
   "rationales": [
    "Correct: Q = It = 2.0 × 1930 = 3860 C; mol e⁻ = 3860/96500 = 0.040; Cu²⁺ needs 2 e⁻, so mol Cu = 0.040/2 = 0.020 mol.",
    "0.040 mol forgets to divide the moles of electrons by 2 for Cu²⁺.",
    "0.080 mol doubles instead of halving the electron moles.",
    "0.010 mol would require half the charge or treating Cu as needing 4 electrons."
   ],
   "explanation": "Charge Q = It = (2.0 A)(1930 s) = 3860 C. Moles of electrons = 3860/96,500 ≈ 0.040 mol. Since Cu²⁺ + 2e⁻ → Cu, moles Cu = 0.040/2 = 0.020 mol (Faraday's laws of electrolysis).",
   "source": "AAMC Content Category 5E; Khan Academy MCAT (Faraday's laws)",
   "topic": "Faraday's laws / electrolysis stoichiometry",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q16",
   "section": "chemphys",
   "passageId": "e2_chemphys_p4",
   "stem": "Using the continuity equation, what is the blood velocity in the narrowed region (radius 2.0 mm) given an upstream velocity of 0.20 m/s (radius 4.0 mm)?",
   "options": [
    "0.10 m/s",
    "0.40 m/s",
    "0.80 m/s",
    "1.60 m/s"
   ],
   "answer": 2,
   "rationales": [
    "Velocity must increase, not decrease, where the tube narrows.",
    "0.40 m/s would correspond to halving the radius affecting area only linearly; area scales with r².",
    "Correct: A ∝ r²; halving radius quarters the area, so velocity quadruples: 0.20 × (4/2)² = 0.20 × 4 = 0.80 m/s.",
    "1.60 m/s would be an 8-fold increase, not the 4-fold dictated by the area ratio."
   ],
   "explanation": "Continuity: A₁v₁ = A₂v₂, with A = πr². The area ratio is (r₁/r₂)² = (4/2)² = 4, so v₂ = 4 × 0.20 = 0.80 m/s. Narrowing increases velocity.",
   "source": "AAMC Content Category 4B; Khan Academy MCAT (fluid dynamics)",
   "topic": "Continuity equation",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q17",
   "section": "chemphys",
   "passageId": "e2_chemphys_p4",
   "stem": "Treating the blood as an ideal fluid at constant height, how does the gauge pressure in the narrowed region compare to the upstream pressure?",
   "options": [
    "It is lower, because the faster-moving fluid has greater dynamic pressure",
    "It is unchanged, because pressure depends only on height",
    "It is exactly zero in the constriction",
    "It is higher, because the fluid is squeezed into a smaller space"
   ],
   "answer": 0,
   "rationales": [
    "Correct: by Bernoulli's equation at constant height, increased velocity (and thus ½ρv²) requires lower static pressure to keep the sum constant.",
    "Pressure depends on velocity too (the ½ρv² term), not height alone, here at constant height.",
    "There is no basis for the pressure being exactly zero; it is simply lower than upstream.",
    "This is the classic misconception; Bernoulli's principle shows pressure drops where velocity rises."
   ],
   "explanation": "Bernoulli's equation at constant height: P + ½ρv² = constant. Where velocity increases (the constriction), the static pressure must decrease. This is the Venturi effect.",
   "source": "AAMC Content Category 4B; Khan Academy MCAT (Bernoulli)",
   "topic": "Bernoulli's principle",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q18",
   "section": "chemphys",
   "passageId": "e2_chemphys_p4",
   "stem": "Using Bernoulli's equation (constant height, ρ = 1060 kg/m³), the gauge pressure in the narrowed region is closest to: (v₁ = 0.20 m/s, v₂ = 0.80 m/s, P₁ = 12.0 kPa)",
   "options": [
    "11.9 kPa",
    "12.3 kPa",
    "11.7 kPa",
    "12.0 kPa"
   ],
   "answer": 2,
   "rationales": [
    "11.9 kPa underestimates the kinetic energy change (uses only ~0.1 kPa drop).",
    "12.3 kPa increases the pressure, but Bernoulli requires a decrease where velocity rises.",
    "Correct: Δ(½ρv²) = ½(1060)(0.80² − 0.20²) = 530(0.64 − 0.04) = 530(0.60) = 318 Pa ≈ 0.32 kPa drop; P₂ = 12.0 − 0.32 ≈ 11.7 kPa.",
    "12.0 kPa ignores the velocity change entirely."
   ],
   "explanation": "P₂ = P₁ + ½ρ(v₁² − v₂²) = 12,000 + ½(1060)(0.04 − 0.64) = 12,000 + 530(−0.60) = 12,000 − 318 ≈ 11,680 Pa ≈ 11.7 kPa.",
   "source": "AAMC Content Category 4B; Khan Academy MCAT (Bernoulli)",
   "topic": "Bernoulli quantitative",
   "difficulty": "hard"
  },
  {
   "id": "e2_chemphys_q19",
   "section": "chemphys",
   "passageId": "e2_chemphys_p4",
   "stem": "According to Poiseuille's law, if a vessel's radius decreases to half its original value with all else constant, the volume flow rate Q changes by a factor of:",
   "options": [
    "1/16",
    "1/4",
    "1/2",
    "1/8"
   ],
   "answer": 0,
   "rationales": [
    "Correct: Q ∝ r⁴, so halving r gives (1/2)⁴ = 1/16 of the original flow rate.",
    "1/4 corresponds to r² scaling (area), not the r⁴ dependence of Poiseuille flow.",
    "1/2 would apply if Q scaled linearly with radius, but Q ∝ r⁴.",
    "1/8 corresponds to r³, which is not the Poiseuille relationship."
   ],
   "explanation": "Poiseuille's law states Q ∝ r⁴. Halving the radius reduces flow by a factor of (1/2)⁴ = 1/16, illustrating the dramatic effect of vessel radius on flow (and the value of viscous, not ideal, modeling for flow rate).",
   "source": "AAMC Content Category 4B; Khan Academy MCAT (Poiseuille's law)",
   "topic": "Poiseuille's law",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q20",
   "section": "chemphys",
   "passageId": "e2_chemphys_p5",
   "stem": "Based on the IR data, which functional group is present in Compound X, and which is ruled out?",
   "options": [
    "An aldehyde is present; the aromatic ring is ruled out",
    "A ketone (C=O) is present; a carboxylic acid is ruled out by the absence of a broad O–H stretch",
    "An alcohol is present; a carbonyl is ruled out",
    "A carboxylic acid is present; a ketone is ruled out"
   ],
   "answer": 1,
   "rationales": [
    "An aldehyde would show characteristic ~2720/2820 cm⁻¹ C–H doublet and a ~9.7 ppm NMR singlet, neither described; the aromatic 5H multiplet confirms the ring is present.",
    "Correct: the sharp ~1685 cm⁻¹ band is a conjugated C=O (aryl ketone) stretch, and the absence of the broad 2500–3300 cm⁻¹ O–H confirms no carboxylic acid.",
    "An alcohol O–H would appear ~3200–3550 cm⁻¹ and there would be no strong carbonyl band; the data show a carbonyl.",
    "A carboxylic acid would show a broad O–H stretch (2500–3300 cm⁻¹), which is explicitly absent."
   ],
   "explanation": "The strong sharp absorption at 1685 cm⁻¹ indicates a conjugated carbonyl (consistent with an aryl methyl ketone, acetophenone). The absence of any broad 2500–3300 cm⁻¹ band rules out a carboxylic acid O–H.",
   "source": "AAMC Content Category 5D; Klein Organic Chemistry (IR spectroscopy)",
   "topic": "IR spectroscopy",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q21",
   "section": "chemphys",
   "passageId": "e2_chemphys_p5",
   "stem": "The ¹H NMR singlet (3H, ~2.6 ppm) is most consistent with which group in Compound X?",
   "options": [
    "A methyl group adjacent to the carbonyl of acetophenone (CH₃–C=O)",
    "A methylene group between two aromatic rings",
    "An aldehyde proton (–CHO)",
    "A carboxylic acid proton (–COOH)"
   ],
   "answer": 0,
   "rationales": [
    "Correct: acetophenone's CH₃ is a 3H singlet near 2.6 ppm because it has no neighboring protons to split it and is slightly deshielded by the adjacent carbonyl.",
    "A benzylic methylene would integrate for 2H, not 3H, and the data indicate a 3H singlet.",
    "An aldehyde proton is 1H near 9–10 ppm, not a 3H singlet at 2.6 ppm.",
    "A carboxylic acid proton integrates for 1H (often broad, 10–12 ppm), not a 3H singlet."
   ],
   "explanation": "A 3H singlet at ~2.6 ppm matches the methyl ketone group CH₃–CO of acetophenone: three equivalent protons, no adjacent C–H for coupling (hence a singlet), and mild deshielding from the carbonyl.",
   "source": "AAMC Content Category 5D; Klein Organic Chemistry (¹H NMR)",
   "topic": "Proton NMR",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q22",
   "section": "chemphys",
   "passageId": "e2_chemphys_p5",
   "stem": "On normal-phase silica TLC with a nonpolar mobile phase, how should the more polar carboxylic acid standard behave relative to the less polar Compound X (a ketone)?",
   "options": [
    "The carboxylic acid stays closer to the origin (lower Rf) because it binds the polar silica more strongly",
    "Both compounds have identical Rf because they share an aromatic ring",
    "The carboxylic acid travels farther (higher Rf) because it is more polar",
    "The ketone stays at the origin because nonpolar compounds adsorb to silica"
   ],
   "answer": 0,
   "rationales": [
    "Correct: in normal-phase TLC (polar silica, nonpolar eluent), the more polar carboxylic acid interacts strongly with silica, elutes slowly, and shows a lower Rf than the less polar ketone.",
    "Aromaticity alone does not equalize Rf; overall polarity governs adsorption and migration.",
    "More polar compounds adsorb more strongly to polar silica and move less, giving a lower Rf, not higher.",
    "Nonpolar compounds interact weakly with polar silica and move farther with the mobile phase, not stay at the origin."
   ],
   "explanation": "On normal-phase silica, retention increases with analyte polarity. The polar carboxylic acid binds the stationary phase more strongly and travels a shorter distance (lower Rf) than the less polar ketone, which migrates farther with the nonpolar mobile phase.",
   "source": "AAMC Content Category 5D; Klein Organic Chemistry (chromatography)",
   "topic": "TLC / chromatography",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q23",
   "section": "chemphys",
   "stem": "A 0.50 mol sample of an ideal gas is heated at constant pressure, doing 1200 J of work on its surroundings while absorbing 3000 J of heat. What is the change in internal energy of the gas?",
   "options": [
    "−4200 J",
    "+1800 J",
    "+4200 J",
    "−1800 J"
   ],
   "answer": 1,
   "rationales": [
    "−4200 J both reverses signs and adds the terms; neither is correct.",
    "Correct: ΔU = Q − W (work done by gas) = 3000 − 1200 = +1800 J.",
    "+4200 J adds heat and work instead of subtracting work done by the gas.",
    "The sign is wrong; the gas absorbs more heat than the work it performs, so ΔU is positive."
   ],
   "explanation": "First law of thermodynamics (chemistry/physics sign convention with W as work done BY the gas): ΔU = Q − W = 3000 J − 1200 J = +1800 J. The internal energy rises because heat absorbed exceeds work output.",
   "source": "AAMC Content Category 4E; Khan Academy MCAT (thermodynamics)",
   "topic": "First law of thermodynamics",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q24",
   "section": "chemphys",
   "stem": "A converging (convex) lens has a focal length of 10 cm. An object is placed 15 cm in front of it. The image is:",
   "options": [
    "Virtual, upright, and reduced",
    "Real, inverted, and reduced",
    "Real, inverted, and magnified",
    "Virtual, upright, and magnified"
   ],
   "answer": 2,
   "rationales": [
    "The image is real and inverted, not virtual and upright, because the object lies between f and 2f.",
    "The image is magnified (|m| = 2), not reduced; reduced images occur when the object is beyond 2f.",
    "Correct: 1/f = 1/do + 1/di → 1/10 = 1/15 + 1/di gives di = 30 cm (real, since positive); magnification m = −di/do = −30/15 = −2 (inverted and magnified).",
    "A virtual upright image from a converging lens requires the object inside the focal length (do < f); here do = 15 cm > f = 10 cm."
   ],
   "explanation": "With do = 15 cm and f = 10 cm (object between f and 2f), the thin-lens equation gives di = +30 cm (real image) and m = −di/do = −2, so the image is real, inverted, and magnified 2×.",
   "source": "AAMC Content Category 4C; Khan Academy MCAT (geometric optics)",
   "topic": "Thin lenses / geometric optics",
   "difficulty": "medium"
  },
  {
   "id": "e2_chemphys_q25",
   "section": "chemphys",
   "stem": "Which of the following aqueous solutions would act as an effective buffer near pH 4.7? (Ka of acetic acid = 1.8 × 10⁻⁵; pKa ≈ 4.74)",
   "options": [
    "0.10 M NaCl only",
    "0.10 M NaOH only",
    "0.10 M HCl only",
    "0.10 M acetic acid and 0.10 M sodium acetate"
   ],
   "answer": 3,
   "rationales": [
    "NaCl is a neutral salt of a strong acid and strong base; it has no buffering capacity.",
    "NaOH alone is a strong base with no weak-acid/conjugate-base pair; it cannot buffer.",
    "HCl alone is a strong acid with no conjugate base reservoir; it cannot buffer.",
    "Correct: a weak acid (acetic acid) plus its conjugate base (acetate) at comparable concentrations buffers near its pKa (4.74), which is essentially pH 4.7."
   ],
   "explanation": "A buffer requires a weak acid and its conjugate base in comparable amounts and works best within ~1 pH unit of the pKa. Acetic acid/acetate (pKa 4.74) buffers near pH 4.7; equal concentrations put pH right at the pKa.",
   "source": "AAMC Content Category 5B; Khan Academy MCAT (buffers)",
   "topic": "Buffers / Henderson-Hasselbalch",
   "difficulty": "easy"
  },
  {
   "id": "e2_chemphys_q26",
   "section": "chemphys",
   "stem": "A radioactive isotope undergoes beta-minus (β⁻) decay. Compared with the parent nucleus, the daughter nucleus has:",
   "options": [
    "The same mass number and an atomic number one less",
    "A mass number two less and an atomic number two less",
    "The same mass number and an atomic number one greater",
    "A mass number one less and the same atomic number"
   ],
   "answer": 2,
   "rationales": [
    "Z decreasing by 1 (with constant A) describes positron (β⁺) emission or electron capture, not β⁻.",
    "Decreasing both A and Z by 2 describes alpha decay, not beta-minus decay.",
    "Correct: in β⁻ decay a neutron converts to a proton, emitting an electron and antineutrino; mass number A is unchanged while atomic number Z increases by 1.",
    "A decreasing by 1 with constant Z is not a standard decay mode and is not β⁻ decay."
   ],
   "explanation": "In β⁻ decay, a neutron → proton + e⁻ + antineutrino. The total nucleon count (mass number A) stays the same, but the number of protons (atomic number Z) increases by one, shifting the element one position higher.",
   "source": "AAMC Content Category 4E; Khan Academy MCAT (nuclear physics)",
   "topic": "Nuclear decay",
   "difficulty": "easy"
  }
 ]
};
