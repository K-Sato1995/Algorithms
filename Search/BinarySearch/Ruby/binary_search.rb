class NoSuchValueError < StandardError
  def initialize(msg="No such value in the array")
    super
  end
end

def iterative_binary_search(sorted_list, target)
  low, high = 0, sorted_list.length

  while low < high
    mid = ((low + high) / 2).floor

    if sorted_list[mid] == target 
      return mid
    elsif sorted_list[mid] < target
      low = mid + 1
    else
      high = mid
    end
  end

  raise NoSuchValueError
end

def recursive_binary_search(array, target)
  low = 0
  high = array.length - 1
  p array
  raise NoSuchValueError if array.length == 0

  middle = (low + high) / 2
  p middle
  # Check if the value in the middle is equal to the target.
  return middle if target == array[middle]

   # Check if the target is smaller or bigger than the value in the middle.
  if array[middle] < target
    # If the value in the middle is smaller that the target,
    # only pass values that are bigger than the value in the middle as array to the recursive_binary_search method. 
    return recursive_binary_search(array[middle + 1, high], target)
  else
    # If the value in the middle is bigger that the target,
    # only pass values that are smaller than the value in the middle as array to the recursive_binary_search method. 
    return recursive_binary_search(array[low, middle - 1], target)
  end
end

p recursive_binary_search([1, 2, 3], 3)