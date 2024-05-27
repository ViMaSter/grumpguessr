# GrumpGuessr

[**Play now!**](https://vimaster.github.io/grumpguessr)

## Installation

1. Fork this repository
2. Clone the forked repository
3. Create a `.env` file in the root directory with the following content:
    ```env
    YOUTUBE_DATAAPI_KEY=<your-youtube-api-key>
    ```
4. Replace `<your-youtube-api-key>` with your own [YouTube Data API key](https://developers.google.com/youtube/registering_an_application)
5. Run `npm install && npm build`
7. Run `npm start` to start the development server

## Hosting

1. Fork this repository
2. Go to the Settings tab of your fork:
    1. Scroll down to the GitHub Pages section
    2. Select the `gh-pages` branch and the root folder
    3. Select `Save`
    4. Expand the `Secrets and variables` group in the sidebar
    5. Select `Actions`
    6. Create a new repository secret:
        - Name: `YOUTUBE_DATAAPI_KEY`
        - Value: create a [YouTube Data API key](https://developers.google.com/youtube/registering_an_application)
3. Open the GitHub Actions tab of your fork and enable workflows
4. Run the `Deploy` workflow and wait for it to complete
5. Visit `https://<your-username>.github.io/grumpguessr` to play the game
