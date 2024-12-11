/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js", // Path to your schema file
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://neondb_owner:5kdoujSv7QbV@ep-delicate-glade-a5x3ob8y.us-east-2.aws.neon.tech/ai?sslmode=require",
    },
    out: "./drizzle", // Specify the output directory
};
