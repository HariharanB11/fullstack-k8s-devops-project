# 🚀 Fullstack DevOps Project (Kubernetes + K3s)

## 📌 Project Overview
This is a full-stack Todo application deployed on Kubernetes (K3s) with a complete DevOps workflow.

## 🏗️ Architecture
Frontend (React) → Backend (Node.js/Express) → MongoDB  
Deployed using Kubernetes with Ingress routing.

## ⚙️ Tech Stack

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Containerization: Docker
- Orchestration: Kubernetes (K3s)
- Networking: Ingress Controller
- Version Control: Git & GitHub

## 🚀 Features

- Add Todo
- View Todos
- Delete Todo
- Full Kubernetes deployment
- Persistent storage using PVC
- Ingress-based routing

## 📁 Project Structure


backend/ → Node.js API
frontend/ → React UI
k8s/ → Kubernetes manifests


## ☸️ Kubernetes Components

- Deployments
- Services (ClusterIP, NodePort)
- Persistent Volume Claims
- Ingress

## 🔥 Challenges Faced & Fixes

- Fixed MongoDB connection issue (`ENOTFOUND mongodb`)
- Resolved Ingress routing issues
- Fixed CORS issues using relative API paths
- Implemented DELETE API for todo removal

## 🌐 Access


http://todoapp.test


## 📌 Future Improvements

- CI/CD using Jenkins
- Helm charts
- Monitoring with Prometheus & Grafana

## 👨‍💻 Author

Hariharan B
