// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/javascript

"use strict";

const buildString = (...template) => `I like ${[...template].join(", ") + "!"}`;
