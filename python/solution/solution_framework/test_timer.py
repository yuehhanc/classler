import time


class TestTimer:
    def __init__(self, duration_ms=None):
        # if duration_ms is None:
        self._start = 0
        self._stop = 0
        # else:
        #     self._stop = time.clock()
        #     self._start = self._stop - duration_ms / 1000

    def start(self):
        if not self.started():
            self._start = time.clock()

    def stop(self):
        if not self.stopped():
            self._stop = time.clock()

    def started(self):
        return self._start != 0

    def stopped(self):
        return self._stop != 0

    def get_microseconds(self):
        SECONDS_TO_MICRO = 1000000
        return int((self._stop - self._start) * SECONDS_TO_MICRO)

    def has_valid_result(self):
        return self.started() and self._stop != 0



