// Getting Started with Strudel Samples
// Perfect for beginners - try these step by step

// STEP 1: Your first sound
// Copy this into Strudel REPL and press Ctrl+Enter (or Cmd+Enter on Mac)
s("bd")

// STEP 2: Add a snare on beats 2 and 4
s("bd ~ sd ~")

// STEP 3: Add hi-hats
s("bd hh sd hh")

// STEP 4: Make it more interesting with faster hi-hats
stack(
  s("bd ~ sd ~"),
  s("hh*2")
)

// STEP 5: Add some effects
s("bd ~ sd ~").room(0.2)

// STEP 6: Change the sample bank
s("bd ~ sd ~").bank("RolandTR808")

// STEP 7: Add variation with sometimes
s("bd ~ sd ~").sometimes(x => x.fast(2))

// STEP 8: Create a full drum kit pattern
stack(
  s("bd ~ bd ~").gain(0.9),
  s("~ sd ~ sd").gain(0.8),
  s("hh*8").gain(0.4)
)

// STEP 9: Add a bassline
stack(
  s("bd ~ sd ~"),
  n("c2 ~ f2 ~").s("sawtooth").lpf(400)
)

// STEP 10: Make it groove with timing variations
stack(
  s("bd ~ sd ~").early("0 0.01"),
  s("hh*8").gain("[1 0.5]*4").late("0 0.02"),
  n("c2 f2 g2 f2").s("bass").lpf(800)
)

// Congratulations! You've created your first Strudel composition!
// Next: Try examples from basic-samples.js and advanced-samples.js