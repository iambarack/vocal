def plus(nums, sz):
    result = 0
    for n in nums:
        result += n
    return result

def minus(nums, sz):
    result = 0
    for i, n in enumerate(nums):
        if(i == 0): result = n
        else: result -= n
    return result

def divide(nums, sz):
    result = 0
    for i, n in enumerate(nums):
        if(i == 0): result = n
        else: result /= n
    return result

def multiple(nums, sz):
    result = 0
    for i, n in enumerate(nums):
        if(i == 0): result = n
        else: result *= n
    return result