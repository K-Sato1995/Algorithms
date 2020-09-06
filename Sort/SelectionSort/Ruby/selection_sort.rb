class ArrayIsEmptyError < StandardError
  def initialize(msg="The array is empty")
    super
  end
end

def selection_sort(list)
  raise ArrayIsEmptyError if list.empty?
  listLength = list.size - 1
  
  listLength.times do |i|
    currentMin = i
    
    (i + 1).upto(listLength) { |j| currentMin = j if list[j] < list[currentMin] }

    list[currentMin], list[i] = list[i], list[currentMin] unless currentMin === i
  end

  list
end