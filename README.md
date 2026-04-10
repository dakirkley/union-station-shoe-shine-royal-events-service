# Union Station Shoe Shine - Royal Events Service

Premium event activation funnel for Union Station Shoe Shine's corporate and luxury event services.

## Project Structure

```
/
├── index.html              # Lead magnet opt-in page
├── thank-you.html          # Thank you page after opt-in
├── api/
│   └── submit-lead.js      # Serverless function for HighLevel integration
├── vercel.json             # Vercel configuration
└── README.md               # This file
```

## Environment Variables (Set in Vercel)

Required for the HighLevel integration to work:

- `GHL_API_KEY` - Your HighLevel API key (location PIT token)
- `GHL_LOCATION_ID` - Your HighLevel location ID (Union Station Shoe Shine)

## Pages

### Lead Magnet Opt-in (`/`)
**Offer:** "Event Engagement Booster Blueprint: 7 Proven Activations That Increase Booth Traffic + Keep Attendees Longer"

**Components:**
- Hero section with headline
- Video placeholder (60-90 second Power Content GAP video)
- Benefits grid (6 key benefits)
- Opt-in form (First Name + Email)
- Social proof section

**Brand:** Black & Gold premium aesthetic

### Thank You Page (`/thank-you`)
Confirmation page after successful opt-in with next steps.

## Deployment

This project is connected to Vercel and auto-deploys on push to `main` branch.

## Local Development

1. Clone the repo
2. Create `.env` file with HighLevel credentials
3. Run `vercel dev` for local testing

## Next Steps

1. Add environment variables in Vercel dashboard
2. Create the PDF lead magnet ("Event Engagement Booster Blueprint")
3. Set up email automation in HighLevel to deliver the PDF
4. Record the Power Content GAP video
5. Build tripwire ($27 Activation Planning Kit) sales page
6. Build main service sales page (Silver/Gold/Platinum packages)

---

**Brand:** Union Station Shoe Shine  
**Project:** Royal Events Service  
**Created:** 2026-04-10
