from concurrent import futures
from test_timer import TestTimer, TimeoutException


class Solution:
    def __init__(self, timeout_seconds):
        self._timer = TestTimer()
        self._timeout_seconds = timeout_seconds

    def run(self, func):
        if self._timeout_seconds == 0:
            return self._timed_call(func)
        else:
            try:
                # if we are using a server to implement this, maybe we can also do it without thread
                with futures.ThreadPoolExecutor(max_workers=1) as executor:
                    future = executor.submit(self._timed_call, func)
                    return future.result(timeout=self._timeout_seconds)
            except futures.TimeoutError:
                raise TimeoutException(self._timeout_seconds)

    def get_timer(self):
        return self._timer

    def _timed_call(self, func):
        self._timer.start()
        result = func()
        self._timer.stop()
        return result

