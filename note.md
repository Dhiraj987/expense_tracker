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
                - Date
                - Timestamp
                - Category (the UI will provide some pre-defines category but also give user the ability to add a category)
                - Amount
                - Other Notes
            - Income: (this table will store all the income or earnings)
                - ID
                - Date
                - Timestamp
                - Source
                - Amount
                - Other notes
            - Overview: (this table is supposed to give an overview of the expense and income for each month)
                - ID
                - Category
                - Month
                - Year
                - Balance
                - Expenses
                - Income

        - all the tables are independent of one another
