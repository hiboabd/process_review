# Task description

Given a number in pounds and pence, work out the most efficient way of breaking it down into notes and coins, e.g. 11.55 becomes ["£10", "£1", "50p", "5p"]

Acceptance Criteria
```
change_generator.convert(7.42)
 => ["£5", "£1", "£1", "20p", "20p", "2p"]
change_generator.convert(40)
 => ["£20", "£20"]
change_generator.convert(16.30)
 => ["£10", "£5", "£1", "20p", "10p"]
change_generator.convert(19.99)
 => ["£10", "£5", "£1", "£1", "1", "£1", "50p", "20p", "20p", "5p", "2p", "2p"]
change_generator.convert(76.81)
 => ["£50", "£20", "£5", "£1", "50p", "20p", "10p", "1p"]
 ```

## Things to consider
* Input has to be number form - edge case 
* Number received should be converted to 00.00 form (does it have to?)
* Class is called change_generator with a function convert 
* £20, £10, £5, £2, £1, 50p, 20p, 10p, 5p, 2p, 1p
* Array returns change in order of highest to lowest

## Example to run through

```
change_generator.convert(7.42)
 => ["£5", "£1", "£1", "20p", "20p", "2p"]
```

* Method 1: Iterate through an array of the forms of change and try and subtract each value from the current value. If it can be subtracted add that to a converted_change array and reduce the current value by that amount. If it cannot be subtracted, do nothing.

## Input / Output 

Input | Output 
---------------
0.01  | ['1p']
0.02  | ['2p']
0.05  | ['5p']
0.10  | ['10p']
0.20  | ['20p']
0.50  | ['50p']
1     | ['£1']
2     | ['£2']
5     | ['£5']
10    | ['£10']
20    | ['£20']
0.03  | ['2p', '1p']
