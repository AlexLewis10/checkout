Requirements
In a normal supermarket, things are identified using Stock Keeping Units, or SKUs. In our store, we'll use individual letters of the alphabet (A, B, C, and so on). Our goods are priced individually. In addition, some items are multi-priced: buy n of them, and they'll cost you y pounds.

For example, item A might cost 50 pounds individually, but this week we have a special offer:

buy three As and they'll cost you 130.
Our price table and offers:

+------+-------+----------------+
| Item | Price | Special offers |
+------+-------+----------------+
| A    | 50    | 3A for 130     |
| B    | 30    | 2B for 45      |
| C    | 20    |                |
| D    | 15    |                |
+------+-------+----------------+
Notes:

For any illegal input (non capitals) simply return -1
In order to complete the round you need to implement the following method: checkout(String) -> Integer

Where:

param[0] = eg. 'AAB', a String containing the SKUs of all the products in the basket
@return = eg. 120, an Integer representing the total checkout value of the items
Acceptance Criteria
shop.checkout('aBc') # => -1
shop.checkout('-B8x') # => -1
shop.checkout(18) # => -1
shop.checkout('AA') # => 100
shop.checkout('ABCD') # => 115
shop.checkout('AAA') # => 130
shop.checkout('AAAAAA') # => 260



| INPUT | OUTPUT |
|A      |   50   |
|B      |   30   |
|C      |   20   |
|D      |   15   |
|AA     |   100  |
|AAA    |   130  | If I write this correctly I won't need to do the test for 6As
|AAAA   |   180  |
|AAAAAA |   260  | 
|BB     |   45   | If I write this correctly I won't need to do the test for 4Bs
|BBB    |   75   |
|ABCD   |   115  |
|aBc    |   -1   |
|-B8x   |   -1   | This test was passed by the previous input criteria
|18     |   -1   | Note this case is inputted as a number not an integer

Split String to an Array
Count number of each in the array.
Add totalAs += 1
Then add the number of each to the total
