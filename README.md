# Web Application Test Suite Documentation

This documentation outlines the test cases for the functionality of a web application. The tests are designed to validate the core features of adding and deleting tasks, as well as the state management of tasks within the application.

## Table of Contents
- [Adding a Task](#adding-a-task)
- [Deleting a Task](#deleting-a-task)
- [Test State Management](#test-state-management)

---

## Adding a Task

### Test Case 1: Does not accept an empty task

**Description:** This test ensures that attempting to add an empty task is not allowed.

**Steps:**
1. Visit the web application at 'http://localhost:3000'.
2. Click on the designated button.
3. Check the count of task lists with class 'lists'.

**Expected Outcome:** The count of task lists should remain 0, indicating that an empty task was not added.

### Test Case 2: Successfully adds a task

**Description:** This test verifies that a task can be successfully added to the task list.

**Steps:**
1. Visit the web application at 'http://localhost:3000'.
2. Type the text 'New Task' into the input field with data-test attribute 'inputs'.
3. Click the button with data-test attribute 'btn'.
4. Check if the task list contains an item with the text 'New Task'.

**Expected Outcome:** The task list should contain an item with the text 'New Task', confirming successful addition of the task.

---

## Deleting a Task

### Test Case: Successfully deletes a task

**Description:** This test ensures that a task can be deleted from the task list.

**Steps:**
1. Visit the web application at 'http://localhost:3000'.
2. Type 'First task' into the input field with data-test attribute 'inputs' and click the button with data-test attribute 'btn'.
3. Type 'Second task' into the input field and click the button.
4. Type 'Third task' into the input field and click the button.
5. Locate the first task in the task list using its data-test attribute 'lists'.
6. Click the delete button associated with the first task.
7. Check the count of task lists.

**Expected Outcome:** The count of task lists should be reduced to 1, confirming the successful deletion of the first task from the list.

---

## Test State Management

### Test Case: Checking if it's stored

**Description:** This test validates that the application's state is correctly managed after adding a task.

**Steps:**
1. Visit the web application at 'http://localhost:3000'.
2. Type 'First task' into the input field with data-test attribute 'inputs' and click the button with data-test attribute 'btn'.
3. Access the application's window object and retrieve the 'store' property.
4. Retrieve the state from the 'store'.

**Expected Outcome:** The retrieved state should match the expected structure and data: `{ Todo: { todos: [{id: 'First task', todo: 'First task'}] } }`. This confirms that the task has been correctly stored in the application's state.

---

Please note that the provided test cases assume that the web application behaves as described and the selectors ('data-test' attributes) are correctly implemented in the application's code.
