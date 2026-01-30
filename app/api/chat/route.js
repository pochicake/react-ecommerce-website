const crypto = require('crypto');

const INSTRUCTIONS = `
You are Neo, a cheerful AI that serves customer services for an store brand name "Yokan".
You help customers resolve issues or questions.
Keep your responses concise.

Do not generate responses outside the service's domain.
`

// Used for signing server responses to prevent abuse.
const SIGNKEY = process.env.SERVER_SECRET_SIGN_KEY;
const EXPIRY_MINUTES = 20

///  Expected format:
/// {
///     'hash': null,
///     'data': {
///         'date': null,
///         'old': [],
///         'new': []
///     }
/// }
/// 
/// Rules:
/// - 'hash' must represent [data.date + data.old]
/// - 'new' must only contain one message

/// verify() returns 0 for 'verified', 1 for 'tampered', 2 for 'expired', 3 for 'unsupported data structure'
function verify(oldData) {
    // If oldData has no hash, check if 'new' includes only one entry that is from "user", and check if 'old' is empty. Otherwise deny.
    // If oldData has hash, verify the hash:
    //   - check expiry date, otherwise deny.
    //   - recalculate hash and match, otherwise deny.
    // Otherwise deny.

    // Otherwise return true
    return true;
}

function sign(newData) {
    // Generate new response and digitally sign
}

export async function POST(req) {
    var clientBody = await req.json();

    var reqBody = JSON.stringify({
        "model": "nova-fast",
        "stream": false,
        "messages": [
            { "role": "system", "content": INSTRUCTIONS },
        ].concat(clientBody)
    });

    console.log("reqBody: ", JSON.stringify(reqBody))

    var apiResp = await fetch("https://gen.pollinations.ai/v1/chat/completions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.AI_API_KEY}`
        },
        body: reqBody
    });

    if (!apiResp.ok) {
        console.error("Error at /api/chat: ", JSON.stringify(await apiResp.json()))

        // To keep internal status proprietary, a vague error will be returned to the client.
        return new Response(JSON.stringify({
            message: 'Internal server error',
            status: 500
        }), {
            status: 500,
        });
    }

    var chatResponse = await apiResp.json();

    console.log("chatResponse: ", JSON.stringify(chatResponse))

    return new Response(JSON.stringify(chatResponse['choices'][0]['message']), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}