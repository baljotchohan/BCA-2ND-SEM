const { prebuiltAppConfig } = require('@mlc-ai/web-llm');
const targetModels = [
  'Qwen2.5-7B-Instruct-q4f16_1-MLC',
  'Llama-3.1-8B-Instruct-q4f16_1-MLC',
  'DeepSeek-R1-Distill-Qwen-7B-q4f16_1-MLC',
  'Hermes-3-Llama-3.1-8B-q4f16_1-MLC'
];
let allGood = true;
targetModels.forEach(m => {
  const config = prebuiltAppConfig.model_list.find(x => x.model_id === m);
  if(config) {
    console.log('[OK]', m, 'Found, vram_required_MB:', config.vram_required_MB);
  } else {
    console.log('[MISSING]', m);
    allGood = false;
  }
});
if(!allGood) process.exit(1);
