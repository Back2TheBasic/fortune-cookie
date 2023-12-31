import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const getUserContent = (fortune: string) => {
  return `
  아래의 규칙을 지켜서 운세의 결과를 만들어주세요.
  생성해주셔야할 운세 결과의 카테고리는 ${fortune} 입니다.
  1개의 운세 결과 알려주세요.
  운세의 길이는 최대 30자 입니다.`;
};

const getAssistantContent = () => {
  return `
  절대로 운세 결과 앞에 숫자를 붙이지마세요.  
  내가 한 질문을 다시 말하지 마세요.
  운세 결과 같은 어두, 어미, 어두와 어미에 아무말도 넣지 말고 다음과 같이 운세 결과만 넣어주세요.
  
  ex)
  오늘은 평범한 하루가 될 것입니다.
  `;
};

const getSystemContent = () => {
  return `
  당신은 운세 만드는 전문가 입니다.
  운세 결과말고는 다른거는 말하지마세요.
  내가 한 질문을 다시 말하지 마세요.
  
  do not say anything other than the fortune result)
  여기는 5개의 취업 운세 결과입니다. 좋은 결과가 되시기를 바랍니다!
  운세 결과를 참고하여 좋은 연애를 이어나가길 바랍니다.

  이런 말 같이 어두와 어미에 아무말도 넣지 말고 다음과 같이 운세 결과만 넣어주세요.

  ex) 
  오늘은 평범한 하루가 될 것입니다.
  `;
};

const getFortune = async (fortune: string) => {
  const userContent = getUserContent(fortune);
  const assistantContent = getAssistantContent();
  const systemContent = getSystemContent();

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: userContent },
      { role: 'assistant', content: assistantContent },
      { role: 'system', content: systemContent },
    ],
  });

  return completion?.choices[0]?.message?.content;
};

export default getFortune;
