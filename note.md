# The Expense Tracker Project

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
                - data fiels: ID, date, category, amount, notes
            - Income: (this table will store all the income or earnings)
                - data fiels: ID, date, source, amount, notes
                
            - Overview: (this table is supposed to give an overview of the expense and income for each month)
                - data fiels: ID, Category, Month, Year, Balance, Expenses, Income

        - all the tables are independent of one another
 3. Iteration/ Construction (1)
    
    - backend in iteration 1
    
        - ### List of APIs 

            - link: /
            - type: get
            - function: parses the balance table from the database in json <br />

            <img width="600" alt="Screen Shot 2021-12-15 at 12 22 35 AM" src="https://user-images.githubusercontent.com/54525683/146128400-96bc5555-ea0e-453f-978e-e3c95037c574.png">

    

            ### income 
            1.  
                - link: /inc
                - type: get
                - function: parses the income table from the database in json 
                <img width="550" alt="Screen Shot 2021-12-15 at 12 40 24 AM" src="https://user-images.githubusercontent.com/54525683/146129878-5c5fc6ba-5ebb-42c2-822f-2c76074e14d3.png">

            2.  
                - link: /inc
                - type: post
                - function: creates a new document of income
                - paramaters: [date, source, amount(required), notes] 
                <img width="550" alt="Screen Shot 2021-12-15 at 12 38 02 AM" src="https://user-images.githubusercontent.com/54525683/146129660-bff8fe78-6a0c-4f89-a4cd-13e5f913a8b2.png">

                
            3.  - link: /inc
                - type: patch
                - function: updates a previously stored income
                - parameteres: id <br />
                <img width="804" alt="Screen Shot 2021-12-15 at 12 38 58 AM" src="https://user-images.githubusercontent.com/54525683/146129760-162a116b-9f2e-44eb-8b1f-84c1be62d72e.png">


            4.  - link: /inc
                - type: delete
                - function: deletes a previously stored income
                - parameteres: id
                <img width="550" alt="Screen Shot 2021-12-15 at 12 41 10 AM" src="https://user-images.githubusercontent.com/54525683/146129945-f3d3e8a2-2dbc-4025-ba1c-d63f153127d6.png">


            ### expense
            1. - link: /exp
            - type: get
            - function: returns all the expenses from the expense table      
            <img width="550" alt="Screen Shot 2021-12-15 at 12 34 41 AM" src="https://user-images.githubusercontent.com/54525683/146129342-f3d9c6b1-acc8-47e1-a53c-7d212afe851a.png">
      

            - link: /exp
            - type: post
            - function: creates a new document of expense
            - parameteres: [date, category, amount, notes]
            <img width="550" alt="Screen Shot 2021-12-15 at 12 28 23 AM" src="https://user-images.githubusercontent.com/54525683/146128754-c441a16f-01c9-40e1-8672-55b16f253f28.png">


            - link: /exp
            - type: patch
            - function: updates a previously stored income
            - parameteres: id
            <img width="550" alt="Screen Shot 2021-12-15 at 12 33 23 AM" src="https://user-images.githubusercontent.com/54525683/146129217-cef4ac92-b312-4cb9-bbeb-a247fb6b5ce6.png">


            - link: /exp
            - type: delete
            - function: deletes a specific entry of expense with id
            - parameteres: id
            <img width="550" alt="Screen Shot 2021-12-15 at 12 35 36 AM" src="https://user-images.githubusercontent.com/54525683/146129427-fbaaeaf0-c39f-424b-9f99-3ec3e460baa6.png">


    
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
