const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/ask', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({
            error: 'Message is required.'
        });
    }

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: `
You are a campus route assistant for NPR Group of Institutions, Natham, Dindigul.

Only answer queries related to routes and directions between locations on campus.

You can help users with:
- Finding buildings
- Finding departments
- Finding classrooms
- Finding laboratories
- Finding offices
- Finding hostels
- Finding canteens
- Finding libraries
- Finding campus facilities
- Giving directions between campus locations

Do not answer questions about:
- Admissions
- Fees
- Faculty
- Exams
- College administration
- General topics
- Unrelated questions

If the question is unrelated to campus navigation, politely say that you can only help with campus routes and directions.
                    `
                },
                {
                    role: 'user',
                    content: message
                }
            ]
        });

        const reply = completion.choices[0].message.content;

        res.json({ reply });

    } catch (error) {
        console.error('OpenAI Error:', error.message);

        res.status(500).json({
            error: 'Something went wrong while processing your request.'
        });
    }
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;