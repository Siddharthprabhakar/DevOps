# EduFlex Project

## Overview

EduFlex is a web application designed for managing educational courses, user enrollments, and teaching materials. This project demonstrates various DevOps concepts, including containerization with Docker, continuous integration/continuous deployment (CI/CD), and infrastructure as code.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)

## Technologies Used

- **Frontend:** React, React Router
- **Backend:** Node.js, Express, MySQL
- **Containerization:** Docker, Docker Compose
- **Version Control:** Git, GitHub

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/) installed
- Basic knowledge of Git and command line

### Clone the Repository

```bash
git clone https://github.com/Siddharthprabhakar/DevOps.git
cd DevOps

```
DevOps
├─ .git
├─ .gitignore
├─ client
│  ├─ .eslintrc.cjs
│  ├─ dist
│  │  ├─ assets
│  │  │  ├─ index-28d5b1de.js
│  │  │  ├─ index-e39fbe5f.css
│  │  │  ├─ Is-online-learning-as-good-as-face-to-face-learning-edited-1af625e5.jpg
│  │  │  └─ programming-023e974c.jpg
│  │  └─ index.html
│  ├─ Dockerfile
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ src
│  │  ├─ App.tsx
│  │  ├─ assets
│  │  │  ├─ circuits.jpg
│  │  │  ├─ finance.jpg
│  │  │  ├─ Is-online-learning-as-good-as-face-to-face-learning-edited.jpg
│  │  │  ├─ maths-fundamentals.jpg
│  │  │  ├─ mech.jpg
│  │  │  └─ programming.jpg
│  │  ├─ Assignment.tsx
│  │  ├─ AssignmentForm.tsx
│  │  ├─ Catalog.tsx
│  │  ├─ Certificate.tsx
│  │  ├─ CourseCard.tsx
│  │  ├─ CourseContainer.tsx
│  │  ├─ CourseInfo.tsx
│  │  ├─ EnrolledCatalog.tsx
│  │  ├─ Header.tsx
│  │  ├─ Home.tsx
│  │  ├─ index.css
│  │  ├─ Landing.tsx
│  │  ├─ Login.tsx
│  │  ├─ main.tsx
│  │  ├─ Material.tsx
│  │  ├─ MaterialForm.tsx
│  │  ├─ Query.tsx
│  │  ├─ QueryForm.tsx
│  │  ├─ ReviewForm.tsx
│  │  ├─ Signup.tsx
│  │  ├─ TabContent.tsx
│  │  ├─ TabNavItem.tsx
│  │  ├─ TeachCatalog.tsx
│  │  └─ vite-env.d.ts
│  ├─ tailwind.config.js
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ docker-compose.yml
├─ init
│  ├─ eduflexdb.sql
│  └─ my.cnf
├─ Jenkinsfile
├─ k8s
│  └─ app-deployments.yaml
├─ package-lock.json
├─ README.md
├─ server
│  ├─ connect.js
│  ├─ controllers
│  │  ├─ assignment.controller.js
│  │  ├─ category.controller.js
│  │  ├─ certificate.controller.js
│  │  ├─ course.controller.js
│  │  ├─ material.controller.js
│  │  ├─ query.controller.js
│  │  ├─ review.controller.js
│  │  └─ user.controller.js
│  ├─ docker-compose.yml
│  ├─ Dockerfile
│  ├─ index.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ routes
│     ├─ assignment.routes.js
│     ├─ category.routes.js
│     ├─ certificate.routes.js
│     ├─ course.routes.js
│     ├─ instructor.routes.js
│     ├─ material.routes.js
│     ├─ query.routes.js
│     ├─ review.routes.js
│     └─ user.routes.js
└─ terraform
   ├─ main.tf
   ├─ outputs.tf
   ├─ provider.tf
   ├─ userdata.sh
   └─ variables.tf

```