
# Backend Installation Guide

Welcome to the backend installation guide for our Blogging Website! Below are the steps to set up and run the backend locally.

# Prerequisites
Before you begin, ensure you have the following installed on your machine:

- **Node.js**
- **npm** (Node Package Manager)
- **PostgresSQL** (Either Locally or Cloud URL)
- **Wrangler**(Cloudflare Workers CLI) - for deployment
## Installation Steps

1. **Clone the Project**:
```bash
git clone https://github.com/RushikeshShelar/Blogging-Website-.git
```
    
2. **Navigate to the Backend Folder**:
```bash
cd backend
```

3. **Install Dependencies**:
```bash
npm install
```

4. **Create .env**:
   Create a file named `.env` in the backend folder and add the following contents:

```bash
DATABASE_URL="<YOUR_POSTGRES_DATABASE_URL>"
ACCELERATE_DATABASE_URL="<YOUR_PRISMA_ACCELERATE_URL>"
```

5. **Update Wrangler Configuration**:
   Update the `wrangler.toml` file with your database URL and JWT secret.
Here's a sample `wrangler.toml` file:

```bash
name = "backend"
compatibility_date = "2023-12-01"

[vars]
DATABASE_URL="<YOUR_ACCELERATE_DATABASE_URL>"
JWT_SECRET="<YOUR_JWT_SECRET>"
```

6. **Migrate the Database**:
```bash
npx prisma migrate --name local-init
```


7. **Generate the Prisma Client**:
```bash
npx prisma generate --no-engine
```
## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `deploy`        | Deploys the backend to Cloudfare Workers |

### Running Locally

To start the backend server locally, run:
```bash
npm run dev
```

### Deployment to Cloudflare
To deploy the backend to Cloudflare, follow these steps:

1. **Install Wrangler**: If you haven't already installed Wrangler, run:
```bash
npm install wrangler --save-dev
```

2. **Login to Wrangler**: Login to Wrangler using the CLI:
```bash
wrangler login
```

3. **Deploy the Backend**: Deploy the backend to Cloudfare using:
```bash
npm run deploy
```
These instructions should help you set up the backend environment for your Blogging Website. If you encounter any issues or have questions, feel free to reach out!





