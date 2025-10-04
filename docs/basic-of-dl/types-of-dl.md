# Foundations of Deep Learning

## 1. Types of Neural Networks

Neural networks come in many forms, depending on the data type and problem.

| Type                                      | Key Idea                                                                   | Typical Applications                                                                        |
| ----------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **ANN (Artificial Neural Network / MLP)** | Fully connected layers; each neuron connected to all in next layer.        | Tabular data, basic classification/regression.                                              |
| **PNN (Probabilistic Neural Network)**    | Based on Bayesian classification; uses probability distribution functions. | Medical diagnosis, pattern recognition (small datasets).                                    |
| **CNN (Convolutional Neural Network)**    | Uses convolution filters for local feature extraction.                     | Image classification (ResNet, EfficientNet), object detection (YOLO), segmentation (U-Net). |
| **RNN (Recurrent Neural Network)**        | Feedback connections → memory of sequences.                                | Time series, NLP (older models before Transformers).                                        |
| **LSTM / GRU**                            | Special RNN variants to handle long-term dependencies.                     | Text, speech, sequential prediction.                                                        |
| **Autoencoders**                          | Encode input into low-dimensional representation, then reconstruct.        | Dimensionality reduction, denoising, anomaly detection.                                     |
| **GAN (Generative Adversarial Network)**  | Two networks (Generator vs Discriminator) in competition.                  | Image synthesis, deepfakes, data augmentation.                                              |
| **Transformers** (modern)                 | Attention mechanism, no recurrence/convolution.                            | NLP (BERT, GPT), Vision Transformers (ViT), multimodal AI.                                  |

---

## 2. Historical Timeline 

### 1960s — Early enthusiasm

* **Perceptron (Rosenblatt, 1958–1960s):** First implementation of a neural network.
* Similar to a simplified model of a human neuron.
* **Limitation discovered later:** Could not solve **XOR function** (non-linear separability).

---

### 1969 — First AI Winter

* **Minsky & Papert** published *Perceptrons* (book), proving perceptron’s limitations.
* Funding cuts, enthusiasm dropped → **1st AI Winter**.
* No good algorithms, no hardware, very little data.

---

### 1980s — Revival

* **Geoffrey Hinton & team (1986):** popularized **Backpropagation** → enabled training of multi-layer networks.
* Networks could now learn **internal representations** (features automatically).
* 1989: **Yann LeCun** applied CNNs to handwritten digit recognition → landmark success in **computer vision** (precursor of LeNet).

---

### 1990s — 2nd AI Winter

* Still limited by **hardware (no GPUs), data scarcity, poor initialization methods**.
* Training deep networks was difficult → interest shifted to SVMs, Random Forests, etc.

---

### 2006 — The “Deep Learning” name appears

* **Hinton et al.** introduced **Deep Belief Networks** using **unsupervised pre-training**.
* Helped overcome optimization issues.
* Sparked renewed interest → term **Deep Learning** became popular.

---

### 2010 — Start of the modern DL era

* DL used for **image classification** tasks with improved hardware (GPUs).
* Data became abundant (ImageNet dataset launched in 2009).

---

### 2012 — Breakthrough: Deep Learning + GPU

* **AlexNet (Krizhevsky et al.)** won ImageNet challenge, reducing error rate by a huge margin.
* Used **ReLU, dropout, GPU acceleration**.
* Triggered massive industry adoption → **the final rise of DL**.

---

### 2014–2016 — Expansion

* **GANs (2014)** introduced by Goodfellow — generative AI boom.
* **ResNet (2015):** skip connections → very deep networks trainable.
* **AlphaGo (2016):** DeepMind’s system beat human champions → milestone in reinforcement learning.

---

### 2017–Present — Transformer & modern era

* **Attention is All You Need (2017):** introduced the **Transformer architecture**, removing recurrence.
* **BERT, GPT (2018–2020+):** revolutionized NLP with pretraining + fine-tuning.
* **Vision Transformers (ViT, 2020)** showed attention works for vision too.
* **Diffusion models (2021+):** DALL·E, Stable Diffusion, MidJourney → state-of-the-art image generation.
* Modern DL = multimodal (text + image + audio), massive pretrained models, efficient deployment (quantization, distillation).

---
