import json
from colors import bcolors
index = 0

def idle(buffer):
    ibuff = json.loads(buffer)
    #print(ibuff)
    #print("\rwait state...")
    global index 
    index += 1
    c_idle(ibuff, 0)

def c_idle(partial, interrupt):
    global index
    print('called')
    ending = '\n' if interrupt == 1 else '\r'
    if len(partial['partial']) == 0: print(f'\r{bcolors.MAGENTA}> Idle {int(index)} ', end=ending)
    else: print(f'{bcolors.MAGENTA}Idle {int(index)} :: {partial['partial']} ', end=ending)

def c_result(result, interrupt):
    global index

    if len(result) == 0: return
    ending = '\n' if interrupt == 1 else '\r'

    print(f'{bcolors.OKCYAN}input : {result} @ {int(index)}s                                           ', end=ending)


def setIndex(n):
    global index
    index = n    