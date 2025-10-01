# Strudel Patterns Guide

This guide covers the fundamental concepts of creating patterns in Strudel REPL for sample-based music production.

## Basic Pattern Structure

Strudel uses a pattern-based approach where you define sequences of samples and events:

```javascript
s("bd hh sd hh")
```

This creates a basic pattern with:
- `bd` = bass drum (kick)
- `hh` = hi-hat
- `sd` = snare drum

## Pattern Syntax

### Basic Sequences
```javascript
// Simple 4-step pattern
s("bd sd bd sd")

// Using rests with ~
s("bd ~ sd ~")

// Faster subdivisions with *
s("bd*2 sd bd*2 sd")
```

### Grouping and Nesting
```javascript
// Group multiple samples per step
s("[bd cp] sd [hh*2] sd")

// Nested groupings
s("bd [sd [hh*2 cp]]")
```

### Pattern Repetition
```javascript
// Repeat entire pattern
s("bd sd").fast(2)

// Repeat specific elements
s("bd*4 sd*2")
```

## Time Manipulation

### Speed Control
```javascript
// Make pattern twice as fast
s("bd sd hh cp").fast(2)

// Make pattern half speed
s("bd sd hh cp").slow(2)
```

### Pattern Length
```javascript
// 8-step pattern
s("bd ~ sd ~ bd cp sd ~")

// 3-step pattern (polyrhythmic)
s("bd sd cp")
```

## Sample Banks and Selection

### Using Different Sample Banks
```javascript
s("bd sd").bank("RolandTR808")
s("kick snare").bank("AkaiLinn")
s("bd sd").bank("CasioMT40")
```

### Sample Variations
```javascript
// Use numbered variations
s("bd:0 bd:1 bd:2 bd:3")

// Random selection
s("bd:[0 1 2]")
```

## Effects and Processing

### Volume and Gain
```javascript
s("bd sd").gain(0.8)
s("hh*8").gain("[1 0.5]*4")
```

### Spatial Effects
```javascript
s("bd sd").pan("0.5 -0.5")
s("hh*4").room(0.3)
```

### Filters
```javascript
s("lead").lpf(1000)
s("bass").hpf(80)
s("perc").bpf(2000)
```

### Time-based Effects
```javascript
s("vocal").delay(0.25)
s("drums").rev()
s("lead").echo(4, 0.2, 0.5)
```

## Pattern Transformations

### Conditional Changes
```javascript
// Apply transformation sometimes
s("bd sd").sometimes(x => x.fast(2))

// Apply every nth cycle
s("bd sd").every(4, x => x.rev())

// Apply on specific cycles
s("bd sd").whenmod(8, 0, x => x.degradeBy(0.5))
```

### Euclidean Rhythms
```javascript
// 3 hits distributed over 8 steps
s("bd").struct("x(3,8)")

// Multiple euclidean patterns
s("bd(3,8) sd(2,8) hh(5,8)")
```

## Layering Patterns

### Stack Multiple Patterns
```javascript
stack(
  s("bd ~ bd ~"),
  s("~ sd ~ sd"),
  s("hh*8").gain(0.4)
)
```

### Pattern Combinations
```javascript
// Combine different sounds
s("bd sd").add(s("hh*8").gain(0.3))

// Layer with different timing
s("kick*4").layer(s("snare").every(2))
```

## Common Pattern Types

### Four-on-the-Floor
```javascript
s("bd*4")
```

### Breakbeat
```javascript
s("bd*2 [~ sd] bd [sd*2 ~]")
```

### Trap-style Hi-hats
```javascript
s("hh*8").gain("[1 0.7 0.8 0.6]*2")
```

### House Pattern
```javascript
stack(
  s("bd*4"),
  s("~ sd ~ sd"),
  s("hh*8").gain(0.4).pan("0.2 -0.2")
)
```

## Tips for Pattern Creation

1. **Start Simple**: Begin with basic kick and snare patterns
2. **Add Layers Gradually**: Build complexity by stacking simple patterns
3. **Use Rests**: The `~` symbol creates space and groove
4. **Experiment with Timing**: Use `.fast()`, `.slow()`, and subdivisions
5. **Apply Effects Subtly**: Start with low values and adjust to taste
6. **Create Variations**: Use conditional transformations to avoid repetition

## Next Steps

- Explore [Mini-Notation](mini-notation.md) for advanced pattern syntax
- Check out the [examples](../examples/) folder for complete compositions
- Experiment with different sample banks and sounds