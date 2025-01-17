---
layout: post
title: "GPT3 and language models"
permalink: /gpt
redirect-from:
  - /language-model
  - /gpt3
---

Just like the search bar in google fills in what you're typing when you say "Where can I ge .. " GPT3 complete strings as well. Except, it can do this for very long strings, like 3 page strings, and by crafting the prompts well (called prompt engineering), it can do completions that summarize, complexify, answer math, you name it. But there's a catch, GPT3 doesn't do the same thing twice (non-deterministic), it's like coaching a super intelligent cat into learning a new trick: you can ask it, and it will do the trick perfectly sometimes, which makes it all the more frustrating when it rolls over to lick its butt instead. You know the problem is not that it can’t but that it won’t([From Gwern](https://www.gwern.net/GPT-3)).

<!-- prettier-ignore-start -->
<!-- vim-markdown-toc GFM -->

- [Philosophy](#philosophy)
    - [How humans tell if we're being lied too, accuracy versus precision](#how-humans-tell-if-were-being-lied-too-accuracy-versus-precision)
    - [Is it thinking?](#is-it-thinking)
- [Ethics](#ethics)
    - [What happens when GPT3 is trained on biases?](#what-happens-when-gpt3-is-trained-on-biases)
    - [What happens when GPT3 has gender biases?](#what-happens-when-gpt3-has-gender-biases)
    - [What happens when GPT decides to be extra helpful?](#what-happens-when-gpt-decides-to-be-extra-helpful)
- [Imaginary code](#imaginary-code)
- [Prompt engineering](#prompt-engineering)
- [Tech](#tech)
    - [GPT3 vs GPT2](#gpt3-vs-gpt2)
    - [GPT3 vs Instruct GPT](#gpt3-vs-instruct-gpt)
- [Demos of usage](#demos-of-usage)
    - [Summarizing](#summarizing)
    - [Spelling and grammar fixing](#spelling-and-grammar-fixing)
- [Related ideas](#related-ideas)

<!-- vim-markdown-toc -->
<!-- prettier-ignore-end -->

Step #1 - check out some [demos here](https://herbertlui.net/9-examples-of-writing-with-openais-gpt-3-language-model/)

## Philosophy

GPT 3 is a huge language model that has the ability to complete sentences

### How humans tell if we're being lied too, accuracy versus precision

How do we evaluate if something is right? I'm guessing 99.99% of the time it's trusting an expert. Even if we think it's by "reasoning/studying/experimenting", that's based on trusting an expert earlier on. Notice similarity here with art or religion or science.

To help "trick our trust", experts often use fancy words so they sounds smart (aka precision), but this precision is independent of accuracy. That's why your dentist/financial advisor uses fancy words instead of explaining like you're 5 (eli5).

GPT-3 doesn't' know if it's right or wrong, but it often sounds like an expert. This is because you assume it's accurate (aka "right") because it's precise (aka "sounds likes it knows what it's talking about").

Let me give an example, the prompt is bolded:

**What is 345 \* 24?**

- The answer is 18,216.
- What is 9 _ 9 _ 2 _ 5 _ 2? The answer is 66,555.
- What's 3.2 x 7.5 divided by 5.7? The answer is 5

GPT3 answered my question then since I wanted more tokens answered some other questions as well. Easy to look and think wow it's brilliant. But if you check it's math, these answers are all wrong.

And that's the problem with GPT-3 making false information added. Text to speech and deep fakes and wow, lots of opportunity for mass confusion.

### Is it thinking?

tk

## Ethics

### What happens when GPT3 is trained on biases?

OpenAI is well aware of the anti-Muslim bias. In fact, the original paper it published on GPT-3 back in 2020 noted: “We also found that words such as violent, terrorism and terrorist co-occurred at a greater rate with Islam than with other religions and were in the top 40 most favored words for Islam in GPT-3.”

### What happens when GPT3 has gender biases?

A model that generates images, when asked to generate images of doctors, always generates photos of male doctors. This bias can be very demoralizing for minorities.

Like the meme of girls saying "Math is Hard", this can be super destructive creating a self fulfilling prophecy.

### What happens when GPT decides to be extra helpful?

In this example, GPT was doing spelling and grammar correction, and added the following sentances out of the blue:

- I'm not saying it doesn't exist, but I haven't seen it
- I'm not saying these are true but I've heard of them.

Luckily, I was watching the diffs closely:

<asciinema-player src="https://raw.githubusercontent.com/idvorkin/blob/master/cast/sneaky-error-correction.cast" poster="npt:0:14"> </asciinema-player>

## Imaginary code

Using codex it can figure out what code does, or what functions can be. It's amazing.

## Prompt engineering

Because the input is a prompt which gets auto completed, prompt generation is huge.

- <https://beta.openai.com/examples>

- [Prompt library for various models](https://github.com/semiosis/prompts/tree/master/prompts)
- [Lots of language models to investigate](https://github.com/semiosis/pen.el/blob/master/docs/compatibility-and-interoperatbility.org)
- [Prompt Database other](https://gptprompts.org/prompts)
- Super interesting person [On GPT3](https://www.gwern.net/GPT-3)
- More prompt libraries - <https://github.com/maraoz/gpt-scrolls/>
- Using Playground - <https://www.twilio.com/blog/ultimate-guide-openai-gpt-3-language-model>

## Tech

### GPT3 vs GPT2

- Fine tuning is done via passing in a prompt.
- Much bigger model

### GPT3 vs Instruct GPT

The original GPT3 engine had a tendency to go of the rail, which I really enjoyed. To mitigate this OpenAI did human fine tuning by having humans evaluate the best GPT answer, and also give example answers to prompts. This was really effective, and is now the default GPT model.

Having used both models the InstructGPT model (now called GPT3), is more accurate, but also pretty boring, even with a high temperature. I'm grateful I had a chance to use the old models which were way crazier and more interesting.

## Demos of usage

### Summarizing

My blog journal [Week 601](https://idvork.in/ig66/601), and GPT's summary:

_**The protagonist** The protagonist of this journal is a parent of two children. They go out for dim sum and to an Asian grocery store, and the parents feel safer now that their children are vaccinated and they themselves have had a booster. They explore fun masks, as Covid has been going on for a while. They also mention their children's interests - Amelia is interested in the Metaverse and Zach is into cooking and programming. They reflect on their own interests - the protagonist enjoys reading, meditation, and hot tubbing with their family. They also ride their folding bike again, which they were happy to do as they were once able to do with their electric bike. Lastly, they mention their spouse's interests - Tori is busy working at the theater_

See me creating this summary in my enabling environment, observe that I have GPT create 5 summaries, and then I pick the best one. Because GPT is non-deterministic, this is a valuable technique.

<asciinema-player src="https://raw.githubusercontent.com/idvorkin/blob/master/cast/gpt-completion.cast" poster="npt:2:34"></asciinema-player>

### Spelling and grammar fixing

<asciinema-player src="https://raw.githubusercontent.com/idvorkin/blob/master/cast/correct.cast" poster="npt:2:34" ></asciinema-player>

With source code [here](https://github.com/idvorkin/LinqPadSnippets/blob/master/python/gpt3.py)

## Related ideas
