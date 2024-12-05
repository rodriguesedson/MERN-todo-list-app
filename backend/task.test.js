const url = 'http://localhost:3000/api/tasks';

describe("API tests", () => {
  it("Should create a new task and return status 201", async () => {
    const response = await fetch(`${url}/create`, {
      method: "POST",
      body: JSON.stringify({
        task: "Create a new task"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    expect(response.status).toBe(201);
  })

  it("Should find all tasks and return status 200", async () => {
    const response = await fetch(url);
    expect(response.status).toBe(200);
  })

  it("Should edit a task and return status 201", async () => {
    const response = await fetch(url);
    const json = await response.json();
    const id = json[json.length - 1]["_id"];
    const editResponse = await fetch(`${url}/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        status: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    expect(editResponse.status).toBe(201);
  })

  it("Should delete last taks created and return status 200", async () => {
    const response = await fetch(url);
    const json = await response.json();
    const id = json[json.length - 1]['_id'];
    const deleteResponse = await fetch(`${url}/delete/${id}`, {
      method: "DELETE"
    });

    expect(deleteResponse.status).toBe(200);
  })
})