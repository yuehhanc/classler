from concurrent import futures
from solution_framework.test_timer import TestTimer
import sys

class Solution:
    def __init__(self, problem_num, user_path, timeout_seconds):
        self._timer = TestTimer()
        self._timeout_seconds = timeout_seconds
        self._problem_num = problem_num
        self._num_passed = 0
        self._user_path = user_path
        self._run_time = 0

    def run(self, func):
        data_set = [[[1,6,7,8,10],2],[[1,2,1],3]]
        answers = [False, True]
        sys.stdout = open(self._user_path + '/answer.log','w')
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
                    res = future.result(timeout=self._timeout_seconds)
                    if res != ans:
                        break
                    self._num_passed += 1
            # except futures.TimeoutError:
            #     print("Timeout")
            #     raise TimeoutException(self._timeout_seconds)
            # except:
            #     print("Exception!")
        print("Execution time: " + str(self._run_time) + " ms")
        print(str(self._num_passed) + "/" + str(len(data_set)) + " tests passed")

    def get_timer(self):
        return self._timer

    def _timed_call(self, func, *args):
        self._timer.start()
        result = func(*args)
        self._timer.stop()
        #print("Your answer: " + str(result))
        self._run_time += self._timer.get_microseconds()
        return result

