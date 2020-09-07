class ArrayIsEmptyError < StandardError
  def initialize(msg="The array is empty")
    super
  end
end

def bubble_sort(list)
  len = list.length
  raise ArrayIsEmptyError if len == 0

  swap = true # Indicator of if the array is sorted.

  while swap
    swap = false
    (len - 1).times do |i|
      # Iterate through all the elements from the begginng to the end.
      if list[i] > list[i+1]
        # Swap if list[i] is bigger than list[i+1]
        list[i], list[i+1] = list[i+1], list[i]
        swap = true
      end
      ## It returns false if there is no list[i] > list[i+1] in the array anymore.
    end
  end
  list
end

arr = [1, 2, 5, 4, 6, 3]
p bubble_sort(arr) #=> ["1", "2", "3", "4", "5", "6"]
