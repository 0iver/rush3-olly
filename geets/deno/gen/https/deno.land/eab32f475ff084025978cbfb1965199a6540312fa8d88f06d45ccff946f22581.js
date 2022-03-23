// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
import { Hash } from "./_wasm/hash.ts";
/**
 * Creates a new `Hash` instance.
 *
 * @param algorithm name of hash algorithm to use
 */ export function createHash(algorithm) {
    return new Hash(algorithm);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxodHRwczovL2Rlbm8ubGFuZC9zdGRAMC42OS4wL2hhc2gvbW9kLnRzPiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOC0yMDIwIHRoZSBEZW5vIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIE1JVCBsaWNlbnNlLlxuXG5pbXBvcnQgeyBIYXNoIH0gZnJvbSBcIi4vX3dhc20vaGFzaC50c1wiO1xuaW1wb3J0IHR5cGUgeyBIYXNoZXIgfSBmcm9tIFwiLi9oYXNoZXIudHNcIjtcblxuZXhwb3J0IHR5cGUgeyBIYXNoZXIgfSBmcm9tIFwiLi9oYXNoZXIudHNcIjtcbmV4cG9ydCB0eXBlIFN1cHBvcnRlZEFsZ29yaXRobSA9XG4gIHwgXCJtZDJcIlxuICB8IFwibWQ0XCJcbiAgfCBcIm1kNVwiXG4gIHwgXCJyaXBlbWQxNjBcIlxuICB8IFwicmlwZW1kMzIwXCJcbiAgfCBcInNoYTFcIlxuICB8IFwic2hhMjI0XCJcbiAgfCBcInNoYTI1NlwiXG4gIHwgXCJzaGEzODRcIlxuICB8IFwic2hhNTEyXCJcbiAgfCBcInNoYTMtMjI0XCJcbiAgfCBcInNoYTMtMjU2XCJcbiAgfCBcInNoYTMtMzg0XCJcbiAgfCBcInNoYTMtNTEyXCJcbiAgfCBcImtlY2NhazIyNFwiXG4gIHwgXCJrZWNjYWsyNTZcIlxuICB8IFwia2VjY2FrMzg0XCJcbiAgfCBcImtlY2NhazUxMlwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEhhc2hgIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSBhbGdvcml0aG0gbmFtZSBvZiBoYXNoIGFsZ29yaXRobSB0byB1c2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhhc2goYWxnb3JpdGhtOiBTdXBwb3J0ZWRBbGdvcml0aG0pOiBIYXNoZXIge1xuICByZXR1cm4gbmV3IEhhc2goYWxnb3JpdGhtIGFzIHN0cmluZyk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFBQSx3RUFBQTtTQUVBLElBQUEsU0FBQSxlQUFBO0FBd0JBLEVBSUEsQUFKQSwwRkFJQSxBQUpBLEVBSUEsaUJBQ0EsVUFBQSxDQUFBLFNBQUE7ZUFDQSxJQUFBLENBQUEsU0FBQSJ9