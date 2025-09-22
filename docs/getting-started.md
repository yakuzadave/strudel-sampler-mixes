# Getting Started with Strudel Samples

Welcome to Strudel! This guide will help you get started with sample-based music creation in the Strudel REPL.

## What is Strudel?

Strudel is a live coding environment for making music in the browser. It's inspired by TidalCycles and uses JavaScript with a special pattern notation to create rhythmic and melodic sequences.

## Quick Start

1. **Open Strudel REPL**: Visit [strudel.cc](https://strudel.cc)
2. **Copy a Pattern**: Take any example from our [examples folder](../examples/)
3. **Paste and Play**: Press `Ctrl+Enter` (or `Cmd+Enter` on Mac) to hear it
4. **Experiment**: Modify the pattern and play it again

## Your First Pattern

Try this simple drum pattern:

```javascript
s("bd hh sd hh")
```

This creates:
- `bd` = bass drum (kick)
- `hh` = hi-hat  
- `sd` = snare drum

## Understanding the Basics

### Sample Function `s()`
The `s()` function plays samples based on name:
```javascript
s("bd")        // Single bass drum
s("bd sd")     // Bass drum, then snare
s("bd ~ sd ~") // Bass drum, rest, snare, rest
```

### Pattern Timing
- Each element represents one step
- Use `~` for rests/silence
- Patterns automatically loop

### Adding Effects
Chain effects after your pattern:
```javascript
s("bd sd").room(0.3)      // Add reverb
s("bd sd").gain(0.8)      // Adjust volume
s("bd sd").fast(2)        // Double speed
```

## Essential Concepts

### 1. Layering with `stack()`
Combine multiple patterns:
```javascript
stack(
  s("bd ~ bd ~"),     // Kick drum
  s("~ sd ~ sd"),     // Snare drum
  s("hh*8").gain(0.4) // Hi-hats (quiet)
)
```

### 2. Repetition with `*`
Repeat elements within the same time:
```javascript
s("bd*4")        // Four bass drums per cycle
s("hh*8")        // Eight hi-hats per cycle
s("[bd sd]*2")   // Repeat the group twice
```

### 3. Grouping with `[]`
Put multiple sounds in one step:
```javascript
s("[bd cp] sd")  // Bass drum + clap together, then snare
```

### 4. Sample Banks
Choose different drum kits:
```javascript
s("bd sd").bank("RolandTR808")
s("bd sd").bank("RolandTR909") 
s("bd sd").bank("AkaiLinn")
```

### 5. Pattern Variations
Add randomness and change:
```javascript
s("bd sd").sometimes(x => x.fast(2))    // Sometimes double speed
s("bd sd").every(4, x => x.rev())       // Reverse every 4th cycle
```

## Step-by-Step Tutorial

### Step 1: Basic Beat
```javascript
s("bd ~ sd ~")
```

### Step 2: Add Hi-hats
```javascript
stack(
  s("bd ~ sd ~"),
  s("hh*4")
)
```

### Step 3: Make It Groove
```javascript
stack(
  s("bd ~ sd ~"),
  s("hh*4").gain("[1 0.6]*2")  // Accent pattern
)
```

### Step 4: Add Effects
```javascript
stack(
  s("bd ~ sd ~").room(0.2),
  s("hh*4").gain("[1 0.6]*2").lpf(4000)
)
```

### Step 5: Create Variations
```javascript
stack(
  s("bd ~ sd ~").sometimes(x => x.fast(2)),
  s("hh*4").gain("[1 0.6]*2").lpf(4000)
)
```

## Common Sample Names

### Drums
- `bd` / `kick` - Bass drum
- `sd` / `snare` - Snare drum
- `hh` / `hihat` - Hi-hat (closed)
- `oh` / `openhat` - Open hi-hat
- `cp` / `clap` - Hand clap
- `crash` - Crash cymbal
- `ride` - Ride cymbal

### Percussion
- `conga` - Conga drum
- `bongo` - Bongo drum
- `cowbell` - Cowbell
- `shaker` - Shaker
- `tambourine` - Tambourine

### Bass & Melodic
- `bass` - Bass sounds
- `lead` - Lead synth
- `pad` - Pad sounds
- `chord` - Chord stabs

## Troubleshooting

### No Sound?
1. Check your speakers/headphones
2. Make sure Strudel has audio permission
3. Try a simple pattern: `s("bd")`

### Pattern Not Playing?
1. Make sure you pressed `Ctrl+Enter` (or `Cmd+Enter`)
2. Check for syntax errors (unmatched brackets, quotes)
3. Try stopping with `hush()` and starting again

### Sounds Wrong?
1. Different sample banks have different sounds
2. Try removing effects to isolate the issue
3. Check if `.fast()` or `.slow()` is changing timing

## Next Steps

1. **Try the Examples**: Start with [getting-started.js](../examples/getting-started.js)
2. **Learn Patterns**: Read the [patterns guide](patterns.md)
3. **Master Mini-Notation**: Study [mini-notation.md](mini-notation.md)
4. **Explore Genres**: Check out [genres.js](../examples/genres.js)
5. **Go Advanced**: Graduate to [advanced-samples.js](../examples/advanced-samples.js)

## Resources

- [Official Strudel Documentation](https://strudel.cc/learn/)
- [Community Discord](https://discord.gg/strudel)
- [Pattern Examples](../examples/)
- [GitHub Repository](https://github.com/tidalcycles/strudel)

## Tips for Success

1. **Start Simple**: Begin with basic patterns and add complexity gradually
2. **Listen Carefully**: Pay attention to how different elements interact
3. **Experiment**: Try changing one thing at a time to understand effects
4. **Save Your Work**: Copy patterns you like to your own files
5. **Join the Community**: Share your patterns and learn from others

Happy coding! 🎵