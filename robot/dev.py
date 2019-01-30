from lib import Lib
from ev3dev import ev3
import time

class Dev:
    def __init__(self, lib):
        self.l = lib

    def dev(self):
        print("{:^30}".format("You are in DEVELOPER mode"))
        print('-'*30)
        self.prompt() 

    def prompt(self):
        cmd = input("What command would you like to run?\nCMD: ")

        if cmd == 'forward':
            self.l.move(1000)
        elif cmd == 'back':
            self.l.move(1000, speed_sp=-500)
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
            self.l.move(t, speed_sp=speed)
        elif cmd == 'left':
            self.l.move(500, use_left=True, use_right=False, speed_sp=500)
            self.l.move(500, use_left=True, use_right=False, speed_sp=-500)
        elif cmd == 'right':
            self.l.move(500, use_left=False, use_right=True, speed_sp=500)
            self.l.move(500, use_left=False, use_right=True, speed_sp=-500)
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
            self.l.move_until(final)
        elif cmd == 'exit':
            exit()
        else:
            print("I don't recognize that command, try again.")

        self.prompt()