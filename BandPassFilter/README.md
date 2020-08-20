## Spec

digital audio workstation plugins
musicians
apply filters to tracks - changes how it sounds

new filter
band pass filter

Array - of frequencies/notes
Lower limit - frequencies must be above or equal to this
Upper limit - frequencies must be below or equal to this

Always need to pass in a sound wave
Dont need to pass in limits
40 to be default lower limit
1000 to default upper limit

Do have to be integers as an input - error must be thrown if not
Should be positive numbers - error must be thrown if not

## Input/Output

Input | Output
[40], 40, 1000 |    [40]
[10], 50, 1000 | [50]
[1001], 40, 1000 | [1000]

[40, 45], 40, 1000 | [40, 45]


[40, 50] | [40, 50]
[10, 40, 45] | [40, 40, 45]
[40, 45, 1001] | [40, 45, 1000]
[10, 40, 45, 1001] | [40, 40, 45, 1000]

[10,45,100,1001],40,1000 --> [40,45,100,1000]

## Model plan

BandPassFilter()
