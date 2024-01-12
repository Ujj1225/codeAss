# <p align="center">Welcome to CodeAss, your assistant in coding! 🚀</p>

<p align="center">
    <img src="./codeAss.png" width=250 height=250 />
</p>

<p align="center">
    <p align="center">
        <a href="https://github.com/Ujj1225/codeAss" target="blank">
            <img src="https://img.shields.io/github/watchers/Ujj1225/codeAss?style=for-the-badge&logo=appveyor" alt="Watchers"/>
        </a>
        <a href="https://github.com/Ujj1225/codeAss/fork" target="blank">
            <img src="https://img.shields.io/github/forks/Ujj1225/codeAss?style=for-the-badge&logo=appveyor" alt="Forks"/>
        </a>
        <a href="https://github.com/Ujj1225/codeAss/stargazers" target="blank">
            <img src="https://img.shields.io/github/stars/Ujj1225/codeAss?style=for-the-badge&logo=appveyor" alt="Star"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/Ujj1225/codeAss/issues" target="blank">
            <img src="https://img.shields.io/github/issues/Ujj1225/codeAss.svg?style=for-the-badge&logo=appveyor" alt="Issue"/>
        </a>
        <a href="https://github.com/Ujj1225/codeAss/pulls" target="blank">
            <img src="https://img.shields.io/github/issues-pr/Ujj1225/codeAss.svg?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/Ujj1225/codeAss/blob/master/LICENSE" target="blank">
            <img src="https://img.shields.io/github/license/Ujj1225/codeAss?style=for-the-badge&logo=appveyor" alt="License" />
        </a>
    </p>
</p>

[codeAss](https://github.com/Ujj1225/codeAss) is your secret sauce for transforming the coding experience for developers. Powered by Gemini's magical API, it crafts clear summaries, optimizes code, translates it and even provides review of the code-base, thus making coding a breeze!

[codeAss](https://github.com/Ujj1225/codeAss) streamlines the coding process, making it more efficient, enjoyable and accessible.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Summarizer**: Explains code in simple easy terms for everyone
- **Optimizer**: Defines and optimizes the code to enhance efficiency of code
- **Review**: Provides Review of code base.

## Demo

![Demo of Interface](video.webm)

## Installation

### Prerequisites

Ensure you have Node installed on your system. You can download it from node.js.

Before running codeAss, you will need an API key because the project utilizes Gemini API's services. You can obtain an API key by registering on the their official platform.

### Setup

1. Clone the repository:

```bash
git clone git@github.com:Ujj1225/codeAss.git
```

2. Navigate to the cloned directory:

```bash
cd codeAss
```

Navigate to server side by:

```bash
cd server
```

Navigate to client side by:

```bash
cd client
```

3. Install the required dependencies:

For both server and client side:

```bash
npm i
```

4. Add your GEMINI API key in [API_KEY](./server/.env) file.

## Usage

Run the application by executing both client and server side code:

For Server side:

```bash
node app.js 
```

For Client side:

```bash
npm run dev
```

## Dependencies

- Gemini API
- cors
- Other dependencies listed in `package.json` (Check out for both Client and server side!)

## Contributing

We welcome contributions to enhance and improve [codeAss](https://github.com/Ujj1225/codeAss)! Feel free to submit issues, feature requests, or pull requests. Please adhere to our Code of Conduct.

## License

This project is licensed under the [MIT License](/LICENSE).
