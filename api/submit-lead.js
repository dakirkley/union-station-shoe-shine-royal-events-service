// Vercel Serverless Function
// Submits lead to HighLevel CRM

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { firstName, email, source } = req.body;

    // Validate input
    if (!firstName || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // HighLevel API configuration
    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
        console.error('HighLevel credentials not configured');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        // Create/update contact in HighLevel
        const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GHL_API_KEY}`,
                'Content-Type': 'application/json',
                'Version': '2021-07-28'
            },
            body: JSON.stringify({
                firstName: firstName,
                email: email,
                locationId: GHL_LOCATION_ID,
                source: source || 'event-engagement-blueprint',
                tags: ['Lead Magnet', 'Event Engagement Blueprint', 'Website Lead']
            })
        });

        if (!ghlResponse.ok) {
            const errorText = await ghlResponse.text();
            console.error('HighLevel API error:', errorText);
            return res.status(500).json({ error: 'Failed to save lead' });
        }

        const ghlData = await ghlResponse.json();

        // Success
        return res.status(200).json({ 
            success: true,
            message: 'Lead captured successfully',
            contactId: ghlData.contact?.id 
        });

    } catch (error) {
        console.error('Error submitting lead:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
