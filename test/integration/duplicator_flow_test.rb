require "test_helper"

class DuplicatorFlowTest < ActionDispatch::IntegrationTest

  test "makeDuplicate flow test" do
    # Makes sure a new Duplicator record is added if not there already
    assert_difference "Duplicator.count" do 
      post "/api/v1/duplicator/create/1",
      params: {reference_id: 2}  
    end  
    assert_response :success

    # Doesn't add a new Duplicator record if it already exists
    assert_no_difference "Duplicator.count" do 
      post "/api/v1/duplicator/create/1",
      params: {reference_id: 2}  
    end  
    assert_response :success
        
    json = JSON.parse(response.body)
    
    # Makes sure the old reference updates book.isReference == false
    assert_not json["isReference"]
    # Makes sure new reference book.isReference == true
    assert json["reference"]["isReference"]

    # Add a test to make sure the new reference receives the old reference's duplicates
  end

  test "changeReference flow test" do
    # Makes sure no records are added/deleted since we're just updating 
    assert_no_difference "Duplicator.count" do
      patch "/api/v1/duplicator/update/3", 
        params: {reference_id: 1}
    end
    assert_response :success
    
    json = JSON.parse(response.body)
    # Makes sure the reference matches the above reference_id params
    assert_equal json["reference"]["id"], 1

    assert_not json["isReference"]
    assert json["reference"]["isReference"]
  end

  test "makeReference flow test" do
    # Makes sure that the new reference destroys it's old reference if there is one
    assert_changes "Duplicator.count" do 
      delete "/api/v1/duplicator/destroy/2"
    end
    assert_response :success

    json = JSON.parse(response.body)
    
    assert json["isReference"]
  end
end
