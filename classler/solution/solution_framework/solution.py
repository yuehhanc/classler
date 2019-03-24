from concurrent import futures
from solution_framework.test_timer import TestTimer
import sys

class Solution:
    def __init__(self, problem_num, timeout_seconds):
        self._timer = TestTimer()
        self._timeout_seconds = timeout_seconds
        self._problem_num = problem_num
        self._num_passed = 0

    def run(self, func):
        # Need to import data files as 2 lists
        data_set = [[[1,6,7,8,10],2],[[0,0,0],3]]
        answers = [False, True]
        if self._timeout_seconds == 0:
            return self._timed_call(func)
        else:
            # try:
            # if we are using a server to implement this, maybe we can also do it without thread

            with futures.ThreadPoolExecutor(max_workers=1) as executor:
                for i in range(len(data_set)):
                    data = data_set[i]
                    ans = answers[i]
                    future = executor.submit(self._timed_call, func, *data)
                    self._num_passed += 1
                    res = future.result(timeout=self._timeout_seconds)
                    if res != ans:
                        return
            # except futures.TimeoutError:
            #     print("Timeout")
            #     raise TimeoutException(self._timeout_seconds)
            # except:
            #     print("Exception!")

    def get_timer(self):
        return self._timer

    def _timed_call(self, func, *args):
        sys.stdout = open("/Users/roland/Desktop/Program_Development/classler/setup/python"+'/answer.log','w')
        self._timer.start()
        result = func(*args)
        self._timer.stop()
        # print("Your answer: " + str(result))
        print("Execution time: " + str(self._timer.get_microseconds()) + " ms")
        print(str(self._num_passed) + " tests passed")
        return result

