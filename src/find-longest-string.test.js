// import function from local file
const findLongestString = require("./find-longest-string");

test("findLongestString finds the longest string in an array", () => {
  expect(findLongestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("hello");
  expect(findLongestString(["cheese", "wack", "moose"])).toBe("cheese");
  expect(findLongestString(["salman", "sal", "alman", "lman", "man"])).toBe(
    "salman"
  );
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findLongestString(["brave", "dance"])).toBe("brave");
  expect(findLongestString(["salman", "namlas"])).toBe("salman");
  expect(findLongestString(["smack", "track"])).toBe("smack");
});
