// EmailJS Setup Instructions for Quills AI
// 
// To complete the email integration, follow these steps:
//
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail recommended)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{company}} - sender's company
//    - {{message}} - the message content
//    - {{to_email}} - your email (quillsstrok.ai@gmail.com)
//
// 4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
// 5. Replace the placeholders in Contact.tsx:
//    - YOUR_SERVICE_ID
//    - YOUR_TEMPLATE_ID  
//    - YOUR_PUBLIC_KEY
//
// Example EmailJS template:
// Subject: New Contact Form Submission from {{from_name}}
// 
// You have received a new message from your Quills AI website:
//
// Name: {{from_name}}
// Email: {{from_email}}
// Company: {{company}}
// 
// Message:
// {{message}}
//
// This message was sent to: {{to_email}}

export const emailConfig = {
  // Replace these with your actual EmailJS credentials
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID', 
  publicKey: 'YOUR_PUBLIC_KEY'
};