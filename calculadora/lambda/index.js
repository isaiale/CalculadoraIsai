/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienbenido a la app de isai en que puedo ayudar';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa. getIntentName(handlerInput.requestEnvelope) === 'SumaIntent'
    },
    handle(handlerInput){
        var numeroUno = Number(handlerInput.requestEnvelope.request.intent.slots.numUno.value);
        var numeroDos = Number(handlerInput.requestEnvelope.request.intent.slots.numDos.value);
        var resultado
        var speakOutput
        
        if (numeroUno !== 0 && numeroDos !== 0) {
            resultado = numeroUno + numeroDos;
            speakOutput = 'El resultado de la suma es ' + resultado;
        } else {
            speakOutput = 'Lo siento, no entendí. Por favor, vuelve a indicar los números.';
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt()
            .getResponse()
    }
    
}

const RestaIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa. getIntentName(handlerInput.requestEnvelope) === 'RestaIntent'
    },
    handle(handlerInput){
        var numeroTres = Number(handlerInput.requestEnvelope.request.intent.slots.numTres.value);
        var numeroCuatro = Number(handlerInput.requestEnvelope.request.intent.slots.numCuatro.value);
        var resultado
        var speakOutput
        
        if (numeroTres !== 0 && numeroCuatro !== 0) {
            resultado = numeroTres - numeroCuatro;
            speakOutput = 'El resultado de la resta es ' + resultado;
        } else {
            speakOutput = 'Lo siento, no entendí. Por favor, vuelve a indicar los números.';
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt()
            .getResponse()
    }
    
}

const DivicionIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa. getIntentName(handlerInput.requestEnvelope) === 'DividirIntent'
    },
    handle(handlerInput){
        var numeroCinco = Number(handlerInput.requestEnvelope.request.intent.slots.numCinco.value);
        var numeroSeis = Number(handlerInput.requestEnvelope.request.intent.slots.numSeis.value);
        var resultado
        var speakOutput
        
        if (numeroCinco !== 0 && numeroSeis !== 0) {
            resultado = numeroCinco / numeroSeis;
            speakOutput = 'El resultado de la divicion es ' + resultado;
        } else {
            speakOutput = 'Lo siento, no entendí. Por favor, vuelve a indicar los números.';
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt()
            .getResponse()
    }
    
}

const MultiplicacionIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa. getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent'
    },
    handle(handlerInput){
        var numeroSiete = Number(handlerInput.requestEnvelope.request.intent.slots.numSiete.value);
        var numeroOcho = Number(handlerInput.requestEnvelope.request.intent.slots.numOcho.value);
        var resultado
        var speakOutput
        
        if (numeroSiete !== 0 && numeroOcho !== 0) {
            resultado = numeroSiete * numeroOcho;
            speakOutput = 'El resultado de la multiplicacion es ' + resultado;
        } else {
            speakOutput = 'Lo siento, no entendí. Por favor, vuelve a indicar los números.';
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt()
            .getResponse()
    }
    
}

const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciaIntent';
    },
    handle(handlerInput) {
        var base = Number(handlerInput.requestEnvelope.request.intent.slots.numOnce.value);
        var exponente = Number(handlerInput.requestEnvelope.request.intent.slots.numDoce.value);
        var resultado;
        var speakOutput;

        if (base !== 0 && exponente !== 0) {
            resultado = Math.pow(base, exponente);
            speakOutput = 'El resultado de ' + base + ' elevado a ' + exponente + ' es ' + resultado;
        } else {
            speakOutput = 'Lo siento, no entendí. Por favor, vuelve a indicar los números.';
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt()
            .getResponse();
    }
};

const RaizCuadradaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RaizCuadradaIntent';
    },
    handle(handlerInput) {
        var numero = Number(handlerInput.requestEnvelope.request.intent.slots.numNueve.value);
        var resultado;
        var speakOutput;

        if (numero !== 0) {
            resultado = Math.sqrt(numero);
            speakOutput = 'El resultado isai de la raíz cuadrada de ' + numero + ' es ' + resultado;
        } else {
            speakOutput = 'Lo siento, no entendí. Por favor, vuelve a indicar el número.';
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt()
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        DivicionIntentHandler,
        MultiplicacionIntentHandler,
        PotenciaIntentHandler,
        RaizCuadradaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();