
from concurrent import futures

from solution_framework.test_timer import TestTimer
from solution_framework.timeout_exception import TimeoutException


class TimedExecutor:
    def __init__(self, timeout_seconds):
        self._timer = TestTimer()
        self._timeout_seconds = timeout_seconds

    def run(self, func):
        """
        Invokes func with a specified timeout_seconds.

        If func takes more than timeout_seconds seconds to run,
        TimeoutException is raised.
        If timeout_seconds == 0, it simply calls the function.

        :return: whatever func returns
        """
        if self._timeout_seconds == 0:
            # Timeout is disabled.
            return self._timed_call(func)
        else:
            try:
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
