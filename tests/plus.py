
def plus(n_arr, arr_sz):
    
    #join big numbers
    
    newNumList = []
    longNumber = ""
    print("\nINPUT: ", n_arr, "SZ:", arr_sz)

    for index, element in enumerate(n_arr):
        #print("\nindex: ", index, "arrsz:", arr_sz, "next: ", n_arr[index+1])
        if(index+1 < arr_sz and n_arr[index+1] == "*" and element != "*"):
            longNumber += element + " "
        if(index+1 < arr_sz and n_arr[index+1] != "*"):
            print("loop", index)
            if element != "*": longNumber += element + " "
        else:
            if(index == arr_sz-1):
                if(element != "*"): longNumber = element
            print("appending", longNumber)
            if(longNumber != ''): newNumList.append(longNumber)
            longNumber = ""
    print(newNumList, " end")


def minus(nums, sz):
    result = 0
    print("nums: ", nums)
    for i, n in enumerate(nums):
        if(i == 0): result = n
        else: result -= n
    return result
minus([5,5],2)
