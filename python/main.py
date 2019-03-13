import os
import time
import sys

from shutil import copyfile

sys.dont_write_bytecode = True
solution_path = '/home/ubuntu/python/' + sys.argv[1] 
copyfile(solution_path+'/solution.py', '/home/ubuntu/python/solution/solution.py')

#import here after we copy the file
from solution import Solution

sys.stdout = open(solution_path+'/answer.log','w')
s = Solution()
start = time.time()
s.run()
end = time.time()
print("Execution time: " + str(end - start))
sys.stdout.close()
