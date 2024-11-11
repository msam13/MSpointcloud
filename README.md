# 3D Model Generation Web Application
Forget the hassle of managing multiple photos, and experience the power of 3D visualization with just a few clicks.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Demo](#Demo)

## Features
- **Drag-and-Drop Upload**: Users can upload multiple images using drag-and-drop.
- **3D Model Generation**: Uploaded photos are sent to the backend, where they are processed to generate a `.glb` 3D model.
- **Model Rendering**: The generated 3D model is rendered on the frontend for interactive viewing.
- **Download and Share**: Users can download the `.glb` model or copy a shareable link.

## Tech Stack
- **Frontend**: Astro, React, Three.js (for 3D rendering)
- **Backend**: FastAPI
- **Cloud Services**: AWS Amplify (for hosting), AWS S3 (for storage)
- **Other**: CSS/JS animations, dynamic routing

## Usage

1. **Upload Photos**: Drag and drop or select photos to upload.
2. **Generate Model**: Click the "Fetch Model" button to initiate processing.
3. **View/Download Model**: After processing, the 3D model will render on the page. You can also download it or copy a shareable link.

## Demo

Here's a basic flow:

1. **Upload Photos** ➔ 2. **Fetch Model** ➔ 3. **View 3D Model** ➔ 4. **Download or Share**
