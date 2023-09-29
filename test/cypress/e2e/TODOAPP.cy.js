describe("TodoList App", () => {
  let totalMarks = 0;

  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Make sure your app is running on port 3000
  });

  // marks 1
  it("should add a new task - marks 2", () => {
    // Type a new task and click the "Add" button
    cy.get("input[type='text']").type("New Task");
    cy.get("button:contains('Add')").click();

    // Check if the task is added to the list
    cy.get(".todo-item").should("have.length", 1);
    cy.contains(".todo-item", "New Task").should("exist");
  });

  // marks 1
  it("should toggle task completion - marks 1", () => {
    // Add a task
    cy.get("input[type='text']").type("Toggle Task");
    cy.get("button:contains('Add')").click();

    // Find the todo item containing "Toggle Task"
    cy.get(".todo-item")
      .contains("Toggle Task")
      .within(() => {
        // Click the span to toggle completion
        cy.get("span").click();

        // Check if the task is marked as completed
        cy.get("span").should("have.class", "completed");
      });

    // Toggle the task again
    cy.get(".todo-item")
      .contains("Toggle Task")
      .within(() => {
        cy.get("span").click();

        // Check if the task is marked as pending (not completed)
        cy.get("span").should("have.class", "pending");
      });
  });

  // marks 1
  it("should delete a task - marks 1", () => {
    // Add a task
    cy.get("input[type='text']").type("Delete Task");
    cy.get("button:contains('Add')").click();

    // Wait for the todo item to appear
    cy.get(".todo-item")
      .should("exist")
      .then(() => {
        // Delete the task
        cy.get(".todo-item")
          .contains("Delete Task")
          .parent()
          .within(() => {
            cy.get("button:contains('Delete')").click();
          });

        // Check if the task is deleted
        // cy.get(".todo-item").should("not.contain", "Delete Task");
        cy.get("input[type='text']").type("New Task");
        cy.get("button:contains('Add')").click();

        // Check if the task is added to the list
        cy.get(".todo-item").should("have.length", 1);
        cy.contains(".todo-item", "New Task").should("exist");
      });
  });

  // marks 1
  it("should delete completed tasks - marks 1", () => {
    // Add completed and pending tasks
    cy.get("input[type='text']").type("Completed Task");
    cy.get("button:contains('Add')").click();

    cy.get("input[type='text']").type("Pending Task");
    cy.get("button:contains('Add')").click();

    // Toggle one task to complete it
    cy.get(".todo-item")
      .contains("Completed Task")
      .within(() => {
        cy.get("span").click();
      });

    // Click "Delete Completed" button
    cy.get("button:contains('Delete Completed')").click();

    // Check if the completed task is deleted and pending task remains
    cy.get(".todo-item").should("have.length", 1);
    cy.contains(".todo-item", "Completed Task").should("not.exist");
    cy.contains(".todo-item", "Pending Task").should("exist");
  });

  // marks 1
  // it("should delete completed tasks - marks 1", () => {
  //   // Add completed and pending tasks
  //   cy.get("input[type='text']").type("Completed Task");
  //   cy.get("button:contains('Add')").click();

  //   cy.get("input[type='text']").type("Pending Task");
  //   cy.get("button:contains('Add')").click();

  //   // Toggle one task to complete it
  //   cy.get(".todo-item")
  //     .contains("Completed Task")
  //     .within(() => {
  //       cy.get("span").click();
  //     });

  //   // Click "Delete Completed" button
  //   cy.get("button:contains('Delete Completed')").click();

  //   // Check if the completed task is deleted
  //   cy.get(".todo-item").should("not.contain", "Completed Task");

  //   // Check if the pending task still exists
  //   cy.get(".todo-item").contains("Pending Task").should("exist");
  // });

  // marks 1
  it("should filter tasks by 'All' - marks 1", () => {
    // Add some tasks
    cy.get("input[type='text']").type("Task 1");
    cy.get("button:contains('Add')").click();
    cy.get("input[type='text']").type("Task 2");
    cy.get("button:contains('Add')").click();

    // Click the 'All' filter button
    cy.contains("button", "All").click();

    // Check if both tasks are visible
    cy.get(".todo-item").should("have.length", 2);
  });

  // marks 2
  it("should filter tasks by 'Completed' - marks 2", () => {
    // Add some tasks, mark one as completed
    cy.get("input[type='text']").type("Task 1");
    cy.get("button:contains('Add')").click();
    cy.get("input[type='text']").type("Task 2");
    cy.get("button:contains('Add')").click();

    // Mark one task as completed
    cy.get(".todo-item")
      .contains("Task 1")
      .within(() => {
        cy.get("span").click();
      });

    // Click the 'Completed' filter button
    cy.get("#Completed").contains("Completed").click();

    // Check if the completed task is visible
    cy.get(".todo-item").should("have.length", 1);
    cy.get(".todo-item").should("contain", "Task 1");
  });

  // marks 2
  it("should filter tasks by 'Pending' - marks 2", () => {
    // Add some tasks, mark one as completed
    cy.get("input[type='text']").type("Task 1");
    cy.get("button:contains('Add')").click();
    cy.get("input[type='text']").type("Task 2");
    cy.get("button:contains('Add')").click();

    // Mark one task as completed
    cy.get(".todo-item")
      .contains("Task 1")
      .within(() => {
        cy.get("span").click();
      });

    // Click the 'Pending' filter button
    cy.contains("button", "Pending").click();

    // Check if the pending task is visible
    cy.get(".todo-item").should("have.length", 1);
    cy.get(".todo-item").should("contain", "Task 2");
  });

  it("page should load -marks 0", () => {});

  Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "passed") {
      // If the test passed, add its marks
      console.log("passed");
      const marks = parseInt(runnable.title.match(/marks (\d+)/)[1]);
      totalMarks += marks;
    } else if (test.state === "failed") {
      console.log("failed");
      // If the test failed, add 0 marks
      totalMarks += 0;
    }
  });

  after(() => {
    cy.log(totalMarks);
  });
});
