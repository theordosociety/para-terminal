// Add a specified delay in milliseconds
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

// Write text to a target element with a specified delay per character
function writeText(target, content, delay = 5) {
  return new Promise(resolve => {
    const chars = content.split('');
    chars.forEach((ch, i) => {
      setTimeout(() => {
        target.innerHTML += ch;
        window.scrollTo(0, document.body.scrollHeight);
        if (i === chars.length - 1) resolve();
      }, delay * i);
    });
  });
}

// Handle keystrokes, routing them through your terminal logic
function handleKeypress(e, inputEl, outputEl) {
  // Prevent browser actions for Enter/Backspace
  e.preventDefault();

  // Helper to skip if an actual form input is focused
  const noInputHasFocus = () => {
    const tag = document.activeElement.tagName;
    return !['INPUT', 'TEXTAREA', 'BUTTON'].includes(tag);
  };

  if (!noInputHasFocus()) return;

  const key = e.key;
  // ENTER: execute the command
  if (key === 'Enter') {
    const cmd = inputEl.innerText.trim();
    inputEl.innerHTML = '';
    outputEl.innerHTML += '<br><strong>' + cmd + '</strong><br>';
    writeText(outputEl, execute(cmd));
    return;
  }

  // BACKSPACE: delete last char
  if (key === 'Backspace') {
    inputEl.innerHTML = inputEl.innerHTML.slice(0, -1);
    return;
  }

  // everything else: append the key
  inputEl.insertAdjacentText('beforeend', key);

  // Your command interpreter
  function execute(command) {
    switch (command.toLowerCase()) {
      case '':
        return '\n';
      case 'clear':
        document.getElementById('asciiText').style.display = 'block';
        outputEl.innerHTML = '';
        return '';
      case 'test':
        return 'Test successful!';
      case 'bangsat':
        return 'Anak kontol!';
      case 'mepi':
        return 'ganteng';
      case 'jokowi':
        return 'adili';
      case 'orpr01':
        return `Perkara nonton SORE itu 2 jam dari hidup kalian,
ayo berusaha dikit jangan mager.
Jangan tipikal “yahhh lusa keknya masih ada”
jangan “nunggu striming aja lah”
Film kek SORE itu mutlak ditonton di layar Bioskop,
tapi di sebegitu banyak nya film,
dalam 1-2 hari bisa saja tiba tiba ilang dari layar deket loe.
Gue jamin nggak nyesel.`;
      case 'help':
        return `Enter a command here and something will be output.
Accepted commands:
  help      - this help text
  clear     - clear the screen
  test      - display a test message
  bangsat   - just try it`;
      default:
        return 'Unknown command';
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
  // Grab your elements
  const asciiTextEl = document.getElementById('asciiText');
  const instructionsEl = document.getElementById('instructions');
  const promptEl = document.getElementById('prompt');
  const cursorEl = document.getElementById('cursor');
  const inputEl = document.getElementById('command-input');
  const outputEl = document.getElementById('output');

  // Hide the ASCII art, store it, then type it out
  const asciiArt = asciiTextEl.innerText;
  asciiTextEl.innerHTML = '';

  await wait(1000);
  await writeText(asciiTextEl, asciiArt);
  await wait(500);
  await writeText(instructionsEl,
    `Welcome to Paralogism Project terminal.
Enter 'help' to see a list of commands.`
  );

  // Show the prompt and cursor
  promptEl.prepend('>');
  cursorEl.innerHTML = '_';

  // —— Option 2: hidden input for mobile keyboard —— 
  const hiddenInput = document.getElementById('terminal-input');
  // focus on load
  hiddenInput.focus();
  // refocus on any touch
  hiddenInput.addEventListener('touchstart', () => hiddenInput.focus());
  // route its keydowns
  hiddenInput.addEventListener('keydown', e => {
    handleKeypress(e, inputEl, outputEl);
  });

  // keep desktop support as fallback
  document.addEventListener('keydown', e => {
    if (document.activeElement !== hiddenInput) {
      handleKeypress(e, inputEl, outputEl);
    }
  });
});
