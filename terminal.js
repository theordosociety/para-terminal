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
│ EVA KIEŚLOWSKA / OR-PR2                                        │
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
│ VISENYA BATHSHEVA AL GHUL / OR-PR12                            │
│ STATUS: ACTIVE                                                  │
│ SEX: F                                                          │
│ MEMORIES: ARCHIVED                                              │
├─────────────────────────────────────────────────────────────────┤
│ ADAM / OR-PR13                                                  │
│ STATUS: ACTIVE                                                  │
│ SEX: M                                                          │
│ MEMORIES: OBSERVED                                              │
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
└─────────────────────────────────────────────────────────────────┘

Use 'memo[CODE]' to access memory archives`

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
    
      case 'orpr01':
        return `Perkara nonton SORE itu 2 jam dari hidup kalian,
        ayo berusaha dikit jangan mager.
        Jangan tipikal  “yahhh lusa keknya masih ada”  
        jamgan “ nunggu striming aja lah”
        Film kek SORE itu mutlak ditontob di layar Bioskop, 
        tapi di sebegitu banyak nya film,
        dalam 1-2 hari bisa saja tiba tiba ilang dari layar deket loe.
        Gue jamin nggak nyesel.`

      case 'help':
        return `I've seen that you have come back here.
        Remember the melodies you used to hum.
        There are firsts in everything.
        Remember the crickets who used to sing with you on quiet nights. 
        Except that there are no crickets in Portland Pines.`

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
  await writeText(instructions, `Welcome to Paralogism Project terminal. 
    Enter 'help' to see a list of commands.`)
  prompt.prepend('>')
  cursor.innerHTML = '_'
  
  const input = document.getElementById('command-input')
  const output = document.getElementById('output')
  document.addEventListener('keydown', (e) => handleKeypress(e, input, output))
})
