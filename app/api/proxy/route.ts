import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const targetURL = decodeURIComponent(url.search.replace("?target=", ""));

  // const session = await getServerSession(authConfig);
  // if (!session) {
  //   return Response.json({ error: "Unauthorized" }, { status: 401 });
  // }

  try {
    const response = await fetch(`${process.env.BACKEND_BASEURL}${targetURL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    console.error(`Error in GET ${targetURL}:`, error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const targetURL = decodeURIComponent(url.search.replace("?target=", ""));

  // const session = await getServerSession(authConfig);
  // if (!session) {
  //   return Response.json({ error: "Unauthorized" }, { status: 401 });
  // }

  try {
    const body = await request.json();
    const response = await fetch(
      `${process.env.BACKEND_BASEURL}/${targetURL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    console.error(`Error in POST ${targetURL}:`, error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const url = new URL(request.url);
  const targetURL = decodeURIComponent(url.search.replace("?target=", ""));

  // const session = await getServerSession(authConfig);
  // if (!session) {
  //   return Response.json({ error: "Unauthorized" }, { status: 401 });
  // }

  try {
    const body = await request.json();
    const response = await fetch(
      `${process.env.BACKEND_BASEURL}/${targetURL}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    console.error(`Error in PUT ${targetURL}:`, error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const targetURL = decodeURIComponent(url.search.replace("?target=", ""));

  // const session = await getServerSession(authConfig);
  // if (!session) {
  //   return Response.json({ error: "Unauthorized" }, { status: 401 });
  // }

  try {
    const body = await request.json();
    const response = await fetch(
      `${process.env.BACKEND_BASEURL}/${targetURL}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    console.error(`Error in DELETE ${targetURL}:`, error);
    return Response.json({ error }, { status: 500 });
  }
}
