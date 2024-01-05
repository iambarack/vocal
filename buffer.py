import json
from ibuffer import *
from colors import bcolors
from word2number import w2n
from calculator import plus, minus, divide, multiple
methods = set(["plus", "minus", "times", "divided"])

def buffer(buff):
    print(w2n.word_to_num('twenty three'))

    jbuff = json.loads(buff)['text']#split(" ")
    c_result(jbuff, 1)
    buffsz = len(jbuff)
    if buffsz > 0: setIndex(0)
    elif buffsz == 0: return

    arr = jbuff.split(" ")
    arr_sz = len(arr)
    found = ""
    nums = []
    token_index = 0
    for token in arr:
        if token in methods:
            found = token
            nums.append("*")
            continue
        elif found == "": token_index += 1
        nums.append(token)
    #print(token_index, nums)
    if(found == ""): 
        print(f"{bcolors.FAIL}Instructions unclear! {bcolors.OKBLUE}", arr)
        return -1
    #print(f"{bcolors.OKCYAN}Found!{bcolors.OKBLUE}", arr) # for debugging
    
    #make a switch case
    newList = serialize(nums, arr_sz)
    #print(newList)

    newSize = len(newList)
    result = -1;
    match found:
        case "plus":
            result = plus(newList, newSize)
        case "minus":
            result = minus(newList, newSize)
        case "times":
            result = multiple(newList, newSize)
        case "divided":
            result = divide(newList, newSize)
        case _:
            print("Something went wrong :(")
    
    print(f"{bcolors.OKGREEN}Calculated: ", result)


def serialize(n_arr, arr_sz):
    
    #join big numbers
    
    # newNumList = []
    # longNumber = ""
    #print("\nINPUT: ", n_arr, "SZ:", arr_sz)

    # for index, element in enumerate(n_arr):
    #     #print("\nindex: ", index, "arrsz:", arr_sz, "next: ", n_arr[index+1])
    #     if(index+1 < arr_sz and n_arr[index+1] == "*" and element != "*"):
    #         longNumber += element + " "
    #     if(index+1 < arr_sz and n_arr[index+1] != "*"):
    #         #print("loop", index)
    #         if element != "*": longNumber += element + " "
    #     else:
    #         if(index == arr_sz-1):
    #             if(element != "*"): longNumber = element
    #         print("appending", longNumber)
    #         if(longNumber != ''):
    #             try:
    #                 newNumList.append(w2n.word_to_num(longNumber))
    #             except ValueError as e:
    #                 if(longNumber != "by"): print(f"{bcolors.WARNING}number not recognized: ", longNumber)
            
    #         longNumber = ""
    # return newNumList

    #bru why not just use join and split? huh.
    wlist = ' '.join(n_arr).split("*")
    nlist = []
    for el in wlist:
        try:
            nlist.append(w2n.word_to_num(el))
        except ValueError as e:
            if(el != "by"): print(f"{bcolors.OKCYAN}number not recognized: ", el)
    return nlist