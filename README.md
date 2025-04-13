# 🚀 Slack Notify Kit

**Slack Notify Kit** is a simple and powerful Slack notification tool for **Node.js**.  
It helps you send richly formatted messages — including HTML, Markdown, code blocks, and alerts like `info`, `warning`, and `error` — directly to Slack channels using webhooks.

---

## 📦 Installation

Install via npm:

```bash
npm install slack-notify-kit
```


## 🔧 Quick Setup

### 1. Add Your Webhook URL

Create a `.env` file and add your Slack webhook URL:
```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```
### 2. Use in Your Project

```js
require('dotenv').config();
const SlackNotifier = require('slack-notify-kit');

const notifier = new SlackNotifier(process.env.SLACK_WEBHOOK_URL);

// Send a basic message
notifier.sendNotification('Hello from Slack Notify Kit!', 'info');

```


## 💡 Features

- ✅ HTML-to-Markdown conversion
- 🎨 Rich formatting: bold, italic, links, code, blockquotes
- 🚦 Message types: `info`, `warning`, `error` (with color and emoji)
- 📦 Lightweight and easy to integrate
- 🧠 Supports code block formatting with syntax-friendly output

---

## 🧪 Usage Examples

### ✅ HTML Content
```js
notifier.sendNotification(
  '<h2>Welcome</h2><p>Visit <a href="https://example.com">our site</a></p>',
  'info',
  true
);
```

### ⚠️ Code Block
```js
notifier.sendNotification(`{
  "status": "error",
  "code": 500
}`, 'error', false, true);
```

### 🔤 Markdown Message
```js
notifier.sendNotification('*Bold*, _italic_, and `inline code`', 'warning');
```

### 💬 Blockquote
```js
notifier.sendNotification('> This is a quote.', 'info');
```

---

## 🧰 API Reference

### `sendNotification(message, type, isHtml, isCodeBlock)`

| Parameter     | Type      | Description                                |
|---------------|-----------|--------------------------------------------|
| `message`     | `string`  | The message text to send                   |
| `type`        | `string`  | One of: `'info'`, `'warning'`, `'error'`   |
| `isHtml`      | `boolean` | (Optional) Convert HTML to Slack Markdown  |
| `isCodeBlock` | `boolean` | (Optional) Format message as a code block  |

---

## 🔗 How to Get a Slack Webhook

1. Go to [Slack Webhooks](https://api.slack.com/messaging/webhooks)
2. Click **Create Your App**
3. Choose **From scratch** and select your workspace
4. Enable **Incoming Webhooks**
5. Click **Add New Webhook to Workspace**
6. Pick a channel and click **Allow**
7. Copy the webhook URL and add it to your `.env`

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repo
2. Create a new branch
3. Make your changes
4. Open a pull request

See our [Code of Conduct](https://github.com/AkshayPanchivala/slack-notify-kit/blob/main/CODE_OF_CONDUCT.md) for guidelines.

---

## 📜 License

MIT License — see [LICENSE](https://github.com/AkshayPanchivala/slack-notify-kit/blob/main/LICENSE.txt) for details.

---

## 👤 Author

**Akshay Panchivala**  
[GitHub Profile](https://github.com/AkshayPanchivala/slack-notify-kit)
