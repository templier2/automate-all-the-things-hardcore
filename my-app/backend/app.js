const express = require("express");
const Redis = require("ioredis");

const app = express();

// Create a Redis client with TLS encryption
const redisClient = new Redis({
  host: process.env.REDIS_HOST, // Replace with the name of the Redis service
  port: 6380, // Replace with the Redis port if it's different
  password: process.env.REDIS_PASS, // Replace with your Redis password
  tls: {}, // Password protected AWS ElastiCache clusters require TLS encryption
});

// Custom middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request at: ${req.url}`);
  next();
});

// Retrieve the visitor count from Redis
async function getAndIncrementVisitorCount() {
  try {
    const count = await redisClient.incr("visitor_count");
    return count;
  } catch (error) {
    console.error("Error retrieving visitor count:", error);
    throw error;
  }
}

// API endpoint to retrieve visitor count
app.get("/", async (req, res) => {
  try {
    const visitorCount = await getAndIncrementVisitorCount();
    res.json({ count: visitorCount });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve visitor count" });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
