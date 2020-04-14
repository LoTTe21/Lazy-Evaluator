# Lazy-Evaluator

This is the lazy evaluation in meta-circular evaluator project for YujianFU and Chengyu Feng in CS4215 in NUS SOC. 
We are modifying an evaluator on Source Language and enabling it to handling Lazy Evaluation. Our project proposal can be found in project_objectives.pdf.

We modify the evaluator for lazy evaluation with a basic concept "thunk". "thunk" is the environment that hold all expression that are delayed to be evaluated. All expressions in "thunk" will only be evaluated when its actual value is required for some kinds of evaluation. Once a expression in "thunk" is evaluated, its value will be stored in this environment so it needn't to be computed again the next time called. 

We use function 'delay_it' and function 'force_it' to control where we stores expressions into "thunk" and where we extract the actual value of the expression. The evaluator 4-1 supports severals kinds of commands including constant declaration, variable declaration and function definition. We can easily add 'delay_it' to the place where we want to hold the evaluation precession and restart from that place when needed. In Haskell, a popular language for lazy evaluation, all its declaration part and functions arguments part are delayed. 
