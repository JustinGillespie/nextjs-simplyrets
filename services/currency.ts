const currency = new Intl.NumberFormat("default", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default currency;
