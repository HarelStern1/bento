import calendar from "@bento/libs/google-calender";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("➡️ Received request:", req.method, req.url);

  if (req.method !== "POST") {
    console.warn("❌ Invalid method:", req.method);
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    console.log("📦 Request body:", req.body);
    const { summary, description, startTime, endTime } = req.body;

    if (!summary || !startTime || !endTime) {
      console.warn("⚠️ Missing required fields:", { summary, startTime, endTime });
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await calendar.events.insert({
      calendarId: "primary",
      requestBody: {
        summary,
        description,
        start: {
          dateTime: new Date(startTime).toISOString(),
          timeZone: "Asia/Jerusalem",
        },
        end: {
          dateTime: new Date(endTime).toISOString(),
          timeZone: "Asia/Jerusalem",
        },
      },
    });

    console.log("✅ Event created:", response.data);

    return res.status(200).json({
      message: "Event created",
      eventId: response.data.id,
      htmlLink: response.data.htmlLink,
    });
  } catch (error) {
    console.error("❌ Error creating event:", error);
    return res.status(500).json({ message: "Failed to create event", error });
  }
}
