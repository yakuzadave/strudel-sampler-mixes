# Strudel Mini-Notation Guide

Mini-notation is Strudel's powerful pattern syntax that allows you to create complex rhythmic and melodic patterns with concise notation.

## Basic Symbols

### Core Elements
- **Space or comma**: Separates events in sequence
- **`~`**: Rest/silence
- **`*`**: Multiplication (repeat)
- **`/`**: Division (slower)
- **`[]`**: Grouping
- **`()`**: Polyrhythm/euclidean rhythms

### Examples
```javascript
// Basic sequence
"bd sd hh cp"

// With rests
"bd ~ sd ~"

// With repetition
"bd*2 sd"

// With grouping
"[bd cp] sd"
```

## Grouping and Subdivisions

### Square Brackets `[]`
Groups multiple events into a single step:

```javascript
// Two sounds in one beat
"[bd sd] ~ [hh cp] ~"

// Nested groupings
"bd [sd [hh*2]]"

// Multiple samples per group
"[bd sd cp] ~ [hh*3] ~"
```

### Multiplication `*`
Repeats elements within the current timespan:

```javascript
// Repeat 4 times
"bd*4"

// Different repetitions per element
"bd*2 sd*3 hh*4"

// Grouped repetition
"[bd sd]*2"
```

### Division `/`
Makes elements slower (longer duration):

```javascript
// Half speed
"bd/2 sd"

// Quarter speed
"cp/4"

// Mixed timing
"bd sd/2 hh*4"
```

## Euclidean Rhythms

### Basic Syntax
`x(hits, steps)` - Distribute hits evenly across steps

```javascript
// 3 hits in 8 steps
s("bd").struct("x(3,8)")

// Multiple euclidean patterns
"bd(3,8) sd(2,8) hh(5,8)"
```

### Advanced Euclidean
`x(hits, steps, rotation)` - Add rotation offset

```javascript
// 3 hits in 8 steps, rotated by 2
"x(3,8,2)"

// Complex polyrhythms
"bd(3,8) sd(2,5,1) hh(4,7,3)"
```

## Polyrhythms and Polymeter

### Different Pattern Lengths
```javascript
// 4-step pattern against 3-step pattern
stack(
  s("bd sd bd sd"),
  s("hh ~ cp")
)
```

### Polymeter with Brackets
```javascript
// Different subdivisions simultaneously
"[bd*4, sd*3, hh*5]"
```

## Pattern Selection and Randomization

### Choice Patterns `|`
Randomly select between alternatives:

```javascript
// Random choice between two patterns
"bd|sd hh|cp"

// Weighted choices
"bd|sd|cp"
```

### Pattern Lists with `[]`
Cycle through patterns:

```javascript
// Alternate between patterns
"[bd sd, hh*4, cp ~ ~]"
```

## Conditional and Mathematical Operations

### Mathematical Expressions
```javascript
// Using variables
"bd*{2+1} sd/{4-2}"

// Pattern-based math
"hh*[2 3 4]"
```

### Conditional Patterns

The probability syntax uses the `?` operator to specify the chance that an event will be triggered. For example, `bd?0.8` means the "bd" event will play with an 80% probability (i.e., 0.8 out of 1), while `sd?0.3` means the "sd" event will play with a 30% probability. Probability values must be between 0 (never triggers) and 1 (always triggers). This allows you to introduce randomness and variation into your patterns.
```javascript
// If-then-else style
"bd?0.8 sd?0.3"  // Probability-based triggering
```

## Advanced Features

### Angle Brackets `<>`
Choose one element per cycle:

```javascript
// Cycle through one at a time
"<bd sd hh cp>"

// With repetition
"<bd*2 sd hh*3>"
```

### Curly Braces `{}`
JavaScript expressions:

```javascript
// Random values
"bd*{Math.floor(Math.random()*4)+1}"

// Pattern variables
"{const x = 'bd sd'; return x}"
```

### Pattern Arithmetic
```javascript
// Addition
"bd + sd"  // Layer sounds

// Multiplication with patterns
"bd*[2 3 4 1]"

// Complex combinations
"[bd sd]*<2 3> + hh*4"
```

## Practical Examples

### Basic Drum Kit
```javascript
s("bd ~ sd ~ bd ~ sd ~")
```

### Breakbeat
```javascript
s("[bd*2 ~] sd [~ bd] [sd ~ bd]")
```

### Hi-hat Variations
```javascript
s("hh*<1 2 4 8>").gain("<1 0.7 0.5>")
```

### Polyrhythmic Percussion
```javascript
s("bd(3,8) sd(2,5) hh(5,8,2)")
```

### Complex Layering
```javascript
stack(
  s("bd*<1 2>"),
  s("~ sd ~ sd").every(4, x => x.fast(2)),
  s("hh*[4 8 6]").gain("[1 0.7]*4"),
  s("<cp ~ ~ ~>").delay(0.2)
)
```

### Melodic Patterns
```javascript
n("[0 2 4]*<1 2> [7 9]").scale("major").s("piano")
```

## Best Practices

### 1. Start Simple
```javascript
// Begin with basic patterns
"bd ~ sd ~"

// Add complexity gradually
"bd ~ [sd cp] ~"
```

### 2. Use Meaningful Groupings
```javascript
// Good: logical beat groupings
"[bd cp] ~ [sd hh] ~"

// Avoid: random groupings without musical purpose
```

### 3. Balance Complexity
```javascript
// Good: some complexity with space
"bd*2 ~ sd(<2 3>,8) ~"

// Avoid: overwhelming complexity
"[bd*<2 3> sd(3,8,<1 2>)]*{Math.random()} ~"
```

### 4. Combine Techniques
```javascript
// Layer different techniques
stack(
  s("bd*<1 2>"),                    // Choice patterns
  s("~ sd ~ sd").every(4, x => x.degradeBy(0.3)), // Transformations
  s("hh(5,8)").gain("[1 0.7]*4")   // Euclidean + gain patterns
)
```

## Common Patterns

### House Music
```javascript
"bd*4"                      // Four-on-the-floor
"~ sd ~ sd"                 // Backbeat snare
"hh*8".gain("[1 0.6]*4")   // Consistent hi-hats
```

### Techno
```javascript
"bd*<1 2 4>"               // Variable kick density
"~ ~ sd ~"                 // Minimal snare
"[hh*8, perc*3]"          // Layered percussion
```

### Breakbeat/Jungle
```javascript
"[bd*2 ~] sd [~ bd] [sd(2,3) bd]"  // Amen break inspired
"hh*<4 8 6>".fast(2)               // Rapid hi-hats
```

## Debugging Mini-Notation

### Common Issues
1. **Unmatched brackets**: Check `[]`, `()`, `{}`
2. **Invalid syntax**: Ensure proper spacing
3. **Timing conflicts**: Watch for overly complex polyrhythms

### Testing Patterns
```javascript
// Test pattern isolation
s("bd").log()  // Log pattern events

// Simplified versions
s("bd ~ sd ~")  // Start simple, add complexity
```

## Next Steps

- Practice with [basic examples](../examples/basic-samples.js)
- Explore [advanced patterns](../examples/advanced-samples.js)
- Study the [patterns guide](patterns.md) for musical context
- Experiment with combining mini-notation and pattern transformations