# LLM Providers

## Overview

Large Language Model (LLM) providers are services that offer access to pre-trained language models through APIs, enabling integration into Genesis applications.

---

## Supported Providers

### 1. OpenAI

**Models:**
- GPT-4 (most capable)
- GPT-4 Turbo
- GPT-3.5 Turbo (fast, economical)

**Strengths:**
- High quality responses
- Wide model variety
- Good documentation
- Reliable service

**Limitations:**
- Higher cost
- Rate limiting
- Data privacy considerations

**Configuration:**
```python
from openai import OpenAI

client = OpenAI(api_key="your-api-key")
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Your prompt"}
    ]
)
```

---

### 2. Anthropic Claude

**Models:**
- Claude 3 Opus (most capable)
- Claude 3 Sonnet (balanced)
- Claude 3 Haiku (fast)

**Strengths:**
- Excellent reasoning
- Long context window (100k tokens)
- Good for analysis
- Constitutional AI

**Limitations:**
- Smaller model family
- Newer provider
- Higher latency for some tasks

**Configuration:**
```python
from anthropic import Anthropic

client = Anthropic(api_key="your-api-key")
response = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Your prompt"}]
)
```

---

### 3. Google (Vertex AI / Gemini)

**Models:**
- Gemini Pro
- Gemini Pro Vision
- PaLM 2

**Strengths:**
- Multimodal support
- Good performance
- Integration with GCP
- Competitive pricing

**Limitations:**
- API complexity
- Fewer model variants
- Evolving service

**Configuration:**
```python
import vertexai
from vertexai.generative_models import GenerativeModel

vertexai.init(project="your-project")
model = GenerativeModel("gemini-pro")
response = model.generate_content("Your prompt")
```

---

### 4. Meta (Llama 2)

**Models:**
- Llama 2 7B
- Llama 2 13B
- Llama 2 70B

**Strengths:**
- Open source
- Can be self-hosted
- Good for enterprise
- Community support

**Limitations:**
- Requires more resources
- Lower quality than commercial
- More setup required

**Configuration:**
```python
# Via Together.ai or other providers
from together import Together

client = Together(api_key="your-api-key")
response = client.chat.completions.create(
    model="meta-llama/Llama-2-70b-chat",
    messages=[{"role": "user", "content": "Your prompt"}]
)
```

---

### 5. Cohere

**Models:**
- Command (text generation)
- Command Light (efficient)
- Embed (embeddings)

**Strengths:**
- Specialized models
- Good for enterprise
- Strong embeddings
- Classification models

**Limitations:**
- Smaller model selection
- Less known than OpenAI
- Niche use cases

**Configuration:**
```python
import cohere

co = cohere.Client(api_key="your-api-key")
response = co.generate(
    prompt="Your prompt",
    max_tokens=100
)
```

---

## Model Comparison

| Provider | Model | Context | Speed | Cost | Quality |
|----------|-------|---------|-------|------|----------|
| OpenAI | GPT-4 | 8k/32k | Medium | High | Excellent |
| OpenAI | GPT-3.5 | 4k/16k | Fast | Low | Good |
| Anthropic | Claude 3 Opus | 100k | Medium | High | Excellent |
| Google | Gemini Pro | 32k | Medium | Medium | Very Good |
| Meta | Llama 2 70B | 4k | Slow | Low | Good |

---

## Provider Selection

### Decision Criteria

**For Best Quality:**
- GPT-4 (OpenAI)
- Claude 3 Opus (Anthropic)

**For Cost Efficiency:**
- GPT-3.5 Turbo (OpenAI)
- Claude 3 Haiku (Anthropic)
- Llama 2 (Meta)

**For Long Context:**
- Claude 3 (100k tokens)
- GPT-4 Turbo (32k tokens)

**For Reasoning:**
- Claude 3 (specialized for reasoning)
- GPT-4 (general reasoning)

**For Multimodal:**
- Gemini Pro Vision (Google)
- GPT-4V (OpenAI)

---

## API Integration

### Common Patterns

#### Pattern 1: Direct API Call

```python
response = client.chat.completions.create(
    model="model-name",
    messages=[{"role": "user", "content": prompt}]
)
```

#### Pattern 2: Streaming Response

```python
stream = client.chat.completions.create(
    model="model-name",
    messages=[...],
    stream=True
)
for chunk in stream:
    print(chunk.choices[0].delta.content, end="")
```

#### Pattern 3: Retry Logic

```python
from tenacity import retry, stop_after_attempt

@retry(stop=stop_after_attempt(3))
def call_llm(prompt):
    return client.chat.completions.create(...)
```

---

## Cost Optimization

### Strategies

1. **Model Selection**
   - Use smaller models when possible
   - Choose faster models
   - Use cheaper providers

2. **Prompt Optimization**
   - Minimize prompt length
   - Cache common prompts
   - Use prompt templates

3. **Response Optimization**
   - Set max_tokens appropriately
   - Use temperature wisely
   - Implement streaming

4. **Caching**
   - Cache responses
   - Reuse embeddings
   - Store results

---

## Error Handling

### Common Errors

```python
try:
    response = client.chat.completions.create(...)
except openai.RateLimitError:
    # Handle rate limiting
    wait_and_retry()
except openai.APIError:
    # Handle API errors
    log_error_and_retry()
```

---

## Monitoring & Analytics

### Metrics to Track

- API latency
- Error rate
- Token usage
- Cost per request
- Model quality metrics

### Best Practices

- ✅ Monitor token usage
- ✅ Track error rates
- ✅ Analyze response quality
- ✅ Optimize costs regularly
- ✅ Test multiple models
