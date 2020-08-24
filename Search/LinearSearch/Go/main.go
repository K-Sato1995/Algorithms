package main

import "fmt"

func main() {
	var list = []int{2, 4, 6, 8, 10}
	fmt.Printf("The answer is %v\n", LinearSearch(list, 4))
}

// LinearSearch returns ture if the given item exites in the given list.
func LinearSearch(list []int, item int) bool {
	for _, value := range list {
		if value == item {
			return true
		}
	}
	return false
}
