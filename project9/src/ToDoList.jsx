
import { useEffect, useState } from "react";
import "./ToDoList.css";

const STORAGE_KEY = "smart-todo-tasks";

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [task, setTask] = useState("");
  const [category, setCategory] = useState("College");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();

    if (!task.trim()) {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: task.trim(),
      category,
      priority,
      dueDate,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);

    setTask("");
    setCategory("College");
    setPriority("Medium");
    setDueDate("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditText(item.title);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) {
      return;
    }

    setTasks((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, title: editText.trim() }
          : item
      )
    );

    setEditingId(null);
    setEditText("");
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((item) => !item.completed));
  };

  const filteredTasks = tasks.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (!matchesSearch) {
      return false;
    }

    if (filter === "Active") {
      return !item.completed;
    }

    if (filter === "Completed") {
      return item.completed;
    }

    if (filter === "High Priority") {
      return item.priority === "High";
    }

    return true;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((item) => item.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="todo-container">

        {/* HEADER */}
        <header className="header">
          <div>
            <h1>My To-Do List</h1>
            <p>Organize your day, one task at a time ✨</p>
          </div>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </header>

        {/* STATISTICS */}
        <div className="stats">

          <div className="stat-card">
            <div className="stat-icon blue">📋</div>
            <div>
              <h2>{totalTasks}</h2>
              <p>Total Tasks</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">⏳</div>
            <div>
              <h2>{pendingTasks}</h2>
              <p>Pending</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✅</div>
            <div>
              <h2>{completedTasks}</h2>
              <p>Completed</p>
            </div>
          </div>

        </div>

        {/* ADD TASK */}
        <form className="add-task" onSubmit={addTask}>

          <input
            type="text"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>College</option>
            <option>Personal</option>
            <option>Work</option>
            <option>Shopping</option>
            <option>Other</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <button type="submit" className="add-btn">
            + Add Task
          </button>

        </form>

        {/* SEARCH */}
        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search your tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FILTERS */}
        <div className="filters">

          {["All", "Active", "Completed", "High Priority"].map(
            (item) => (
              <button
                key={item}
                className={filter === item ? "filter active" : "filter"}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            )
          )}

        </div>

        {/* TASK LIST */}
        <div className="task-section">

          <div className="section-title">
            <h2>My Tasks</h2>

            {completedTasks > 0 && (
              <button
                className="clear-btn"
                onClick={clearCompleted}
              >
                Clear Completed
              </button>
            )}
          </div>

          {filteredTasks.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">📝</div>
              <h3>No tasks found</h3>
              <p>Add a new task to get started!</p>
            </div>
          ) : (
            <div className="task-list">

              {filteredTasks.map((item) => (

                <div
                  className={
                    item.completed
                      ? "task-card completed"
                      : "task-card"
                  }
                  key={item.id}
                >

                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleTask(item.id)}
                  />

                  <div className="task-content">

                    {editingId === item.id ? (
                      <div className="edit-area">
                        <input
                          value={editText}
                          autoFocus
                          onChange={(e) =>
                            setEditText(e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              saveEdit(item.id);
                            }

                            if (e.key === "Escape") {
                              setEditingId(null);
                            }
                          }}
                        />

                        <button
                          onClick={() => saveEdit(item.id)}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <>
                        <h3>{item.title}</h3>

                        <div className="task-info">

                          <span className="category">
                            📂 {item.category}
                          </span>

                          <span
                            className={`priority ${item.priority.toLowerCase()}`}
                          >
                            {item.priority}
                          </span>

                          {item.dueDate && (
                            <span className="date">
                              📅 {item.dueDate}
                            </span>
                          )}

                        </div>
                      </>
                    )}

                  </div>

                  <div className="task-actions">

                    {editingId !== item.id && (
                      <button
                        className="edit-btn"
                        onClick={() => startEdit(item)}
                      >
                        ✏️
                      </button>
                    )}

                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(item.id)}
                    >
                      🗑️
                    </button>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

        {/* PROGRESS */}
        <div className="progress-section">

          <div className="progress-header">
            <span>Today's Progress</span>
            <strong>{progress}%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p>
            {completedTasks} of {totalTasks} tasks completed
          </p>

        </div>

        <footer>
          Smart To-Do List • Built with React ⚛️
        </footer>

      </div>
    </div>
  );
}

export default ToDoList;

