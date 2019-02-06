from ev3dev import ev3
from dev import Dev
from lib import Lib
import time

# Set up the sonar
sonar = ev3.UltrasonicSensor(ev3.INPUT_1)
sonar.connected
sonar.mode = 'US-DIST-CM' # Will return value in mm
# Set up the motors
motor_l = ev3.LargeMotor('outA')
motor_l.connected
motor_r = ev3.LargeMotor('outD')
motor_r.connected
# Motors should brake, not coast
motor_l.stop_action = 'brake'
motor_r.stop_action = 'brake'
# Start and stop immediately
motor_l.ramp_up_sp = 0
motor_r.ramp_up_sp = 0
motor_l.ramp_down_sp = 0
motor_r.ramp_down_sp = 0

l = Lib(motor_l, motor_r, sonar)

btn = ev3.Button()
shelf_distance = 960
l.move_to_position(0)
l.wait_for_motors()

while True:
    if btn.down:
        print("Position 0")
        l.move_to_position(0 * shelf_distance)
        l.wait_for_motors()
    elif btn.up:
        print("Position 5")
        l.move_to_position(5 * shelf_distance)
        l.wait_for_motors()
    elif btn.left:
        print("Position 2")
        l.move_to_position(2 * shelf_distance)
        l.wait_for_motors()
    elif btn.right:
        print("Position 3")
        l.move_to_position(3 * shelf_distance)
        l.wait_for_motors()
    elif btn.backspace:
        print("Goodbye!")
        exit()
