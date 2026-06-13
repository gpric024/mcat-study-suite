window.MCAT_DATA = window.MCAT_DATA || {};
window.MCAT_DATA["e3_biobiochem"] = {
 "passages": [
  {
   "id": "e3_biobiochem_p1",
   "label": "Passage I — Oxidative Phosphorylation and an Uncoupling Mutation",
   "html": "<p>The electron transport chain (ETC) of the inner mitochondrial membrane couples electron flow to proton pumping. Complexes I, III, and IV translocate protons from the matrix to the intermembrane space, building an electrochemical proton-motive force. ATP synthase (Complex V) then dissipates this gradient to phosphorylate ADP. Because electron flow and ATP synthesis are normally coupled through the proton gradient, the rate of oxygen consumption is tightly governed by the availability of ADP — a phenomenon called respiratory control.</p><p>Researchers studied isolated mitochondria from brown adipose tissue, which expresses uncoupling protein 1 (UCP1, thermogenin). UCP1 forms a regulated channel that allows protons to leak back into the matrix without passing through ATP synthase. In experiment 1, the team measured oxygen consumption of isolated liver mitochondria under three conditions: (i) substrate plus ADP and inorganic phosphate (P<sub>i</sub>); (ii) substrate with ADP exhausted; and (iii) substrate with ADP exhausted plus added 2,4-dinitrophenol (DNP), a small lipophilic acid that shuttles protons across the membrane.</p><p><strong>Table 1.</strong> Relative rate of O<sub>2</sub> consumption (arbitrary units).</p><table border='1' cellpadding='4'><tr><th>Condition</th><th>O<sub>2</sub> consumption</th><th>ATP synthesis</th></tr><tr><td>(i) Substrate + ADP + P<sub>i</sub></td><td>100</td><td>High</td></tr><tr><td>(ii) ADP exhausted</td><td>17</td><td>Negligible</td></tr><tr><td>(iii) ADP exhausted + DNP</td><td>108</td><td>Negligible</td></tr></table><p>In experiment 2, mitochondria from a patient with a heritable myopathy showed elevated resting O<sub>2</sub> consumption and low ATP yield, mimicking the DNP condition even without added uncoupler.</p>"
  },
  {
   "id": "e3_biobiochem_p2",
   "label": "Passage II — Action Potential Conduction and a Channel Toxin",
   "html": "<p>Neurons propagate signals as action potentials (APs). At rest, the membrane potential is near -70 mV, set largely by K<sup>+</sup> permeability. Depolarization to threshold opens voltage-gated Na<sup>+</sup> channels, driving the rapid upstroke; these channels then inactivate. Slower voltage-gated K<sup>+</sup> channels open to repolarize the membrane, and a brief afterhyperpolarization follows. The Na<sup>+</sup> channel refractory period prevents the AP from traveling backward and limits maximum firing frequency.</p><p>In myelinated axons, the myelin sheath produced by Schwann cells (peripheral) or oligodendrocytes (central) insulates internodal segments. Voltage-gated Na<sup>+</sup> channels cluster at the nodes of Ranvier, so the AP regenerates only at nodes and appears to jump between them — saltatory conduction — greatly increasing conduction velocity while reducing the metabolic cost of restoring ion gradients.</p><p>Researchers applied tetrodotoxin (TTX), a toxin that binds the extracellular pore of voltage-gated Na<sup>+</sup> channels, to an isolated axon. They recorded the membrane response to a suprathreshold current injection before and after TTX. They separately tested tetraethylammonium (TEA), a blocker of voltage-gated K<sup>+</sup> channels.</p>"
  },
  {
   "id": "e3_biobiochem_p3",
   "label": "Passage III — Glycolytic Flux in a Tumor Cell Line (the Warburg Effect)",
   "html": "<p>Many proliferating tumor cells consume glucose at high rates and secrete lactate even when oxygen is plentiful — aerobic glycolysis, or the Warburg effect. Although oxidative phosphorylation yields far more ATP per glucose, rapid glycolysis regenerates NAD<sup>+</sup> via lactate dehydrogenase (LDH) and supplies carbon intermediates for biosynthesis (nucleotides, amino acids, lipids).</p><p>Researchers compared a transformed cell line (T) with its non-transformed parent (N). They measured glucose uptake, lactate secretion, and oxygen consumption, and assayed expression of the pyruvate kinase isoform PKM2, which can be allosterically tuned to slow the final glycolytic step and divert upstream intermediates into anabolic pathways.</p><p><strong>Table 1.</strong> Steady-state measurements (per 10<sup>6</sup> cells/h).</p><table border='1' cellpadding='4'><tr><th>Parameter</th><th>Line N</th><th>Line T</th></tr><tr><td>Glucose uptake (nmol)</td><td>40</td><td>260</td></tr><tr><td>Lactate secreted (nmol)</td><td>15</td><td>410</td></tr><tr><td>O<sub>2</sub> consumed (nmol)</td><td>120</td><td>95</td></tr><tr><td>PKM2 / PKM1 ratio</td><td>0.3</td><td>6.1</td></tr></table><p>The team then knocked down LDH-A in line T. Lactate secretion fell, intracellular NADH rose, and glycolytic flux and proliferation both declined.</p>"
  },
  {
   "id": "e3_biobiochem_p4",
   "label": "Passage IV — B-Cell Affinity Maturation and a Vaccine Trial",
   "html": "<p>Upon encountering antigen, naive B cells that bind via their surface immunoglobulin become activated, and with T-helper-cell signals they enter germinal centers. There, the enzyme activation-induced cytidine deaminase (AID) introduces point mutations into the rearranged variable-region genes of the immunoglobulin — somatic hypermutation. B cells whose mutated receptors bind antigen more tightly are preferentially selected to survive and proliferate; this affinity maturation progressively raises average antibody affinity over the course of a response. Selected B cells differentiate into plasma cells (which secrete antibody) or memory B cells.</p><p>Class switching, also initiated by AID, changes the antibody's heavy-chain constant region (e.g., from IgM to IgG) without altering antigen specificity, tailoring effector function while preserving the variable region.</p><p>In a vaccine trial, subjects received a primary dose at week 0 and a booster at week 8. Researchers measured serum antibody titer and the average dissociation constant (K<sub>d</sub>) of antigen-specific antibodies over time.</p><p><strong>Table 1.</strong> Antigen-specific serum antibody.</p><table border='1' cellpadding='4'><tr><th>Time</th><th>Titer (relative)</th><th>Mean K<sub>d</sub> (nM)</th><th>Predominant isotype</th></tr><tr><td>Week 2</td><td>30</td><td>120</td><td>IgM</td></tr><tr><td>Week 6</td><td>110</td><td>40</td><td>IgG</td></tr><tr><td>Week 10 (post-boost)</td><td>900</td><td>3</td><td>IgG</td></tr></table>"
  },
  {
   "id": "e3_biobiochem_p5",
   "label": "Passage V — A lac-Style Inducible Operon in a Soil Bacterium",
   "html": "<p>A soil bacterium metabolizes the disaccharide melibiose using enzymes encoded by the mel operon. Transcription of the operon is controlled by two regulatory inputs analogous to those of the E. coli lac operon. A repressor protein (MelR-rep) binds an operator overlapping the promoter and blocks RNA polymerase unless melibiose (the inducer) is present; melibiose binds the repressor and reduces its affinity for the operator. Separately, an activator protein bound to cyclic AMP (CAP–cAMP) must contact RNA polymerase to achieve high-level transcription. Cytoplasmic cAMP is high only when glucose is scarce.</p><p>Researchers measured expression of a melibiose-catabolism enzyme under four nutrient conditions in wild-type cells and in two mutants. Mutant 1 carries a repressor that cannot bind melibiose (it still binds the operator). Mutant 2 carries an operator deletion.</p><p><strong>Table 1.</strong> Enzyme activity (units).</p><table border='1' cellpadding='4'><tr><th>Condition</th><th>Wild type</th><th>Mutant 1</th><th>Mutant 2</th></tr><tr><td>No melibiose, glucose present</td><td>1</td><td>1</td><td>5</td></tr><tr><td>Melibiose, glucose present</td><td>6</td><td>1</td><td>8</td></tr><tr><td>No melibiose, no glucose</td><td>2</td><td>2</td><td>90</td></tr><tr><td>Melibiose, no glucose</td><td>100</td><td>2</td><td>95</td></tr></table>"
  },
  {
   "id": "e3_biobiochem_p6",
   "label": "Passage VI — Steroid Hormone Synthesis and a Feedback Defect",
   "html": "<p>Steroid hormones are synthesized from cholesterol in the adrenal cortex and gonads. The rate-limiting step is delivery of cholesterol to the inner mitochondrial membrane (by StAR protein) and its conversion to pregnenolone by the side-chain cleavage enzyme. Branching enzymatic pathways then generate mineralocorticoids (e.g., aldosterone), glucocorticoids (cortisol), and sex steroids. Cortisol synthesis requires 21-hydroxylase; loss of this enzyme blocks cortisol and aldosterone production and shunts precursors toward androgens.</p><p>Cortisol is regulated by the hypothalamic-pituitary-adrenal (HPA) axis: hypothalamic CRH stimulates pituitary release of ACTH, which drives adrenal cortisol output. Cortisol exerts negative feedback on both the hypothalamus and pituitary. Because steroids are lipophilic, they diffuse across the plasma membrane and bind intracellular receptors that act as ligand-activated transcription factors.</p><p>A neonate presents with classic 21-hydroxylase deficiency. Clinicians measured plasma ACTH, cortisol, and adrenal androgens, and noted salt wasting and signs of androgen excess.</p>"
  }
 ],
 "questions": [
  {
   "id": "e3_biobiochem_q1",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p1",
   "stem": "In condition (ii), O<sub>2</sub> consumption falls to 17 even though substrate is still present. What best explains the low rate?",
   "options": [
    "ATP synthase reverses and pumps protons out of the matrix, consuming O<sub>2</sub>",
    "The ETC complexes have been chemically inhibited, blocking electron transfer to O<sub>2</sub>",
    "Substrate dehydrogenases stop generating NADH because oxygen is depleted",
    "Without ADP, the proton gradient is not dissipated through ATP synthase, so the high proton-motive force opposes further proton pumping and slows electron flow"
   ],
   "answer": 3,
   "rationales": [
    "ATP synthase does not consume O<sub>2</sub>; only Complex IV reduces O<sub>2</sub>. The slowdown reflects reduced electron flow upstream, not reversal of the synthase pumping O2.",
    "No inhibitor of the complexes is present in condition (ii); only substrate is supplied and ADP is exhausted. The complexes remain intact, as shown by the rebound to 108 when DNP is added.",
    "Oxygen is not depleted in the assay; the limitation is the unavailability of ADP, not of O<sub>2</sub>. Adding DNP restores high O<sub>2</sub> use even though ADP is still absent.",
    "Correct. This is respiratory control: with ADP gone, ATP synthase cannot dissipate the gradient, the proton-motive force builds to a maximum, and the thermodynamic back-pressure slows proton pumping and therefore electron flow and O<sub>2</sub> consumption."
   ],
   "explanation": "Coupled mitochondria show respiratory control: electron transport rate depends on the availability of ADP. Without ADP, the proton gradient cannot be discharged, the proton-motive force rises, and back-pressure slows respiration. Uncouplers (DNP) collapse the gradient and restore high O<sub>2</sub> consumption while uncoupling ATP synthesis.",
   "source": "AAMC Content Category 1D; Lehninger Principles of Biochemistry (oxidative phosphorylation)",
   "topic": "Oxidative phosphorylation / respiratory control",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q2",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p1",
   "stem": "Compared with normal coupled mitochondria, mitochondria treated with DNP (condition iii) would be expected to:",
   "options": [
    "Raise the proton-motive force above its coupled maximum",
    "Generate more heat and a lower P/O ratio (ATP made per O consumed)",
    "Halt the citric acid cycle by inhibiting NADH production",
    "Increase the ATP yield per molecule of O<sub>2</sub> consumed"
   ],
   "answer": 1,
   "rationales": [
    "Uncouplers collapse the proton gradient; the proton-motive force falls, which is exactly why electron flow accelerates (relief of back-pressure).",
    "Correct. DNP dissipates the gradient as heat and decouples respiration from phosphorylation, so the P/O ratio falls and energy is released thermally — the same principle exploited physiologically by UCP1 in brown fat.",
    "The citric acid cycle actually tends to speed up because rising ADP/falling gradient relieve respiratory control and NAD<sup>+</sup> is regenerated faster; NADH production is not halted.",
    "Uncoupling lowers, not raises, ATP made per O<sub>2</sub>: protons bypass ATP synthase, so the same electron flow makes far less ATP."
   ],
   "explanation": "DNP and UCP1 short-circuit the proton gradient: protons re-enter the matrix without driving ATP synthase. Electron transport and O<sub>2</sub> consumption increase, but the energy is dissipated as heat, lowering the P/O ratio. This is the basis of nonshivering thermogenesis in brown adipose tissue.",
   "source": "AAMC Content Category 1D; Voet & Voet Biochemistry (uncoupling and thermogenesis)",
   "topic": "Mitochondrial uncoupling / thermogenesis",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q3",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p1",
   "stem": "Which finding in experiment 2 most strongly supports the conclusion that the patient's myopathy involves a partially uncoupled inner membrane rather than a defect in a single ETC complex?",
   "options": [
    "Low ATP yield, which is also seen when any complex is inhibited",
    "Elevated resting O<sub>2</sub> consumption together with low ATP yield, mimicking the DNP condition",
    "Normal cytosolic glycolysis in the patient's cells",
    "Increased mitochondrial mass on electron microscopy"
   ],
   "answer": 1,
   "rationales": [
    "Low ATP yield alone is nonspecific — it occurs with uncoupling AND with complex inhibition — so it cannot distinguish the two mechanisms.",
    "Correct. A specific complex defect would LOWER O<sub>2</sub> consumption (electrons cannot reach O<sub>2</sub>). Uncoupling instead RAISES O<sub>2</sub> consumption while ATP stays low — exactly the DNP signature — so elevated respiration with low ATP points to uncoupling, not a blocked complex.",
    "Normal glycolysis is consistent with many states and does not localize the defect to coupling versus a complex.",
    "Increased mitochondrial mass is a nonspecific compensatory change and does not discriminate uncoupling from complex inhibition."
   ],
   "explanation": "The discriminating variable is the direction of O<sub>2</sub> consumption. Inhibiting a complex blocks electron flow and lowers respiration; uncoupling relieves back-pressure and raises respiration while ATP synthesis stays low. The patient's elevated O<sub>2</sub> use with poor ATP output matches the uncoupled (DNP-like) phenotype.",
   "source": "AAMC Content Category 1D; Scientific Inquiry and Reasoning Skill 3 (research design)",
   "topic": "Experimental reasoning / bioenergetics",
   "difficulty": "hard"
  },
  {
   "id": "e3_biobiochem_q4",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p1",
   "stem": "Rotenone blocks Complex I but not Complex II. If isolated mitochondria are given succinate (a Complex II substrate) plus rotenone and ADP, ATP synthesis would most likely be:",
   "options": [
    "Completely abolished, because all electron flow requires Complex I",
    "Increased, because rotenone uncouples the membrane",
    "Largely preserved, because electrons from succinate enter at Complex II and still drive Complexes III and IV",
    "Unchanged from a no-substrate control"
   ],
   "answer": 2,
   "rationales": [
    "Complex I is bypassed when electrons enter via Complex II (succinate to FADH<sub>2</sub> to ubiquinone), so blocking Complex I does not abolish all electron flow.",
    "Rotenone is an inhibitor, not an uncoupler; it does not collapse the proton gradient.",
    "Correct. Succinate feeds electrons into ubiquinone via Complex II, downstream of the rotenone block, so Complexes III and IV still pump protons and ATP synthesis continues (though yield per electron pair is somewhat lower than via Complex I).",
    "A succinate substrate clearly supports respiration above a no-substrate control, so the outcome is not unchanged from that control."
   ],
   "explanation": "Electrons can enter the chain at Complex II via FADH<sub>2</sub>, bypassing a Complex I block. Thus rotenone plus succinate still supports proton pumping by Complexes III and IV and continued ATP synthesis, a classic test of where an inhibitor acts in the chain.",
   "source": "AAMC Content Category 1D; Lehninger Principles of Biochemistry (ETC inhibitors)",
   "topic": "Electron transport chain inhibitors",
   "difficulty": "hard"
  },
  {
   "id": "e3_biobiochem_q5",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p2",
   "stem": "After TTX is applied, a suprathreshold current injection produces a small passive depolarization but no action potential. The best explanation is that TTX:",
   "options": [
    "Depletes intracellular ATP so the Na<sup>+</sup>/K<sup>+</sup>-ATPase fails",
    "Blocks the voltage-gated Na<sup>+</sup> channels responsible for the regenerative upstroke, preventing the AP",
    "Prevents acetylcholine release at the synapse",
    "Holds open voltage-gated K<sup>+</sup> channels, clamping the membrane at rest"
   ],
   "answer": 1,
   "rationales": [
    "TTX is not a metabolic poison; the resting potential persists (passive depolarization is observed), indicating the Na<sup>+</sup>/K<sup>+</sup> pump and gradients are intact.",
    "Correct. TTX binds the extracellular pore of voltage-gated Na<sup>+</sup> channels. Without Na<sup>+</sup> influx the regenerative upstroke cannot occur, so a stimulus produces only a passive (electrotonic) depolarization and no AP.",
    "The experiment is on an isolated axon with direct current injection, not on synaptic transmission; transmitter release is not the relevant step.",
    "TTX targets Na<sup>+</sup> channels, not K<sup>+</sup> channels; TEA is the K<sup>+</sup>-channel blocker described in the passage, and blocking K<sup>+</sup> channels would broaden the AP, not abolish it."
   ],
   "explanation": "The action potential upstroke depends on regenerative Na<sup>+</sup> influx through voltage-gated Na<sup>+</sup> channels. TTX plugs these channels, so even a suprathreshold stimulus yields only passive depolarization. K<sup>+</sup>-channel blockers like TEA instead prolong repolarization.",
   "source": "AAMC Content Category 3A; Kandel Principles of Neural Science (voltage-gated channels)",
   "topic": "Action potential / ion channels",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q6",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p2",
   "stem": "In a demyelinating disease that strips myelin from an axon while leaving nodal Na<sup>+</sup> channels intact, conduction velocity drops sharply. The most direct reason is that loss of myelin:",
   "options": [
    "Reverses the direction of action potential propagation",
    "Eliminates the Na<sup>+</sup> electrochemical gradient across the membrane",
    "Inactivates the voltage-gated K<sup>+</sup> channels at the nodes",
    "Increases membrane capacitance and current leak across internodes, degrading saltatory conduction"
   ],
   "answer": 3,
   "rationales": [
    "Propagation direction is set by the refractory period of recently fired segments, not by myelin; demyelination slows but does not reverse conduction.",
    "Myelin does not establish the Na<sup>+</sup> gradient; the Na<sup>+</sup>/K<sup>+</sup>-ATPase does. The gradient is preserved in demyelination.",
    "Demyelination does not selectively inactivate nodal K<sup>+</sup> channels; the passage specifies nodal channels remain intact.",
    "Correct. Myelin lowers membrane capacitance and raises resistance across internodes, letting current spread quickly between nodes. Removing it raises capacitance and allows charge to leak out, so depolarization spreads more slowly (or fails), collapsing fast saltatory conduction."
   ],
   "explanation": "Myelin speeds conduction by decreasing membrane capacitance and increasing transverse resistance, confining regeneration to the nodes (saltatory conduction). Demyelination increases capacitance and current leak across the former internodes, slowing or blocking propagation even when nodal channels are intact.",
   "source": "AAMC Content Category 3A; Kandel Principles of Neural Science (saltatory conduction)",
   "topic": "Myelination / nerve conduction",
   "difficulty": "hard"
  },
  {
   "id": "e3_biobiochem_q7",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p2",
   "stem": "The absolute refractory period of the neuron is primarily attributable to:",
   "options": [
    "Complete closure of all voltage-gated K<sup>+</sup> channels",
    "Inactivation of voltage-gated Na<sup>+</sup> channels, which cannot reopen until the membrane repolarizes",
    "The time required for the Na<sup>+</sup>/K<sup>+</sup>-ATPase to restore ion gradients after each spike",
    "Saturation of the postsynaptic acetylcholine receptors"
   ],
   "answer": 1,
   "rationales": [
    "K<sup>+</sup> channels are actually open during repolarization; their activity contributes to the relative (not absolute) refractory period via afterhyperpolarization.",
    "Correct. After opening, voltage-gated Na<sup>+</sup> channels enter an inactivated state and remain non-conducting until the membrane repolarizes enough to reset them. During this window no new AP can be initiated regardless of stimulus strength — the absolute refractory period.",
    "The pump restores gradients over many cycles, but only a tiny fraction of ions move per AP; the pump's kinetics do not set the millisecond-scale refractory period.",
    "Receptor saturation concerns synaptic transmission, not the intrinsic refractory behavior of the axonal membrane."
   ],
   "explanation": "Voltage-gated Na<sup>+</sup> channels have three states: closed, open, and inactivated. After firing, they are inactivated and cannot reopen until repolarization resets them, producing the absolute refractory period. This enforces unidirectional propagation and caps firing frequency.",
   "source": "AAMC Content Category 3A; Kandel Principles of Neural Science (channel gating)",
   "topic": "Refractory period / channel gating",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q8",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p3",
   "stem": "Line T secretes far more lactate than line N while consuming less O<sub>2</sub>. The increased lactate production most directly serves to:",
   "options": [
    "Detoxify reactive oxygen species generated by the ETC",
    "Regenerate cytosolic NAD<sup>+</sup> so that glycolysis can continue at a high rate",
    "Maximize ATP yield per glucose molecule",
    "Provide protons to acidify the extracellular space for its own sake"
   ],
   "answer": 1,
   "rationales": [
    "Lactate production is not a primary antioxidant mechanism; ROS detoxification is handled by enzymes like superoxide dismutase and glutathione systems.",
    "Correct. LDH reduces pyruvate to lactate while oxidizing NADH to NAD<sup>+</sup>. Regenerating NAD<sup>+</sup> in the cytosol is essential to keep the GAPDH step of glycolysis running fast, sustaining high glycolytic flux for biosynthesis.",
    "Fermenting glucose to lactate yields only ~2 ATP per glucose, far less than oxidative phosphorylation; maximizing ATP yield is not what aerobic glycolysis achieves.",
    "Although lactate efflux does acidify the microenvironment, the principal biochemical driver of high LDH flux is NAD<sup>+</sup> regeneration, confirmed by the rise in NADH when LDH-A is knocked down."
   ],
   "explanation": "In aerobic glycolysis, rapid conversion of pyruvate to lactate by LDH regenerates NAD<sup>+</sup> needed by GAPDH, sustaining high glycolytic throughput. The knockdown result — NADH rises and flux falls when LDH-A is removed — directly demonstrates this redox-balancing role.",
   "source": "AAMC Content Category 1D; DeBerardinis et al., Cell Metabolism (Warburg effect)",
   "topic": "Anaerobic/aerobic glycolysis / redox balance",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q9",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p3",
   "stem": "The high PKM2/PKM1 ratio in line T is proposed to support proliferation. A less active pyruvate kinase step would most plausibly promote biosynthesis by:",
   "options": [
    "Increasing the complete oxidation of glucose to CO<sub>2</sub>",
    "Causing upstream glycolytic intermediates to accumulate and feed anabolic side pathways such as the pentose phosphate and serine pathways",
    "Blocking glucose uptake to conserve carbon",
    "Directly synthesizing nucleotides from pyruvate"
   ],
   "answer": 1,
   "rationales": [
    "Slowing pyruvate kinase reduces, not increases, flux to pyruvate and complete oxidation; line T already shows decreased O<sub>2</sub> consumption.",
    "Correct. A throttled final step backs up glycolytic intermediates (e.g., glucose-6-phosphate, 3-phosphoglycerate), which can be diverted into the pentose phosphate pathway (ribose-5-phosphate, NADPH) and serine/one-carbon pathways that supply building blocks for a dividing cell.",
    "Line T's glucose uptake is dramatically increased, not blocked, so conserving carbon by limiting uptake is contradicted by the data.",
    "Pyruvate is not a direct nucleotide precursor; nucleotide synthesis draws on ribose-5-phosphate and amino acids derived from upstream intermediates."
   ],
   "explanation": "PKM2 can be down-tuned allosterically, slowing the conversion of phosphoenolpyruvate to pyruvate. This causes upstream intermediates to accumulate and be diverted into anabolic branches (pentose phosphate pathway for ribose and NADPH, serine pathway for one-carbon units), supporting the biosynthetic demands of proliferation rather than maximal ATP output.",
   "source": "AAMC Content Category 1D; Vander Heiden et al., Science (PKM2 and the Warburg effect)",
   "topic": "Glycolytic regulation / anabolism",
   "difficulty": "hard"
  },
  {
   "id": "e3_biobiochem_q10",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p3",
   "stem": "Which additional result would most strengthen the claim that line T relies on glycolysis (not oxidative phosphorylation) for survival under these conditions?",
   "options": [
    "Inhibiting glycolysis (e.g., with 2-deoxyglucose) kills line T far more than line N, while an ETC inhibitor has little additional effect on T",
    "Adding a glucose analog that cannot be phosphorylated has no effect on line T viability",
    "Line T grows equally well whether or not glucose is present in the medium",
    "Line T and line N have identical mitochondrial DNA sequences"
   ],
   "answer": 0,
   "rationales": [
    "Correct. A double-dissociation — glycolysis inhibition selectively cripples T while ETC inhibition does not add much — directly supports the conclusion that T depends preferentially on glycolysis, controlling for the alternative oxidative pathway.",
    "If a non-metabolizable glucose analog had no effect, it would say nothing about dependence on glycolytic flux; this is a non-informative or contradictory result.",
    "If T grew equally well without glucose, that would argue against, not for, glycolytic dependence.",
    "Identical mtDNA does not address which pathway T depends on functionally; sequence identity is not a functional dependence test."
   ],
   "explanation": "Strong causal support comes from a selective perturbation: blocking the proposed pathway (glycolysis) should harm the cells that depend on it, while blocking the alternative (oxidative phosphorylation) should not. This double-dissociation isolates the dependence, satisfying good experimental design.",
   "source": "AAMC Content Category 1D; Scientific Inquiry and Reasoning Skill 3 (research design)",
   "topic": "Experimental design / metabolism",
   "difficulty": "hard"
  },
  {
   "id": "e3_biobiochem_q11",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p4",
   "stem": "Between week 2 and week 10, mean K<sub>d</sub> of antigen-specific antibody falls from 120 nM to 3 nM. This change indicates that the antibodies have:",
   "options": [
    "Decreased in serum concentration",
    "Increased their binding affinity for the antigen",
    "Lost specificity for the antigen",
    "Switched from recognizing protein to recognizing carbohydrate"
   ],
   "answer": 1,
   "rationales": [
    "Serum concentration (titer) actually rose markedly, so the change in K<sub>d</sub> is not about falling antibody amount.",
    "Correct. K<sub>d</sub> is inversely related to affinity: a fall from 120 nM to 3 nM means much tighter binding, the hallmark of affinity maturation driven by somatic hypermutation and selection in germinal centers.",
    "A lower K<sub>d</sub> reflects tighter binding to the same antigen; specificity is not lost — affinity maturation preserves the variable-region target while improving fit.",
    "Nothing in the data indicates a change in the chemical nature of the epitope; the antigen is the same throughout."
   ],
   "explanation": "K<sub>d</sub> is the dissociation constant; lower K<sub>d</sub> equals higher affinity. The progressive decrease over the response reflects affinity maturation: AID-driven somatic hypermutation generates variants, and B cells with higher-affinity receptors are selectively expanded.",
   "source": "AAMC Content Category 1A; Janeway's Immunobiology (affinity maturation)",
   "topic": "Adaptive immunity / antibody affinity",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q12",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p4",
   "stem": "The shift in predominant isotype from IgM (week 2) to IgG (week 6) without a change in antigen specificity is best explained by:",
   "options": [
    "A new V(D)J recombination event creating a different variable region",
    "Class-switch recombination changing the heavy-chain constant region while preserving the variable region",
    "Replacement of light chains with a different antigen-binding site",
    "Loss of somatic hypermutation activity"
   ],
   "answer": 1,
   "rationales": [
    "V(D)J recombination establishes the variable region in developing B cells; a new event would alter specificity, which is explicitly preserved here.",
    "Correct. Class switching (AID-dependent) recombines the heavy-chain constant region (e.g., Cμ to Cγ), changing isotype/effector function from IgM to IgG while leaving the antigen-binding variable region unchanged.",
    "The antigen-binding site (variable regions of heavy and light chains) is preserved during class switching; light chains are not swapped to change specificity here.",
    "Somatic hypermutation continues during the response (affinity is still improving); its loss would not explain an isotype switch."
   ],
   "explanation": "Class-switch recombination replaces the heavy-chain constant region, converting IgM to IgG (or IgA, IgE) and tailoring effector function, while retaining the same antigen-specific variable region. It is mechanistically distinct from the V(D)J recombination that originally built the variable region.",
   "source": "AAMC Content Category 1A; Janeway's Immunobiology (class switching)",
   "topic": "Immunoglobulin class switching",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q13",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p4",
   "stem": "The sharp rise in titer and drop in K<sub>d</sub> after the week-8 booster (seen at week 10) compared with the primary response best reflects:",
   "options": [
    "Activation of naive B cells encountering antigen for the first time",
    "A memory (secondary) response: rapid expansion of high-affinity memory B cells from the primary response",
    "Tolerance induction shutting down the response",
    "Innate immune activation independent of prior exposure"
   ],
   "answer": 1,
   "rationales": [
    "A naive primary response is slower and lower-affinity; the rapid, high-titer, high-affinity rebound at week 10 is characteristic of memory, not a first encounter.",
    "Correct. The booster recalls memory B cells generated and affinity-matured during the primary response, producing a faster, larger, higher-affinity (lower K<sub>d</sub>) secondary response — the rationale for booster doses.",
    "Tolerance would suppress the response; the observed surge is the opposite of tolerance.",
    "Innate immunity lacks antigen-specific memory and would not produce the antigen-specific high-affinity antibody surge measured here."
   ],
   "explanation": "Secondary (memory) responses are faster, of higher magnitude, and higher affinity than primary responses because affinity-matured memory B cells from the first exposure are rapidly reactivated. This is the immunological basis of booster vaccination.",
   "source": "AAMC Content Category 1A; Janeway's Immunobiology (immunological memory)",
   "topic": "Primary vs secondary immune response",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q14",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p4",
   "stem": "Somatic hypermutation introduces point mutations specifically into the immunoglobulin variable-region genes of activated B cells. This is best described as a form of genetic change that is:",
   "options": [
    "Heritable by the organism's offspring through the germline",
    "Confined to somatic cells and therefore not passed to offspring",
    "Reversal of the original V(D)J recombination",
    "A large-scale chromosomal rearrangement of whole chromosomes"
   ],
   "answer": 1,
   "rationales": [
    "Somatic hypermutation occurs in B lymphocytes, not germ cells, so it is not transmitted through the germline to offspring.",
    "Correct. As the name indicates, these mutations arise in somatic (body) cells — mature B lymphocytes — and so affect only the individual's immune repertoire, not the heritable genome of offspring.",
    "It does not reverse V(D)J recombination; it refines an already-rearranged variable region by point mutation.",
    "Somatic hypermutation introduces point mutations in a small gene region, not whole-chromosome rearrangements."
   ],
   "explanation": "Somatic hypermutation targets point mutations to the rearranged variable-region genes in mature B cells. Because it occurs in somatic cells, the changes are not inherited; they shape the individual's antibody repertoire during a response.",
   "source": "AAMC Content Category 1A; Janeway's Immunobiology (somatic hypermutation)",
   "topic": "Somatic vs germline mutation",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q15",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p5",
   "stem": "In wild-type cells, maximal enzyme activity (100 units) requires BOTH melibiose present and glucose absent. This dual requirement indicates that:",
   "options": [
    "The repressor and CAP–cAMP act redundantly, so either condition alone is sufficient",
    "The operator is nonfunctional in wild-type cells",
    "Induction requires relief of repression (melibiose) AND positive activation (CAP–cAMP when glucose is low)",
    "Glucose is the inducer of the operon"
   ],
   "answer": 2,
   "rationales": [
    "The data show neither condition alone gives full expression (melibiose with glucose gives only 6; no melibiose without glucose gives only 2), so the inputs are not redundant — both are required.",
    "The operator is functional in wild type — that is why expression stays low without melibiose; the operator deletion is in Mutant 2.",
    "Correct. Melibiose inactivates the repressor (relieving the block), and low glucose raises cAMP so CAP–cAMP activates strong transcription. Maximal output needs both: derepression plus positive activation, mirroring the lac operon logic.",
    "Glucose is not the inducer; glucose presence keeps cAMP low and limits expression. Melibiose is the inducer."
   ],
   "explanation": "This is dual control like the lac operon. The repressor must be released by inducer (melibiose), and CAP–cAMP must activate transcription, which only happens when glucose is low. Full induction therefore requires melibiose present and glucose absent.",
   "source": "AAMC Content Category 1B; Molecular Biology of the Gene (lac operon regulation)",
   "topic": "Prokaryotic gene regulation / operons",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q16",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p5",
   "stem": "Mutant 1 (repressor cannot bind melibiose but still binds the operator) shows uniformly low activity across all conditions. This phenotype is best described as:",
   "options": [
    "Constitutive (always-on) expression",
    "Loss of catabolite repression only",
    "An operator-constitutive mutation",
    "A super-repressor: the operon cannot be induced because the repressor stays bound regardless of melibiose"
   ],
   "answer": 3,
   "rationales": [
    "Constitutive expression would be high in all conditions; Mutant 1 is uniformly LOW, the opposite pattern.",
    "Loss of catabolite repression would affect the glucose-dependent activation step, not lock expression off regardless of melibiose; activity would still rise with inducer.",
    "An operator-constitutive (O<sup>c</sup>) mutation would prevent repressor binding and give high expression, which is Mutant 2's pattern, not Mutant 1's.",
    "Correct. A repressor that binds the operator but cannot sense melibiose remains bound even when inducer is present, so the operon stays repressed under all conditions — a non-inducible (super-repressor) phenotype."
   ],
   "explanation": "A repressor that retains operator binding but cannot respond to inducer cannot be released, so transcription stays off in every condition. This non-inducible super-repressor mirrors the lacI<sup>s</sup> mutation in the lac operon.",
   "source": "AAMC Content Category 1B; Molecular Biology of the Gene (operon mutants)",
   "topic": "Operon mutants / repressor function",
   "difficulty": "hard"
  },
  {
   "id": "e3_biobiochem_q17",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p5",
   "stem": "Mutant 2 (operator deletion) shows high expression even without melibiose, but expression is still higher when glucose is absent (90–95) than when glucose is present (5–8). This residual glucose sensitivity indicates that:",
   "options": [
    "The promoter has been deleted along with the operator",
    "The operator deletion also disrupted CAP–cAMP activation",
    "Melibiose is required for any expression in this mutant",
    "Positive control by CAP–cAMP is independent of the operator and still operates"
   ],
   "answer": 3,
   "rationales": [
    "The promoter must be intact, since substantial transcription still occurs; only the operator was deleted.",
    "The data show CAP–cAMP control is intact: expression still rises sharply when glucose is removed, so the operator deletion did not eliminate activation.",
    "Melibiose is not required in this mutant — expression is high without it because the operator (repressor target) is gone.",
    "Correct. Deleting the operator removes repressor control (expression no longer needs melibiose), but the CAP–cAMP positive control acts at a separate site, so transcription is still boosted when glucose is low (high cAMP)."
   ],
   "explanation": "Repressor/operator control and CAP–cAMP activation are separable. Removing the operator makes the operon constitutive with respect to the inducer (no melibiose needed), but the independent positive CAP–cAMP control still modulates output according to glucose availability.",
   "source": "AAMC Content Category 1B; Molecular Biology of the Gene (positive vs negative control)",
   "topic": "Positive vs negative gene control",
   "difficulty": "hard"
  },
  {
   "id": "e3_biobiochem_q18",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p6",
   "stem": "In classic 21-hydroxylase deficiency, which set of laboratory findings is most expected?",
   "options": [
    "Low cortisol, high ACTH, low aldosterone, elevated adrenal androgens",
    "Normal cortisol, normal ACTH, low androgens",
    "Low cortisol, low ACTH, high aldosterone",
    "High cortisol, low ACTH, high aldosterone"
   ],
   "answer": 0,
   "rationales": [
    "Correct. Blocking 21-hydroxylase lowers cortisol and aldosterone. Low cortisol removes negative feedback, so ACTH rises; the high ACTH drives precursors into the unblocked androgen pathway, raising adrenal androgens — explaining salt wasting plus virilization.",
    "Findings are not normal; the clinical picture (salt wasting, androgen excess) reflects clear hormonal derangement.",
    "Aldosterone is low (not high) because the same enzyme is needed for mineralocorticoid synthesis, causing salt wasting; ACTH is high, not low.",
    "Cortisol cannot be high when its synthetic enzyme is missing; and with low cortisol, ACTH would rise (loss of negative feedback), not fall."
   ],
   "explanation": "Loss of 21-hydroxylase blocks cortisol and aldosterone synthesis. The fall in cortisol releases the HPA axis from negative feedback, ACTH surges, and the accumulated precursors are shunted into androgen synthesis. The result is glucocorticoid and mineralocorticoid deficiency with androgen excess.",
   "source": "AAMC Content Category 3B; Guyton & Hall Textbook of Medical Physiology (adrenal steroidogenesis)",
   "topic": "Endocrine feedback / steroidogenesis",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q19",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p6",
   "stem": "Because cortisol is a steroid, its primary mechanism of action differs from that of a peptide hormone such as ACTH in that cortisol:",
   "options": [
    "Cannot enter target cells and acts only on the extracellular matrix",
    "Acts faster than peptide hormones because it needs no receptor",
    "Binds a cell-surface G-protein-coupled receptor and acts through second messengers",
    "Diffuses across the plasma membrane and binds an intracellular receptor that regulates gene transcription"
   ],
   "answer": 3,
   "rationales": [
    "Steroids readily enter cells because they are lipophilic; the claim that they cannot enter is the opposite of their defining property.",
    "Steroids generally act more slowly (gene transcription takes time) and absolutely require receptors; the statement is incorrect on both counts.",
    "Surface GPCR/second-messenger signaling describes peptide hormones like ACTH, not the principal action of a lipophilic steroid.",
    "Correct. Lipophilic steroids cross the plasma membrane and bind intracellular (cytoplasmic/nuclear) receptors that act as ligand-activated transcription factors, altering gene expression — a slower, longer-lasting response."
   ],
   "explanation": "Steroid hormones are lipophilic, diffuse through membranes, and bind intracellular receptors that function as transcription factors, producing slower but sustained changes in gene expression. Peptide hormones bind surface receptors and act through second messengers.",
   "source": "AAMC Content Category 3B; Molecular Biology of the Cell (nuclear receptor signaling)",
   "topic": "Hormone signaling mechanisms",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q20",
   "section": "biobiochem",
   "passageId": "e3_biobiochem_p6",
   "stem": "If the neonate is treated with exogenous glucocorticoid (e.g., hydrocortisone), the expected effect on the androgen excess is that it should:",
   "options": [
    "Decrease, because restoring negative feedback lowers ACTH and reduces the drive into the androgen pathway",
    "Worsen, because steroids stimulate androgen synthesis",
    "Decrease only if aldosterone is withheld",
    "Be unchanged, because ACTH does not influence adrenal androgens"
   ],
   "answer": 0,
   "rationales": [
    "Correct. Providing glucocorticoid restores negative feedback on the hypothalamus and pituitary, lowering ACTH. Less ACTH means less stimulation of the adrenal cortex and reduced shunting of precursors into androgens, so virilization improves.",
    "Physiologic glucocorticoid replacement suppresses the axis; it does not stimulate adrenal androgen synthesis. Excess androgens here come from ACTH overdrive, not from the glucocorticoid itself.",
    "The improvement depends on suppressing ACTH via feedback, not on withholding aldosterone; mineralocorticoid replacement is often also needed for salt wasting.",
    "ACTH strongly drives adrenal steroid output, including the precursors diverted to androgens; this option contradicts the passage's HPA axis description."
   ],
   "explanation": "The androgen excess in 21-hydroxylase deficiency is driven by elevated ACTH (from low cortisol feedback). Glucocorticoid replacement restores negative feedback, suppresses ACTH, and thereby reduces the precursor flux diverted into androgens.",
   "source": "AAMC Content Category 3B; Guyton & Hall Textbook of Medical Physiology (HPA axis feedback)",
   "topic": "Endocrine feedback / pharmacologic correction",
   "difficulty": "hard"
  },
  {
   "id": "e3_biobiochem_q21",
   "section": "biobiochem",
   "stem": "A protein is dialyzed into buffers of varying pH, and its net charge is measured. The protein carries no net charge at pH 6.8. At physiological pH 7.4, the protein will most likely:",
   "options": [
    "Carry a net positive charge and migrate toward the cathode in electrophoresis",
    "Remain uncharged because pH is close to its isoelectric point",
    "Precipitate, because solubility is maximal near the isoelectric point",
    "Carry a net negative charge and migrate toward the anode in electrophoresis"
   ],
   "answer": 3,
   "rationales": [
    "Above the pI, a protein is deprotonated and net negative; it would not be positive or migrate to the cathode.",
    "pH 7.4 is above the pI of 6.8, so the protein is not at its isoelectric point and does carry a net (negative) charge.",
    "Solubility is generally LOWEST near the pI (minimal charge repulsion); at pH 7.4 the charged protein is more soluble, not precipitating.",
    "Correct. The isoelectric point is 6.8. At a higher pH (7.4), acidic and basic groups are more deprotonated, giving a net negative charge, so the protein migrates toward the positive electrode (anode)."
   ],
   "explanation": "When pH exceeds a protein's pI, it carries net negative charge and moves toward the anode in an electric field. Solubility is minimal at the pI because there is little electrostatic repulsion between molecules.",
   "source": "AAMC Content Category 1A; Lehninger Principles of Biochemistry (protein isoelectric point)",
   "topic": "Protein charge / isoelectric point",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q22",
   "section": "biobiochem",
   "stem": "During DNA replication, the leading strand is synthesized continuously while the lagging strand is made in short Okazaki fragments. The fundamental reason for this asymmetry is that DNA polymerase:",
   "options": [
    "Cannot use RNA primers on the leading strand",
    "Requires a different polymerase for each strand that works in opposite directions",
    "Can only synthesize in the 5' to 3' direction, while the two template strands are antiparallel",
    "Proofreads only the lagging strand, slowing its synthesis"
   ],
   "answer": 2,
   "rationales": [
    "Both strands begin with RNA primers; the leading strand also requires a primer. Primer use is not the source of the asymmetry.",
    "A single polymerase can synthesize both strands; the discontinuity is dictated by directionality and antiparallel templates, not by needing oppositely directed enzymes.",
    "Correct. DNA polymerase adds nucleotides only to a 3'-OH, extending 5' to 3'. Because the template strands are antiparallel and the fork opens in one direction, one new strand runs continuously toward the fork (leading) while the other must be made in pieces away from the fork (lagging).",
    "Proofreading (3' to 5' exonuclease) occurs on both strands and does not explain the fragmented synthesis of the lagging strand."
   ],
   "explanation": "DNA polymerases elongate only 5' to 3'. Given antiparallel templates and a unidirectionally moving fork, one daughter strand is synthesized continuously (leading) and the other discontinuously as Okazaki fragments (lagging), which are later joined by ligase.",
   "source": "AAMC Content Category 1B; Molecular Biology of the Gene (DNA replication)",
   "topic": "DNA replication directionality",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q23",
   "section": "biobiochem",
   "stem": "A nonsense mutation early in a gene's coding sequence and a missense mutation at the same codon are compared. Relative to the missense mutation, the early nonsense mutation is more likely to:",
   "options": [
    "Have no effect on the protein at all",
    "Add extra amino acids to the C-terminus",
    "Produce a severely truncated, usually nonfunctional protein and trigger nonsense-mediated decay of the transcript",
    "Shift the reading frame of all downstream codons"
   ],
   "answer": 2,
   "rationales": [
    "A premature stop codon early in the sequence typically has a major effect (truncation), so 'no effect' is incorrect.",
    "A premature stop codon terminates translation early and removes C-terminal residues; it does not add amino acids to the C-terminus.",
    "Correct. A nonsense mutation creates a premature stop codon, yielding a truncated, usually nonfunctional protein, and such transcripts are often degraded by nonsense-mediated decay — generally more damaging than a single amino-acid substitution.",
    "A point substitution to a stop codon does not change the reading frame; frameshifts result from insertions or deletions of non-multiples of three."
   ],
   "explanation": "Nonsense mutations introduce premature stop codons, producing truncated proteins and frequently triggering nonsense-mediated mRNA decay. An early nonsense mutation typically abolishes function more completely than a missense change at the same position, which alters only one residue.",
   "source": "AAMC Content Category 1B; Molecular Biology of the Cell (mutation types)",
   "topic": "Mutation types / consequences",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q24",
   "section": "biobiochem",
   "stem": "A noncompetitive inhibitor binds an enzyme at a site distinct from the active site, with equal affinity for free enzyme and the enzyme–substrate complex. On a Lineweaver–Burk plot, adding this inhibitor will:",
   "options": [
    "Increase both V<sub>max</sub> and K<sub>m</sub>",
    "Leave V<sub>max</sub> unchanged and increase K<sub>m</sub>",
    "Decrease V<sub>max</sub> and leave K<sub>m</sub> unchanged",
    "Increase V<sub>max</sub> and leave K<sub>m</sub> unchanged"
   ],
   "answer": 2,
   "rationales": [
    "Noncompetitive inhibition does not increase V<sub>max</sub> or K<sub>m</sub>; this pattern matches no standard reversible inhibition type.",
    "Unchanged V<sub>max</sub> with increased K<sub>m</sub> describes competitive inhibition, not noncompetitive.",
    "Correct. Classic noncompetitive inhibition lowers V<sub>max</sub> (effectively removing functional enzyme) but does not change K<sub>m</sub>, because the inhibitor binds free enzyme and ES complex equally, leaving substrate affinity unaffected.",
    "Inhibitors reduce catalytic output; they do not raise V<sub>max</sub>. Noncompetitive inhibition lowers V<sub>max</sub>."
   ],
   "explanation": "Pure noncompetitive inhibitors bind equally to E and ES at an allosteric site, decreasing the apparent V<sub>max</sub> while leaving K<sub>m</sub> unchanged. On a Lineweaver–Burk plot, lines intersect on the x-axis (same x-intercept, higher y-intercept).",
   "source": "AAMC Content Category 1A; Lehninger Principles of Biochemistry (enzyme inhibition)",
   "topic": "Enzyme inhibition kinetics",
   "difficulty": "hard"
  },
  {
   "id": "e3_biobiochem_q25",
   "section": "biobiochem",
   "stem": "Two genes, A and B, are located 18 map units (centimorgans) apart on the same chromosome. In a testcross of a dihybrid (AB/ab), what percentage of offspring are expected to be recombinant?",
   "options": [
    "9%",
    "18%",
    "50%",
    "36%"
   ],
   "answer": 1,
   "rationales": [
    "9% would be the frequency of a single recombinant gamete class; the total recombinant frequency equals the full map distance, not half of it.",
    "Correct. Map distance in centimorgans equals the percentage of recombinant offspring. Genes 18 cM apart yield 18% recombinants (split as two recombinant classes of ~9% each).",
    "50% recombination indicates genes that assort independently (unlinked or very far apart); 18 cM linkage gives fewer recombinants than 50%.",
    "36% would correspond to 36 cM; it double-counts and exceeds the given distance."
   ],
   "explanation": "One centimorgan equals 1% recombination frequency between two loci (for distances where the relationship is approximately linear). Genes 18 cM apart produce 18% recombinant offspring in a testcross, divided into two reciprocal recombinant classes.",
   "source": "AAMC Content Category 1C; Griffiths Introduction to Genetic Analysis (linkage mapping)",
   "topic": "Genetic linkage / recombination",
   "difficulty": "medium"
  },
  {
   "id": "e3_biobiochem_q26",
   "section": "biobiochem",
   "stem": "Bacterial conjugation, transformation, and transduction all transfer genetic material between bacteria. A key distinction is that transduction specifically requires:",
   "options": [
    "Uptake of free DNA from the environment",
    "A bacteriophage to carry bacterial DNA from a donor to a recipient cell",
    "Replication of a plasmid origin of transfer",
    "Direct cell-to-cell contact through a pilus"
   ],
   "answer": 1,
   "rationales": [
    "Uptake of naked environmental DNA describes transformation, not transduction.",
    "Correct. Transduction is the transfer of bacterial DNA from one cell to another mediated by a bacteriophage (virus), which mistakenly packages host DNA and delivers it to a new host.",
    "Plasmid oriT and transfer machinery are features of conjugation, not transduction.",
    "Direct contact via a pilus describes conjugation, not transduction."
   ],
   "explanation": "The three horizontal gene transfer mechanisms are distinguished by vehicle: conjugation uses cell-to-cell contact (pilus/plasmid), transformation uses uptake of free DNA, and transduction uses a bacteriophage to ferry bacterial DNA between cells.",
   "source": "AAMC Content Category 1B; Brock Biology of Microorganisms (horizontal gene transfer)",
   "topic": "Microbial genetics / horizontal gene transfer",
   "difficulty": "easy"
  }
 ]
};
