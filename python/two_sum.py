from solution_framework.solution import Solution
import sys

def two_sum(nums, target):
    left = 0
    right = len(nums) - 1
    nums.sort()
    # while True:
    #     continue
    while left < right:
        total = nums[left] + nums[right]
        if target < total:
            right -= 1
        elif target > total:
            left += 1
        else:
            return True
    return False

if __name__ == '__main__':
    sol = Solution(1, 0.1) # problem number 1, 10 milliseconds timeout
    result = sol.run(two_sum)
    sys.stdout.flush()