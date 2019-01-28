from ev3dev import ev3
import time

# Set up the sonar
sonar = ev3.UltrasonicSensor(ev3.INPUT_1)
sonar.connected
sonar.mode = 'US-DIST-CM' # Will return value in mm

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
        if (len(time) == 0):
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
    motor_left = ev3.LargeMotor('outA')
    motor_left.connected
    motor_right = ev3.LargeMotor('outD')
    motor_right.connected

    pos_start = sonar.value()
    print("Start position: {:>5.1f}".format(pos_start))
    if use_left:
        motor_left.run_timed(speed_sp=speed_sp, time_sp=time_sp)
    if use_right:
        motor_right.run_timed(speed_sp=speed_sp, time_sp=time_sp)
    print("Motors running for {:.1f} seconds".format(time_sp/1000))
    wait_for_motor(motor_left)
    wait_for_motor(motor_right)
    print("Motors finished running")
    pos_end = sonar.value()
    print("End position:   {:>5.1f}".format(pos_end))
    print("Position delta: {:>5.1f}".format(pos_end - pos_start))

def move_until(pos_final=100.0, speed_sp=250):
    motor_left = ev3.LargeMotor('outA')
    motor_left.connected
    motor_right = ev3.LargeMotor('outD')
    motor_right.connected

    delta = abs(sonar.value() - pos_final)
    while delta > 5.0:
        delta = abs(sonar.value() - pos_final)
        reverse = -1.0 if pos_final < sonar.value() else 1.0
        if abs(sonar.value() - pos_final) < 150.0:
            motor_left.run_forever(speed_sp=100*reverse)
            motor_right.run_forever(speed_sp=100*reverse)
        if abs(sonar.value() - pos_final) < 70.0:
            motor_left.run_forever(speed_sp=50*reverse)
            motor_right.run_forever(speed_sp=50*reverse)
        if abs(sonar.value() - pos_final) < 40.0:
            motor_left.run_forever(speed_sp=20*reverse)
            motor_right.run_forever(speed_sp=20*reverse)
        else:
            motor_left.run_forever(speed_sp=speed_sp*reverse)
            motor_right.run_forever(speed_sp=speed_sp*reverse)
        print(sonar.value())
    motor_left.stop()
    motor_right.stop()

def wait_for_motor(motor):
    time.sleep(0.1)         # Make sure that motor has time to start
    while motor.state==["running"]:             
        print('...')
        time.sleep(0.1)

dev()