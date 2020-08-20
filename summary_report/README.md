## Project description

- summary report
- students grades
- school sends comma separated string of grades

Input                             |       output

"Green"                           |   "Green: 1"
"Green, Green"                    |   "Green: 2"
"Green, Green, Amber"             |   "Green: 2\nAmber: 1"
"Green, Green, Amber, Red"        |   "Green: 2\nAmber: 1\nRed: 1"
"Green, Green, Amber, Red, Green" |   "Green: 3\nAmber: 1\nRed: 1"


Edge cases
- Count up 'strange' variations and add up to a category called uncounted
- And any other words that might get in there
- Has to be Green, Amber or Red
