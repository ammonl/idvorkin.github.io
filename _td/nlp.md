---
layout: post
no-render-title: true
title: Sentiment Analysis and NLP
permalink: /nlp
---

My explorations of NLP, mostly using my corpus of journal entries and other writing. My intent is two fold 1) learning about NLP and sentiment analysis 2) finding latent meaning in my writing, ideally to help me better understand my own psychological processes. I've had much more success with the former then the latter

My Journal Entries are private, but you can see my [code here](https://github.com/idvorkin/nlp)(though it is tightly coupled to my corpus and format).

## Success Criteria

- Deeper understanding of what I care about.
- Played with different cloud stacks for NLP
- Do simple work frequency analysis
- Played with word embedding
- Topic/mood over time visualization.

<!-- prettier-ignore-start -->
<!-- vim-markdown-toc GFM -->

- [Abstract](#abstract)
- [Corpus](#corpus)
    - [Convert exported 750words data to per day files](#convert-exported-750words-data-to-per-day-files)
    - [Remove custom stop words](#remove-custom-stop-words)
- [Analysis: What is on my mind?](#analysis-what-is-on-my-mind)
    - [Focus on Proper Nouns](#focus-on-proper-nouns)
    - [Focus on Verbs/Nouns](#focus-on-verbsnouns)
- [Sentiment Analysis From Cloud Vendors](#sentiment-analysis-from-cloud-vendors)
    - [GPT3](#gpt3)
    - [Call Google NLP from C sharp](#call-google-nlp-from-c-sharp)
    - [Put google NLP output into pandas](#put-google-nlp-output-into-pandas)
    - [Evaluate NLP Solutions from various vendors](#evaluate-nlp-solutions-from-various-vendors)
    - [Google NLP](#google-nlp)
    - [AWS Comprehend](#aws-comprehend)
    - [IBM Watson](#ibm-watson)
    - [Azure NLP service](#azure-nlp-service)
- [Use cases - Functional](#use-cases---functional)
    - [I can see what I'm thinking about on a single day](#i-can-see-what-im-thinking-about-on-a-single-day)
    - [I can see what I'm thinking about over a time period](#i-can-see-what-im-thinking-about-over-a-time-period)
    - [I can graph my mood over time](#i-can-graph-my-mood-over-time)
    - [I can see when my mood goes south](#i-can-see-when-my-mood-goes-south)
- [Up next](#up-next)
- [Analysis Approaches](#analysis-approaches)
    - [Bag of words](#bag-of-words)
    - [Lemmatization vs Stemming](#lemmatization-vs-stemming)
    - [TF/IDF](#tfidf)
    - [Word Embedding - Word2Vec (GPT3 is better)](#word-embedding---word2vec-gpt3-is-better)
    - [Bag of words analysis](#bag-of-words-analysis)

<!-- vim-markdown-toc -->
<!-- prettier-ignore-end -->

## Abstract

At my best, I do daily stream of consciousness journalling . These journal entries should have insights I can apply to my life. I'm too lazy to read the journal entries, but it's a great corpus to see how I can use NLP and ML tech on myself.

This gives me an excuse to use NLP services, and play with them.

## Corpus

I used a service called 750words to do daily stream of consciousness Journaling. I have several years of data in this format, and I want to convert to the format I'm using now. This will be a good corpus for analysis.

### Convert exported 750words data to per day files

### Remove custom stop words

My data set has stop words

TBD

## Analysis: What is on my mind?

### Focus on Proper Nouns

Relative frequency distribution of proper nouns gives a good understanding of what's top of mind, since humans are "person" focused, names tend to pop in and out here.

### Focus on Verbs/Nouns

Haven't had a lot of luck here, my writing isn't very verb focused. Perhaps this needs some type of boosting from TF/IDF

## Sentiment Analysis From Cloud Vendors

### GPT3

Once GPT 3 came along the other cloud services became irrelevant.

{%include summarize-page.html src="/gpt" %}

### Call Google NLP from C sharp

See: <https://github.com/idvorkin/play-google-nlp>

### Put google NLP output into pandas

### Evaluate NLP Solutions from various vendors

### Google NLP

The place I decided to start.

### AWS Comprehend

### IBM Watson

### Azure NLP service

Limited, only supports extraction of key topics, without the different spots of them.

## Use cases - Functional

### I can see what I'm thinking about on a single day

### I can see what I'm thinking about over a time period

### I can graph my mood over time

Sentiment analysis only works on sentences. For a first order approximation take the median sentence sentiment score for a document. E.g. Median([sentiment(s) for s in sentences]). Graph sentiment by day measured.

TBD:

- Interpolate missing days.

I can score the sentiment of a document as the median(f

### I can see when my mood goes south

## Up next

## Analysis Approaches

### Bag of words

### Lemmatization vs Stemming

### TF/IDF

Multiply term frequency by inverse document frequency, this boosts words that only appear in this text as they are likely more important (or they're typos).

### Word Embedding - Word2Vec (GPT3 is better)

Put words into a semantic vector space using unsupervised learning, so words with similar meanings are closer in vector space distance. For example (king - queen) ~ (boy - girl) and toaster is far away from red.

Very good articulation of [word embedding](https://jalammar.github.io/illustrated-word2vec/)

### Bag of words analysis

Ignore properties of text other then word frequencies.
