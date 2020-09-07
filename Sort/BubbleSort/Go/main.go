package main

func main() {
	var numbers []int = []int{5, 3, 4, 2, 1}
	BubbleSort(numbers)
}

// BubbleSort sorts out an array
func BubbleSort(list []int) []int {
	swapped := true

	for ok := true; ok; ok = swapped {
		swapped = false
		for i := 0; i < len(list)-1; i++ {
			if list[i] > list[i+1] {
				list[i], list[i+1] = list[i+1], list[i]
				swapped = true
			}
		}
	}

	return list
}
