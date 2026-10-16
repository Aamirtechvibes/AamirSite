import { NextResponse } from "next/server";

import { getProjectBySlug } from "@/lib/services/project-service";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function GET(_: Request, { params }: RouteProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return NextResponse.json(
      {
        message: "Project not found.",
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({
    project,
  });
}
