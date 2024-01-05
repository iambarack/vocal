# Voice to text calculator ~ Vocal

Too lazy to type? huh.
Just say what you want to calculate and let this program find the result for you.

The engine libraries for nodejs is deprecated for v16 and older versions
Nodegyp fails to build for current nodejs versions (v16+) on windows platform.
So this led me to just reimplement the code in python

Installation:
$ pip install -r requirements.txt

Usage:
$ python main.py
# then just say numbers and method to microphone using the following guideline:
> [numbers] [method] [numbers] #if you want to calculate more numbers just do the same thing
> [nums] [method] [nums] [method] [nums] # ...
# the program only does 1 method per input, so its not possible to do multiple calculations at the same time yet
# just use the same method and calculate with different method at the next line

Methods:
    'times' -> multiplication
    'divided by' -> division
    'plus' -> addition
    'minus' -> substraction
