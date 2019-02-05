import time, math
from ev3dev import ev3

class Lib:
    def __init__(self, motor_l, motor_r, sonar):
        self.motor_l = motor_l
        self.motor_r = motor_r
        self.sonar = sonar

    def move(self, time_sp, use_left=True, use_right=True, speed_sp=500):
        pos_start = self.sonar.value()
        print("Start position: {:>5.1f}".format(pos_start))
        if use_left:
            self.motor_l.run_timed(speed_sp=speed_sp, time_sp=time_sp)
        if use_right:
            self.motor_r.run_timed(speed_sp=speed_sp, time_sp=time_sp)
        print("Motors running for {:.1f} seconds".format(time_sp/1000))
        self.wait_for_motor(self.motor_l)
        self.wait_for_motor(self.motor_r)
        print("Motors finished running")
        pos_end = self.sonar.value()
        print("End position:   {:>5.1f}".format(pos_end))
        print("Position delta: {:>5.1f}".format(pos_end - pos_start))

    @staticmethod
    def sigmoid(x):
        res = 1
        res /= (1 + math.exp(
            -(0.5 * x - 2)
        ))
        return res

    def move_to_position(self, pos_final, rel_max_speed=0.8):
        max_speed = min(self.motor_l.max_speed, self.motor_r.max_speed)
        max_speed *= rel_max_speed
        
        # TEMPORARY:
        # position delta 1000 = 11 cm
        pos_to_cm = lambda pos: pos * (11.0 / 1000.0)
        cm_to_pos = lambda cm:  cm * (1000.0 / 11.0)

        delta = pos_to_cm(abs(pos_final - self.motor_l.position_sp))
        while delta > 1.0:
            speed = max_speed * self.sigmoid(delta)
            delta = pos_to_cm(abs(pos_final - self.motor_l.position_sp))
            self.motor_l.run_to_abs_pos(pos_final, speed)
            self.motor_r.run_to_abs_pos(pos_final, speed)

    def move_until(self, pos_final=100.0, rel_max_speed=0.8):
        delta = abs(self.sonar.value() - pos_final)
        max_speed = min(self.motor_l.max_speed, self.motor_r.max_speed) * rel_max_speed
        while delta > 3.0:
            delta = abs(self.sonar.value() - pos_final)
            reverse = -1.0 if pos_final > self.sonar.value() else 1.0
            if delta < 20.0:
                speed = 0.1 * max_speed * reverse
            elif delta < 70.0:
                speed = 0.2 * max_speed * reverse
            elif delta < 100.0:
                speed = 0.4 * max_speed * reverse
            elif delta < 150.0:
                speed = 0.6 * max_speed * reverse
            elif delta < 200.0:
                speed = 0.8 * max_speed * reverse
            else:
                speed = 1.0 * max_speed * reverse
            self.motor_l.run_forever(speed_sp=speed)
            self.motor_r.run_forever(speed_sp=speed)
            print(self.sonar.value())
        self.motor_l.stop()
        self.motor_r.stop()

    def wait_for_motor(self, motor):
        time.sleep(0.1)         # Make sure that motor has time to start
        while motor.state==["running"]:             
            print('...')
            time.sleep(0.1)