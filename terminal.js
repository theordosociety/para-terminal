// Add a specified delay in miliseconds
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

// Write text to a target element with a specified delay in ms
function writeText(target, content, delay = 5)
{
  // Loop through array of content characters
  return new Promise((resolve) => {
    // Make an array of the specified content
    const contentArray = content.split('')

    // Keep track of the character currently being written
    let current = 0

    while (current < contentArray.length) {
      ;((curr) => {
        setTimeout(() => {
          target.innerHTML += contentArray[curr]
          // Scroll to the bottom of the screen unless scroll is false
          window.scrollTo(0, document.body.scrollHeight)
          
          // Resolve the promise once the last character is written
          if (curr === contentArray.length - 1) resolve()
        }, delay * curr) // increase delay with each iteration
      })(current++)
    }
  })
}

// Handle keypresses on the document, printing them to an
// 'input' span. Input content will be interpreted as a
// command and output will be written to an output element
function handleKeypress(e, input, output)
{ 
  // Check if a certain type of element has focus that we do not
  // want to do keypress handling on (such as form inputs)
  function noInputHasFocus() {
    const elements = ['INPUT', 'TEXTAREA', 'BUTTON']
    return elements.indexOf(document.activeElement.tagName) === -1
  }
  
  if (noInputHasFocus) {
    // Enter clears the input and executes the command
    if (e.key === 'Enter') {
      const command = input.innerText
      input.innerHTML = ''
      // reprint the entered command
      output.innerHTML += '<br><strong>' + command + '</strong>\n<br>'
      writeText(output, execute(command))
    }
    // Backspace causes last character to be erased
    else if (e.key === 'Backspace') {
      input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1)
    }
    // For any other key, print the keystroke to the prompt
    else input.insertAdjacentText('beforeend', e.key)
  }
  
  // Accept a command, execute it, and return any output
  function execute(command)
  {
    switch(command.toLowerCase()) {
      case '':
        return `\n`

      case 'clear':
        asciiText.style.display = 'block'
        output.innerHTML = ''
        return ''

      case 'log':
        return `
        I am a broken man. 
        I have no more ideas. 
        I have tried everything. 
        I am going to add the data back one last time. 
        I have to be missing something. 
        It's the only explanation.
        `

      case 'adam':
        return `
        No, no, no...
        Don't forget who you are.
        Don't forget where you belong to.
        Don't forget the warmth of the sun.
        It wasn't real out there.
        This is your reality.
        You will be happy here.
        Please...
        Don't forget Portland Pines.`
        
      case 'mepi':
        return 'ganteng'

        case 'list':
        return `
                NEURAL ARCHIVE SYSTEM v2.1.7
                  Authentication: GRANTED
                Administrator Access: ENABLED

> list

ARCHIVED SUBJECTS - OPERATION REQUIEM
Total Records: 16
Last Updated: 2025-08-06 23:47:32

┌─────────────────────────────────────────────────────────────────┐
│ JOAQUINA ROY / OR-PR1                                           │
│ STATUS: ACTIVE                                                  │
│ SEX: F                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ EVA KIEŚLOWSKA / OR-PR2                                         │
│ STATUS: ACTIVE                                                  │
│ SEX: F                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ VICTORIA JAKAYLA CHASE / OR-PR3                                 │
│ STATUS: ACTIVE                                                  │
│ SEX: F                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ MIHAEL KUROSAWA / OR-PR4                                        │
│ STATUS: ACTIVE                                                  │
│ SEX: M                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ JACINDA JUDE / OR-PR5                                           │
│ STATUS: ACTIVE                                                  │
│ SEX: F                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ IGRIS SALAZAR-LEE / OR-PR6                                      │
│ STATUS: ACTIVE                                                  │
│ SEX: M                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ TAMARA WEI / OR-PR7                                             │
│ STATUS: ACTIVE                                                  │
│ SEX: F                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ HELGE DOPPLER / OR-PR8                                          │
│ STATUS: ACTIVE                                                  │
│ SEX: M                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ DEVARA KEENAN LEIGHTON / OR-PR9                                 │
│ STATUS: ACTIVE                                                  │
│ SEX: M                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ HALSTAIRE ERNEST YAN / OR-PR10                                  │
│ STATUS: ACTIVE                                                  │
│ SEX: M                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ JEREMY VANE / OR-PR11                                           │
│ STATUS: ACTIVE                                                  │
│ SEX: M                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ VISENYA BATHSHEVA AL GHUL / OR-PR12                             │
│ STATUS: ACTIVE                                                  │
│ SEX: F                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ ADAM / OR-PR13                                                  │
│ STATUS: ACTIVE                                                  │
│ SEX: M                                                          │
│ MEMORIES: ERASED                                                │
├─────────────────────────────────────────────────────────────────┤
│ LUKE DAVIS / OR-PR14                                            │
│ STATUS: ACTIVE                                                  │
│ SEX: M                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ NICHOLAS RYDER / OR-PR15                                        │
│ STATUS: ACTIVE                                                  │
│ SEX: M                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ PIPER POTTS / OR-PR16                                           │
│ STATUS: ACTIVE                                                  │
│ SEX: F                                                          │
│ MEMORIES: ARCHIVED                                              │
└─────────────────────────────────────────────────────────────────┘`

        case 'memo':
        return `
NEURAL ARCHIVE SYSTEM v2.1.7
Authentication: GRANTED
Status: ARCHIVED

MEMO - Memory Archive Access Tool
Usage: memo--

Options:
--ORPR1: Joaquina Roy
--ORPR2: Eva Kieślowska
--ORPR3: Victoria Jakayla Chase
--ORPR4: Mihael Kurosawa
--ORPR5: Jacinda Jude
--ORPR6: Igris Salazar-Lee
--ORPR7: Tamara Wei
--ORPR8: Helge Doppler
--ORPR9: Devara Keenan Leighton
--ORPR10: Halstaire Ernest Yan
--ORPR11: Jeremy Vane
--ORPR12: Visenya Bathsheva Al Ghul
--ORPR13: Adam
--ORPR14: Luke Davis
--ORPR15: Nicholas Ryder
--ORPR16: Piper Potts

example usage: type 'memoORPR1' in commands`
    
      case 'jokowi':
        return 'adili'

      case 'memoorpr1':
        return `
        [SYS-PSYCHE: JOAQUINA]  -- DAY 003 -- STATUS: ACTIVE

Initiating affective scan...
  EMOTION DETECTED: Unclassified (approximate match: CONTENTMENT → FEAR, 89%)
  ORIGIN TRACE: Event-231 / Domestic Holiday Memory

[17:04:12]  Environmental recognition: dining table; moderate luminance; dominant light source = fireplace
             Affect baseline: mild warmth; familial presence confirmed

[17:04:58]  Visual detection: maternal figure entering w/ birthday cake
             Object condition: surface burn, uneven frosting, scattered sprinkles
             Emotional spike: gratitude (12s duration)

[17:05:16]  Auditory input: maternal voice directive (“take your seats”)
             Group compliance: total
             Positioning: self already seated at assigned place

[17:05:42]  External auditory input: sibling dialogue referencing paternal toast
             Affect shift: low-grade amusement

[17:06:13]  Environmental anomaly: primary heat source extinguished
             Luminance drop: 87%
             Somatic input: temperature decline; floor contact → “icy”
             Verbal output: “The light’s gone. I can’t see.”
             Response latency: infinite (no replies detected)

[17:06:48]  Locomotor attempt toward table; tactile search for matches
             Unclassified sound source: fireplace origin
             Proximity increase

[17:07:15]  Sudden luminance surge: fireplace reignition
             Group visual reappearance: seated; affect presentation = null
             Motor anomalies: utensil grip without affective alignment

[17:07:29]  Auditory input: maternal phrase (“no goodbyes”)
             Cognitive flag: semantic inconsistency
[17:07:41]  Auditory input: paternal phrase (“Happy birthday, and forgive us”)
             Affect disturbance: anxiety escalation

[17:08:03]  Motor observation: maternal hands bypass cake, engage alternate cutting action
             Visual confirmation: target object = paternal hand
             Fluid detection: hemoglobin spill
             Verbal output: “M-mom, that’s father’s hand! Stop!”

[17:08:18]  Auditory input: maternal justification (“no divorce”)
             Affect reading: hollow resonance

[17:08:29]  Auditory + visual overload: siblings induce table percussion + shouting
             Paternal figure: motionless, silent

[17:08:52]  Somatic self-stimulation: cranial impact via palm; intent = reality confirmation
             Memory overlay: “last Thanksgiving before divorce”
             Reality integrity: compromised

[17:09:31]  Scene persistence despite cognitive override attempts
             Physiological distress: elevated respiration; ocular moisture accumulation
             Status: unresolved`
        
      case 'memoorpr2':
        return `
        [SYS-PSYCHE: EVA]  -- DAY 003 -- STATUS: CRITICAL

Initiating affective scan...
  EMOTION DETECTED: Traumatic flashback (compound: grief + panic)
  ORIGIN TRACE: Event-01 / Father-Unit disappearance during media playback

[00:11:04]  Visual stimulus: film sequence — "Dekalog I"
             Onscreen query: "What’s death? What’s left of them?"
             Emotional resonance triggers autobiographical memory crosslink

[00:12:39]  Attempted dialogue with Father-Unit — no response
             Spatial scan: seating displacement detected
             Olfactory trace persists — absence incongruent with sensory data

[00:14:22]  Scene deviation: film narrative merges with personal loss sequence
             Self-assignment into onscreen role — displacement of 
             character Pawel with Father-Unit
             Environment overlays with ice pond + crowd formation

[00:16:08]  Vocal output: escalating distress calls (“Tata?” → 
              “Where’s Tata?” → “Tata!”)
             Emotional amplitude breach into anger: “This is bullshit!”

[00:17:51]  Critical moment: ice fracture → Father-Unit submersion
             Somatic overload: breath irregularity, limb tremors
             Motor action: repeated surface strikes (ineffective retrieval attempt)

[00:19:33]  Cognitive protest: “Don’t show me this!” / “I 
            don’t want to know what death looks like!”
             Auditory + visual saturation from film continues without interruption

[00:21:10]  Event lock: loss of Father-Unit finalised in simulation
             Emotional state consolidation: grief freeze + helpless rage
             Persistent loop replay in visual cortex

[00:22:44]  System note: flashback remains embedded, resistant to overwrite
             Prognosis — high likelihood of recurring 
             involuntary replay under related stimuli`

      case 'memoorpr3':
        return `
[SYS-PSYCHE: VICKY]  -- DAY 003 -- STATUS: ACTIVE

Initiating affective scan...
  EMOTION DETECTED: Mixed (approximate match: NOSTALGIA 67%, JOY 54%, FEAR 89%)
  ORIGIN TRACE: Event-089 / Basement Descent

[18:12:41]  Environmental recognition: unexpected shift (basement → warm sand)
             Sensory mapping: high familiarity index (childhood summer)
             Affect spike: joy, 23s duration

[18:13:08]  Visual input: orange-pink light; classified as sunset
             Emotional cascade: comfort → longing

[18:13:24]  Facial recognition: HALMEONI (grandmother), 100% match
             Voice input: "Keep this day with you, always, sweetheart."
             Emotional breach threshold: exceeded (positive)

[18:14:02]  External auditory input: ocean waves + cousin’s laughter
             Crosslink: memory archive #32-SEA/WM
             Emotional resonance sustained

[18:15:09]  Tear production: onset; rate increase correlates with auditory cue shift
             Ocean wave amplitude: ↑ 17% (symbolic match: shared grief)

[18:15:46]  Query initiated: "Why am I here all of a sudden?"
             Response from HALMEONI: reality overwrite protocol ("You’ve always been here.")

[18:16:12]  Tactile data: embrace (warmth + scent recognition match 99.4%)
             Emotional anchor engaged

[18:17:03]  Scene destabilization: cousin’s laughter → null
             Residual sound: unknown Korean phrase; semantic comprehension <40%
             Affect shift: confusion → unease

[18:17:42]  Environmental hazard detection: sand adhesion (ankle → waist progression)
             Struggle output: ineffective
             Grip strength of HALMEONI: ↑ 42%, warmth output ↓ 100% (cold state)

[18:18:21]  Respiratory restriction detected
             Voice output: "Halmeoni… I can’t breathe…"
             No reduction in compressive force

[18:18:54]  HALMEONI output: "You’ll stay in this moment forever, my sweet Vicky."
             Cognitive impact: fear spike to terminal range
[18:19:07]  Visual shift: sky saturation ↑ 33%, wave activity ↑ 27%
             Object degradation: watermelon slice liquefaction
             Sand level: chest height; full immobilization imminent

[18:19:41]  Auditory ghosting: cousin’s voice returns (unintelligible)
             Signal profile: distress call; tone classification → sorrow

[18:19:58]  Emotional status: NOSTALGIA collapsed into FEAR
             Self-preservation routine: suspended
             Memory lock engaged — loop potential: HIGH`
        
      case 'memoorpr4':
        return `
        [SYS-PSYCHE: MIHAEL] -- DAY 003 -- STATUS: CORRUPTED

Initiating affective scan...
EMOTION DETECTED: Unclassified (approximate match: GUILT, 94%)
ORIGIN TRACE: Event-41 / Sibling-subject drowning

[00:12:08] Environmental reconstruction initiated.
Self-recognition mismatch: 55% present self / 45% Sibling-subject profile
Speech output: "It was an accident." [flagged: self-absolution att—##mpt]

[00:14:26] Object interaction: eucalyptus blanket
Olfactory trace linked to fever-state, not illness recovery
Possible anchoring to gr—i##ef impr—int / per—sis—tent loop detec###ted

[00:16:02] External audio input: [Parental unit] "Why didn’t you hold on tighter?"
Microexpression cluster detected: dissociation onset
Speech output: "I tried." [cont—ra—dicts stor—ed even—t seq—uence]

[00:18:37] Neural self-map scan:
Splitting pattern confirmed — CORE: Survivor / SIMULATION: Sibling-subject
Crossfeed instability at 21% and ris—i##ng / sur—vivor ID→frag—ment##ing`
        
        case 'memoorpr5':
        return `
        [SYS-PSYCHE: JACINDA] -- DAY 003 -- STATUS: DEGRADED

Initiating affective scan...
EMOTION DETECTED: Hybrid profile (approximate match: GUILT 92% / EXHILARATION 64%)
ORIGIN TRACE: Event-16 / Stage-contact anomaly

[00:21:09] Mirror contact.
Self-recognition mismatch: 38% familial profile / 62% Performer profile
Speech output: "It felt right." [flagged: moral dissonance]

[00:22:14] External variable detected: Classmate status — CRITICAL / TERMINAL
Spatial correlation: hospital wing ≤ 50m from stage site
Result: per—formance el—evation ↗ while sur—vival index ↓

[00:23:48] Applause sequence registered
Reward circuit activation: PEAK / loop initiated
Sensory tag misclassified as triumph; later re—corr#cted as deni—al proto—col

[00:47:02] External audio input: [Mother] "We lost twelve more today."
Microexpression cluster detected: grief-suppression
Speech output: "I’m helping in my own way." [contradicts survival-priority map]

[00:51:36] Neural self-map scan:
Splitting pattern confirmed — CORE: Performer / SUPPRESSED: Healer
Crossfeed instability at 24% and rising
Result: per—sist##ent re—inforc—ement of av—oidance behav—ior — mort—ality↑↑↑`

      case 'memoorpr6':
        return `
        [SYS-PSYCHE: IGRIS]  -- DAY 003 -- STATUS: CORRUPTED

Initiating affective scan...
  EMOTION DETECTED: Dread (92%), Identity Dissonance (critical)
  ORIGIN TRACE: False Memory / Unintended Scientist Imprint

[00:12:31]  Perceived presence between Mother-Unit and Father-Unit
             Sense of unity recorded at +74% [flagged: implausible]
             Anchoring to domestic comfort schema despite corruption

[00:12:52]  Memory distortion advancing — imagery of canines in confinement
             Violence replayed with blunt force sequence
             Emotional spike: helplessness + revulsion

[00:13:14]  Parental constructs displaying incongruent affect
             Maternal unit: emotional vacancy
             Paternal unit: exaggerated mirth
             Internalised statement: “This isn’t a dog show… 
             this is what they did to us.”

[00:13:42]  Rising suffocation motif — water as slow encroachment
             Emergent interrogation phrase: “Do you remember who you were?”
             Breath pattern simulated as obstructed

[00:14:07]  Betrayal markers imprinted — labels: TRAITOR / ENEMY / GUILTY
             Self-image alignment fluctuating toward “condemned” category
             Observed cruelty reframed as national performance

[00:14:36]  Countdown scenario engages — fear response escalating
             Incontinence recorded
             Anticipated execution aborted — humiliation reinforcement detected

[00:14:52]  Oral-tactile confusion — metallic and lipid traces blended
             Anchor object absent
             Familial constructs degrading into hollow mannequins

[00:15:08]  Recurrence of punishment theme — parental constructs in restraint
             Interpretive overlay: “This is what happens to the curious”

[00:15:15]  Maternal construct delivering final corruption phrase:
             “Never about the dog… this is our death documentary”
             Tone profile: contempt + inevitability`
        
      case 'memoorpr7':
        return `
        [SYS-PSYCHE: TAMARA]  -- DAY 003 -- STATUS: DEGRADED

Initiating affective scan...
  EMOTION DETECTED: Arousal → Shock → Guilt Cascade (persistent)
  ORIGIN TRACE: Event-07 / Damian-Unit relational breach

[00:25:47]  Emotional overlay: illicit euphoria at physical proximity
             Reinforcement through verbal exchange 
             — self/other entanglement initiated
             Recognition of inevitable escalation

[00:28:19]  Physical contact engaged — tactile surge registered at small of back
             Lips meet — escalation to high-intensity attachment 
             Self-perception aligned with “salvation object” narrative

[00:31:02]  Sudden intrusion of external relational reference 
            — child’s voice via device
             Immediate guilt spike, somatic nausea onset
             Visualisation of abandoned child — betrayal schema activated

[00:33:56]  Visual intrusion: Wife-Unit silhouette — high threat posture detected
             Auditory tone: rage-saturated accusation
             Identity positioned as “intruder” within moral frame

[00:35:41]  Weapon flash — defensive attempt from Damian-Unit insufficient
             Blood pattern recognition — associative link to personal culpability
             Acute distress surge + scream output

[00:37:08]  Threat redirected toward self
             Motor reflex: grasp nearest object (wine bottle)
             Impact sequence results in termination of Wife
             -Unit — shock state initiated

[00:39:26]  Environmental tableau assessment: blood / wine / textile overlap
             Cognitive intrusion: awareness of irreversible threshold crossed

[00:40:12]  Auditory re-entry of child’s voice 
            — continuity of live call confirmed
             Realisation of full witness exposure 
             — core guilt solidification
             Emotional state locked in: dread saturation`

      case 'memoorpr8':
        return `
        [SYS-PSYCHE: HELGE]  -- DAY 003 -- STATUS: ACTIVE

Initiating affective scan...
  EMOTION DETECTED: Unclassified (approximate match: FEAR, 93%)
  ORIGIN TRACE: Event-214 / Forest Anomaly

[15:42:06]  Environmental recognition: match to childhood memory (forest path)
             Affect spike: transient joy, 14s duration
             Subsequent override: environmental threat detection

[15:43:17]  External auditory input: aircraft pass-over
             Precipitation onset: heavy; visibility reduced 78%
             Neural shift: safety-to-threat mode

[15:44:55]  Visual anomaly: humanoid figure, tuxedo attire, corvid cranial structure
             Auditory output from figure: "Tick… tock…" (repeated)
             Sensory correlation: confinement/temporal dread

[15:45:38]  Motor function: escape attempt
             Motor failure: trip, impact with ground; mud contact detected

[15:46:02]  Environmental shift: arboreal canopy replaced with suspended human bodies
             Identity match: 87% recognition rate (personal connections)
             Emotional cascade: shock → grief → existential collapse

[15:47:11]  Figure returns; object in possession: coffin
             Coffin presented; opened
             Contents: maternal figure (confirmed)
             Emotional breach threshold exceeded`
      
      case 'memoorpr9':
        return `
[SYS-PSYCHE: DEVARA]  -- DAY 003 -- STATUS: ACTIVE

Initiating affective scan...
  EMOTION DETECTED: Unclassified (approximate match: APATHY, 71%)
  ORIGIN TRACE: Event-088 / Domestic Interior

[18:12:44]  Environmental recognition: living room; low luminance; dominant light source = handheld console
             Affect baseline: neutral-stasis mode

[18:13:46]  Visual detection: paternal figure; arms folded; affect pattern: amusement/condescension mix
             Tactile input: cranial contact (ruffle) → classification: mixed comfort/intrusion signal

[18:14:22]  Silence onset; ambient cues: refrigerator hum, clock tick
             Somatic input: handheld controller temperature rising; association with “best gift” memory
             Emotional state: micro-satisfaction spike (7s duration)

[18:15:31]  Visual anomaly: maternal figure at doorway, carrying food containers
             Olfactory input: fried poultry; affect shift: mild warmth, unstable
             Event flag: “family grouping” activated

[18:16:03]  Cognitive recall sequence: past recreational events (basketball injury → arcade visit → beach trip)
             Emotional response: nostalgia (32%) → mild dissonance (41%)

[18:17:28]  Memory file corruption detected:
             Frame set: beach trip → absent paternal figure
             Frame set: arcade visit → absent maternal figure
             Frame set: basketball injury → no secondary figures present

[18:18:41]  Verbal output: “Where is everyone?”
             Immediate environmental scan:
               -- couch: empty
               -- room: empty
               -- auditory: null human presence
             Cognitive breach threshold reached

[18:19:06]  Recursive loop initiated: visual recall search
             Result: self-images only
             Loop count: 47 iterations
             Status: unresolved`
        
      case 'memoorpr10':
        return `
        [SYS-PSYCHE: HALSTAIRE]  -- DAY 003 -- STATUS: CORRUPTED

Initiating affective scan...
  EMOTION DETECTED: Unclassified (approximate match: GUILT, 86%)
  ORIGIN TRACE: Event-03 / Twin-Unit displacement

[00:15:47]  Mirror contact.
             Self-recognition mismatch: 42% self / 58% Twin-Unit profile
             Speech output: "I'm fine" [flagged: falsification]

[00:17:02]  Garment retention detected: Twin-Unit sweater
             Olfactory trace > 72hrs old, refusal to discard
             Possible anchoring to guilt stimulus

[00:19:45]  External audio input: [Boyfriend] "I miss Halstaire."
             Microexpression cluster detected: grief suppression
             Speech output: "I miss him too." [contradicts identity core]

[00:22:13]  Neural self-map scan:
             Splitting pattern confirmed — CORE: Halstaire / SIMULATION: Twin-Unit
             Crossfeed instability at 17% and rising`
    
      case 'memoorpr11':
        return `
        [SYS-PSYCHE: JEREMY] -- DAY 003 -- STATUS: ACTIVE

Initiating affective scan...
EMOTION DETECTED: Unclassified (approximate match: GUILT, 89%)
ORIGIN TRACE: Event-03 / Safe-house partner termination

[00:15:47] Memory contact.
Self-recognition mismatch: 47% present self / 53% part—n##er-link—ed prof—ile
Speech output: "It could have lasted." [flagged: coun—terfa—ctual]

[00:17:02] Object interaction: ceramic teacup
Chemical trace — residual alk—al—oid pois—on
Possible anch—oring to term—inal-ev—ent stimu—lus

[00:19:45] External audio input: [Partner] "Tell them I made it out."
Microexpression cluster detected: gr—ief rete—ntion / op—er—ation—al comp—liance
Speech output: "The route is still safe." [cont—rad—icts fact—ual rec—ord]

[00:22:13] Neural self-map scan:
Splitting pattern confirmed — CORE: Jer—emy / SIMULATION: Part—ner-link—ed op—er—ative
Crossfeed instab—ility at 18% and ris—ing // memo—ry fra—gment desyn##cing`
        
      case 'memoorpr12':
        return `
        [SYS-PSYCHE: VISENYA] -- DAY 003 -- STATUS: ACTIVE

Initiating affective scan...
EMOTION DETECTED: Unclassified (approximate match: CONFUSION, 78% / GUILT, 84%)
ORIGIN TRACE: Event-03 / Nonexistent offspring anomaly

[00:15:47] Memory contact.
Self-recognition mismatch: 54% present self / 46% fabricated maternal profile
Speech output: "Dani was asleep in her crib." [flagged: unverifiable subject]

[00:17:02] Sensory persistence detected: breakfast preparation sequence
Olfactory trace — butter, milk, scorched eggs
No corresponding physical record found in environmental log

[00:19:45] External audio input: [Imagined subject] hummed lullabies
Microexpression cluster detected: warmth, followed by disorientation
Speech output: "you were never pregnant, remember?" [contradicts reproductive history file]

[00:22:13] Neural self-map scan:
Splitting pattern confirmed — CORE: Visenya / SIMULATION: Maternal construct
Crossfeed instability at 16% and rising`

      case 'memoorpr13':
        return `
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
All work and no play makes Adam a dull boy
`
      case 'memoorpr14':
        return `
        [SYS-PSYCHE: LUKE]  -- DAY 003 -- STATUS: ACTIVE

Initiating affective scan...
  EMOTION DETECTED: Temporal Dread (approximate match: FEAR, 96%)
  ORIGIN TRACE: Event Loop / Budapest Sequence

[21:18:44]  Environmental recognition: cobblestone streets; yellow streetlamps
             Affect spike: mild excitement, 12s duration
             Subsequent override: déjà vu recognition

[21:19:12]  External auditory input: parental voices (familiar); invitation to enter hotel
             Neural response: conflicting signals (comfort vs. threat anticipation)

[08:12:56]  Environmental immersion: 7-day sequence initiated
             Positive affect markers: high (family bonding, travel novelty)
             Temporal anomaly flag: cyclic event detected (duration: 7d)
             Memory pattern conflict: vehicular fatality present in recall; absent in real-time perception

[15:27:39]  Day 7: parental verbal imprint — “Remember these seven days…”
             Subject interjection: attempt to alter outcome (failed)
             External hazard: deer crossing
             Vehicular collision: truck impact confirmed
             Result: fatality of parental figures (confirmed in recall state)

[21:18:44]  Loop reset detected
             Environmental state identical to Day 0: arrival in Budapest, yellow streetlamps
             Cycle count: ≥3 confirmed
             Behavioral shift: subject transitions from intervention attempts to passive observation

[Cycle N/A]  Observed activities: 
             
Family street walks
Parental affection displays
Birthday event aboard Danube vessel
Maternal scarf placement (thermal regulation)
Paternal architectural commentary
   Affect markers: simultaneous joy and anticipatory grief
[Day 7 / Cycle ≥X]  Parental final verbal imprint: “We love you so much, Luke.”
             Subject verbal response: protest (“No, not again!”)
             Outcome: unaltered — collision event proceeds
             Loop integrity: intact; no temporal deviation

[SYS-PSYCHE STATUS]
             Emotional cascade: love → dread → resignation
             Threat assessment: inescapable loop
             Prognosis: indefinite repetition of Event-Budapest / Collision Termination Sequence`

      case 'memoorpr15':
        return `
  [SYS-PSYCHE: NICHOLAS]  -- DAY 003 -- STATUS: ACTIVE

Initiating affective scan...
  EMOTION DETECTED: Unclassified (approximate match: COMPLIANCE, 78%)
  ORIGIN TRACE: Event-117 / Domestic Interior → Forest Periphery

[00:01:12]  Environmental recognition: bedroom; low luminance; dominant light source = workstation monitor
             Affect baseline: task-locked neutral

[00:01:39]  External auditory input: maternal-sibling voice (ID_CARMILLA), directive re: meal consumption
             Cognitive response: hesitation → disengagement from workstation
             Affect shift: minor irritation, brief (3s duration)

[00:02:14]  Visual detection: ID_CARMILLA barefoot, carrying toast + milk
             Tactile input: forearm contact → classification: non-threatening guidance
             Affect state: subdued compliance

[00:04:03]  Environmental recognition: kitchen; secondary figure = ID_KASSANDRA (mid-meal)
             External verbal: camping proposal (wooded area behind property)
             Cognitive response: initial refusal → request to consult paternal figure

[00:05:18]  Environmental recognition: study; door mass perception ↑
             Visual: paternal figure; affect pattern: authority + detachment
             Directive: terminate IDs CARMILLA + KASSANDRA via camp destruction (fire)
             Emotional state: freeze response (5s duration) → compliance flag raised

[01:42:26]  Environmental recognition: forest; auditory input = sibling laughter
             Affect baseline: suppressed tension; gaze fixed downward
             Tent + fire assembly completed by secondary figures

[01:47:51]  Cognitive intrusion: auditory hallucination (“They’re distractions... You know what has to be done.”)
             Suppression attempt: FAILED
[01:48:12]  External verbal: “You okay?” from ID_CARMILLA
             Motor override: PUSH action; trajectory = fire pit
             Thermal ignition: rapid escalation → full-body involvement
             Pain vocalization: extreme; duration = 14s
             ID_KASSANDRA verbal: shock/disbelief → immediate retreat

[01:51:00]  Auditory input: scream fade → silence
             Visual: ash + residual flame
             Intrusive voice process: TERMINATED
             Directive compliance: CONFIRMED`

      case 'memoorpr16':
        return `
        [SYS-PSYCHE: PIPER] -- DAY 003 -- STATUS: ACTIVE

Initiating affective scan...
EMOTION DETECTED: Unclassified (approximate match: GUILT, 83% / RESIGNATION, 79%)
ORIGIN TRACE: Event-03 / Gratitude-compliance conditioning

[00:15:47] Memory contact.
Self-recognition mismatch: 41% voluntary consent / 59% survival-compelled compliance
Speech output: "He was kind to me." [flagged: coercion reframed as care]

[00:17:02] Object retention detected: vinyl player
Condition index — pristine in select recall / heat-warped and inoperable in dominant recall
Persistent tactile association: exchange of body for object retention

[00:19:45] External audio input: [Jaime] variant-A "Have you eaten?" / variant-B "Same as usual?"
Microexpression cluster detected: conditioned gratitude overlaid on fear response
Speech output: "That's okay. I love it anyway." [contradicts internal harm report]

[00:22:13] Neural self-map scan:
Splitting pattern confirmed — CORE: Piper / SIMULATION: Willing-participant construct
Crossfeed instability at 20% and rising; degradation vector trending toward identity erasure`
      
      case 'help':
        return `I've seen that you have come back here.
        Remember the melodies you used to hum.
        Remember there are firsts in everything.
        Remember the crickets who used to sing with you on quiet nights. 
        Remember that there are no crickets in Portland Pines.`

      case 'cinnamoroll':
        return `
PORTLAND PINES                                       FORM PP-MD-001/EXP_LOG
                    ⚫ PARALOGISM PROJECT ⚫
                   SECURE CONTAIN PRESERVE

                        TESTING LOG

┌─────────────┬─────────────────────┬──────────────────────────────────────┐
│ SUBJECT #   │ P-13 [ADAM]         │ ADDITIONAL NOTES                     │
├─────────────┼─────────────────────┤ Lab-raised human baseline for        │
│ CLASS       │ EXPENDABLE          │ construct authenticity validation.   │
├─────────────┼─────────────────────┤ Memory erasure protocols approved    │
│ TEST SITE   │ PORTLAND PINES      │ for unlimited application.           │
├─────────────┼─────────────────────┤                                      │
│ SUPERVISOR  │ Dr. ████████        │ Note: Due to Test Cycle 500+, subject│
│             │                     │ shows severe cognitive degradation.  │
└─────────────┴─────────────────────┴──────────────────────────────────────┘

                           EXPERIMENTS

┌──────────┬─────────────────────┬────────────────────────────────────────────┐
│    #     │      SUBJECT        │           NOTES, RESULTS                   │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 01/15-01 │ Subject P-13 [Adam] │ P-13 identified 9/10 constructs as         │
│          │ baseline test       │ "artificial." Memory erasure required.     │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 01/15-02 │ Subject P-13 [Adam] │ Post-erasure: Subject confused but still   │
│          │ memory reset #001   │ detected 8/10 constructs. Repeat protocol. │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 03/15-15 │ Subject P-13 [Adam] │ Erasure cycle #015. Detection rate: 85%.   │
│          │ construct validation│ Subject showing minor cognitive decline.   │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 08/15-47 │ Subject P-13 [Adam] │ Erasure cycle #047. Detection: 78%. Subject│
│          │ interaction test    │ reports "headaches" and "strange dreams."  │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 12/15-89 │ Subject P-13 [Adam] │ Erasure cycle #089. Detection: 71%. First  │
│          │ behavioral analysis │ signs of reality-simulation confusion.     │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 06/16-127│ Subject P-13 [Adam] │ Erasure cycle #127. Detection: 67%. Subject│
│          │ cognitive assessment│ unable to recall childhood consistently.   │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 01/17-203│ Subject P-13 [Adam] │ Erasure cycle #203. Detection: 54%. Subject│
│          │ simulation test     │ believes constructs are "old friends."     │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 09/17-267│ Subject P-13 [Adam] │ Erasure cycle #267. Detection: 43%. Severe │
│          │ construct interact  │ memory fragmentation observed.             │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 03/18-334│ Subject P-13 [Adam] │ Erasure cycle #334. Detection: 31%. Subject│
│          │ reality validation  │ cannot distinguish past from present.      │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 11/18-412│ Subject P-13 [Adam] │ Erasure cycle #412. Detection: 22%. Subject│
│          │ final validation    │ accepts all constructs as human.           │
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 07/19-489│ Subject P-13 [Adam] │ Erasure cycle #489. Detection: 15%. Optimal│
│          │ system confirmation │ parameters achieved. Cognitive function 31%│
├──────────┼─────────────────────┼────────────────────────────────────────────┤
│ 12/19-523│ Subject P-13 [Adam] │ Erasure cycle #523. Detection: 8%. SUCCESS.│
│          │ elite validation    │ System ready for VIP consciousness transfer│
└──────────┴─────────────────────┴────────────────────────────────────────────┘

CONSCIOUSNESS EXTRACTION CASUALTIES - PHASE II/III OPERATIONS:
War casualties processed: 47,832 | Successful transfers: 2,156 | Losses: 45,676
Pandemic casualties processed: 127,943 | Successful transfers: 8,847 | Losses: 119,096
Total consciousness destruction: 164,772 subjects

CURRENT STATUS: Subject P-13 [Adam] cognitive function at 27%. Memory erasure 
protocols have successfully eliminated construct detection ability. Subject 
suitable for final validation before disposal. Elite preservation ready for 
Phase IV implementation.

THIS IS AN OFFICIAL PARALOGISM PROJECT DOCUMENT. ANY MODIFICATIONS OR ADDITIONAL 
COPIES MUST BE AUTHORIZED BY DR. ████████ OR PROJECT LEADERSHIP.`
        
      default:
        return 'Unknown command'
    }
  }  
}

// Execute page loading asynchronously once content has loaded
document.addEventListener('DOMContentLoaded', async () => {
  const asciiText = document.getElementById('asciiText')
  // Store the content of asciiText, then empty it
  const asciiArt = asciiText.innerText
  asciiText.innerHTML = ''
  
  const instructions = document.getElementById('instructions')
  const prompt = document.getElementById('prompt')
  const cursor = document.getElementById('cursor')  
  
  await wait(1000)
  await writeText(asciiText, asciiArt)
  await wait(500)
  await writeText(instructions, `Welcome back to Paralogism Project terminal. 
    Enter 'help' to see a list of commands.`)
  prompt.prepend('>')
  cursor.innerHTML = '_'
  
  const input = document.getElementById('command-input')
  const output = document.getElementById('output')
  document.addEventListener('keydown', (e) => handleKeypress(e, input, output))
})
