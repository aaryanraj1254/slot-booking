📘 Slot Booking – University Sports Facility Scheduler

A smart web application that enables students to pre-book sports slots in the university sports complex.
This system reduces overcrowding, prevents booking conflicts, and ensures fair access to all sports facilities.

🚀 Features
🎯 Student Features

View real-time available time slots

Book or cancel sports slots

Prevent double booking / overlapping slots

Mobile and desktop responsive UI

View booking history

Receive booking confirmations

🛠 Admin Features

Add/Edit/Delete sports facilities

Manage slot timings

Track booking analytics

Manage students and special events

View daily/weekly capacity usage

🤖 AI/ML Features (Planned)

Predict peak usage hours

Recommend optimal play hours

Provide insights on demand trends

Predict no-shows

👥 Team Members & Role Distribution
Member	Role	Branch
Aaryan (Captain)	Backend Developer	backend
Pronaoy	Frontend Developer (React/Next.js)	frontend
Sourav	AI/ML + Backend Support	ai-ml

Everyone works in their own branch → changes are merged to main via Pull Requests.

🧱 Tech Stack
Frontend

React / Next.js

TailwindCSS

Axios

Vercel / GitHub Pages for deployment

Backend

Node.js

Express.js

PostgreSQL

Prisma ORM

JWT Authentication

Redis (optional for caching)

AI/ML

Python

NumPy, Pandas

Scikit-Learn

Jupyter Notebook

🌿 Branch Structure
main      → final stable production code  
backend   → backend APIs & DB logic  
frontend  → UI/UX, components & screens  
ai-ml     → ML models, notebooks, predictions  

🔄 Project Workflow
1. Clone the repository
git clone https://github.com/aaryanraj1254/slot-booking.git
cd slot-booking

2. Switch to your branch

Backend:

git checkout backend


Frontend:

git checkout frontend


ML:

git checkout ai-ml

3. Make changes & commit
git add .
git commit -m "your message"
git push origin <branch-name>

4. Create a Pull Request

Go to:

Pull Requests → New Pull Request


Choose:

base: main
compare: your-branch


Submit PR → Get reviewed → Approve → Merge.

🔐 Branch Protection Rules (Enabled)

PR required before merging

1 Approval required

Direct push to main NOT allowed

This keeps main clean & prevents code conflicts.

🔔 Pull Request Notifications

When someone opens a PR:

You get a GitHub notification (🔔 bell icon)

You get an email

It appears in Pull Requests tab

You can open the PR → review → approve → merge safely.

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
└── README.md   ← this file

🎯 Project Goal

To digitize the sports facility booking process, eliminate manual conflicts, and provide a seamless experience for students and admins.
Built as a collaborative 3-member project demonstrating full-stack, ML, and teamwork skills.

🚀 Future Enhancements

OTP-based login

In-app notifications

Payment module for rented equipment

Calendar view with drag-and-drop scheduling

AI-based auto-allocation for tournaments

👑 Maintainer

Aaryan Raj (Captain)
Project Lead – Backend Engineer