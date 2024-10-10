# pwa-text-editor Just Another Text Editor (JATE)

## Description

Just Another Text Editor (JATE) is a progressive web application (PWA) that allows users to edit text in an offline environment. It uses modern web technologies such as IndexedDB for storing content, Workbox for service worker caching, and Webpack for bundling. JATE is installable and works seamlessly both online and offline, ensuring that users can continue to edit and store their text even without an internet connection.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Deployed Application](#deployed-application)
- [License](#license)

## Installation

To install the application, follow these steps:

1. Install Dependencies: Install the required npm packages by running: `npm install`
2. Build the Project: Bundle the application using Webpack: `npm run build`
3. Run the Application Locally: Start the development server: `npm run start:dev`
4. For the production build: `npm run start`
5. Install as PWA: You can install JATE directly from the browser. Simply click the install button when prompted, or click the "Install" icon in your browser's address bar.

## Usage:

JATE functions both as an online and offline text editor. Once installed, it can be launched as a standalone app.

Please follow these steps to use the application:

1. Open the editor.
2. Type your text into the editor field.
3. Your text will be automatically saved to IndexedDB, even if you're offline.
4. Install the app by clicking the install prompt in your browser or on the "Install" button in the PWA.

## Features:

- Uses **IndexedDB** for saving and retrieving text data.
- Fully **offline-capable** via service workers and Workbox.
- Automatically saves content when the window loses focus.
- Installable as a **PWA**.
- Built with **Webpack** and **Babel** for modern JavaScript features, including `async`/`await`.

## Technologies Used:

- **Webpack**: Bundles the app and handles JavaScript, CSS, and image assets.
- **Babel**: Allows the use of modern JavaScript (ES6+) syntax.
- **IndexedDB**: Stores text data for offline use.
- **Workbox**: Service worker integration for caching static assets.
- **PWA Manifest**: Provides metadata for the app's installation.

## Screenshots of Application:

## Deployed Application

Check out the live version of the JATE PWA here: [Live App](https://pwa-text-editor-ku6b.onrender.com)

You can also find the GitHub repository here: [GitHub Repo](https://github.com/jjackson0228/pwa-text-editor)
