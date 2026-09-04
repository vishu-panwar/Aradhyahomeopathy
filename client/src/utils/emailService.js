import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Get these credentials from https://dashboard.emailjs.com/
export const EMAIL_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
};

/**
 * Initialize EmailJS with public key
 */
export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
};

/**
 * Send owner notification email
 * @param {Object} formData - Form data from contact form
 * @param {string} requestType - Type of request (GENERAL ENQUIRY or BOOK A FREE CONSULTATION)
 * @returns {Promise}
 */
export const sendOwnerNotification = async (formData, requestType) => {
  try {
    // Generate timestamp
    const now = new Date();
    const timestamp = now.toLocaleString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Generate lead ID
    const leadId = `AH-${Math.floor(1000 + Math.random() * 9000)}`;

    // Clean phone number for WhatsApp (remove all non-digits)
    const phoneClean = formData.phone.replace(/\D/g, '');

    // Prepare template parameters
    const templateParams = {
      // Request details
      request_type: requestType,
      timestamp: timestamp,
      lead_id: leadId,
      
      // Patient information
      name: formData.name,
      phone: formData.phone,
      phone_clean: phoneClean,
      email: formData.email,
      
      // Inquiry details
      subject: formData.subject,
      message: formData.message,
      
      // Consultation slot
      consultation_slot_or_na: formData.consultationSlot || 'To be scheduled',
      
      // Additional info
      to_email: 'support@aradhyahomeopathy.in' // Owner email
    };

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return { success: true, response };
    
  } catch (error) {
    console.error('Email send failed:', error);
    throw error;
  }
};

/**
 * Validate form data before sending
 */
export const validateFormData = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Please enter a valid name';
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.phone || formData.phone.length < 10) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!formData.subject) {
    errors.subject = 'Please select a subject';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Please enter a message (minimum 10 characters)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
