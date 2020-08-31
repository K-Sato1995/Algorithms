package main

import "testing"

func TestBinarySearch(t *testing.T) {
	gotResult, _ := binarySearch([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 7)
	expectedResult := 6

	if gotResult != expectedResult {
		t.Errorf("Got %v, expected %v", gotResult, expectedResult)
	}
}
