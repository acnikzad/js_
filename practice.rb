# 1. Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).

array = "Javascript"
array = array.split("")
new_array = []

x = (array.length - 1)

while x != -1
  new_array << array[x]
  x -= 1
end


p new_array.join


# Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

# array = "Javascript"
# x = 0
# y = 0

# while x < array.length
#   if array[x] == "a"
#     y += 1
#   end
#   x += 1
# end

# p y 

# Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

array = [1, 4, 6, 7, 8, 9, 11, 12]
number = 6
x = 0
y = nil

while x < array.length

  if array[x] == number
    y = x
  end
  x += 1
end

p y

# Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the “sort” method!

array = [1, 2, 3, 4, 6, 7, 8, 9, 10]
new_array = []
x = 0
y = 5
inserted = false

while x < array.length
  if array[x] < y
    new_array << array[x]
  elsif array[x] > y && inserted == false
    new_array << y
    new_array << array[x]
    inserted = true
  else 
    new_array << array[x]
  end
  x += 1
end

p new_array


# Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string “lower” if the value is found in the lower half of the array, and it should return “higher” if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!


