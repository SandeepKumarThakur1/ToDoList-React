# 💡 Project Idea: Todo List App

## 🎯 What will we build?

A simple React app where the user can:

* Write tasks in an **📝 input field**
* Add them to a list by clicking the **“Add”** button
* See a list of tasks below the input
* Delete a task by clicking the **❌ delete button** next to it

---

## 🧱 Layout (Design Idea):

💻 **The screen will be simple and centered**:

### 📥 Input Section:

* 🧍‍♂️ **Task Input Field**
* ➕ **Add Task Button**

### 📃 Todo List Section:

* ✅ Task Title  
* ❌ Delete Button

---

## 🔧 What will you learn from this project?

| Feature                        | React Hook to be used     |
|-------------------------------|---------------------------|
| Adding a task                 | `useState()`              |
| Deleting a task               | `useState()`              |
| Handling input control        | `useState()`              |
| Marking task as complete (bonus) | `useState()`           |

---

## ✅ Extra Features (Bonus):

* ✅ Checkbox to mark task as complete (with line-through effect)
* 🗑️ "Clear All" Button
* 💡 Dark/Light Mode toggle (using `useState`)
* 💾 Save tasks in localStorage (using `useEffect`)

---

## 🧠 Challenge Level:

* **Beginner to Intermediate**
* Great for understanding real-world use of `useState`
* Practice with list manipulation and dynamic rendering

---

## 🧾 Suggested File Structure:

```
TodoListApp/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── TodoInput.jsx
│   │   └── TodoList.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md
```