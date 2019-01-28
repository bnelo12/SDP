from ev3dev import ev3
import time

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
        # No input
        if (len(speed) == 0):
            speed = 500
        else:
            speed = int(speed)
        move(1000, speed_sp=speed)
    elif cmd == 'left':
        move(500, use_left=True, use_right=False, speed_sp=500)
        move(500, use_left=True, use_right=False, speed_sp=-500)
    elif cmd == 'right':
        move(500, use_left=False, use_right=True, speed_sp=500)
        move(500, use_left=False, use_right=True, speed_sp=-500)
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

    if use_left:
        motor_left.run_timed(speed_sp=speed_sp, time_sp=time_sp)
    if use_right:
        motor_right.run_timed(speed_sp=speed_sp, time_sp=time_sp)
    print("Motors running for {:.1f} seconds".format(time_sp/1000))

    wait_for_motor(motor_left)
    wait_for_motor(motor_right)
    print("Motors finished running")

def wait_for_motor(motor):
    time.sleep(0.1)         # Make sure that motor has time to start
    while motor.state==["running"]:             
        print('...')
        time.sleep(0.1)

dev()