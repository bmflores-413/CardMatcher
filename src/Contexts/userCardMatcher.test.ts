import { SAMPLE_CARDS } from "../sampleCards";
import { getCardMatches } from "./userCardMatcher";
import { MOCK_USER_1, MOCK_USER_2, MOCK_USER_3 } from "./__fixtures__/mockUsers";

describe('userCardMatcher', ()=>{
  const inputsAndOutputs = [
    { input: MOCK_USER_1, expected: [SAMPLE_CARDS[1], SAMPLE_CARDS[2]] },
    { input: MOCK_USER_2, expected: SAMPLE_CARDS },
    { input: MOCK_USER_3, expected: [SAMPLE_CARDS[1]] },
  ];
  it.each(inputsAndOutputs)('Outputs the correct next period', (item) => {
    expect(getCardMatches({user: item.input, allCards: SAMPLE_CARDS})).toEqual(item.expected);
  });
})