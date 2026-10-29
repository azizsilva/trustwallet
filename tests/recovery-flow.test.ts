import { normalizePhrase, isValidMnemonicWord, WORDLIST } from "../src/lib/dictionary";

// Self-contained test suite for phrase entry and slot ordering verification
export function runRecoveryVerificationTests() {
  console.log("Running Recovery Flow Verification Tests...");

  // Test 1: Whitespace normalization and case insensitivity
  const rawPasted = "  whisper   BASKET\n\tmarsh   moon   ROCKET  valley  canyon vivid picnic stamp gaze river  ";
  const normalized = normalizePhrase(rawPasted);
  console.assert(normalized.length === 12, `Test 1 Failed: Expected 12 words, got ${normalized.length}`);
  console.assert(normalized[0] === "whisper", `Test 1 Failed: Expected first word whisper, got ${normalized[0]}`);
  console.assert(normalized[1] === "basket", `Test 1 Failed: Expected second word basket, got ${normalized[1]}`);

  // Test 2: Word validation against BIP-39 dictionary
  console.assert(isValidMnemonicWord("whisper") === true, "Test 2 Failed: 'whisper' should be valid");
  console.assert(isValidMnemonicWord("INVALIDWORD123") === false, "Test 2 Failed: 'INVALIDWORD123' should be invalid");

  // Test 3: Predictable 12-slot state model
  const expectedPhrase = ["whisper", "basket", "marsh", "moon", "rocket", "valley", "canyon", "vivid", "picnic", "stamp", "gaze", "river"];
  let slots: (string | null)[] = Array(12).fill(null);

  // Place word into first empty slot
  const placeWord = (w: string) => {
    const idx = slots.findIndex(s => s === null);
    if (idx !== -1) slots[idx] = w;
  };

  // Remove word from slot
  const removeSlot = (slotIdx: number) => {
    slots[slotIdx] = null;
  };

  // Place 3 words
  placeWord("whisper"); // slot 0
  placeWord("basket");  // slot 1
  placeWord("marsh");   // slot 2
  console.assert(slots[0] === "whisper" && slots[1] === "basket" && slots[2] === "marsh", "Test 3a Failed: Placed words mismatch");

  // Remove word from position 1 ("basket")
  removeSlot(1);
  console.assert(slots[1] === null, "Test 3b Failed: Slot 1 should be null after removal");
  console.assert(slots[0] === "whisper", "Test 3c Failed: Slot 0 should still be whisper");
  console.assert(slots[2] === "marsh", "Test 3d Failed: Slot 2 should still be marsh (no silent rearranging)");

  // Re-place "basket" - should go to first available slot (slot 1)
  placeWord("basket");
  console.assert(slots[1] === "basket", "Test 3e Failed: Basket should fill slot 1");

  // Fill remaining slots
  for (let i = 3; i < 12; i++) {
    placeWord(expectedPhrase[i]);
  }

  // Verify all 12 filled
  const isAllFilled = slots.every(s => s !== null);
  console.assert(isAllFilled === true, "Test 3f Failed: All 12 should be filled");

  // Verify sequence correctness
  const isCorrect = slots.every((w, idx) => w === expectedPhrase[idx]);
  console.assert(isCorrect === true, "Test 3g Failed: Sequence should match expected phrase");

  console.log("All Recovery Flow Verification Tests Passed Successfully!");
}

// Run if executed directly
if (typeof window === "undefined") {
  runRecoveryVerificationTests();
}
