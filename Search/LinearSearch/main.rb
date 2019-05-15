def linerSearch(arr, target)
  i = 0
  while i < arr.length
    if arr[i] == target
      return i
    end
    i+=1
  end
  "No such value in the array"
end


list = [2, 4, 6, 8, 10]

p linerSearch(list, 6) #=> 2
p linerSearch(list, 100) #=> "No such value in the array"
