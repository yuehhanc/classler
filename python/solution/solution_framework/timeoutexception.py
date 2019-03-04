class TimeoutException(Exception):
    def __init__(self, duration_ms):
        self._timer = TestTimer(duration_ms)

    def get_timer(self):
        return self._timer


def duration_to_string(dur):
    dur = int(dur)
    MICRO_TO_MILLI = 1000
    MICRO_TO_SECOND = MICRO_TO_MILLI * 1000
    FORMAT = '{:>4}'

    if dur == 0:
        return '  <1 us'
    elif dur < MICRO_TO_MILLI:
        return str(FORMAT + ' us').format(dur)
    elif dur < MICRO_TO_SECOND:
        return str(FORMAT + ' ms').format(dur // MICRO_TO_MILLI)
    else:
        return str(FORMAT + '  s').format(dur // MICRO_TO_SECOND)