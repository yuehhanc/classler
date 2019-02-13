import os
import time
import sys

from solution import Solution

sys.stdout = open('/home/ubuntu/python/answer.log','w')
s = Solution()
start = time.time()
s.run()
end = time.time()
print("Execution time: " + str(end - start))
