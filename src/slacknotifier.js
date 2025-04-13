const axios = require('axios');
const htmlToText = require('html-to-text');

class SlackNotifier {
  constructor(webhookUrl = null) {
    if (!webhookUrl) {
      throw new Error('Slack webhook URL is required');
    }
    this.webhookUrl = webhookUrl;
  }

  async sendNotification(message, type = 'info', channel = null, isHtml = false, isCodeBlock = false) {
    try {
      const colors = {
        info: '#36a64f',
        warning: '#ffae42',
        error: '#dc3545'
      };

      let formattedMessage = isHtml ? htmlToText.convert(message) : message;
      
      if (isCodeBlock) {
        formattedMessage = '```\n' + formattedMessage + '\n```';
      }

      const payload = {
        attachments: [
          {
            color: colors[type] || colors.info,
            text: `*${this.formatType(type)} Alert!* ${formattedMessage}`,
            mrkdwn_in: ['text']
          }
        ]
      };

      if (channel) payload.channel = channel;

      const response = await axios.post(this.webhookUrl, payload);
    } catch (error) {
      throw new Error('Failed to send notification:', error.message);

    }
  }

  formatType(type) {
    const typeMap = {
      info: '🟢 Info',
      warning: '⚠️ Warning',
      error: '❌ Error'
    };
    return typeMap[type] || 'ℹ️ Info';
  }
}

module.exports = SlackNotifier;
