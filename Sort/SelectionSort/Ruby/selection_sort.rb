class ArrayIsEmptyError < StandardError
  def initialize(msg="The array is empty")
    super
  end
end

# def selection_sort(list)
#   raise ArrayIsEmptyError if list.empty?
#   i = 0
#   while i < list.length
#     currentMin = i
#     j = 0

#     while j < list.length 

#       j += 1
#     end

#     i+=1
#   end
# end
# export const selectionSort = (list: number[]): number[] | Error => {
#   if (list.length === 0) throw "The given array is empty";

#   let currentMin: number;

#   for (let i = 0; i < list.length; i++) {
#     currentMin = i;
#     // console.log(`-----------currentMin: ${currentMin}--------------------`);

#     //check the rest of the array to see if anything is smaller
#     for (let j = 0; j < list.length; j++) {
#       // console.log(`list: ${list}`);
#       if (list[currentMin] < list[j]) {
#         currentMin = j;
#       }
#       // console.log(`currentMin: ${currentMin}`);

#       var tmp = list[i];
#       list[i] = list[currentMin];
#       list[currentMin] = tmp;
#     }
#   }

#   return list;
# };