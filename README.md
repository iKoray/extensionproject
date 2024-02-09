# ScanV Extension README

## Introduction

This is the ScanV Extension, my personal project to create a Chrome extension for detecting security vulnerabilities on web pages. It's currently in development and not yet complete.

## Current Capabilities (As of 2/9/2024)

- Scanning active web pages for insecure HTML form submissions.
  - Specifically, it checks if any `<form>` elements on the page submit their data over an unencrypted HTTP connection, which is a common security vulnerability.

### How to Use ScanV Extension

1. Click on the ScanV Extension icon in your browser to open the popup interface.
2. Click the "Start Scan" button to initiate a scan of the currently active web page.
3. You'll get an alert showing either the count of insecure forms detected or confirming the page is secure.

### Future Development Plans

I plan to significantly enhance the ScanV Extension's scanning capabilities to cover a broader range of security vulnerabilities, including but not limited to:

- Outdated JavaScript libraries with known vulnerabilities.
- Mixed content issues, identifying secure pages that contain links to insecure resources.
- Detection of exposed sensitive files or directories accessible to the public.
- Identification of comments within HTML or JavaScript code that could potentially leak sensitive information.
- Expanding the scope to detect SQL injection vulnerabilities, one of the most critical security risks for web applications.

These enhancements aim to provide a more comprehensive security tool that can assist in identifying a wider array of potential threats on web pages.

### Disclaimer

The ScanV Extension is a tool intended for educational purposes and should only be used on websites where you have permission to perform security testing.
