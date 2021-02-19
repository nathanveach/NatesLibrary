require 'test_helper'

class Api::V1::BooksControllerTest < ActionController::TestCase

  def setup  
    @testReference = books(:one)
    @testDuplicate = books(:two)
  end

  test "should get index of books" do
    get :index
    assert_response :success
    assert_not_nil :books
  end

  test "should get book by params" do
    get :show, params: {id: @testReference.id}
    assert_response :success

    json = JSON.parse(response.body)
    assert_equal json["title"], @testReference.title 
  end
    
  test "referenceList shows books with isReference: true" do
    get :referenceList
    assert_response :success

    json = JSON.parse(response.body)

    assert_not_equal json.sample["id"], @testDuplicate.id
    assert_equal json.sample["id"], @testReference.id
  end
end