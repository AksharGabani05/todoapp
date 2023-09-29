<!-- TODO APP -->

# Create a ToDo App in React using state

## Your app should include the following features:
- Users should be able to add new todos.
- All todos should be displayed in the UI.
- Implement a toggle function for each todo.
- Implement a delete function for individual todos.
- Implement a delete completed function.
- Add filter functionality, where clicking on "Pending" shows all pending todos, and clicking on "Completed" shows all completed todos.
- Add new todos with the format: { task: "React learning", isCompleted: false }

## Problem Statement:
- Follow the instructions strictly.
- Total marks: 10.
- Always handle errors and edge cases.
- test is case sensitive  if here written in capital case write capital case follow each and every thing

## Instructions:
1. Navigate to the 'todo' directory.
2. Run 'npm install'.
3. Start your React app using 'npm start'. Ensure that your app is running on localhost:3000.

## Important:
- if you want to delete template code you can but you have to follow instruction step by step.

## Input (2 marks):
- Create an input tag with the type "text".
- Create a button with the label "Add". This button should have an onclick function that adds data to the todos array and displays it in the UI.

## Display Todos:
- Create a parent `ul` with the className "todo-list".
- Output: Display all the todos stored in the array using the `map` function.
- For each item in the list, create an `li` element with the className "todo-item".

## Status with Toggle Function (1 mark):
- Inside each `li`, add a `span` tag with the className "completed" if `todo.isCompleted` is true; otherwise, give it the className "pending".
- If `todo.isCompleted` is true, display "Completed" on the UI; otherwise, display "Pending".
- Implement a toggle function that switches between "Completed" and "Pending" when clicked.

## Delete Function (1 mark):
- Add a "Delete" button to each individual todo.

## Delete All Completed (1 mark):
- Create a button with the label "Delete Completed". When clicked, all completed tasks should be deleted.

## Filters (Total marks: 5):
- Create three buttons: "All", "Pending", and "Completed". Give them the same id as there name.
- When any button is clicked, it should display todos according to the action chosen.

## Test Your Score:
1. Navigate to the 'test' directory. =>cd test
2. Run 'npm i'. If you encounter any errors during installation, you can use the following command:=>   ./node_modules/.bin/cypress install
3. npx cypress open or npx cypress run
     
  
  # BEST OF LUCK 




