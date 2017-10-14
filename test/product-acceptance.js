const expect = require("expect");
const uniqueOptions = require("../src/product/unique-options");
const imageSize = require("../src/product/image-size");
const findVariantFromOptions = require("../src/product/find-variant-from-options");
const formatMoney = require("../src/product/format-money");
const firstVariant = require("../src/product/first-available-variant");

let product = {
  variants: [
    {
      id: 1091557361,
      title: "Black",
      options: ["Black"],
      option1: "Black",
      option2: "Large",
      option3: null,
      price: 1799,
      available: false
    },
    {
      id: 1091557365,
      title: "Dark Pink",
      options: ["Dark Pink"],
      option1: "Dark Pink",
      option2: "Large",
      option3: null,
      price: 1799,
      available: true
    },
    {
      id: 1091557369,
      title: "Blue",
      options: ["Blue"],
      option1: "Blue",
      option2: null,
      option3: null,
      price: 2300,
      available: true
    },
    {
      id: 1091557373,
      title: "Red Plum",
      options: ["Red Plum"],
      option1: "Red Plum",
      option2: null,
      option3: null,
      price: 3400,
      available: false
    }
  ],
  images: [
    "//cdn.shopify.com/s/files/1/0778/8307/products/dummy_image.jpeg?v=1424572403"
  ],
  options: ["Color", "Size"]
};

const product2 = {
  id: 1,
  title: "Test Product",
  variants: [
    {
      id: 1,
      title: "Blue Small",
      options: ["Color", "Size"],
      option1: "Blue",
      option2: "Small",
      option3: null,
      available: true
    },
    {
      id: 2,
      title: "Blue Medium",
      options: ["Color", "Size"],
      option1: "Blue",
      option2: "Medium",
      option3: null,
      available: true
    }
  ],
  options: ["Color", "Size"]
};

describe("Unique options", () => {
  it("should return an array of values of each option", () => {
    expect(uniqueOptions(product.variants, product.options)).toEqual([
      { name: "Color", values: ["Black", "Dark Pink", "Blue", "Red Plum"] },
      { name: "Size", values: ["Large"] }
    ]);

    expect(uniqueOptions(product2.variants, product2.options)).toEqual([
      { name: "Color", values: ["Blue"] },
      { name: "Size", values: ["Small", "Medium"] }
    ]);
  });
});

describe("Image Size", () => {
  it("should append string to filename", () => {
    expect(imageSize(product.images[0], "grande")).toBe(
      "//cdn.shopify.com/s/files/1/0778/8307/products/dummy_image_grande.jpeg?v=1424572403"
    );
  });
});

describe("Find Variant from Options", () => {
  it("should return a variant", () => {
    expect(
      findVariantFromOptions(product.variants, {
        option1: "Black",
        option2: "Large"
      })
    ).toBe(product.variants[0]);
  });

  it("should default an option value to null if not included", () => {
    const variants = [
      { option1: "Black", option2: "Large", option3: "3" },
      { option1: "Black", option2: "Large", option3: null }
    ];
    const foundVariant = findVariantFromOptions(variants, {
      option1: "Black",
      option2: "Large"
    });
    expect(foundVariant).toBe(variants[1]);
  });

  it("should return undefined if none are found", () => {
    const variants = [
      { option1: "Black", option2: "Large", option3: "3" },
      { option1: "Black", option2: "Large", option3: null }
    ];
    const foundVariant = findVariantFromOptions(variants, {
      option1: "Green",
      option2: "Black"
    });
    expect(foundVariant).toBe(undefined);
  });
});

describe("Format Money", () => {
  it("should format money", () => {
    expect(formatMoney(1, "$")).toEqual("$0.01");
    expect(formatMoney(1399, "$")).toEqual("$13.99");
    expect(formatMoney(10000, "$")).toEqual("$100.00");
  });
});

describe("First available variant", () => {
  it("return the first available variant", () => {
    expect(firstVariant(product.variants)).toBe(product.variants[1]);
  });

  it("should return undefined if none are found", () => {
    const variants = [{ available: false }];
    expect(firstVariant(variants)).toBe(undefined);
  });
});
