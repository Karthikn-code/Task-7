# UserDirectory

**UserDirectory** is a small front-end project that fetches and displays user data from the public JSONPlaceholder API. It contains a single-page UI (`Index.html`) with supporting JavaScript and CSS.

**Files:**
- `Index.html`: Main page that loads user cards and UI.
- `script.js`: JavaScript that fetches data and renders the UI.
- `styles.css`: Styles for the page.

**Run locally**

1. Open PowerShell and change to the project folder:

```powershell
Push-Location 'c:\Users\Karthik N\OneDrive\Desktop\Task-7'
```

2. Start a simple HTTP server (Python):

```powershell
python -m http.server 8000
```

3. Open your browser to:

```
http://localhost:8000/
```

Leave the terminal running while you browse; the server must stay active to serve files.

**Filename note (Windows)**
- `Index.html` references `script.js` and `styles.css`. If your JS file is named `Script.js` (capital S) or similar, either rename it to `script.js` or update the `<script src="...">` reference.

To rename in PowerShell if needed:

```powershell
# Example: rename Script.js to script.js
Rename-Item -Path .\Script.js -NewName script.js
```

**Make the site public (optional)**
- ngrok (requires install + account):

```powershell
# after installing ngrok and configuring your auth token
ngrok http 8000
```

- localtunnel (install via npm):

```powershell
npm install -g localtunnel
lt --port 8000
```

**Troubleshooting**
- If the page doesn't load, force-refresh the browser (`Ctrl+F5`).
- Check the terminal running the server for log lines showing requests.
- If you want me to create a public tunnel for you, tell me whether you prefer `ngrok` or `localtunnel`.

**Contributing**
- Feel free to open issues or submit pull requests. This is a small demo project.

**License**
- Public domain/demo — use freely.
# Task-7