# Refactoring, a first example
## by Martin Fowler
## adapted to Typescript by Paul Slusarz

This is the first example from the first edition of Martin Fowler's "Refactoring" book. I remember that when I first saw it, it blew my mind, and so I chose to reproduce it here, based on the following article:

https://www.cs.unc.edu/~stotts/COMP204/refactor/chap1.html

You are on the solutions branch, which contains a finished refactoring. To see it performed step by step, you can diff each commit.

Note, a few comments since I had to veer from Martin's original.
- Iterators were replaced with modern forEach and reduce
- I left original version of htmlStatement, which contains obvious html issues
- I left DomainObject alone, even though it serves no purpose in the example
- I noticed way too late in the process that I named the loop variable "rental," like is a convention in my neck of the woods, where it is named "each" in the original
- I had to make quite a few changes to the final Price extraction
    - I had to introduce PriceFactory to hold references to price singleton subclasses since circular references are not allowed in typescript
    - I chose not to have methods makeRegular, etc. and not to have special movie constructors for new price. Given I had no other code as context except the tests, it was much cleaner to leave things as is and just replace Price enum with Price class in the movie constructor.
