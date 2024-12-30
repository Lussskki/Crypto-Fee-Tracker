import sys

if len(sys.argv) != 2:
    print("Usage: python calculation.py <number>")
    sys.exit(1)

number = float(sys.argv[1])
print(number * 2)  
