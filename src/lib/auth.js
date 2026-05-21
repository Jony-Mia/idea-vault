import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "dns/promises";

// const dns = require("dns/promises")
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("idea-vault-accounts");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL, 
  emailAndPassword: {
    enabled: true
  },
  database: mongodbAdapter(db, {
    client
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_SECRET_KEY,
    },
  }
});