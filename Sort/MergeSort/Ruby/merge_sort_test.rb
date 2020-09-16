require 'minitest/autorun'
require_relative 'merge_sort'


describe "merge_sort" do
  TEST_DATA = [8, 4, 3, 1, 2, 6, 5, 7];

  it "returns the position of the given value in the given list" do
    expect(merge_sort(TEST_DATA)).must_equal([1, 2, 3, 4, 5, 6, 7, 8])
  end

  it "raises NoSuchValueError when the given value dose not exist in the list" do
    expect{ merge_sort([]) }.must_raise(ArrayIsEmptyError)
  end
end
