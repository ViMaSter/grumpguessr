import fs from "fs";
import 'dotenv/config'

(async () => {
    let videos = {};
    let currentPageToken = "";
    
    do {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UU9CuvdOVfMPvKCiwdGKL3cQ&key=${process.env.YOUTUBE_DATAAPI_KEY}&pageToken=${currentPageToken}`;
        const response = await fetch(url);
        const json = await response.json();
        json.items.forEach(item => videos[item.snippet.resourceId.videoId] = item.snippet.title);
        console.log(`Added ${json.items.length} videos, next page token: ${currentPageToken} (current total: ${Object.keys(videos).length})`);

        if (json.nextPageToken == currentPageToken) break;
        if (!json.nextPageToken) break;

        currentPageToken = json.nextPageToken;
    } while (currentPageToken != undefined);

    fs.writeFileSync("wwwroot/videos.json", JSON.stringify(videos, null, 4));
})();
