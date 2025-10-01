# Strudel Sampler Mixes

A comprehensive collection of boilerplate code, examples, and documentation for working with samples in Strudel REPL. Perfect for both beginners learning live coding and experienced producers exploring new techniques.

## 🚀 Quick Start

1. **Visit [Strudel REPL](https://strudel.cc)**
2. **Copy any pattern from our [examples](examples/)**
3. **Paste into the editor and press `Ctrl+Enter` (or `Cmd+Enter` on Mac)**
4. **Start creating!**

Try this simple pattern to get started:
```javascript
s("bd hh sd hh").bank("RolandTR808")
```

## 📁 Repository Structure

```
├── docs/                    # Documentation and guides
│   ├── getting-started.md   # Complete beginner tutorial
│   ├── patterns.md          # Pattern creation guide
│   └── mini-notation.md     # Mini-notation syntax reference
├── examples/                # Ready-to-use pattern examples
│   ├── getting-started.js   # Step-by-step tutorial patterns
│   ├── basic-samples.js     # Essential drum patterns
│   ├── advanced-samples.js  # Complex techniques
│   └── genres.js           # Genre-specific patterns
└── samples/                # Custom sample collections (coming soon)
```

## 📚 Documentation

### For Beginners
- **[Getting Started Guide](docs/getting-started.md)** - Your first steps with Strudel
- **[Basic Examples](examples/getting-started.js)** - Step-by-step tutorial patterns
- **[Pattern Fundamentals](docs/patterns.md)** - Core concepts and techniques

### For Advanced Users
- **[Mini-Notation Reference](docs/mini-notation.md)** - Complete syntax guide
- **[Advanced Examples](examples/advanced-samples.js)** - Complex pattern techniques
- **[Genre Exploration](examples/genres.js)** - House, techno, trap, and more

## 🎵 Example Patterns

### Simple Drum Beat
```javascript
stack(
  s("bd ~ bd ~"),
  s("~ sd ~ sd"),
  s("hh*8").gain(0.4)
)
```

### House Music Pattern
```javascript
stack(
  s("bd*4").gain(0.9),
  s("~ ~ sd ~").gain(0.8),
  s("hh*8").gain("[1 0.6]*4")
).bank("RolandTR909")
```

### Breakbeat
```javascript
s("[bd*2 ~] sd [~ bd] [sd ~ bd]").fast(2)
```

## 🎛️ Key Features

- **Sample Banks**: Access to various drum machines (TR-808, TR-909, Linn Drum, etc.)
- **Pattern Notation**: Powerful mini-notation for complex rhythms
- **Effects Processing**: Built-in reverb, delay, filters, and more
- **Live Coding**: Real-time pattern modification
- **Polyrhythms**: Multiple simultaneous rhythm patterns
- **Genre Templates**: Pre-built patterns for different musical styles

## 🛠️ Essential Techniques

### Basic Sample Triggering
```javascript
s("bd sd")              // Basic sequence
s("bd ~ sd ~")          // With rests
s("bd*4")               // Repetition
s("[bd cp] sd")         // Grouping
```

### Effects and Processing
```javascript
s("bd sd").room(0.3)    // Reverb
s("bd sd").delay(0.25)  // Delay
s("bd sd").lpf(1000)    // Low-pass filter
s("bd sd").gain(0.8)    // Volume
```

### Pattern Transformations
```javascript
s("bd sd").fast(2)                    // Double speed
s("bd sd").every(4, x => x.rev())     // Reverse every 4th cycle
s("bd sd").sometimes(x => x.fast(2))  // Random variations
```

### Layering and Composition
```javascript
stack(
  s("bd*4"),
  s("~ sd ~ sd"),
  s("hh*8").gain(0.4)
)
```

## 🎯 Learning Path

1. **Start Here**: [Getting Started Guide](docs/getting-started.md)
2. **Practice**: Work through [getting-started.js](examples/getting-started.js)
3. **Learn Patterns**: Study [patterns.md](docs/patterns.md)
4. **Master Syntax**: Deep dive into [mini-notation.md](docs/mini-notation.md)
5. **Explore Styles**: Try patterns from [genres.js](examples/genres.js)
6. **Go Advanced**: Challenge yourself with [advanced-samples.js](examples/advanced-samples.js)

## 🤝 Contributing

We welcome contributions! Whether you have:
- New pattern examples
- Documentation improvements
- Bug fixes
- Sample collections
- Tutorial ideas

Please feel free to open an issue or submit a pull request.

## 📖 Resources

- [Official Strudel Website](https://strudel.cc)
- [Strudel Documentation](https://strudel.cc/learn/)
- [TidalCycles (inspiration)](https://tidalcycles.org/)
- [Community Discord](https://discord.gg/strudel)

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🎵 Happy Live Coding!

Whether you're a beginner or an expert, we hope this repository helps you create amazing music with Strudel. Start simple, experiment boldly, and most importantly - have fun!

---

*New to live coding? Start with our [Getting Started Guide](docs/getting-started.md) and try the patterns in [examples/getting-started.js](examples/getting-started.js)*
