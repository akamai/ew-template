import { utility } from "../src/utility.js";

describe('utility module', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('utility', () => {
    test("without argument", async () => {
      expect(utility()).toBe('template');
    });
  });

});
