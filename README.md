# Playwright Testing Framework

This repository contains a Playwright-based testing framework designed to support automated end-to-end testing for web applications. The framework utilizes Playwright to perform browser-based testing across multiple browsers.

## Features

- **Multi-Browser Support**: Tests can be run on Chromium, Firefox, and WebKit.
- **Video Recording**: Capture videos of test runs to debug failures effectively.
- **Custom Reporting**: Integration with `monocart-reporter` for detailed test reports.
- **Environment Configurations**: Easy configuration setup via environment variables.

## Project Structure

- `Tests/`: Contains all the test files.
- `Pages/`: Contains Page Object Models that abstract interactions with the web pages.
- `Controllers/`: Business logic that interacts with the Page Objects.
- `Selectors/`: Centralized definitions of selectors used in the Page Objects.
- `playwright.config.js`: Configuration file for Playwright settings.

## Prerequisites

Before setting up the project, ensure you have the following installed:
- Node.js (v14 or later)
- npm (Node Package Manager)

## Setup

To set up the testing environment, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
