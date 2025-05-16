from pathlib import Path

# Content for the Todo List App project plan in markdown format
todo_project_plan_md = """
# 💡 Project Idea: Todo List App

## 🎯 Kya banayenge?

Ek simple React app jisme user:

* Apna task likh sakta hai (📝 input field)
* “Add” button dabakar task list mein add kar sakta hai
* Neeche usko ek task list dikhayi degi
* Har task ke aage ❌ delete button hoga jo us task ko hata dega

---

## 🧱 Layout (Design ka Idea):

💻 **Screen simple and centered hoga**:

### 📥 Input Section:

* 🧍‍♂️ **Task Input Field**
* ➕ **Add Task Button**

### 📃 Todo List Section:

* ✅ Task Title  
* ❌ Delete Button

---

## 🔧 Kya sikhenge is project se?

| Feature                 | Kaunsa React Hook use hoga |
| ----------------------- | -------------------------- |
| Task add karna          | `useState()`               |
| Task delete karna       | `useState()`               |
| Input control karna     | `useState()`               |
| Task complete mark (bonus) | `useState()`           |

---

## ✅ Extra Features (Bonus):

* ✅ Checkbox: Task complete karne ke liye (line-through effect)
* 🗑️ "Clear All" Button
* 💡 Dark/Light Mode toggle (via `useState`)
* 💾 Tasks localStorage mein save karna (via `useEffect`)

---

## 🧠 Challenge Level:

* **Beginners to Intermediate**
* `useState` ka real-world use case samajhne ke liye
* List manipulation aur dynamic rendering practice karne ke liye

---

## 🧾 File Structure Idea:

TodoListApp/
├── src/
│ ├── App.jsx
│ ├── components/
│ │ ├── TodoInput.jsx
│ │ └── TodoList.jsx
│ ├── index.css
│ └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md