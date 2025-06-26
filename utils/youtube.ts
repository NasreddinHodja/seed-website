export function extractYTVideoID(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.toLowerCase();
    if (!hostname.includes("youtube.com") && !hostname.includes("youtu.be")) {
      return null; // Not a YouTube URL
    }

    const patterns = [
      /(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (
        match &&
        match[1].length === 11 &&
        /^[a-zA-Z0-9_-]{11}$/.test(match[1])
      ) {
        return match[1];
      }
    }
  } catch {
    // URL constructor throws on invalid URL
    return null;
  }

  return null;
}
