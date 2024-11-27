import Prompt from "@models/prompt";
import { connectToDB } from "@utils/db";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.findById(params.id).populate("creator");
    if (!prompts) return new Response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const exists = await Prompt.findById(params.id);
    if (!exists) return new Response("Prompt not found", { status: 404 });

    exists.prompt = prompt;
    exists.tag = tag;

    await exists.save();
    return new Response(JSON.stringify(exists), { status: 200 });
  } catch (error) {
    new Response("Failed to update prompt", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);

    return new Response("deleted sucess").status(200);
  } catch (error) {
    new Response("Failed to update prompt", { status: 500 });
  }
};
