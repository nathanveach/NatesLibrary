require 'test_helper'

class Api::V1::AuthorsControllerTest < ActionController::TestCase

  def setup  
    @testAuthor = authors(:one)
  end

  test "should get index of authors" do
    get :index
    assert_response :success
    assert_not_nil :authors
  end

  test "should get author by params" do
    get :show, params: {id: @testAuthor.id}
    assert_response :success
    
    json = JSON.parse(response.body)
    assert_equal json["fullName"], @testAuthor.fullName
  end
    
end