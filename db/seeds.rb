# Authors & References:
# JK Rowling
Author.create(fullName: "J.K. Rowling")
# HP Series	
Author.find_by(fullName: "J.K. Rowling").books.create(title: "Harry Potter and the Sorcerer's Stone", isReference: true) # 1
Author.find_by(fullName: "J.K. Rowling").books.create(title: "Harry Potter and the Chamber of Secrets", isReference: true) # 2
Author.find_by(fullName: "J.K. Rowling").books.create(title: "Harry Potter and the Prisoner of Azkaban", isReference: true) # 3
Author.find_by(fullName: "J.K. Rowling").books.create(title: "Harry Potter and the Goblet of Fire", isReference: true) # 4
Author.find_by(fullName: "J.K. Rowling").books.create(title: "Harry Potter and the Order of the Phoenix", isReference: true) # 5
Author.find_by(fullName: "J.K. Rowling").books.create(title: "Harry Potter and the Half Blood Prince", isReference: true) # 6
Author.find_by(fullName: "J.K. Rowling").books.create(title: "Harry Potter and the Deathly Hollows", isReference: true) # 7

# C.S. Lewis
Author.create(fullName: "C.S. Lewis")

# Chronicles of Narnia
Author.find_by(fullName: "C.S. Lewis").books.create(title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", isReference: true)
Author.find_by(fullName: "C.S. Lewis").books.create(title: "The Chronicles of Narnia: Prince Caspian", isReference: true) 
Author.find_by(fullName: "C.S. Lewis").books.create(title: "The Chronicles of Narnia: The Voyage of the Dawn Treader", isReference: true) 
Author.find_by(fullName: "C.S. Lewis").books.create(title: "The Chronicles of Narnia: The Silver Chair", isReference: true) 
Author.find_by(fullName: "C.S. Lewis").books.create(title: "The Chronicles of Narnia: The Horse and His Boy", isReference: true) 
Author.find_by(fullName: "C.S. Lewis").books.create(title: "The Chronicles of Narnia: The Magician's Nephew", isReference: true) 
Author.find_by(fullName: "C.S. Lewis").books.create(title: "The Chronicles of Narnia: The Last Battle", isReference: true)

# Stephen King
Author.create(fullName: "Stephen King")

Author.find_by(fullName: "Stephen King").books.create(title: "It", isReference: true)
Author.find_by(fullName: "Stephen King").books.create(title: "The Stand", isReference: true)
Author.find_by(fullName: "Stephen King").books.create(title: "Pet Sematary", isReference: true)
Author.find_by(fullName: "Stephen King").books.create(title: "The Dark Tower: The Gunslinger", isReference: true)
Author.find_by(fullName: "Stephen King").books.create(title: "The Talisman", isReference: true)
Author.find_by(fullName: "Stephen King").books.create(title: "Black House", isReference: true)

# Peter Straub 
Author.create(fullName: "Peter Straub")

Author.find_by(fullName: "Peter Straub").books.create(title: "Ghost Story", isReference: true)
# Written by Stephen King & Peter Straub
Book.find_by(title: "The Talisman").authors << Author.find_by(fullName: "Peter Straub") 
Book.find_by(title: "Black House").authors << Author.find_by(fullName: "Peter Straub") 

# Duplicates:

7.times{|x| Book.create(title: "Harry Potter ##{x+1}")}
Book.create(title: "Harry Potter numero uno")
Book.create(title: "Harry Potter numero dos")
Book.create(title: "Harry Potter numero tres")
Book.create(title: "Harry Potter numero cuatro")
Book.create(title: "Harry Potter numero cinco")
Book.create(title: "Harry Potter numero seis")
Book.create(title: "Harry Potter numero siete")
Book.create(title: "The Lion, the Witch and the Wardrobe")
Book.create(title: "Prince Caspian")
Book.create(title: "The Voyage of the Dawn Treader")
Book.create(title: "The Silver Chair")
Book.create(title: "The Horse and His Boy")
Book.create(title: "The Magician's Nephew")
Book.create(title: "The Last Battle")
Book.create(title: "The Gunslinger")
Book.create(title: "Dark tower #1")
Book.create(title: "Chronicles of Narnia #1")