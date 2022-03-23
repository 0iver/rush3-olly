// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
// deno-fmt-ignore
const base64abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/"
];
/**
 * CREDIT: https://gist.github.com/enepomnyaschih/72c423f727d395eeaa09697058238727
 * Encodes a given Uint8Array, ArrayBuffer or string into RFC4648 base64 representation
 * @param data
 */ export function encode(data) {
    const uint8 = typeof data === "string" ? new TextEncoder().encode(data) : data instanceof Uint8Array ? data : new Uint8Array(data);
    let result = "", i;
    const l = uint8.length;
    for(i = 2; i < l; i += 3){
        result += base64abc[uint8[i - 2] >> 2];
        result += base64abc[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
        result += base64abc[(uint8[i - 1] & 15) << 2 | uint8[i] >> 6];
        result += base64abc[uint8[i] & 63];
    }
    if (i === l + 1) {
        // 1 octet yet to write
        result += base64abc[uint8[i - 2] >> 2];
        result += base64abc[(uint8[i - 2] & 3) << 4];
        result += "==";
    }
    if (i === l) {
        // 2 octets yet to write
        result += base64abc[uint8[i - 2] >> 2];
        result += base64abc[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
        result += base64abc[(uint8[i - 1] & 15) << 2];
        result += "=";
    }
    return result;
}
/**
 * Decodes a given RFC4648 base64 encoded string
 * @param b64
 */ export function decode(b64) {
    const binString = atob(b64);
    const size = binString.length;
    const bytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        bytes[i] = binString.charCodeAt(i);
    }
    return bytes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxodHRwczovL2Rlbm8ubGFuZC9zdGRAMC43Ni4wL2VuY29kaW5nL2Jhc2U2NC50cz4iXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTgtMjAyMCB0aGUgRGVubyBhdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBNSVQgbGljZW5zZS5cblxuLy8gZGVuby1mbXQtaWdub3JlXG5jb25zdCBiYXNlNjRhYmMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCIsIFwiS1wiLCBcIkxcIiwgXG4gIFwiTVwiLCBcIk5cIiwgXCJPXCIsIFwiUFwiLCBcIlFcIiwgXCJSXCIsIFwiU1wiLCBcIlRcIiwgXCJVXCIsIFwiVlwiLCBcIldcIiwgXCJYXCIsIFwiWVwiLCBcIlpcIiwgXCJhXCIsIFxuICBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJpXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwibVwiLCBcIm5cIiwgXCJvXCIsIFwicFwiLCBcbiAgXCJxXCIsIFwiclwiLCBcInNcIiwgXCJ0XCIsIFwidVwiLCBcInZcIiwgXCJ3XCIsIFwieFwiLCBcInlcIiwgXCJ6XCIsIFwiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXG4gIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIrXCIsIFwiL1wiXTtcblxuLyoqXG4gKiBDUkVESVQ6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2VuZXBvbW55YXNjaGloLzcyYzQyM2Y3MjdkMzk1ZWVhYTA5Njk3MDU4MjM4NzI3XG4gKiBFbmNvZGVzIGEgZ2l2ZW4gVWludDhBcnJheSwgQXJyYXlCdWZmZXIgb3Igc3RyaW5nIGludG8gUkZDNDY0OCBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAqIEBwYXJhbSBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGUoZGF0YTogQXJyYXlCdWZmZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB1aW50OCA9XG4gICAgdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCJcbiAgICAgID8gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGRhdGEpXG4gICAgICA6IGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5XG4gICAgICA/IGRhdGFcbiAgICAgIDogbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIGxldCByZXN1bHQgPSBcIlwiLFxuICAgIGk7XG4gIGNvbnN0IGwgPSB1aW50OC5sZW5ndGg7XG4gIGZvciAoaSA9IDI7IGkgPCBsOyBpICs9IDMpIHtcbiAgICByZXN1bHQgKz0gYmFzZTY0YWJjW3VpbnQ4W2kgLSAyXSA+PiAyXTtcbiAgICByZXN1bHQgKz0gYmFzZTY0YWJjWygodWludDhbaSAtIDJdICYgMHgwMykgPDwgNCkgfCAodWludDhbaSAtIDFdID4+IDQpXTtcbiAgICByZXN1bHQgKz0gYmFzZTY0YWJjWygodWludDhbaSAtIDFdICYgMHgwZikgPDwgMikgfCAodWludDhbaV0gPj4gNildO1xuICAgIHJlc3VsdCArPSBiYXNlNjRhYmNbdWludDhbaV0gJiAweDNmXTtcbiAgfVxuICBpZiAoaSA9PT0gbCArIDEpIHtcbiAgICAvLyAxIG9jdGV0IHlldCB0byB3cml0ZVxuICAgIHJlc3VsdCArPSBiYXNlNjRhYmNbdWludDhbaSAtIDJdID4+IDJdO1xuICAgIHJlc3VsdCArPSBiYXNlNjRhYmNbKHVpbnQ4W2kgLSAyXSAmIDB4MDMpIDw8IDRdO1xuICAgIHJlc3VsdCArPSBcIj09XCI7XG4gIH1cbiAgaWYgKGkgPT09IGwpIHtcbiAgICAvLyAyIG9jdGV0cyB5ZXQgdG8gd3JpdGVcbiAgICByZXN1bHQgKz0gYmFzZTY0YWJjW3VpbnQ4W2kgLSAyXSA+PiAyXTtcbiAgICByZXN1bHQgKz0gYmFzZTY0YWJjWygodWludDhbaSAtIDJdICYgMHgwMykgPDwgNCkgfCAodWludDhbaSAtIDFdID4+IDQpXTtcbiAgICByZXN1bHQgKz0gYmFzZTY0YWJjWyh1aW50OFtpIC0gMV0gJiAweDBmKSA8PCAyXTtcbiAgICByZXN1bHQgKz0gXCI9XCI7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZWNvZGVzIGEgZ2l2ZW4gUkZDNDY0OCBiYXNlNjQgZW5jb2RlZCBzdHJpbmdcbiAqIEBwYXJhbSBiNjRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZShiNjQ6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICBjb25zdCBiaW5TdHJpbmcgPSBhdG9iKGI2NCk7XG4gIGNvbnN0IHNpemUgPSBiaW5TdHJpbmcubGVuZ3RoO1xuICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIGJ5dGVzW2ldID0gYmluU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIGJ5dGVzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUEsd0VBQUE7QUFFQSxFQUFBLGdCQUFBO01BQ0EsU0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUNBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUNBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUNBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUNBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7S0FBQSxDQUFBO0tBQUEsQ0FBQTtLQUFBLENBQUE7O0FBRUEsRUFJQSxBQUpBLDZMQUlBLEFBSkEsRUFJQSxpQkFDQSxNQUFBLENBQUEsSUFBQTtVQUNBLEtBQUEsVUFDQSxJQUFBLE1BQUEsTUFBQSxRQUNBLFdBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxJQUNBLElBQUEsWUFBQSxVQUFBLEdBQ0EsSUFBQSxPQUNBLFVBQUEsQ0FBQSxJQUFBO1FBQ0EsTUFBQSxPQUNBLENBQUE7VUFDQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUE7UUFDQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUE7QUFDQSxjQUFBLElBQUEsU0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQSxjQUFBLElBQUEsU0FBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBLGNBQUEsSUFBQSxTQUFBLEVBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsRUFBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQSxjQUFBLElBQUEsU0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLElBQUEsRUFBQTs7UUFFQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFDQSxVQUFBLHFCQUFBO0FBQ0EsY0FBQSxJQUFBLFNBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBO0FBQ0EsY0FBQSxJQUFBLFNBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBLGNBQUEsS0FBQSxFQUFBOztRQUVBLENBQUEsS0FBQSxDQUFBO0FBQ0EsVUFBQSxzQkFBQTtBQUNBLGNBQUEsSUFBQSxTQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBLGNBQUEsSUFBQSxTQUFBLEVBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBO0FBQ0EsY0FBQSxJQUFBLFNBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsQ0FBQTtBQUNBLGNBQUEsS0FBQSxDQUFBOztXQUVBLE1BQUE7O0FBR0EsRUFHQSxBQUhBLGtFQUdBLEFBSEEsRUFHQSxpQkFDQSxNQUFBLENBQUEsR0FBQTtVQUNBLFNBQUEsR0FBQSxJQUFBLENBQUEsR0FBQTtVQUNBLElBQUEsR0FBQSxTQUFBLENBQUEsTUFBQTtVQUNBLEtBQUEsT0FBQSxVQUFBLENBQUEsSUFBQTtZQUNBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLElBQUEsRUFBQSxDQUFBO0FBQ0EsYUFBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsVUFBQSxDQUFBLENBQUE7O1dBRUEsS0FBQSJ9