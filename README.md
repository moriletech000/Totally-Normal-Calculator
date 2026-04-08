# Totally Normal Calculator™

---

> **Me:** hey can you make me a calculator
>
> **Also me:** sure, should it work correctly?
>
> **Me:** ...define "correctly"

---

That's basically how this project was born. It's a calculator. It looks like a calculator. It has buttons like a calculator. But it will gaslight you, roast you, and occasionally just refuse to do math. You know, for fun.

---

## What is this?

A web-based calculator built with plain HTML, CSS, and JavaScript. No frameworks. No libraries. No npm install. Just three files and a dream (and a deep desire to confuse people).

It looks clean and professional at first glance — glassmorphism card, smooth animations, a trust meter, even an "AI Mode" toggle. Then you press `=` and it tells you `2 + 2 = 5`.

---

## Features

### The normal stuff
- Addition, subtraction, multiplication, division
- Decimal support
- Backspace and clear
- Responsive layout — works on mobile and desktop
- No scrolling, fits the screen perfectly

### The not-so-normal stuff

**Wrong answers (on purpose)**
The calculator has a 30% chance of giving you a wrong answer. It calculates the correct result first, then decides whether to give it to you. Spoiler: often it doesn't.

**AI Mode™**
Toggle it on and the chaos chance jumps to 60%. It says "More Accurate™" in the label. It is not more accurate.

**The equals button is a liar**
- 20% chance it just clears everything and says *"You thought 💀"*
- 15% chance it throws a fake error like *"Error: Math is temporarily unavailable"*
- The rest of the time it loads dramatically and maybe gives you the right answer

**Fake loading bar**
Every calculation triggers a loading bar. It takes between 0.5 and 2.5 seconds for no reason. Sometimes it resets at 99% and says *"Loading failed. Retrying..."*

**Buttons that move**
15% chance a button wiggles when you hover it. 10% chance buttons randomly swap positions when you click anything. The calculator will then say *"Buttons shuffled for your convenience 😊"*

**Trust Level meter**
Starts at 100%. Decreases every time you press a button. Once it hits red, you get warnings like *"Trust Level Critical: Calculator may lie at any moment ⚠️"*. It was already lying before that.

**Roast messages**
After calculations, there's a 25% chance you get a toast notification roasting you. Things like:
- *"Bro really used a calculator for this? 💀"*
- *"Your math teacher is crying somewhere"*
- *"Calculating your IQ... Error: Number too small"*

---

## Easter Eggs

| Trigger | What happens |
|---|---|
| Type `69` or `420` | *"Nice. 😏"* |
| Try `2 + 2` | 50% chance the answer is `5` with a philosophy lesson |
| Try `9 + 10` | 40% chance you get `21` (the vine) |
| Konami Code ↑↑↓↓←→←→ | Unlocks "Accurate Mode" — it barely works |

---

## Files

```
index.html   — structure
style.css    — all the styling (glassmorphism card, color palette, animations)
script.js    — calculator logic + all the chaos
```

No build step. No dependencies. Just open `index.html` in a browser.

---

## Color Palette

| Role | Color |
|---|---|
| Accent / buttons | `#1a8aa0` (teal) |
| Background | `#e0dbd5` (light gray) |
| Text / surfaces | `#f5f3f0` (off-white) |
| Toast / display | `#5c2518` (dark brown) |

---

## How to run it

```bash
# Option 1: just open it
open index.html

# Option 2: serve it locally
npx serve .
# or
python -m http.server
```

That's it. No setup. No config. No `node_modules` folder haunting your disk.

---

## Why does this exist?

Because sometimes you want to build something that looks polished but is secretly unhinged. Also it's a great way to test if your friends actually verify calculator results or just trust whatever's on screen.

(They trust it. Every time.)

---

> *"The best calculator I've ever used."*
> — Nobody, ever No Ragebaits :)
