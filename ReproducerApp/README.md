# npx react-native info output

```bash
❯ npx react-native info
info Fetching system and libraries information...
System:
  OS: macOS 14.5
  CPU: (10) arm64 Apple M2 Pro
  Memory: 65.92 MB / 16.00 GB
  Shell:
    version: "5.9"
    path: /bin/zsh
Binaries:
  Node:
    version: 18.20.2
    path: ~/.volta/tools/image/node/18.20.2/bin/node
  Yarn:
    version: 3.6.4
    path: ~/.volta/tools/image/yarn/3.8.3/bin/yarn
  npm:
    version: 10.8.1
    path: ~/.volta/tools/image/npm/10.8.1/bin/npm
  Watchman:
    version: 2024.06.17.00
    path: /opt/homebrew/bin/watchman
Managers:
  CocoaPods:
    version: 1.15.2
    path: /opt/homebrew/bin/pod
SDKs:
  iOS SDK:
    Platforms:
      - DriverKit 23.5
      - iOS 17.5
      - macOS 14.5
      - tvOS 17.5
      - visionOS 1.2
      - watchOS 10.5
  Android SDK: Not Found
IDEs:
  Android Studio: 2024.1 AI-241.15989.150.2411.11948838
  Xcode:
    version: 15.4/15F31d
    path: /usr/bin/xcodebuild
Languages:
  Java:
    version: 21.0.3
    path: /Users/aldrin/.sdkman/candidates/java/current/bin/javac
  Ruby:
    version: 2.6.10
    path: /usr/bin/ruby
npmPackages:
  "@react-native-community/cli": Not Found
  react:
    installed: 18.2.0
    wanted: 18.2.0
  react-native:
    installed: 0.74.2
    wanted: 0.74.2
  react-native-macos: Not Found
npmGlobalPackages:
  "*react-native*": Not Found
Android:
  hermesEnabled: true
  newArchEnabled: false
iOS:
  hermesEnabled: Not found
  newArchEnabled: false

```

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
