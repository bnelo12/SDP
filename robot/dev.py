from lib import Lib
from ev3dev import ev3
import time

class Dev:
    def __init__(self, lib):
        self.l = lib

    def run(self):
        print("{:^30}".format("You are in DEVELOPER mode"))
        print('-'*30)
        self.prompt() 

    def prompt(self):
        l = self.l
        cmd = input("What command would you like to run?\nCMD: ")

        if cmd == 'run':
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
            l.move(t, speed_sp=speed)
        elif cmd == 'left':
            l.move(500, use_left=True, use_right=False, speed_sp=500)
            l.move(500, use_left=True, use_right=False, speed_sp=-500)
        elif cmd == 'right':
            l.move(500, use_left=False, use_right=True, speed_sp=500)
            l.move(500, use_left=False, use_right=True, speed_sp=-500)
        elif cmd == 'sonar':
            btn = ev3.Button()
            sonar = ev3.UltrasonicSensor(ev3.INPUT_1)
            sonar.connected
            sonar.mode = 'US-DIST-CM'
            def on_down(state):
                print("Down pressed;", state)
                print(str(sonar.value()))
            btn.on_down = on_down
            while not btn.backspace:
                print(str(sonar.value()))
                time.sleep(0.1)
        elif cmd == 'position':
            final = float(input("Final position: "))
            l.move_to_position(final)
        elif cmd == 'until':
            final = float(input("Final position: "))
            l.move_until(final)
        elif cmd == 'exit':
            exit()
        else:
            print("I don't recognize that command, try again.")

        self.prompt()