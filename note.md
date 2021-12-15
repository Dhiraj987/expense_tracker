1. Concept:
    - create a expense tracker that helps track expenses and store all the expenses
    - store income/ earning, to get a feel of money in hand
    - Add category to each expense for better understanding of the trend in expenses

2. Inception:
    
    - Backend:
        - nodejs and express will be used to support the application
        - the API documentation will be covered via swagger
    - Frontend:
        - reactjs will be used to create the UI
    - Database:
        - MongoDB will be used as database management for this project
        - there will be at least two tables to track expenses and income
            - Expense: (this table will store all the expenses)
                - ID
                - date
                - category (the UI will provide some pre-defines category but also give user the ability to add a category)
                - amount
                - notes
            - Income: (this table will store all the income or earnings)
                - ID
                - date
                - source
                - amount
                - notes
            - Overview: (this table is supposed to give an overview of the expense and income for each month)
                - ID
                - Category
                - Month
                - Year
                - Balance
                - Expenses
                - Income

        - all the tables are independent of one another
 3. Iteration/ Construction (1)
    
    - backend in iteration 1
    
        - ### List of APIs 

            - link: /
            - type: get
            - function: parses the balance table from the database in json <br />

            ### income 
            1.  
                - link: /inc
                - type: get
                - function: paeses the income table from the database in json <br />

            2.  
                - link: /inc
                - type: post
                - function: creates a new document of income
                - paramaters: [date, source, amount(required), notes] <br />
                
            3.  - link: /inc
                - type: put
                - function: updates a previously stored income
                - parameteres: id <br />

            4.  - link: /inc
                - type: delete
                - function: deletes a previously stored income
                - parameteres: id


            ### expense
            1. - link: /exp
            - type: get
            - function: returns all the expenses from the expense table            

            - link: /exp
            - type: post
            - function: creates a new document of expense
            - parameteres: [date, category, amount, notes]

            - link: /exp
            - type: put
            - function: updates a previously stored income
            - parameteres: 

            - link: /exp
            - type: delete
            - function: deletes a specific entry of expense with id
            - parameteres: id

    
    - frontend in iteration 1
           the frontend in iteration 1 has three pages, the balance page, income page, and expense page
           there will be some updates in the second iteration
    
    - databse in iteration 1
            [Mongodb Atlas](https://www.mongodb.com/atlas/database) was used to store the data in cloud
            the schema mentioned above was implemented

4. TODOs for iteration 2
        - extend the front end to include create and update
        - style the front end
        - document the APIs using swagger
