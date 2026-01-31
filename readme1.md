🎬 Watch Together — Real-Time Shared Media Experience

A real-time “watch together” platform that lets long-distance couples, friends, or families watch media in sync, with camera presence and optional voice, designed for comfort, closeness, and control.

🌍 Problem Statement

Long-distance relationships suffer from:

Poor synchronization in existing watch-together apps

Forced subscriptions

Meeting-style UIs (cold, loud, uncomfortable)

No emotional presence

Goal:
Create a free, comfortable, emotionally close watch-together experience that feels like being in the same room, not being on a call.

✨ Core Philosophy

🎯 Comfort first

🔇 No surprise audio

👀 Gentle visual presence (camera in corner)

🎬 Perfectly synced playback

🧠 Host-controlled authority

🌐 Peer-to-peer media (scalable, low cost)

🚀 Features Implemented (Till Phase 2.2)
🎬 Watch-Together Core

Real-time Play / Pause / Seek sync

Host authority model

Automatic drift correction

Gentle sync for small delays

Hard sync for large desyncs

📹 Camera Presence

Optional camera

Camera shown as corner presence

Local preview hidden (UX-focused)

Peer-to-peer video (WebRTC)

🎙️ Voice (Muted by Default)

Voice available but OFF by default

Explicit mic toggle

Visual mic state indicator

Echo cancellation & noise suppression

No surprise audio (privacy-first)

🧠 Reliability

Host reassignment if host disconnects

Defensive server checks

Clean room lifecycle

🛠️ Tech Stack & Why We Used It
🌐 Frontend
Technology	Purpose
HTML5	Video playback & media controls
CSS3	UI layout, camera positioning
JavaScript (Vanilla)	Full control, no framework overhead
Socket.IO Client	Real-time sync events
WebRTC	Peer-to-peer camera & voice
⚙️ Backend
Technology	Purpose
Node.js	Event-driven real-time server
Express.js	Static file serving
Socket.IO Server	Real-time signaling & sync
HTTP Server	Required for Socket.IO
🔗 Communication Architecture
Video playback sync → Socket.IO
Camera + Voice       → WebRTC (P2P)
Server role          → Coordinator only


⚠️ Server never handles video or audio streams

This ensures:

Low latency

Scalability

Lower server cost

Better privacy

🧱 Architecture Overview
Host Authority Model

First user in room becomes host

Only host can:

Play

Pause

Seek

Prevents chaos and desync

Drift Correction System

Listener periodically sends its playback time

Server requests host time

Server compares drift:

< 0.5s → ignore

< 2s → gentle sync

> 2s → hard sync

WebRTC Signaling Flow

Peer creates offer

Server relays offer

Other peer answers

ICE candidates exchanged

Media flows directly peer-to-peer

📁 Project Structure
watch-together/
│
├── public/
│   └── index.html      # Frontend (UI + logic)
│
├── server.js           # Backend (Socket.IO + signaling)
│
├── package.json
├── package-lock.json
└── README.md

▶️ How to Run Locally
1️⃣ Install dependencies
npm install

2️⃣ Start server
node server.js

3️⃣ Open browser
http://localhost:3000

4️⃣ Testing

Open two browser windows

Join same room ID

One becomes host automatically

🔐 Privacy & Safety

🎥 Camera is opt-in

🎤 Mic is off by default

No recording

No media stored on server

No third-party analytics

📌 Current Project Phase
✅ Completed

Phase 1 — Watch-together core

Phase 2.1 — Camera presence

Phase 2.2 — Voice (muted by default)

🔜 Planned

Phase 2.3 — Presence polish (fade-in, mic glow)

Emoji reactions

Media link support (YouTube / public URLs)

Mobile responsiveness

Auth (optional)

🧠 Key Engineering Learnings

Real-time systems need authority models

Drift correction must be gentle

WebRTC works best when server is stateless

UX matters more than features

Silence is a feature, not a bug

💼 Resume-Ready Description

Built a real-time watch-together platform using Socket.IO and WebRTC, featuring synchronized playback, peer-to-peer camera & voice, host authority, and drift correction, with a privacy-first, comfort-driven UX.

👨‍💻 Author

Krishna Sharma
B.Tech (ECE), NIT Silchar
Focused on building real-world, scalable systems
