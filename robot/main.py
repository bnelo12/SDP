from ev3dev import ev3
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

def dev():
    print("{:^30}".format("You are in DEVELOPER mode"))
    print('-'*30)
    prompt() 

def prompt():
    cmd = input("What command would you like to run?\nCMD: ")

    if cmd == 'forward':
        move(1000)
    elif cmd == 'back':
        move(1000, speed_sp=-500)
    elif cmd == 'run':
        speed = input("What speed do you want to run at?\nSpeed: ")
        t = input("What time do you want to run it for?\nTime: ")
        # No input
        if (len(speed) == 0):
            speed = 500
        else:
            speed = int(speed)
        if (len(t) == 0):
            t = 1000
        else:
            t = int(t)
        move(t, speed_sp=speed)
    elif cmd == 'left':
        move(500, use_left=True, use_right=False, speed_sp=500)
        move(500, use_left=True, use_right=False, speed_sp=-500)
    elif cmd == 'right':
        move(500, use_left=False, use_right=True, speed_sp=500)
        move(500, use_left=False, use_right=True, speed_sp=-500)
    elif cmd == 'sonar':
        btn = ev3.Button()
        sonar = ev3.UltrasonicSensor(ev3.INPUT_1)
        sonar.connected
        sonar.mode = 'US-DIST-CM'
        while not btn.backspace:
            print(str(sonar.value()))
            time.sleep(0.1)
    elif cmd == 'until':
        final = float(input("Final position: "))
        move_until(final)
    elif cmd == 'exit':
        exit()
    else:
        print("I don't recognize that command, try again.")

    prompt()

def move(time_sp, use_left=True, use_right=True, speed_sp=500):
    pos_start = sonar.value()
    print("Start position: {:>5.1f}".format(pos_start))
    if use_left:
        motor_l.run_timed(speed_sp=speed_sp, time_sp=time_sp)
    if use_right:
        motor_r.run_timed(speed_sp=speed_sp, time_sp=time_sp)
    print("Motors running for {:.1f} seconds".format(time_sp/1000))
    wait_for_motor(motor_l)
    wait_for_motor(motor_r)
    print("Motors finished running")
    pos_end = sonar.value()
    print("End position:   {:>5.1f}".format(pos_end))
    print("Position delta: {:>5.1f}".format(pos_end - pos_start))

def move_until(pos_final=100.0, rel_max_speed=0.8):
    delta = abs(sonar.value() - pos_final)
    max_speed = min(motor_l.max_speed, motor_r.max_speed) * rel_max_speed
    while delta > 3.0:
        delta = abs(sonar.value() - pos_final)
        reverse = -1.0 if pos_final > sonar.value() else 1.0
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
        motor_l.run_forever(speed_sp=speed)
        motor_r.run_forever(speed_sp=speed)
        print(sonar.value())
    motor_l.stop()
    motor_r.stop()

def wait_for_motor(motor):
    time.sleep(0.1)         # Make sure that motor has time to start
    while motor.state==["running"]:             
        print('...')
        time.sleep(0.1)

dev()