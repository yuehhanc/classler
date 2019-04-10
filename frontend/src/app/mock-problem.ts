import { ProblemObj, ProblemInfo } from './problem';


export const MOCKPROBLEMS: ProblemObj[] = [
    {
        info: { id: 1, name: 'Two Sum', level:1, topic: 'array'},
        description: 
`
#### Problem: Two Sum

Given an array of integers \`nums\`, return indices of the two numbers such that they add up to a specific \`target\`.
You can assume that each input would have exactly one solution, and you cannot use the same element twice.

__Example__:

Given nums = [2, 7, 11, 15], target = 9, <br>
return [0, 1]<br>
Because nums[0] + nums[1] = 2 + 7 = 9, <br>
`,
        solution: 
`
#### Solution 1: Brute Force

The most naive solution is that, for each element, loop through all remaining elements and return the indeces if the two numbers add up to the target value.

#### Time and Space Complexity:

n: length of the input array

Time: O(n * n) 

Space: O(1). There are only two elements in the list to be returned.


\`\`\`python
def two_sum(nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        n = len(nums)
        # 1. Traverse nums.
        for i in range(n-1):
            first_num = nums[i]
            # 2. Traverse the remaining elements for each element.
            for j in range(i+1, n):
                second_num = nums[j]
                # 3. Return indeces if two numbers add up to target.
                if first_num + second_num == target:
                    return [i, j]
\`\`\`

#### Solution 2: Hashmap
#### Things to think about:

1. When we are looping through nums over again and again, we know what values are in the array during our first pass.
2. Could storing this information improve the time compexity? If so, how should we store it?

#### General idea:

We can store the info we have seen earlier in a hashmap. This way, as we traverse through the array, we could do constant time look up whether we have seen the number that would add up to the target value before. If we did, then we could return right away. Otherwise, we add the current num as the key and the current index as value. This way, we know we have found the answer if later elements matches any of the key in the hashmap.

1. Initialize an empty hashmap \`index_dict\`. In python, a dictionary.
2. Traverse the input array \`nums\`.
  - Initialize \`new_target\` as the difference between \`target\` and the current num. As this is the number that we are searching for as we traverse the rest.
  - Check if \`index_dict\` contains \`new_target\`. If yes, return the two indeces (one is the corresponding dictionary value of \`new_target\`, and the other is the current index)
  - Add the new entry to \`index_dict\` where key is the current num and value is the current index.
  

#### Time and Space Complexity:
Time: O(n). Only requires single pass to find the answer.

Space: O(n). We used a hashmap to store information about numbers seen earlier.

#### Note for implmentation:
When using a hashmap to store info, think about what to put as key and value. Which design makes more sense? Why the reverse doesn't work? 


\`\`\`python
def two_sum(nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # 1. Initialize empty dict
        index_dict = {}
        # 2. Traverse the input array
        for i, num in enumerate(nums):
            # 2.1 Compute differece of the target value and the current num
            new_target = target - num
            # 2.2 Check if we have seen new_target before
            if new_target in index_dict:
                # Return two indeces if yes.
                return [index_dict[new_target], i]
            # 2.3 Add new entry to the dictionary. 
            index_dict[num] = i
\`\`\`

#### Solution 3: Two Pointer

#### Things to think about:

What if \`nums\` are sorted in ascending order? 

#### General idea:

We use two pointers to find the numbers that add up to the given target. The brute force approach is to try out all combinations of the two pointers. However, if the array is sorted, we could take advantage of this property. We first initialize the start pointer as the first index and the end pointer as the last. If the sum is less than the target, we know that for the current end pointer, none of the numbers before (including) the start pointer could be the answer (those numbers are smaller and would add up to a smaller sum). Therfore, we increment the start pointer. Similarly, if the sum is greater than the target, for the current start pointer, none of the numbers after (including) the end pointer could be the answer pair because those numbers are greater and would thus add up to a greater sum. Therefore, we decrement the end pointer. We continue this process until the two pointers meet or we found the answer.

1. Sort \`nums\` in ascending order.
2. Initialize \`start\` and \`end\` pointers.
3. While the two pointers haven't met.
  - Increment the \`start\` pointer if sum is smaller than \`target\`.
  - Decrement the \`end\` pointer if sum is greater than \`target\`.
  - Return the two pointers if sum equals to \`target\`.

#### Time and Space Complexity:

Time: O(nlogn). Sorting is O(nlogn).

Space: O(1). We are not using extra memory storage.

#### Note for implementation

Make sure all conditions are handled carefully so your code won't end up as an infinite loop.


\`\`\`python
def two_sum(nums, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        # 1. Sort nums in ascending order
        nums.sort()
        # 2. Initialize start, end pointers
        start = 0
        end = len(nums) - 1
        # 3. 
        while start < end:
            # 3.1 Increment start pointer if current sum less than target
            if nums[start] + nums[end] < target:
                start += 1
            # 3.2 Decrement end pointer if current sum greater than target 
            elif nums[start] + nums[end] > target:
                end -= 1
            # 3.3 Return two pointers if add up to target
            else:
                return [start, end]
\`\`\`
`},
{
    info: { id: 2, name: 'Remove Duplicates from Sorted Array', level:1, topic: 'array'},
    description: 
`
#### Problem: Remove Duplicates from Sorted Array

Given a sorted array \`nums\`, remove the duplicates such that each element appear only once and return result.

Example:
Input:
nums = [1,1,2,2,3,3,3,4,5,6,6,7]

Output: [1,2,3,4,5,6,7]

#### Follow-up: Could you do it in-place?
`,
    solution: 
`
#### Things to think about:

The input array is sorted, which means duplicates would appear next to each other. We could take advantage of this property to determine whether an element is duplicate or not.

#### General idea:

Traverse the array and compare the current element to the previous element. If the two values are the same, the current element is a duplicate. If the two values are different, we have encountered a new value and could then append it to the result.

1. Loop through the input array
2. Compare the current value with previous value. Append to result if different.

#### Time and space complexity:

Time: O(n) where n is the length of the input array. The time complexity is linear since we have to traverse the input array.

Space: O(n) if we take the result into account.

#### Note for implementation:

We could decrement the index to compare the current and previous values. However, the first element is an exception since there is no index -1. The first element is going to be the first occurrence of a number, so we could append it to the result.



\`\`\`python
def remove_duplicates(nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    result = []
    n = len(nums)
    # 1. Traverse input array
    for i in range(n):
        # 2. Compare current with previous value. Append to result if different.
        if i == 0 or nums[i] != nums[i-1]:
            result.append(nums[i])
    return result
\`\`\`

#### Follow up: in-place

Given a sorted array \`nums\`, remove the duplicates in-place such that each element appear only once and return the new length.


#### General idea:

The idea is pretty similar to the original question. Instead of returning a new array, we need to modify the input array in-place and return the new length. We can still perform our original algorithm. In addition to that, we use the variable \`insert_index\` to keep track of where the next insertion takes place. When we encounter a new number, we insert it to the corresponding position and update the \`insert_index\`. The final \`insert_index\` would also be the new length.

#### Time and Space Complexity 

Time: O(n) since we have to traverse the input array.

Space: O(1) because we didn't use any extra space.



\`\`\`python
def remove_duplicates2(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    insert_index = 0
    n = len(nums)
    # 1. Traverse input array
    for i in range(n):
        # 2. Compare current with previous value
        if i == 0 or nums[i] != nums[i-1]:
            nums[insert_index] = nums[i] # Insert nums[i] to array
            insert_index += 1 # Update insert_index
    return insert_index
\`\`\`
`},
{
    info: { id: 3, name: 'Pascal\'s Triangle', level:1, topic: 'array'},
    description: 
`
#### Problem: Pascal's Triangle

Given a non-negative integer \`num_rows\`, generate the first \`num_rows\` of Pascal's triangle.

Things to think about:
1. The first and last element of each row are always 1.
2. Each row can be constructed from the previous row.

__Example__:<br>

__Input__: 5<br>
__Output__:<br>
\`[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]\`

`,
    solution: 
`
#### Problem: Pascal's Triangle

Given a non-negative integer \`num_rows\`, generate the first \`num_rows\` of Pascal's triangle.

Things to think about:
1. The first and last element of each row are always 1.
2. Each row can be constructed from the previous row.

#### General idea:

We first initialize the triangle variable, which is a list that stores each row of the Pascal triangle. One row is constructed at a time. We could infer the length of each row by its row number in the Pascal triangle. The first and last elements of each row is set to 1. We then fill in the remaining elements. Each triangle element is equal to the sum of the elements above-and-to-the-left and above-and-to-the-right. Finally, append row to triangle.

1. Initialize triangle
2. Construct one row at a time. 
    - For each row, set the first and last element to 1. 
    - Fill in the remaining values by adding the elements above-and-to-the-left and above-and-to-the-right.
    - Append row to triangle 
    
#### Time and Space Complexity:

Time: O(num_rows * num_rows). The update of each element is constant time. However, 1 + 2 + ... + num_rows elements are updated. Therefore, the time complexity is O(num_rows * num_rows).

Space: O(num_rows * num_rows) as we need to store each element.

#### Note for implementation:
1. Practice with 2D arrays.
2. Be careful with out of bound indexes.



\`\`\`python
def generate(num_rows):
    """
    :type num_rows: int
    :rtype: List[List[int]]
    """
    # 1. Initialize triangle
    triangle = []
    # 2. Construct one row at a time
    for row_num in range(num_rows):
    
        
        row = [None for _ in range(row_num + 1)]
        
        # 2.1 Set the first and last elements of each row to 1
        row[0] = 1
        row[-1] = 1

        # 2.2 Fill in the remaining values by adding up the above-and-to-the-left and above-and-to-the-right elements in triangle.
        for j in range(1, len(row)-1):
            row[j] = triangle[row_num-1][j-1] + triangle[row_num-1][j]

        triangle.append(row)

    return triangle
\`\`\`
`},
{
    info: { id: 4, name: 'Find all Numbers Disappeared in an Array', level:1, topic: 'array'},
    description: 
`
#### Problem: Find all Numbers Disappeared in an Array
Given an array of integers \`nums\` where 1 ≤ a[i] ≤ n where n is the length of nums, some elements appear twice and others appear once. Return a list of all the elements between 1 and n that do not appear in this array.

__Example__:

__Input__: \`[4,3,2,7,8,2,3,1]\`

__Output__: \`[5,6]\`

#### Follow up: Could you do it without extra space? 
`,
    solution: 
`
#### General idea:
The simplest way is to create a set of unique numbers from \`nums\`. We then loop through numbers from 1 to n and append number that does not appear in the set. 

1. Initialize set from nums.
2. Check from 1 to n if the number appears in the set. If not, append to result.

#### Time and Space Complexity:

n: length of nums

Time: O(n). 

Space: O(n). We use a set to store numbers.




\`\`\`python
def find_disappeared_numbers(nums):
    # 1. Initialize set
    s = set(nums)
    result = []
    n = len(nums)
    # 2. Append number if not in set.
    for i in range(n):
        if i+1 not in s:
            result.append(i+1)
    return result
    
\`\`\`

#### Follow up: Could you do it without extra space? 
#### Things to think about:

1. What conditions do the input numbers have?

2. How could we take advantage of this condition to improve the space complexity?

#### General idea:

We know that each number ranges between 1 and n (inclusive). There are n elements in the array so the index ranges from 0 to n-1. Thus, we could try to swap each number to its corresponding index. Number 1 to index 0, n to index n-1, etc. After these swaps, we know that a number is missing if an index doesn't contain the corresponding number.

1. For each index of nums,
  - If the number at that index shouldn't be there and its to go index doesn't contain the right number, swap the two numbers.
  - Repeat the step above until the condition no longer hold.
2. Loop through the re-ordered nums
  - Check if that index stores the correct number. If not, then append the missing number to the result.
  
#### Time and Space Complexity:

Time: O(n). Each element is swapped at most once.

Space: O(1). No extra storage is used.

#### Note for implmentation:
Although the idea is pretty straigtforward, implementing it is actually not that simple. 
1. Be careful about converting between number and index.
2. Think carefully about the stopping critera for swapping the numbers. 


\`\`\`python
def find_disappeared_numbers(nums):
    n = len(nums)
    
    for i in range(n):
        current = i
        # Number at current index is not right and its to go index doesn't have the right number as well
        while nums[current] != i+1 and nums[current] != nums[nums[current]-1]:
            # Swap the two numbers.
            value = nums[current]
            nums[current] = nums[value-1]
            nums[value-1] = value

    result = []
    for i in range(n):
        # Check if index stores the correct number
        if nums[i] != i+1:
            result.append(i+1)
    return result
\`\`\`
`},
{
    info: { id: 5, name: 'Merge 2 Sorted Array', level:1, topic: 'array'},
    description: 
`
#### Problem: Merge 2 Sorted Array

Given two sorted integer arrays \`nums1\` and \`nums2\`, merge 2 arrays and return the result.

__Example__:<br>
__Input__:<br>
nums1 = [1,3,5]<br>
nums2 = [2,4,6]<br>
<br>
__Output__: [1,2,3,4,5,6]<br>

`,
    solution: 
`
#### Things to think about:

You are given two sorted integer arrays. First, we could think of what properties the final output array has.
1. The output array is sorted.
2. Each element (not integer), must and will only appear once in the output array.

#### General idea:

We have to to traverse both arrays and determine when to place one element before another. We could use the idea of 'pointer', which indicates the index of the candidate element we are to merge next. The general idea is to have two pointers (\`p1\` & \`p2\`), one for each input array. We then compare the integers these pointers refer to, append the smaller integer to the final result, and increment the corresponding pointer. For example, \`nums1[p1]\` < \`nums2[p2]\`. We know all elements before \`p1\` in \`nums1\` has been merged into the final output. Since every element in \`nums2\` after \`p2\` is greater than \`nums2[p2]\` (\`nums2\` is sorted), we know \`nums1[p1]\` would be the smallest remaining element. Therefore, we could append it to the result and increment \`p1\` by 1, which means we have merged this element.

1. Initialize two pointers.
2. Compare both pointers. Append smaller number to the result and increment corresponding pointer.
3. Finish traversing remaining elements.

#### Time and Space Complexity:

Time: O(n1 + n2) where n1, n2 is the length of each array. This is because we have to traverse both arrays completely.

Space: O(n1 + n2) if we take the result array into account. 


#### Note for implmentation:
We first use a while loop to traverse both arrays. Once we reach the end of one array, we could just finish traversing the other array because the remaining elements are sorted. 
The code is provided below. You are also free to use different implementations.


\`\`\`python
def merge2sorted(nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: List[int]
    """
    # 1. Initialize both pointers
    p1 = 0 
    p2 = 0
    
    n1 = len(nums1)
    n2 = len(nums2)
    result = [] 
    
    # 2. Traverse both arrays
    while p1 < n1 and p2 < n2:
        # Compare both pointers, append smaller number to result, and increment corresponding pointer
        if nums1[p1] < nums2[p2]:
            result.append(nums1[p1])
            p1 += 1
        else:
            result.append(nums2[p2])
            p2 += 1
    # 3. Traverse remaining elements
    # Traverse remaining elements of first array
    while p1 < n1:
        result.append(nums1[p1])
        p1 += 1
    # Traverse remaining elements of second array
    while p2 < n2:
        result.append(nums2[p2])
        p2 += 1
    return result
\`\`\`
`},
{
    info: { id: 6, name: 'Container With Most Water', level:1, topic: 'array'},
    description: 
`
#### Problem: Container With Most Water

Given an array of positive numbers, \`height\`, where each represents a vertical line on the x-axis at position i (index of that number) with height being the value of the number. Find two lines, together with the x-axis, that forms a container that is able to contain the most water. Return the capacity of the biggest container. You may assume the array will at least have two elements.

__Example__:

__Input__: \`[1,8,6,2,5,4,8,3,7]\`

__Output__: \`49\`

`,
    solution: 
`
#### Things to think about:

1. How do we compute the area given two array elements?

2. What does the formula imply?

#### General idea:

Given two elements, say \`height[i]\` and \`height[j]\` (where i < j), the capacity of the container formed by these two lines are (j - i) * min(height[i], height[j]). (j - i) is the width of the container where as the minimum of the two elements is the height. The main idea would be to find the two lines that maximizes this formula. From this formula, we can tell that the capacity is bounded by the shorter line. On top of that, given the same height of the shorter line, the further apart these lines, the bigger the capacity. The brute force solution would be to compute the capacity of all line pairs and return the greater one. However, we could take advantage of the insights obtained from the formula above and come up with a more optimized algorthim. The basic idea is to have two pointers as the indicator of the two lines. At the beginning, we want the two pointers to be as far as possible. Now, with the same two lines, we know the height of the container is bounded by the shorter line. This infers that we could never find a greater container if we bring the pointer of the longer line closer to the shorter one since this will only make the width even smaller and the height still remains the same. Therefore, instead of bringing the longer line pointer closer, we modify the pointer that points at the shorter line. Although this makes the width smaller, the new line pointed by the updated pointer could together result in a greater height for the container. 

1. Initialize \`start\`, \`end\` pointers and \`max_cap\`.
2. While the two pointers haven't met.
  - Compute the capacity of the current container and update \`max_cap\`. 
  - Update the pointer that points to the shorter line closer by one step.
3. Return the maximum capacity.


#### Time and Space Complexity:

n: length of the given input

Time: O(n). Each element is only traversed once.

Space: O(1). No additional storage is used.


\`\`\`python
def max_container(height):
        """
        :type height: List[int]
        :rtype: int
        """
        # 1. Initialize start, end pointers and max_cap
        max_cap = - sys.maxint
        start = 0
        end = len(height)-1
        while start < end:
            shorter = min(height[start], height[end])
            # 2.1 Compute current capacity and update max_cap 
            max_cap = max(max_cap, shorter * (end - start))
            # 2.2 Update pointer that points to the shorter line. 
            if shorter == height[start]:
                start += 1
            if shorter == height[end]:
                end -= 1
        # Return the maximum capacity
        return max_cap
\`\`\`
`},
    
];