# 🐋 Containerized Node.js & MongoDB Full-Stack Application

This repository showcases a fully containerized, modern full-stack web application.
It features a Node.js/Express backend server that connects securely to a MongoDB database container running inside an isolated Docker network.

## 🚀 Key Features Demonstrated
* **Microservices Architecture:** Frontend, backend, and database are completely decoupled.
* **Secure Database Networking:** The MongoDB container is locked inside a private virtual network, exposing no public host ports for maximum security.
* **Asynchronous Form Resets:** Developed a custom asynchronous JavaScript delay to prevent input clearing before form submissions successfully POST to the Express server.
* **Cloud-First Development:** Built and debugged entirely using a cloud-hosted hybrid environment (GitHub Codespaces and VS Code).

## 🛠️ Built With
* **Backend:** Node.js, Express.js, MongoDB Driver
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **DevOps/Infrastructure:** Docker, Docker Networking, GitHub Codespaces

## ⚡ How to Run This Project Locally

### Prerequisites
* Docker installed on your host machine.

### 1. Create a custom private Docker network
```bash
docker network create mongo-network



# Run the MongoDB Container

docker run -d \
  --name mongo \
  --network mongo-network \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=delta_admin \
  -e MONGO_INITDB_ROOT_PASSWORD=delta_password \
  mongo

# Install Dependencies & Start the Node Server

npm install
node server.js