

Feature: Flipkart login
  add item to cart

      
      Scenario: buy product in Flipkart
      Given launch google chrome and hit flipkart url
      And navigate to fashion and clickon WomenEthnic
      And Clickon first product
      When i select size 
      And click on Buy Now
      Then i verified producted added successfully
      
      Scenario: Move product to Add to Cart
      Given launch google chrome and hit flipkart url
      And navigate to fashion and clickon WomenEthnic
      And Clickon first product
      When i select size 
      And click on Add to cart
      Then i verified producted added to cart successfully  
      
      
       
       
      
