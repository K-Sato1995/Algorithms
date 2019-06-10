package main

import "fmt"

func main() {
	var list = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	fmt.Printf("The answer is %d\n", binarySearch(list, 7))
}

func binarySearch(list []int, target int) int {
	s := 0
	l := len(list)

	for l > s {
		m := (s + l) / 2
		if list[m] == target {
			return m
		} else if target > list[m] {
			s = m - 1
		} else if target < list[m] {
			l = m + 1
		}
	}
	return -1
}
