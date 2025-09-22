// Advanced Strudel Sample Patterns
// More complex examples for experienced users

// 1. Breakbeat pattern with variations
s("bd*2 [~ sd] bd [sd*2 ~]")
  .sometimes(x => x.fast(2))
  .every(8, x => x.degradeBy(0.3));

// 2. Euclidean rhythms
s("bd(3,8) sd(2,8) hh(5,8)").fast(2);

// 3. Sample chopping and time stretching
s("breaks165").slice(8).slow(2);

// 4. Granular synthesis effects
s("vocal").grain(0.1).speed(0.5);

// 5. Dynamic pattern switching
s("bd sd")
  .struct("x(3,8)")
  .every(4, x => x.struct("x(5,8)"));

// 6. Complex polyrhythmic layering
stack(
  s("bd*2").every(3, x => x.late(0.1)),
  s("~ sd ~ sd").gain(0.8),
  s("hh*8").gain("[0.8 0.4]*4").pan("0.2 -0.2"),
  s("perc*3").gain(0.6).speed(2).every(7, x => x.rev())
);

// 7. Sample morphing and effects chains
s("lead").crush(8).lpf(sine.range(200, 2000)).room(0.4);

// 8. Conditional pattern evolution
s("bd sd hh cp")
  .whenmod(8, 0, x => x.fast(2))
  .whenmod(8, 4, x => x.rev())
  .whenmod(16, 0, x => x.degradeBy(0.5));

// 9. Advanced sample manipulation
s("amen").chop(16).rev().fast(0.5).gain(sine.range(0.5, 1));

// 10. Multi-sample composition
stack(
  s("kick*4").gain(0.9),
  s("~ snare ~ snare").delay(0.2).gain(0.7),
  s("hats*8").lpf(4000).gain(0.5),
  s("bass").note("C1 F1 G1 C1").room(0.3)
).slow(2);