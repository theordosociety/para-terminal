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

      case 'test':
        return 'Test successful!'
        
      case 'mepi':
        return 'ganteng'

        case 'list':
        return `NEURAL ARCHIVE SYSTEM v2.1.7
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
        return `NEURAL ARCHIVE SYSTEM v2.1.7
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

      case 'memoorpr2':
        return `[SYS-PSYCHE: EVA]  -- DAY 003 -- STATUS: CRITICAL

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
        
      case 'memoorpr4':
        return `[SYS-PSYCHE: MIHAEL] -- DAY 003 -- STATUS: CORRUPTED

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
        return `[SYS-PSYCHE: JACINDA] -- DAY 003 -- STATUS: DEGRADED

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
        return `[SYS-PSYCHE: IGRIS]  -- DAY 003 -- STATUS: CORRUPTED

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
        return `[SYS-PSYCHE: TAMARA]  -- DAY 003 -- STATUS: DEGRADED

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
        return `[SYS-PSYCHE: HELGE]  -- DAY 214 -- STATUS: ACTIVE

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
        
      case 'memoorpr10':
        return `[SYS-PSYCHE: HALSTAIRE]  -- DAY 003 -- STATUS: CORRUPTED

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
    
      case 'memoorpr12':
        return `the terrible gift of staying alive.`

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

      case 'help':
        return `I've seen that you have come back here.
        Remember the melodies you used to hum.
        Remember there are firsts in everything.
        Remember the crickets who used to sing with you on quiet nights. 
        Remember that there are no crickets in Portland Pines.`

      case 'cinnamoroll':
        return `PORTLAND PINES                       FORM PP-MD-001/EXP_LOG
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
