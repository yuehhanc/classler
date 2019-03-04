from concurrent import futures
from solution_framework.test_timer import TestTimer

class Solution:
    def __init__(self, problem_num, timeout_seconds):
        self._timer = TestTimer()
        self._timeout_seconds = timeout_seconds
        self._problem_num = problem_num

    def run(self, func):
        if self._timeout_seconds == 0:
            return self._timed_call(func)
        else:
            try:
                # if we are using a server to implement this, maybe we can also do it without thread
                data_set = [[[1,6,7,8,10],2],[[0,0,0],3]]

                with futures.ThreadPoolExecutor(max_workers=1) as executor:
                    for data in data_set:
                        future = executor.submit(self._timed_call, func, *data)
                        print(self._timeout_seconds)
                        print(data)
                        print(self._problem_num)
                        return future.result(timeout=self._timeout_seconds)
            except futures.TimeoutError:
                print("Timeout")
                raise TimeoutException(self._timeout_seconds)
            except:
                print("Exception!")

    def get_timer(self):
        return self._timer

    def _timed_call(self, func, *args):
        sys.stdout = open("/Users/roland/Desktop/Program_Development/classler/setup/python"+'/answer.log','w')
        self._timer.start()
        result = func(*args)
        self._timer.stop()
        print(result)
        print("Execution time: " + self._timer.get_microseconds())
        return result

