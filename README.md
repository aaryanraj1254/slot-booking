📘 Slot Booking – University Sports Facility Scheduler

A smart booking system that lets students pre-book sports slots in the university sports complex.
It reduces overcrowding, prevents conflicts, and ensures fair access to sports facilities.

🚀 Features
🎯 Student Features

View real-time available slots

Book, cancel, or modify slots

Prevent double-booking / clashes

Fully responsive UI (mobile + desktop)

Booking history & upcoming bookings

Instant confirmation messages

🛠 Admin Features

Add / edit / delete sports facilities

Manage daily slot timings

View booking statistics

Handle tournaments / special events

Track weekly or monthly usage

🤖 AI/ML Features (Planned)

Predict peak time slots

Recommend optimal play hours

Analyze booking trends

Predict no-shows & cancellations

👥 Team Members & Roles
Member	Role	Branch
Aaryan (Captain)	Backend Developer	backend
Pronaoy	Frontend Developer (React/Next.js)	frontend
Sourav	AI/ML + Backend Support	ai-ml

Each teammate works in their own branch → all changes go to main through Pull Requests.

🧱 Tech Stack
Frontend

React / Next.js

TailwindCSS

Axios

Deployed via Vercel or GitHub Pages

Backend

Node.js

Express.js

PostgreSQL

Prisma ORM

JWT Authentication

Redis (optional for caching)

AI / Machine Learning

Python

Pandas, NumPy

Scikit-Learn

Jupyter Notebook

🌿 Branch Strategy
main      → final, stable production code  
backend   → backend APIs and database logic  
frontend  → UI/UX, pages, components  
ai-ml     → ML models, notebooks, predictions  

🔄 Project Workflow (How We Work as a Team)
1️⃣ Clone the Repository
git clone https://github.com/aaryanraj1254/slot-booking.git
cd slot-booking

2️⃣ Switch to Your Assigned Branch

Backend:

git checkout backend


Frontend:

git checkout frontend


ML:

git checkout ai-ml

3️⃣ Make Changes & Commit
git add .
git commit -m "your message"
git push origin <branch-name>

4️⃣ Create a Pull Request

Go to Pull Requests

Click New Pull Request

Set**

base: main

compare: your-branch

Submit PR → get it reviewed → approve → merge

🔐 Branch Protection Rules (Enabled on main)

✔ Pull Request required

✔ Minimum 1 approval

✔ No direct pushes to main

Keeps main clean and stable.

🔔 Pull Request Notifications

When a teammate creates a PR:

You get a 🔔 GitHub notification

You get an email

It appears under Pull Requests

You can open → review → approve → merge.

📁 Recommended Folder Structure
slot-booking/
│
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── ai-ml/
│   ├── notebooks/
│   ├── models/
│   ├── data/
│   └── README.md
│
└── README.md   ← main project documentation

🎯 Project Goal

To modernize the sports facility booking experience by eliminating manual conflicts, reducing crowding, and providing a simple, intuitive web interface for students and admins.

Built as a 3-member collaborative full-stack + ML project showcasing teamwork, backend architecture, UI/UX, and predictive analytics.

🚀 Future Enhancements

OTP-based login system

Real-time notifications

Payment module for equipment rentals

Drag-and-drop calendar scheduling

AI-powered automatic slot allocation for tournaments

👑 Maintainer

Aaryan Raj (Captain)
Backend Lead & Project Coordinator


