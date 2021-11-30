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
            - Expense:
                - ID
                - Date
                - Timestamp
                - Category (the UI will provide some pre-defines category but also give user the ability to add a category)
                - Amount
                - Other Notes
            - Income:
                - ID
                - Date
                - Timestamp
                - Source
                - Amount
                - Other notes
            - Category:
                - ID
                - Title

        - only expense and category table will be dependent on one another and all other tables are independent

        