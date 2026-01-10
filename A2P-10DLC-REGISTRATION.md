# A2P 10DLC Campaign Registration Guide
## Innovative 360 AI - SMS Compliance Documentation

---

## Campaign Information

### Campaign Description
```
Innovative 360 AI uses SMS for customer care and scheduling related to AI-powered business automation services. Messages include appointment confirmations, reminders, reschedule requests, intake/follow-up instructions, and service/ticket status updates. Customers opt in via our website form and/or by providing their mobile number during service interactions. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out; reply HELP for help.
```

---

## Checkbox Selections

✅ **Messages will include embedded links**: YES
(Messages include links to appointment management, ticket tracking, and service pages)

✅ **Messages will include phone numbers**: YES
(Include support/scheduling number: +1-415-532-2679)

❌ **Direct lending / loan arrangement**: NO
(We do not offer loans or financing via SMS)

❌ **Age-gated content**: NO
(Not applicable - we provide AI automation services, not restricted content)

---

## Consent Collection Method

### How do end-users consent to receive messages?
```
End users provide express consent to receive SMS from Innovative 360 AI in two ways: (1) Website opt-in — customers submit their mobile number via our booking/contact forms and must actively check an unchecked consent checkbox that states they agree to receive SMS for appointment confirmations, reminders, and service/ticket updates, and that message/data rates may apply. (2) Verbal opt-in on inbound calls — when a customer requests text updates, we read the same consent disclosure and confirm their agreement before sending messages. We send an initial confirmation text identifying Innovative 360 AI and including Reply STOP to opt out and Reply HELP for help. We log consent records (phone number, date/time, opt-in source, and when applicable IP/session info). We do not use purchased lists or send SMS without opt-in.
```

---

## Opt-In Keywords
```
START, YES, SUBSCRIBE, UNSTOP
```

---

## Opt-In Confirmation Message
```
Innovative 360 AI: You're opted in for SMS updates (appointments & service). Msg freq varies. Msg&data rates may apply. Reply STOP to opt out, HELP for help. More: https://innovative360ai.com/sms-terms
```

*(160 characters - fits within 320 character limit)*

---

## Sample Messages

### Sample Message #1: Appointment Confirmation
```
Innovative 360 AI: Your consultation is confirmed for [DATE] at [TIME] [TZ]. Details: https://innovative360ai.com/appointments/[ID] Questions? +1-415-532-2679 Reply STOP to opt out.
```

### Sample Message #2: Appointment Reminder / Reschedule
```
Innovative 360 AI reminder: You have an appointment on [DATE] at [TIME] [TZ]. Reschedule here: https://innovative360ai.com/reschedule/[ID] Reply HELP for help, STOP to opt out.
```

### Sample Message #3: Service Follow-Up / Ticket Update
```
Innovative 360 AI: Update on your request—ticket #[TICKET]. Status: [STATUS]. View next steps: https://innovative360ai.com/tickets/[ID] Or call +1-415-532-2679 Reply STOP to opt out.
```

---

## Opt-Out Keywords
```
STOP, END, CANCEL, UNSUBSCRIBE, QUIT
```

---

## Opt-Out Confirmation Message
```
Innovative 360 AI: You're unsubscribed. You won't receive more messages. Reply START to opt back in. Need help? Call +1-415-532-2679
```

---

## Help Keywords
```
HELP, INFO, SUPPORT
```

---

## Help Response Message
```
Innovative 360 AI: For help, call +1-415-532-2679 or email contact@innovative360ai.com. To opt out, reply STOP. More info: https://innovative360ai.com/sms-terms
```

---

## Company Contact Information

**Company Name**: Innovative 360 AI
**Website**: https://innovative360ai.com
**Email**: contact@innovative360ai.com
**Phone**: +1-415-532-2679
**SMS Terms Page**: https://innovative360ai.com/sms-terms
**Privacy Policy**: https://innovative360ai.com/privacy

---

## Campaign Use Case Category

**Primary Category**: Customer Care
**Secondary Category**: Account Notifications

---

## Message Volume & Frequency

**Expected Monthly Volume**: 500-2,000 messages
**Frequency per Subscriber**: 2-5 messages per month
**Peak Usage**: Higher during active service periods (onboarding, support tickets)

---

## Compliance Notes

### ✅ Best Practices
- Using branded domain (innovative360ai.com) in all links - no generic shorteners
- SMS Terms page is live and accessible at https://innovative360ai.com/sms-terms
- Privacy Policy links are included and consistent
- All sample messages include:
  - Clear sender identification (Innovative 360 AI)
  - Contact phone number
  - Opt-out instructions (Reply STOP)
  - Links to branded domain only

### ✅ Consent Requirements Met
- Explicit opt-in via website checkbox (unchecked by default)
- Verbal consent documented on phone calls
- Initial confirmation message sent immediately after opt-in
- Consent records logged with timestamp and source
- No purchased lists or auto-enrollment

### ✅ TCPA Compliance
- Express written consent collected before sending
- Clear disclosure of message frequency and rates
- Easy opt-out mechanism (keyword STOP)
- Immediate opt-out processing
- Help keyword available (HELP)

---

## Registration Steps

1. **Log into Twilio Console** → Messaging → Regulatory Compliance → A2P 10DLC
2. **Register Business Profile** (if not already done)
   - Company Name: Innovative 360 AI
   - EIN/Tax ID
   - Business Address
   - Website: https://innovative360ai.com
3. **Create New Campaign**
   - Use Case: Customer Care
   - Paste campaign description above
   - Select checkboxes as specified
4. **Enter Consent Method** (paste the consent collection text above)
5. **Add Opt-In Keywords**: START, YES, SUBSCRIBE, UNSTOP
6. **Add Opt-In Message** (paste the confirmation message above)
7. **Add 3 Sample Messages** (paste samples 1, 2, 3 above)
8. **Add Opt-Out Keywords**: STOP, END, CANCEL, UNSUBSCRIBE, QUIT
9. **Add Help Keywords**: HELP, INFO, SUPPORT
10. **Submit for Review**

---

## Expected Processing Time

- **Standard Campaign**: 5-10 business days
- **Sole Proprietor**: May take longer, requires additional documentation
- **Expedited**: Not typically available for standard use cases

---

## Common Rejection Reasons (Avoid These)

❌ Sample messages don't match declared use case
❌ Consent method is vague or missing key details
❌ Using generic URL shorteners (bit.ly, tinyurl, etc.)
❌ Missing opt-out instructions in samples
❌ Checkbox selections inconsistent with samples
❌ Privacy/SMS Terms pages not accessible or incomplete
❌ Missing sender identification in messages

---

## Post-Approval Checklist

- [ ] Assign approved campaign to your Twilio phone number(s)
- [ ] Test opt-in flow on website
- [ ] Test opt-in confirmation message delivery
- [ ] Test STOP keyword (confirm opt-out works)
- [ ] Test HELP keyword (confirm help message works)
- [ ] Test all 3 sample message types
- [ ] Monitor delivery rates and any carrier filtering
- [ ] Keep consent logs for compliance audit trail

---

## Campaign Maintenance

- Update campaign if message types/use case changes significantly
- Renew annually if required by carrier
- Monitor spam complaint rates (keep below 0.5%)
- Keep SMS Terms page current and accessible
- Maintain consent logs for at least 4 years

---

**Document Version**: 1.0
**Last Updated**: January 10, 2026
**Next Review**: July 10, 2026
