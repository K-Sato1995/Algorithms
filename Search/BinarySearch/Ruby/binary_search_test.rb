require 'minitest/autorun'
require_relative 'binary_search'


describe "Binary Search" do
  TEST_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it "returns the position of the given value in the given list" do
    expect(iterative_binary_search(TEST_DATA, 3)).must_equal(2)
  end

  it "raises NoSuchValueError when the given value dose not exist in the list" do
    expect{ iterative_binary_search(TEST_DATA, 100) }.must_raise(NoSuchValueError)
  end
end
