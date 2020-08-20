# Spell checker

- String, as little as one word or a whole paragraph
- Just words separated by spaces
- No punctuation
- No numbers mixed inside strings


Input                            | Output
---------------------------------|------------------------------------
A                                | A
Ak                               | ~Ak~
ThEse                            | ThEse
A These                          | A These
A These spnelt                   | A These ~spnelt~
These words are spnelt correclty | These words are ~spnelt~ ~correclty~
" "                              | There are no words to check


Removed test case
These                            | These
