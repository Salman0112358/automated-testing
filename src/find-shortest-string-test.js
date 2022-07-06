
// import function from local file
const findShortestString = require("./find-shortest-string");

test ("findShortestString identifies the shortest string present in an array ", () =>{
    expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
    expect(findLongestString(["why", "hello", "to", "you"])).toBe("to");
    expect(findLongestString(["cheese","wack","moose"])).toBe("wack");
    expect(findLongestString(["salman","sal","alman","lman","man"])).toBe("sal");

})

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
    expect(findShortestString(["brave", "dance"])).toBe("brave");
  });