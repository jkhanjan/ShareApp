import Prompt from "@models/prompt";
import { connectToDB } from "@utils/db";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to fetch the dtails", { status: 500 });
  }
};