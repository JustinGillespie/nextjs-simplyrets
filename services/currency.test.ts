import currency from "./currency";

describe("Services: Currency", () => {
  it("Renders the correct format", () => {
    const rawValue = 1000000.0;
    expect(currency.format(rawValue)).toEqual("$1,000,000");
  });
});
