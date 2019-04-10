import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-detail-view',
  templateUrl: './course-detail-view.component.html',
  styleUrls: ['./course-detail-view.component.scss'],
  providers: [ApiService],
})
export class CourseDetailViewComponent implements OnInit {

  n = 9
  course_indices = {
    "Lecture Intro": {"": 0},
    "Time Complexity": {"Course": 1},
    "Array Intro": {"Course": 2, "Exercise": 3},
    "Array Python": {"Course": 4, "Exercise": 5},
    "Linked List Intro": {"Course": 6, "Exercise": 7},
    "Linked List Python": {"Course": 8, "Exercise": 9},
  }




  course_content = [
    {"name": 'Lecture Intro',
     "link": "/courses/Lecture Intro/",
     "type": "markdown", 
     "content": 
`
## Course (Intro to ds/algo)

This course focuses on helping people quickly understand concepts of data structure and algorithms. It is designed to be more closely related to topics and concepts that frequently appear in technical interview problems. People with limited knowledge of DS/ALGO but hoping to find software engineer related jobs are strongly recommended to take this course first.

Prerequisite: Understanding basic knowledge of programming (data type, control flow, class)
Good to have: Some experience of programming with Python
Estimated time to finish course and exercises: 15-18 hours
Programming Language: Python
`},
    {"name": "Time Complexity / Course",
     "link": "/courses/Time Complexity/Course",
     "type": "video",
     "content": "https://www.youtube.com/embed/sXcrNIbTcfI?list=PLcgNxTjNJv3qrYfeoPVVCM6jm9JarFUed"},
    {"name": "Array Intro / Course",
     "link": "/courses/Array Intro/Course",
     "type": "video",
     "content": "https://www.youtube.com/embed/6ijMw319u9o?list=PLcgNxTjNJv3qrYfeoPVVCM6jm9JarFUed"},
    {"name": "Array Intro / Exercise",
     "link": "/courses/Array Intro/Exercise", 
     "type": "markdown", 
     "content": 
`
### Multiple Choice Questions:

#### Which best describes an array?
1. Contiguous blocks of memory that stores mixed data type.
2. Contiguous blocks of memory that stores same data type.
3. A hierarchical data structure.
4. Discontinuous blocks of memory which are linked by pointers.

#### What characteristics does the array data structure have that makes accessing element O(1). Check all that apply.
1. Array is a contiguous blocks of memory.
2. The size of array is not changeable.
3. Elements in array have the same data type.
4. There is a lookup table for the memory location of each element.

#### What is the time complexity of appending an element to an array?
1. O(1) because there is a pointer to the end of array and we could just insert the element there. 
2. O(1) because a random memory block is allocated for that element and we just need to update the pointer to its location.
3. O(n) because we have to go through the entire array to find its ending position and insert the element there.
4. O(n) because new memory needs to be allocated and we have to copy all the elements over.

#### Check the situations where we might prefer array over other data structures.
1. We need to access and update elements frequently.
2. We need to insert/remove elements frequently.
3. We need to access an element by its value frequently.




\`\`\`python
# The swap function takes an array and two indeces, and swap the two values.
def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]
    return
\`\`\`

#### What is the time and space complexity of the function?
Time<br>
1. O(1)
2. O(n)
3. O(nlogn)
4. O(n^2)

Space<br>
1. O(1)
2. O(n)
3. O(nlogn)
4. O(n^2)


\`\`\`python
import sys
def max_subarray_sum(arr):
    result = - sys.maxsize
    for i in range(0, len(arr)):
        accum = 0
        for j in range(i, len(arr)):
            accum += arr[j]
            result = max(result, accum)
    return result

\`\`\`

#### What is the time and space complexity of the function?
Time<br>
1. O(1)
2. O(n)
3. O(nlogn)
4. O(n^2)

Space<br>
1. O(1)
2. O(n)
3. O(nlogn)
4. O(n^2)
`},
    {"name": "Array Python / Course",
    "link": "/courses/Array Python/Course",
    "type": "video",
    "content": "https://www.youtube.com/embed/p4kJ8fXSX04?list=PLcgNxTjNJv3qrYfeoPVVCM6jm9JarFUed"},
    {"name": "Array Python / Exercise",
    "link": "/courses/Array Python/Exercise",
    "type": "markdown",
    "content": 
`
#### Why can Python list store different element types?
- Because Python lists are composed of discontiguous blocks of memory.
- Because Python lists actually store the address of these elements(pointers).
- There is a tradeoff such that its retrieval/update time is no longer O(1).
- All elements in Python takes up same blocks of memory, regardless of its type.


In this section, we are going to walk through some excercises that will help you get familiar with the Python list APIs.

Let's implement a book keeping app that helps you manage your daily spending. The app will only keep track of your spending for the most recent k days, where k is passed in as \`window_size\`. The class will have 3 methods, \`add_new_record\`, \`update\`, and \`get_window_total\`<br>
For the \`add_new_record\` method, you'll be given an amount spent to add to your book keeping app.<br>
For the \`update\` method, you'll be given the day and new amount to update. In this excercise, we only update previous days within the window size. If the day to be updated, falls out this range, then simply return False.<br>
For the \`get_window_total\` method, you need to return the total amount spend in the current window.<br>

__Example 1__:<br>
myApp = App(7)<br>
Input: \`add_new_record(10)\`, Output: Null<br>
Input: \`add_new_record(20)\`, Output: Null<br>
Input: \`add_new_record(30)\`, Output: Null<br>
Input: \`get_window_total()\`, Output: 60<br>
Input: \`update(0, 0)\`, Output: True<br>
Input: \`update(7, 0)\`, Output: False<br>
Input: \`get_window_total()\`, Output: 50<br>

__Note__:<br>
You may assume that the window size will be valid, positive integers.<br>
Do not use static/class variables in your program. <br>


\`\`\`python
class App:
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
 
\`\`\`

### Solution


\`\`\`python
class App:
    def __init__(self, window_size):
        self.daily_cost = [] # list to store costs
        self.day = 0 # variable to keep track of current day
        self.window_size = window_size # specified window size
        self.accum = 0 # variable to keep track of total cost within window
        
    def add_new_record(self, amount):
        self.daily_cost.append(amount)
        self.accum += amount
        # pop first day if cost number exceeds window size
        if len(self.daily_cost) > self.window_size:
            self.accum -= self.daily_cost.pop(0)
        self.day += 1
        
    def update(self, day_k, amount):
        # return False if day to be updated is outside the window
        if day_k > self.day or self.day - day_k >= window_size:
            return False
        diff = self.day - day_k
        self.accum += amount - self.daily_cost[-1-diff]
        # update corresponding index with the given amount
        self.daily_cost[-1-diff] = amount
        return True
    
    def get_window_total(self):
        return self.accum
\`\`\`

### Questions to think about.

What is the time complexity of each function?
1. __\`add_new_record\`__: O(k). Once \`daily_cost\` reach the window size, we will have to pop the first element whenever adding a new record. The pop(0) operation is O(k), where k is the window size.
2. __\`update\`__: O(1). Retrieving and updating list elements are both O(1).
3. __\`get_window_total\`__: O(1). 


#### What is the bottleneck of this program? 

From the time complexity we can see that the most expensive function is \`add_new_record\`. And it is bounded by the pop operation when exceeding the \`window_size\`.

#### How could we improve the time complexity of the \`add_new_record\` function?
Instead of popping the first element, we could use a pointer to keep track of the starting index of the current window. We could simply increment the start pointer to indicate the current window.


\`\`\`python
class App:
    def __init__(self, window_size):
        self.daily_cost = []
        self.day = 0
        self.window_size = window_size
        self.accum = 0
        self.start = 0 # stores the starting index of the current window
        
    def add_new_record(self, amount):
        self.daily_cost.append(amount)
        self.accum += amount
        if len(self.daily_cost) > self.window_size:
            self.accum -= self.daily_cost[self.start]
            start += 1 # increment start index to indicate window shifts
        self.day += 1
        
    def update(self, day_k, amount):
        if day_k > self.day or self.day - day_k >= window_size:
            return False
        diff = self.day - day_k
        self.accum += amount - self.daily_cost[-1-diff]
        self.daily_cost[-1-diff] = amount
        return True
    
    def get_window_total(self):
        return self.accum
\`\`\`

#### What would be the time complexity for the \`add_new_record\` function?
The time complexity would be O(1) as we get rid of the pop operation. However, we are trading space complexity with time complexity. As we no longer pop elements from the list, the space complexity of this program would be O(n), where n is the number of transactions that took place.


#### Which method is better?

There is no definite answer of which implementation is strictly better than the other. However, based on the usage and resource constraints of your program, you might prefer one over the other. For example, if you only have limited memory, then you would probably compromise higher time complexity. On the other hand, say that the new records are added very frequently, then you may compromise higher space complexity to achieve constant time complexity.

From the analysis above, you could see that both implementations have their drawback. In the next exercise, we will implement the app class using a different data structure, linkedlist. We will then compare the pros and cons of each implementation. Stay tuned!
`},
    {"name": "Linked List Intro / Course",
    "link": "/courses/Linked List Intro/Course",
    "type": "video",
    "content": "https://www.youtube.com/embed/NKARH8OX9n4?list=PLcgNxTjNJv3qrYfeoPVVCM6jm9JarFUed"},
    {"name": "Linked List Intro / Exercise",
    "link": "/courses/Linked List Intro/Exercise",
    "type": "markdown",
    "content": "Empty"},
    {"name": "Linked List Python / Course",
    "link": "/courses/Linked List Python/Course",
    "type": "video",
    "content": "https://www.youtube.com/embed/mJnQxC5Gans?list=PLcgNxTjNJv3qrYfeoPVVCM6jm9JarFUed"},
    {"name": "Linked List Python / Exercise",
    "link": "/courses/Linked List Python/Exercise",
    "type": "markdown",
    "content": "Empty"},
  ]


  id = "-1";
  content = ""
  link = ""
  exercises = []
  resource_url
  topic = ""
  sub
  type = ""
  course_index
  next

  constructor(private api: ApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {

  }

  getVideoUrl = () => {
    this.resource_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.content);
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.topic = params['topic'];
      this.course_index = this.course_indices[this.id][this.topic]
      this.type = this.course_content[this.course_index]["type"]
      this.content = this.course_content[this.course_index]["content"];
      this.next = this.course_content[(this.course_index + 1) % this.n]
      if ( this.type == "video") {
        this.getVideoUrl();
      }
    });
    // this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);

    // this.api.getOneCourse(this.id).subscribe(
    //   data => {
    //     this.topic = data.topic;
    //     this.content = data.content;
    //     this.link = data.link;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
    // this.content = this.course_content[this.id]["content"];
    // this.link = this.course_content[this.id]["video_link"];
    // this.exercises = this.course_content[this.id]["exercises"];

    // this.getVideoUrl();
  }


}
