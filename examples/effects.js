// Effects and Audio Processing Examples
// Learn how to shape your sound with Strudel's built-in effects

// === FILTER EFFECTS ===

// Low-pass filter (removes high frequencies)
s("bd sd hh cp").lpf(1000)           // Muffled sound
s("lead").lpf(sine.range(200, 2000)) // Sweeping filter

// High-pass filter (removes low frequencies)
s("bd sd hh cp").hpf(200)            // Thinner sound
s("hh*8").hpf(4000)                  // Crispy hi-hats

// Band-pass filter (only middle frequencies)
s("noise*4").bpf(1000)               // Focused frequency band

// === SPATIAL EFFECTS ===

// Reverb (room size)
s("bd sd").room(0.3)                 // Small room
s("sd").room(0.8)                    // Large hall
s("vocal").room(sine.range(0, 0.5))  // Moving reverb

// Panning (stereo positioning)
s("bd sd").pan("0.5 -0.5")           // Left-right alternating
s("hh*8").pan(sine.range(-1, 1))     // Moving pan

// Delay/Echo
s("bd sd").delay(0.25)               // Quarter note delay
s("vocal").echo(4, 0.25, 0.4)       // Multiple echoes

// === TIME-BASED EFFECTS ===

// Speed/Pitch manipulation
s("vocal").speed(0.5)                // Slower and lower
s("vocal").speed(2)                  // Faster and higher
s("vocal").speed("0.5 1 2")          // Varying speeds

// Reverse
s("cymbal").rev()                    // Backwards sample
s("bd sd").every(4, x => x.rev())    // Reverse every 4th cycle

// === DISTORTION AND CHARACTER ===

// Bit crushing (digital distortion)
s("lead").crush(8)                   // 8-bit style
s("bass").crush(4)                   // Heavy distortion

// Saturation/Drive
s("bass").drive(0.5)                 // Gentle saturation
s("lead").drive(0.8)                 // Heavy drive

// Ring modulation
s("lead").ring(100)                  // Metallic sound

// === DYNAMIC EFFECTS ===

// Gain/Volume control
s("bd*4").gain(0.8)                  // Quiet
s("hh*8").gain("[1 0.5]*4")          // Accent pattern
s("snare").gain(sine.range(0.3, 1))  // Tremolo effect

// Compression
s("drums").compress(0.7)             // Punchy drums

// === COMPLEX EFFECT CHAINS ===

// Dub techno style
s("bd ~ sd ~")
  .room(0.5)
  .delay(0.375)
  .lpf(1500)
  .gain(0.8)

// Lo-fi hip-hop processing
s("drums")
  .crush(12)
  .lpf(2000)
  .room(0.3)
  .gain(0.7)

// Ambient soundscape
s("pad")
  .room(0.8)
  .delay(0.5)
  .lpf(sine.range(500, 2000))
  .gain(sine.range(0.3, 0.8))

// Glitch effects
s("lead")
  .sometimes(x => x.rev())
  .sometimes(x => x.fast(4))
  .crush(rand.range(4, 16))
  .delay(choose([0.125, 0.25, 0.5]))

// === MODULATION ===

// Using sine waves for modulation
s("bass").lpf(sine.range(200, 1000))         // Filter sweep
s("lead").pan(sine.range(-1, 1))             // Auto-pan
s("pad").gain(sine.range(0.3, 0.8))          // Tremolo

// Using patterns for modulation
s("hh*8").gain("[1 0.7 0.5 0.3]*2")         // Gain pattern
s("lead").speed("[1 0.5 2]*3")               // Speed pattern

// Random modulation
s("perc*4").gain(rand.range(0.3, 0.8))       // Random volume
s("vocal").speed(choose([0.5, 1, 1.5, 2]))   // Random speed

// === PRACTICAL MIXING TIPS ===

// Drum kit with proper mixing
stack(
  s("bd*4").gain(0.9).lpf(80),               // Sub bass kick
  s("~ sd ~ sd").room(0.3).gain(0.8),        // Snare with space
  s("hh*8").hpf(8000).gain(0.4).pan("0.2"), // Bright hi-hats
  s("oh ~ ~ ~").room(0.2).gain(0.6)          // Occasional open hat
)

// Bass and lead separation
stack(
  s("bass").note("c2 f2").lpf(400).gain(0.9),    // Low bass
  s("lead").note("c4 e4 g4").hpf(300).room(0.2)  // High lead
)

// Creating space in the mix
stack(
  s("bd*4").pan(0),                          // Center kick
  s("sd ~ sd ~").pan(0.2),                   // Slightly right snare
  s("hh*8").pan(-0.3).gain(0.4),            // Left hi-hats
  s("perc*3").pan(0.5).room(0.4)             // Right percussion
)

// === EFFECT AUTOMATION ===

// Time-based changes
s("lead")
  .lpf(1000)
  .every(8, x => x.lpf(2000))               // Open filter every 8

// Pattern-based automation
s("bass")
  .lpf("[400 800 1200 800]*2")              // Filter pattern
  .gain("[0.8 0.9 0.7 0.9]*2")              // Volume pattern

// Conditional effects
s("drums")
  .sometimes(x => x.room(0.5))              // Random reverb
  .every(4, x => x.crush(8))                // Distortion every 4

// === PERFORMANCE TIPS ===

// 1. Start with dry sounds, add effects gradually
// 2. Use .gain() to balance levels between sounds
// 3. Pan different elements to create stereo width
// 4. Use filters to separate frequency ranges
// 5. Apply reverb and delay sparingly for clarity
// 6. Automate effects for movement and interest

// Try these combinations and modify them to create your own sound!