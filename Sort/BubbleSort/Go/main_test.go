package main

import "testing"

func TestBubbleSort(t *testing.T) {
	got := BubbleSort([]int{2, 1, 4, 5, 6, 3})
	expected := []int{1, 2, 3, 4, 5, 6}

	if !Equal(got, expected) {
		t.Errorf("Got %v, expected %v", got, expected)
	}
}

func Equal(a, b []int) bool {
	if len(a) != len(b) {
		return false
	}

	for i, v := range a {
		if v != b[i] {
			return false
		}
	}
	return true
}
