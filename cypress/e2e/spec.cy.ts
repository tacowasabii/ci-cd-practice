// describe("template spec", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });

//   it('should contain "App Router" text', () => {
//     cy.contains("App Router");
//   });
// });

describe("할 일 목록 앱", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/todos");
  });

  it("새로운 할 일을 추가할 수 있다", () => {
    const newTask = "리액트 공부하기";
    cy.get("[data-testid=new-task-input]").type(newTask);
    cy.get("[data-testid=add-task-button]").click();
    cy.get("[data-testid=task-0]").should("contain", newTask);
  });

  it("할 일을 삭제할 수 있다", () => {
    const newTask = "운동하기";
    cy.get("[data-testid=new-task-input]").type(newTask);
    cy.get("[data-testid=add-task-button]").click();
    cy.get("[data-testid=remove-task-0]").click();
    cy.get("[data-testid=task-0]").should("not.exist");
  });

  it("빈 문자열은 추가되지 않는다", () => {
    cy.get("[data-testid=add-task-button]").click();
    cy.get("[data-testid=task-0]").should("not.exist");
  });
});
