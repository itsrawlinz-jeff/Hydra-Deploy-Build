import { m as models, b as buildPrompt } from './models-5d0b4e4a.js';
import { b as authCondition } from './auth-a65e5d44.js';
import { c as collections } from './database-c81a5005.js';
import { e as error } from './index-64aa7a5e.js';
import { ObjectId } from 'mongodb';
import './private-5bef27a4.js';
import 'handlebars';
import 'zod';
import 'date-fns';
import './downloadFile-79da02ec.js';
import '@huggingface/inference';
import 'openid-client';
import './sha256-dddbc214.js';
import './environment-03c3dd82.js';
import './prod-ssr-7cc47430.js';

async function GET({ params, locals }) {
  const conv = params.id.length === 7 ? await collections.sharedConversations.findOne({
    _id: params.id
  }) : await collections.conversations.findOne({
    _id: new ObjectId(params.id),
    ...authCondition(locals)
  });
  if (conv === null) {
    throw error(404, "Conversation not found");
  }
  const messageId = params.messageId;
  const messageIndex = conv.messages.findIndex((msg) => msg.id === messageId);
  if (messageIndex === -1) {
    throw error(404, "Message not found");
  }
  const model = models.find((m) => m.id === conv.model);
  if (!model) {
    throw error(404, "Conversation model not found");
  }
  const messagesUpTo = conv.messages.slice(0, messageIndex + 1);
  const prompt = await buildPrompt({
    preprompt: conv.preprompt,
    webSearch: messagesUpTo[messagesUpTo.length - 1].webSearch,
    messages: messagesUpTo,
    model
  });
  return new Response(
    JSON.stringify(
      {
        note: "This is a preview of the prompt that will be sent to the model when retrying the message. It may differ from what was sent in the past if the parameters have been updated since",
        prompt,
        model: model.name,
        parameters: {
          ...model.parameters,
          return_full_text: false
        }
      },
      null,
      2
    ),
    { headers: { "Content-Type": "application/json" } }
  );
}

export { GET };
//# sourceMappingURL=_server.ts-d690ea2a.js.map
