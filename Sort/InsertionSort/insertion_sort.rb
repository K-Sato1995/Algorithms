def insertion_sort(list)
  # Iterate through all elements of the array
  list.length.times do |i|
    while i > 0 # Check if the element is not the first item,
      if list[i - 1] > list[i]
        # Swap if list[i-1] is bigger than list[i]
        list[i], list[i-1] = list[i-1], list[i]
      end
      i-=1
    end
  end
  list
end

list = [3, 5, 1, 2, 8, 6, 4]
p insertion_sort(list)
