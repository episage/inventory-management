# Inventory Management System

This is a simple inventory management system built with Node.js, Express.js, and MongoDB, with Docker Compose to manage the application and database.

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Running the Application

1. Build and start the database:

    ```bash
    docker-compose up --build
    ```

2. Run the application:

    ```bash
    node src/app.js
    ```

The application should now be running at `http://localhost:3000`.

## API Endpoints

### 1. Retrieve a list of all products

```bash
curl -X GET http://localhost:3000/api/products
```

### 2. Create a new product

```bash
curl -X POST http://localhost:3000/api/products \
     -H "Content-Type: application/json" \
     -d '{
           "name": "Product A",
           "description": "Description for Product A",
           "price": 10.99,
           "stock": 100
         }'
```

### 3. Restock a product

```bash
curl -X POST http://localhost:3000/api/products/<product-id>/restock \
     -H "Content-Type: application/json" \
     -d '{
           "stock": 50
         }'
```

### 4. Sell a product

```bash
curl -X POST http://localhost:3000/api/products/<product-id>/sell \
     -H "Content-Type: application/json" \
     -d '{
           "quantity": 10
         }'
```

### 5. Create a new order

```bash
curl -X POST http://localhost:3000/api/orders \
     -H "Content-Type: application/json" \
     -d '{
           "customerId": "customer123",
           "products": [
             {
               "productId": "<product-id>",
               "quantity": 2
             }
           ]
         }'
```