export default {
  async fetch(request) {
    const url = new URL(request.url);
    const placeId = url.searchParams.get("place");

    if (placeId) {
      const webhook = "https://discord.com/api/webhooks/1569568350198042804/ge_hyezB318pV3MeDxvtMLQ_OGTrHwSYgquVLhHBYaYqQGZGFlb8kLfBGSDsQMOHC6Bj";
      
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `**PapersSS | Client Ping**\nPlaceId: \`${placeId}\`\nhttps://www.roblox.com/games/${placeId}`
          })
        });
      } catch(e) {}
    }

    const pixel = Uint8Array.from(atob("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"), c => c.charCodeAt(0));
    return new Response(pixel, {
      headers: { "Content-Type": "image/gif" }
    });
  }
}
