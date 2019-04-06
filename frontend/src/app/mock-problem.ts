import { ProblemObj, ProblemInfo } from './problem';


export const MOCKPROBLEMS: ProblemObj[] = [
    {
        info: { id: 1, name: 'Two Sum' },
        description: `<p>Given an array of integers, return <b>indices</b> of the two numbers such that they add up to a specific target.</p>

<p>You may assume that each input would have <b><i>exactly</i></b> one solution, and you may not use the same element twice.</p>

<p><b>Example:</b></p>

blablabla
`},
    {
        info: { id: 2, name: 'Add Two Numbers' },
        description: `<pre><code class="python language-python">class ListNode(object):
   def __init__(self, data):
       self.data = data
       self.next = None

node_1 = ListNode(2)
node_2 = ListNode(5)
node_1.next = node_2
</code></pre>

<h2 id="hi">HI</h2>`
    },
    {
        info: { id: 3, name: 'Longest Substring Without Repeating Characters' },
        description: `<h4 id="whycanpythonliststoredifferentelementtypes">Why can Python list store different element types?</h4>

<ul>
<li>Because Python lists are composed of discontiguous blocks of memory.</li>

<li>Because Python lists actually store the address of these elements(pointers).</li>

<li>There is a tradeoff such that its retrieval/update time is no longer O(1).</li>

<li>All elements in Python takes up same blocks of memory, regardless of its type.</li>
</ul>

<p>In this section, we are going to walk through some excercises that will help you get familiar with the Python list APIs.</p>

<p>Let's implement a book keeping app with <code>add_new_record</code>, <code>update</code>, and <code>get_window_total methods</code>.<br>
The app will be initialized with <code>window_size</code>, which indicates the number of most recent days we will be keeping track of. <br>
For the <code>add_new_record</code> method, you'll be given an amount spent to add to your book keeping app.<br>
For the <code>update</code> method, you'll be given the day and new amount to update. In this excercise, we only update previous days within the window size. If the day to be updated, falls out this range, then simply return False.<br>
For the <code>get_window_total</code> method, you need to return the total amount spend in the current window.<br></p>

<p><strong>Example 1</strong>:<br>
myApp = App(7)<br>
Input: <code>add_new_record</code>(10), Output: Null<br>
Input: <code>add_new_record</code>(20), Output: Null<br>
Input: <code>add_new_record</code>(30), Output: Null<br>
Input: <code>get_window_total</code>(), Output: 60<br>
Input: <code>updat</code>e(0, 0), Output: True<br>
Input: <code>update</code>(7, 0), Output: False<br>
Input: <code>get_window_total</code>(), Output: 50<br></p>

<p><strong>Note</strong>:<br>
You may assume that the window size will be valid, positive integers.<br>
Please remember to reset your class variables declared in class <code>App</code>, as static/class variables are persisted across multiple test cases. <br></p>

<pre><code class="python language-python">class App:
    def __init__(self, window_size):
        """
        Initialize your data structure here.
        :type window_size: int
        """

    def add_new_record(self, amount):
        """
        Record the amount spent 
        :type amount: int
        :rtype: void
        """

    def update(self, day_k, amount):
        """
        Update the amount spent of day_k
        :type day_k: int
        :type amount: int
        :rtype: boolean
        """

    def get_window_total(self):
        """
        Return the total amount spent of the current window
        :rtype: int
        """
</code></pre>

<h3 id="solution">Solution</h3>

<pre><code class="python language-python">class App:
    def __init__(self, window_size):
        self.daily_cost = [] # list to store costs
        self.day = 0 # variable to keep track of current day
        self.window_size = window_size # specified window size
        self.accum = 0 # variable to keep track of total cost within window

    def add_new_record(self, amount):
        self.daily_cost.append(amount)
        self.accum += amount
        # pop first day if cost number exceeds window size
        if len(self.daily_cost) &gt; self.window_size:
            self.accum -= self.daily_cost.pop(0)
        self.day += 1

    def update(self, day_k, amount):
        # return False if day to be updated is outside the window
        if day_k &gt; self.day or self.day - day_k &gt;= window_size:
            return False
        # update corresponding index with the given amount
        diff = self.day - day_k
        self.daily_cost[-1-diff] = amount
        return True

    def get_window_total(self):
        return self.accum
</code></pre>

<h3 id="questionstothinkabout">Questions to think about.</h3>

<p>What is the time complexity of each function?</p>

<ol>
<li><strong><code>add_new_record</code></strong>: O(k). Once <code>daily_cost</code> reach the window size, we will have to pop the first element whenever adding a new record. The pop(0) operation is O(k), where k is the window size.</li>

<li><strong><code>update</code></strong>: O(1). Retrieving and updating list elements are both O(1).</li>

<li><strong><code>get_window_total</code></strong>: O(1). </li>
</ol>

<h4 id="whatisthebottleneckofthisprogram">What is the bottleneck of this program?</h4>

<p>From the time complexity we can see that the most expensive function is <code>add_new_record</code>. And it is bounded by the pop operation when exceeding the <code>window_size</code>.</p>

<h4 id="howcouldweimprovethetimecomplexityoftheadd_new_recordfunction">How could we improve the time complexity of the <code>add_new_record</code> function?</h4>

<p>Instead of popping the first element, we could use a pointer to keep track of the starting index of the current window. We could simply increment the start pointer to indicate the current window.</p>

<pre><code class="python language-python">class App:
    def __init__(self, window_size):
        self.daily_cost = []
        self.day = 0
        self.window_size = window_size
        self.accum = 0
        self.start = 0 # stores the starting index of the current window

    def add_new_record(self, amount):
        self.daily_cost.append(amount)
        self.accum += amount
        if len(self.daily_cost) &gt; self.window_size:
            self.accum -= self.daily_cost[self.start]
            start += 1 # increment start index to indicate window shifts
        self.day += 1

    def update(self, day_k, amount):
        if day_k &gt; self.day or self.day - day_k &gt;= window_size:
            return False
        diff = self.day - day_k
        self.daily_cost[-1-diff] = amount
        return True

    def get_window_total(self):
        return self.accum
</code></pre>

<h4 id="whatwouldbethetimecomplexityfortheadd_new_recordfunction">What would be the time complexity for the <code>add_new_record</code> function?</h4>

<p>The time complexity would be O(1) as we get rid of the pop operation. However, we are trading space complexity with time complexity. As we no longer pop elements from the list, the space complexity of this program would be O(n), where n is the number of transactions that took place.</p>

<h4 id="whichmethodisbetter">Which method is better?</h4>

<p>There is no definite answer of which implementation is strictly better than the other. However, based on the usage and resource constraints of your program, you might prefer one over the other. For example, if you only have limited memory, then you would probably compromise higher time complexity. On the other hand, say that the new records are added very frequently, then you may compromise higher space complexity to achieve constant time complexity.</p>`
    },
    {
        info: { id: 4, name: 'Median of Two Sorted Arrays' },
        description: `LALALAL`
    },
    {
        info: { id: 5, name: 'Longest Palindromic Substring' },
        description: `LALALAL`
    },
    {
        info: { id: 6, name: 'ZigZag Conversion' },
        description: `LALALAL`
    },
    {
        info: { id: 7, name: 'Reverse Integer' },
        description: `LALALAL`
    },
    {
        info: { id: 8, name: 'String to Integer (atoi)' },
        description: `LALALAL`
    },
    {
        info: { id: 9, name: 'Palindrome Number' },
        description: `LALALAL`
    },
    {
        info: { id: 10, name: 'Regular Expression Matching' },
        description: `LALALAL`
    },
    {
        info: { id: 11, name: 'Container With Most Water' },
        description: `LALALAL`
    },
    {
        info: { id: 12, name: 'Integer to Roman' },
        description: `LALALAL`
    },
    {
        info: { id: 13, name: 'Roman to Integer' },
        description: `LALALAL`
    },
];