// Genre-Specific Sample Patterns
// Explore different musical styles with Strudel

// HOUSE MUSIC
// Classic four-on-the-floor with house-style percussion
stack(
  s("bd*4").gain(0.9),                           // Kick on every beat
  s("~ ~ sd ~").gain(0.8),                       // Snare on 3
  s("hh*8").gain("[1 0.6]*4").pan("0.2 -0.2"),  // Consistent hi-hats
  s("oh ~ ~ ~").gain(0.5)                        // Open hat accent
).bank("RolandTR909")

// TECHNO
// Driving, minimal techno pattern
stack(
  s("bd*<1 2 4>").gain(0.95),                   // Variable kick density
  s("~ ~ sd ~").room(0.3),                      // Spacious snare
  s("hh*16").gain("[1 0.3]*8").lpf(4000),      // Filtered hi-hats
  s("perc*3").gain(0.4).speed(1.5)             // Polyrhythmic percussion
).fast(1.2)

// TRAP
// Modern trap-style hi-hat patterns with sub bass
stack(
  s("bd ~ ~ ~").gain(1.0).lpf(80),              // Sub bass kick
  s("~ ~ sd ~").room(0.4),                      // Snare with reverb
  s("hh*8").gain("[1 0.7 0.8 0.5]*2").fast(2), // Rapid hi-hat variations
  s("oh ~ ~ oh").gain(0.6)                      // Open hat accents
).bank("RolandTR808")

// DRUM & BASS
// Fast breakbeat with sub bass
stack(
  s("[bd*2 ~] sd [~ bd] [sd ~ bd]").fast(2),    // Amen break pattern
  s("bass").note("c1 ~ f1 g1").lpf(200),       // Sub bass line
  s("hh*16").gain("[1 0.4]*8").hpf(8000),      // Crispy hi-hats
  s("crash ~ ~ ~").gain(0.7).every(8)          // Occasional crash
)

// REGGAETON
// Classic reggaeton dembow rhythm
stack(
  s("bd ~ ~ bd").gain(0.9),                     // Kick pattern
  s("~ sd ~ sd").gain(0.8),                     // Snare on 2 and 4
  s("hh ~ hh*2 ~").gain(0.6),                  // Syncopated hi-hats
  s("cowbell ~ ~ cowbell").gain(0.4)           // Reggaeton cowbell
).bank("Latin")

// AFROBEAT
// Polyrhythmic African-inspired pattern
stack(
  s("bd ~ bd*2 ~").gain(0.8),                  // Afrobeat kick
  s("~ sd ~ sd").gain(0.7),                    // Backbeat snare
  s("hh*[3 5 4]").gain("[1 0.6 0.8]*3"),      // Complex hi-hat polyrhythm
  s("conga*3 ~ bongo*2 ~").gain(0.5),         // Conga and bongo
  s("shaker*8").gain(0.3)                     // Constant shaker
)

// JUNGLE/RAGGA
// Chopped up breakbeat with ragga flavor
stack(
  s("amen").slice(8).rev().sometimes(x => x.fast(2)), // Chopped amen (the "Amen break" is a classic drum sample from The Winstons, widely used in jungle and breakbeat music)
  s("bass").note("c1 f1 g1 a#1").lpf(300).room(0.2),  // Wobbling bass
  s("vocal*<1 2>").speed("<1 0.5>").delay(0.3),       // Ragga vocals
  s("cymbal ~ ~ ~").gain(0.6).every(4)                // Cymbal accents
).fast(1.5)

// DUB TECHNO
// Spacious, echoing techno with dub influence
stack(
  s("bd*<1 2>").room(0.5).delay(0.375),        // Delayed kick
  s("~ ~ sd ~").room(0.8).delay(0.25),         // Heavily reverbed snare
  s("hh*4").gain("[1 0.3]*2").delay(0.125),    // Subtle delayed hi-hats
  s("chord").note("cm7 fm7").room(0.6).slow(4) // Lush chord stabs
).lpf(2000).gain(0.8)

// BREAKCORE
// Chaotic, fast breakbeat with glitchy elements
stack(
  s("amen").slice(16).fast("<2 4 8>").sometimes(x => x.rev()),
  s("kick*<1 3 7>").gain("<0.8 1>").crush("<16 8 4>"),
  s("snare*<2 5>").speed("<1 2 0.5>").room(0.3),
  s("noise*16").gain(0.2).hpf(8000).sometimes(x => x.degradeBy(0.8))
).fast(2).sometimes(x => x.rev())

// Tips for genre exploration:
// 1. Listen to reference tracks in each genre
// 2. Adjust tempo with .fast() and .slow()
// 3. Experiment with different sample banks
// 4. Use effects to create the right atmosphere
// 5. Layer patterns to build complexity