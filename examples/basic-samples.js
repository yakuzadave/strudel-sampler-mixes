// Basic Strudel REPL Sample Boilerplate
// Copy and paste these examples into the Strudel REPL to get started

// 1. Simple drum pattern
s("bd hh sd hh").bank("RolandTR808");

// 2. Basic kick and snare pattern
s("bd*2 ~ sd ~").fast(2);

// 3. Hi-hat pattern with accents
s("~ hh ~ hh*2").gain("[1 0.7 1 0.5]*2");

// 4. Combining samples with effects
s("bd sd").room(0.5).delay(0.3);

// 5. Layered percussion
stack(
  s("bd ~ bd ~").gain(0.8),
  s("~ sd ~ sd").gain(0.7),
  s("hh*8").gain(0.4)
);

// 6. Sample manipulation with pitch
s("bd sd cp hh").note("C3 D3 E3 F3");

// 7. Using different sample banks
s("kick snare").bank("AkaiLinn");

// 8. Polyrhythmic patterns
s("bd*3 sd*2 hh*5").fast(1);

// 9. Pattern with rests and variations
s("bd ~ [sd cp] ~").sometimes(x => x.fast(2));

// 10. Creating breaks and fills
s("bd sd hh cp");
  .every(4, x => x.fast(2));
  .every(8, x => x.rev());