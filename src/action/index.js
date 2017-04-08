export const SEND = Symbol("SEND");
export function send(value) {
    return {
        type: SEND,
        value
    };
}

