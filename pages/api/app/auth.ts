export default async function handler(
  req: { method: string },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { msg: any }): void; new (): any };
    };
  }
): Promise<void> {
  if (req.method === "GET") {
    try {
      const response = await fetch("https://prsc.yomo.dev/api/v1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          app_id: process.env.APP_ID,
          app_secret: process.env.APP_SECRET,
        }),
      });
      const data = await response.json();
      const token = data.data;
      if (token) {
        res.status(200).json(token);
      } else {
        res.status(400).json({ msg: data.message });
      }
    } catch (error) {
      if (typeof error === "string") {
        res.status(500).json({ msg: error });
      } else if (error instanceof Error) {
        res.status(500).json({ msg: error.message });
      }
    }
  } else {
    // Handle any other HTTP method
  }
}
