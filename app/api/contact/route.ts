import { NextRequest } from "next/server";
import { MongoClient } from "mongodb";
import { connect, insertDocument } from "@/lib/db";

// export async function GET(req: NextRequest) {
//   const searchParams = req.nextUrl.searchParams;
//   const query = searchParams.get("query");
//   if (!query) return new Response("Not Found");
//   const filteredComments = comments.filter((comment) =>
//     comment.text.includes(query)
//   );
//   return Response.json(filteredComments);
// }

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, name, message } = body;

  let client: MongoClient | null = null;

  try {
    client = await connect();
  } catch (e: any) {
    return new Response("Connect with database failed!", {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }

  try {
    const result = await insertDocument(client, "messages", {
      email: email,
      name: name,
      message: message,
    });
  } catch (e: any) {
    client.close();
    return new Response("Inserting data failed!", {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }

  client.close();

  return new Response(JSON.stringify(email, name, message), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
