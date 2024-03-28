import { MongoClient } from "mongodb";

export async function connect() {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster_name}.bap0lx6.mongodb.net/${process.env.mongodb_database_key}?retryWrites=true&w=majority&appName=Cluster0`;
  return await MongoClient.connect(connectionString);
}

export async function insertDocument(
  client: MongoClient,
  collection: string,
  document: any
) {
  const db = client.db();
  return await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(client: MongoClient, collection: string) {
  const db = client.db();
  return await db.collection(collection).find().sort({ _id: -1 }).toArray();
}
