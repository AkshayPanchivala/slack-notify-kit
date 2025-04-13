

# 🚀 Slack Notify Kit

A lightweight and customizable Slack notification utility for Node.js, supporting HTML-to-text conversion, rich formatting, and different message types like `info`, `warning`, and `error`.

---

## 📦 Installation

```bash
npm install slack-notify-kit
```

---

## 🔧 Setup

### 1. Add Your Webhook URL

Store your webhook URL securely in a `.env` file:

```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```

### 2. Import and Use

```js
require('dotenv').config();
const SlackNotifier = require('slack-notify-kit');

const notifier = new SlackNotifier(process.env.SLACK_WEBHOOK_URL);

notifier.sendNotification('<b>This is bold text</b> and <i>italic text</i>.', 'info', null, true);
```

---

## 🧪 Examples

```js
// HTML content
notifier.sendNotification(
  '<h1>HTML Header</h1><p>This is a paragraph with a <a href="https://example.com">link</a>.</p>',
  'warning',
  true
);

// JSON code block
notifier.sendNotification(`{
  "name": "John Doe",
  "age": 30
}`, 'error', false, true);

// Markdown-style message
notifier.sendNotification('*Bold text* and _italic text_ with `inline code`.', 'info');

// Blockquote
notifier.sendNotification('> Blockquote with rich formatting.', 'warning');
```

---

## 🧰 Method: `sendNotification(...)`

```js
sendNotification(message, type, isHtml, isCodeBlock)
```

| Parameter     | Type      | Description                                                              |
|---------------|-----------|--------------------------------------------------------------------------|
| `message`     | `string`  | Message text. Supports HTML if `isHtml` is `true`.                       |
| `type`        | `string`  | `'info'`, `'warning'`, or `'error'`. Controls alert color and icon.      |
| `isHtml`      | `boolean` | Converts HTML to Slack-compatible Markdown                              |
| `isCodeBlock` | `boolean` | Wraps the message in triple backticks for code block formatting         |

---

## 🔗 How to Create a Slack Webhook URL

1. Go to [Slack Incoming Webhooks](https://api.slack.com/messaging/webhooks)
2. Click **Create Your App**
3. Select **From scratch** and choose your workspace
4. Navigate to **Incoming Webhooks**
5. Enable webhooks and click **Add New Webhook to Workspace**
6. Choose a channel and click **Allow**
7. Copy the generated Webhook URL and paste it in your `.env`


## ✅ Features

- Supports HTML-to-Markdown conversion
- Supports rich Slack formatting (bold, italic, links, code blocks)
- Easy to use and integrate
- Color-coded alerts with emojis for clarity

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Clone your fork.
3. Create a new branch for your feature or bug fix.
4. Commit your changes and push the branch.
5. Submit a pull request.

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📜 License

slack-notify-kit is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Keywords
Node.js,slack, Express, slack webhook, slack notifications, slack alerts webhook, slack bot, html to slack, markdown, notification system, realtime messaging,log reporter,automation,html to text,devops tools.

---

## 👤 Author

**Akshay Panchivala**
[GitHub Profile](https://github.com/AkshayPanchivala/slack-notify-kit)

---

