# 📧 EmailJS Setup Guide - Aradhya Homeopathy

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a **FREE** account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your preferred email provider
4. Connect your email account (support@aradhyahomeopathy.in)
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Name it: `Aradhya Patient Lead Alert`
4. Click **Edit HTML**
5. **Paste the entire HTML template** (provided in your email template file)
6. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Configure Template Variables

Your template uses these variables (they're automatically mapped from the contact form):

| Variable | Description | Example |
|----------|-------------|---------|
| `{{request_type}}` | Type of request | "GENERAL ENQUIRY" or "BOOK A FREE CONSULTATION" |
| `{{timestamp}}` | Date & time of submission | "Fri, Sep 4, 2026, 02:04 PM" |
| `{{lead_id}}` | Auto-generated lead ID | "AH-8924" |
| `{{name}}` | Patient full name | "Rohit Verma" |
| `{{phone}}` | Phone number | "+91 98765 43210" |
| `{{phone_clean}}` | Phone (digits only for WhatsApp) | "919876543210" |
| `{{email}}` | Email address | "rohit.verma@example.com" |
| `{{subject}}` | Selected subject | "Chronic Allergy & Skin Consultation" |
| `{{message}}` | Patient's message/query | The full message text |
| `{{consultation_slot_or_na}}` | Preferred time slot | "Tomorrow Morning (11:00 AM - 12:30 PM)" or "To be scheduled" |

### Step 5: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdef123456`)
3. Copy it

### Step 6: Update Configuration File

Open `client/src/utils/emailService.js` and update:

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_abc123',      // Your Service ID from Step 2
  TEMPLATE_ID: 'template_xyz789',    // Your Template ID from Step 3
  PUBLIC_KEY: 'abcdef123456'         // Your Public Key from Step 5
};
```

### Step 7: Test It! 🎉

1. Start your website:
   ```bash
   cd client
   npm start
   ```

2. Go to Contact Page: http://localhost:3000/contact

3. Fill the form and submit

4. Check your email inbox!

---

## 📋 Template Features

✅ **Professional Clinic Dispatch Console Design**
- Dark green header with clinic branding
- Internal alert badge
- Clean, organized patient profile layout

✅ **Two Request Types**
- **General Enquiry**: Regular questions and inquiries
- **Book a Free Consultation**: Appointment booking requests

✅ **Complete Patient Information**
- Patient name, phone, email
- Selected category and subject
- Clinical query/notes
- Consultation time slot preference (if applicable)

✅ **Quick Action Buttons**
- **Call Patient**: Direct tel: link
- **WhatsApp Chat**: Pre-filled WhatsApp message
- **Email Reply**: Pre-filled email subject

✅ **Fully Responsive**
- Looks great on desktop and mobile
- Email-client compatible (Gmail, Outlook, etc.)

---

## 🎨 Form Features

### Contact Form Enhancements:
1. **Toggle Request Type**: Users can select "General Enquiry" or "Book Consultation"
2. **Conditional Fields**: Consultation slot field appears only for consultation bookings
3. **Form Validation**: All fields validated before submission
4. **Error Messages**: Clear error messages for invalid inputs
5. **Success/Error Notifications**: User feedback after form submission
6. **Loading States**: Button shows "Sending..." during submission
7. **Auto-reset**: Form clears after successful submission

### Field Mapping:
- `name` → Full patient name
- `email` → Email address
- `phone` → Phone number
- `subject` → Subject selection (dropdown with medical categories)
- `message` → Clinical query/notes
- `consultationSlot` → Preferred time slot (optional, shown only for consultations)

---

## 🔧 Troubleshooting

### Emails not sending?
1. Check browser console (F12) for errors
2. Verify all 3 IDs are correct in `emailService.js`
3. Make sure you're using the **PUBLIC KEY** (not private key)
4. Check EmailJS dashboard for failed attempts
5. Ensure email service is connected properly

### Variables not showing in email?
1. Variable names must match **EXACTLY** (case-sensitive)
2. Use double curly braces: `{{variable_name}}`
3. No spaces inside braces: `{{name}}` ✅ `{{ name }}` ❌

### Template not applying?
1. Make sure you pasted the **entire HTML** in EmailJS template editor
2. Use "Edit HTML" mode (not visual editor)
3. Save the template after pasting

### Rate Limits
- **Free plan**: 200 emails/month
- **Upgrade**: https://www.emailjs.com/pricing (if you need more)

### Form Validation Errors
- Name: Minimum 2 characters
- Email: Valid email format (user@example.com)
- Phone: Minimum 10 digits
- Subject: Must select from dropdown
- Message: Minimum 10 characters

---

## 📱 Testing Checklist

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created with HTML
- [ ] All 3 IDs updated in `emailService.js`
- [ ] Website running (`npm start`)
- [ ] Test "General Enquiry" form submission
- [ ] Test "Book Consultation" form submission
- [ ] Email received in inbox
- [ ] All variables displaying correctly
- [ ] Action buttons working (Call, WhatsApp, Email)
- [ ] Mobile responsive layout tested

---

## 🎯 Template Variables in EmailJS

When setting up your EmailJS template, use these exact variable names:

```
{{request_type}}
{{timestamp}}
{{lead_id}}
{{name}}
{{phone}}
{{phone_clean}}
{{email}}
{{subject}}
{{message}}
{{consultation_slot_or_na}}
{{to_email}}
```

**Note**: The HTML template provided already has all these variables in the correct places. Just paste the entire HTML into EmailJS template editor!

---

## 💡 Pro Tips

1. **Set up email filters** in Gmail to organize patient leads
2. **Test regularly** to ensure emails are being delivered
3. **Monitor usage** in EmailJS dashboard (check remaining quota)
4. **WhatsApp Integration**: The template includes pre-filled WhatsApp messages for quick responses
5. **Lead ID Tracking**: Each submission gets a unique lead ID (e.g., #AH-8924) for easy tracking

---

## 📞 Support

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Support**: https://www.emailjs.com/support/
- **React Integration Guide**: https://www.emailjs.com/docs/examples/reactjs/

---

## 🌟 What's Next?

After setup:
1. ✅ Test both form types (General Enquiry & Consultation)
2. ✅ Verify email formatting looks good
3. ✅ Test action buttons (Call, WhatsApp, Email)
4. ✅ Set up email forwarding/filters if needed
5. 🚀 Go live!

---

**Made with 💚 for Aradhya Homeopathy**

*Professional Patient Lead Management System*
