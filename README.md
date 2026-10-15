# Pinky

Pinky is a mobile app built with Expo and React Native.

## Requirements

- Node.js
- npm
- Expo Go
- Web

## Setup

Clone the repository and open a terminal in the project folder:

```bash
npm install
```

## Run the app

Start the Expo development server:

```bash
npx expo start
```

Then:

- Scan the QR code with Expo Go to open the app on your phone.
- Press `a` to open it in an Android emulator.
- Press `i` to open it in an iOS simulator (macOS required).
- Press `w` to open it in a web browser.

If the app doesn’t load correctly, restart Expo with a clean cache:

```bash
npx expo start --clear
```

## Project structure

```text
app/                    Expo Router screens and layouts
  _layout.tsx           Root navigation layout
  (tabs)/               Bottom tab navigation
    _layout.tsx          Tab bar configuration
    index.tsx            Home tab
    profile.tsx          Matches tab
components/              Reusable UI components
  Card_Swipe/            Card swipe components
  ui/                    Card and text components
data/                    App data, such as JSON files
```

The `(tabs)` folder groups routes for navigation and doesn’t appear in the URL. Put each bottom tab’s screen in its own file inside that folder.
