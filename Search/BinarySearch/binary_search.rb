def binary_search(sorted_list, target)
  s = 0
  m = sorted_list.size

  while s < m
    middle = (s + m) / 2
    if target == sorted_list[middle]
      return middle
    elsif target > sorted_list[middle]
      s = middle + 1
    elsif target < sorted_list[middle]
      m = middle - 1
    end
  end
end

list = [1,2,3,4,5,6,7,8,9,10]
p binary_search(list, 7) #=> 6
