// NOTE: バックエンドのurlを指定すること
const base = 'https://effective-enigma-69v6x7j6rqgv246q4-4567.app.github.dev'

export const fetchTasks = async () => {
    return await fetch(`${base}/api/v1/tasks`).then(response => response.json())
};

export const createTask = async (task) => {
    const response = await fetch(`${base}/api/v1/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  };

  export const updateTask = async (id, updatedTask) => {
    const response = await fetch(`${base}/api/v1/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  };

  export const deleteTask = async (id) => {
    await fetch(`${base}/api/v1/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  };