import requests
from bs4 import BeautifulSoup

# Function to scrape video information from YouTube link
def get_video_info(youtube_link):
    try:
        # Fetch the HTML content of the video link
        response = requests.get(youtube_link)
        soup = BeautifulSoup(response.text, 'html.parser')

        # Extract video title
        title = soup.find('span', {'class': 'watch-title'}).text.strip()

        # Extract video preview image URL
        preview_image = soup.find('link', {'itemprop': 'thumbnailUrl'})['href']

        # Simulated view count and subscriber count (You'll need YouTube API for actual data)
        view_count = 1000000
        subscriber_count = 5000000

        return {
            'title': title,
            'preview_image': preview_image,
            'view_count': view_count,
            'subscriber_count': subscriber_count
        }
    except Exception as e:
        print(f"Error fetching video info: {str(e)}")
        return None

# Example usage
if __name__ == "__main__":
    # Influencer pastes the YouTube video link
    youtube_link = "PASTE_YOUR_YOUTUBE_VIDEO_LINK_HERE"

    # Get video information
    video_info = get_video_info(youtube_link)

    if video_info:
        # Display fetched video information
        print("Video Title:", video_info['title'])
        print("Preview Image URL:", video_info['preview_image'])
        print("View Count:", video_info['view_count'])
        print("Subscriber Count:", video_info['subscriber_count'])
