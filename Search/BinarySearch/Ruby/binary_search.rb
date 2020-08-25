class NoSuchValueError < StandardError
  def initialize(msg="No such value in the array")
    super
  end
end

def iterative_binary_search(sorted_list, target)
  low, high = 0, sorted_list.length()

  while low < high
    mid = ((low + high) / 2).floor()

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