# Nate's Library 📚
Ruby 3.0 / Rails 6.1.2.1 / ReactJS 17.0.1
Library App for Whooo's Reading :)  
run `npm install`  
run `bundle install`  
run `rails db:migrate`  
run `rails db:seed`  
run `rails s`  

## Tests
`run rake test`

**Functional Controller Tests**  
test/functional/authors_controller_test.rb  
test/functional/books_controller_test.rb  

**Integration Tests**  
test/integration/duplicator_flow_test.rb


## React schematics
javascript/packs/index.jsx ← Entry point  
javascript/routes/index.jsx ← Front end routes  
javascript/components/app.jsx ← Entry point into components  
javascript/components/homepage.jsx  
javascript/components/books/book_view.jsx  
Javascript/components/books/book_index.jsx  
javascript/components/authors/author_view.jsx  
javascript/components/authors/author_index.jsx  
javascript/components/duplicator/make_duplicate.jsx  
javascript/components/duplicator/change_reference.jsx  
javascript/components/duplicator/make_reference.jsx  

## Upcoming Features
**Upgrade DB**  
  Upgrade database to something like postgres for production  
    
**Finish Styling Front End**  
  Add a Navbar and breadcrumbs  
  Add images and icons throughout  
 
**Add Search Bar Feature**  
  Download ransack gem and create a search route and controller action  
  Create Search Component with a state to hold user text input and call rails API
  
**Add RSpec Gem**  
  Use RSpec for more encompassing tests instead of minitest
    
**Import Bootstrap properly**  
  Import Bootstrap CSS through the back end and not via CDN
    
**Clean up Rails boilerplate**  
  Remove any unnecessary code rails loves to throw in there  
  
**Use Axios instead of FetchAPI**  
  Import and use Axios for AJAX calls  
  Better error handling and more features with Axios 
 
**Add another create duplicates method**  
  Add a create method to be able to create duplicates from a reference page  
 
**Refactor Book View Component**  
  Refactor or create new components to clean up all the conditional rendering
 
**Add Authors list to duplicates and vice versa**  
  Only reference books are showing authors at the moment  
  Add a conditional render/new component to map over Book.reference.authors for duplicate books  
  
**Use async/await instead of promises**  
  Update all useEffect hooks with async / await  
  Test for UI edge cases  
  
## Completed Features
**Front End Styling**  
  Import Bootstrap CSS library via CDN into header  
  Add grid layout and styles to React components    
  
**Duplicator Components**  
  Create changeReference, makeReference, and makeDuplicate components containing form with an input for new reference  
  changeReference sends PATCH request to API with new reference in a FormData object  
  makeDuplicate sends POST request to API  with new reference in a FormData object  
  makeReference sends DELETE request to API to delete any old references  
  Grab props from parent component: Book View  
  
**Books/Authors components**  
  Create states to hold all necessary data  
  Use the Effect hook with Fetch to hit my Rails API and store response data in state  
  Write basic HTML to map over and display all data    
  
**React Initial Setup**  
Create initial directories and include Routes with BrowserRouter  
Create a homepage component for Authors/Books index  
Create a show/index component for Authors/Books  
Create 3 components with forms for the 3 Duplicator controller actions  
  
**Testing**  
Write functional tests for actions on Authors/Books  
Write Integration tests for each action in Duplicator controller  

**Controllers/Routes**  
  Create Books/Authors controller with Show/Index actions and routes  
  Create getReference action/route for a list of all references  
  Create Duplicator controller with actions/routes for:  
    - Making a book a duplicate (create)  
    - Changing a book's reference (update)  
    - Making a book a reference (delete)  
    
**Models/Schema**  
  Create Books, Authors, and Duplicator models  
  Set up many to many relationship between Authors and Books with a simple joined table  
  Set up joined table between Books and Book (Duplicates and Reference)  
  Set up many to many relationship with Books using alias :duplicates (many books can have many duplicates)  
  Set up many to one relationship with Books using alias :reference (many books can only have one reference each)  
    
**Initial Setup**  
  Set up Rails 6 with webpacker and React/react-router-dom support  
  Create homepage and catch route for react/Add js pack tag to header  
  
  
  
