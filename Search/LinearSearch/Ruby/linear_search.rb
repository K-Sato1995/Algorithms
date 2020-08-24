class NoSuchValueError < StandardError
  def initialize(msg="No such value in the array")
    super
  end
end

def liner_search(arr, target)
  i = 0
  while i < arr.length
    if arr[i] == target
      return i
    end
    i+=1
  end
  raise NoSuchValueError
end


# list = [2, 4, 6, 8, 10]
# p liner_search(list, 6) #=> 2
# p liner_search(list, 100) #=> "No such value in the array"
