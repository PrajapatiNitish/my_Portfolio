// Create object of array
const videos = [
  {
    videoSrc: "./mobile-view.mp4",
    videoId: "video-1", //use as key also
    videoLabel: "- mobile view",
  },

  {
    videoSrc: "./pad-view.mp4",
    videoId: "video-2", //use as key also
    videoLabel: "- Tab and iPad View",
  },

  {
    videoSrc: "./desktop-view.mp4",
    videoId: "video-3", //use as key also
    videoLabel: "- Desktop View",
  },
];

const images = [
  {
    service: "frontend-tools",
    imageClassName: "frontend-tools",
    imageId: "frontend", //use as key
    imageLabel: "Frontend Tools",
    imageLists: [
      {
        toolImageclassName: "vanilla-css-image",
        toolImageId: "vanilla-css",
        toolImageSrc: "./css-logo.png",
        toolImageLabel: "Vanilla CSS3",
      },

      {
        toolImageclassName: "js-image",
        toolImageId: "java-script",
        toolImageSrc: "./js.png",
        toolImageLabel: "JavaScript",
      },

      {
        toolImageclassName: "react-js-image",
        toolImageId: "react-js",
        toolImageSrc: "./react-js.svg",
        toolImageLabel: "React js",
      },

      {
        toolImageclassName: "axios-image",
        toolImageId: "axios",
        toolImageSrc: "./axios.png",
        toolImageLabel: "Axios",
      },
    ],
  },

  {
    service: "backend-tools",
    imageClassName: "backend-tools",
    imageId: "backend", //use as key
    imageLabel: "Backend Tools",
    imageLists: [
      {
        toolImageclassName: "node-js-image",
        toolImageId: "node-js",
        toolImageSrc: "./node-js.png",
        toolImageLabel: "Node js",
      },

      {
        toolImageclassName: "express-js-image",
        toolImageId: "express-js",
        toolImageSrc: "./express-js.png",
        toolImageLabel: "Express js",
      },

      {
        toolImageclassName: "restfull-api-image",
        toolImageId: "restfull-api",
        toolImageSrc: "./rest-api.png",
        toolImageLabel: "Restfull API",
      },

      {
        toolImageclassName: "my-sql-image",
        toolImageId: "my-sql",
        toolImageSrc: "./mysql.png",
        toolImageLabel: "My SQL",
      },
    ],
  },

  {
    service: "other-tools",
    imageClassName: "other-tools",
    imageId: "other", //use as key
    imageLabel: "Other Tools",
    imageLists: [
      {
        toolImageclassName: "docker-image",
        toolImageId: "docker",
        toolImageSrc: "./docker.png",
        toolImageLabel: "Docker",
      },

      {
        toolImageclassName: "git-image",
        toolImageId: "git",
        toolImageSrc: "./git.png",
        toolImageLabel: "Git",
      },

      {
        toolImageclassName: "github-image",
        toolImageId: "github",
        toolImageSrc: "./github.svg",
        toolImageLabel: "GitHub",
      },

      {
        toolImageclassName: "vercel-image",
        toolImageId: "vercel",
        toolImageSrc: "./vercel-logo.png",
        toolImageLabel: "Vercel",
      },

      {
        toolImageclassName: "vscode-image",
        toolImageId: "vscode",
        toolImageSrc: "./vscode.png",
        toolImageLabel: "VS Code",
      },
    ],
  },
];

export default { videos, images };
