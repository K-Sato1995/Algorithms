class ArrayIsEmptyError < StandardError
  def initialize(msg="The array is empty")
    super
  end
end

def selection_sort(list)
  raise ArrayIsEmptyError if list.empty?

  i = 0
  while i < list.length
    currentMin = i
    j = i + 1

    while j < list.length  
      currentMin = j if list[j] < list[currentMin]      
      j += 1
    end
    list[currentMin], list[i] = list[i], list[currentMin] unless currentMin === i
    i+=1
  end

  list
end
