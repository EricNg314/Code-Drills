import statistics
# Find the mean, median, and mode of the following lists and dictionaries. 

number_list = [1.5, 2.3, 9.8, 11.3, 6.3, 4.3, 3.14, 4.2 ,2.3, 6.3, 3.14]

# Sort the number_list from smallest to largest.
number_list.sort()

# Create a function that returns the mean from the list number_list.
def find_mean(numbers):
    return sum(numbers)/len(numbers)    


average = find_mean(number_list)
print(average)

# Create a function that returns the median from number_list.
def find_median(numbers):
    length = len(numbers)
    center = length // 2

    if length == 1:
      return numbers[0]
    elif length % 2 == 0:
      return sum(numbers[center -1: center + 1])/ 2
    else:
      return numbers[center]

print(find_median(number_list))

# Create a function that returns the mode from number_list.
def find_mode(numbers):
    



# How to find the mean mode and median.

# Mean, Median, and Mode (Python Activiity - 10-days-of-statistics)

# Weighted Mean (Python Activiity - 10-days-of-statistics)

# How to Find the Sample Mean.

# What is the Center of a Distribution?

# Regression to the Mean.






