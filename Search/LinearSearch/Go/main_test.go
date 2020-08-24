package main

import "testing"

func TestLinerSearchReturnTrue(t *testing.T) {
	got := LinearSearch([]int{1, 2, 3, 4, 5}, 5)
	expected := true

	if got != expected {
		t.Errorf("Got %t, expected %t", got, expected)
	}
}

func TestLinerSearchReturnFalse(t *testing.T) {
	got := LinearSearch([]int{1, 2, 3, 4, 5}, 10)
	expected := false

	if got != expected {
		t.Errorf("Got %t, expected %t", got, expected)
	}
}
