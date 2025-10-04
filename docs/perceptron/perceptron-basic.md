# Perceptron

---

<div align="center">

    ```mermaid
    graph LR
    %% Inputs
    X1([x₁])
    X2([x₂])
    B([1])

    %% Neuron and output
    SUM([∑])
    F([f])
    Y([yᵢ])

    %% Labeled edges only
    X1 -- w₁ --> SUM
    X2 -- w₂ --> SUM
    B  -- b  --> SUM

    SUM --> F --> Y
    ```
</div>

---

## Parts

![Labeled Perceptron img](https://i.pinimg.com/736x/a3/6d/bb/a36dbb1b926c6cacc1cc0f2c17be8d76.jpg)

- This is the summation $z = w_1x_1  + w_2x_2 + b$
- In Activation Function We can use any kind of functions like Step Function, Sigmoid Function

**Example**

|iq|cgpa| Placed |
|----|------|--------|
|78|55|1|
|45|34|0|

Lets
w1 = 1, w2 = 2, b = 6

Then Summation will be

- (78*1) + (55*2) + 6 
- (45*1) + (34*2) + 6 

If the value is >= then placed
If the value is < then not placed

## Neuron Vs Perceptron
- [ ] Add photo with image

## Interpretation

![Only Perceptron img](https://i.pinimg.com/736x/48/8b/eb/488beb441613fcc676d614ea992e42f7.jpg)

### Geometric Intuition

![Region Img](https://i.pinimg.com/736x/bf/47/0b/bf470b033366f1341ca8f39e5f6aeccf.jpg)

---

1.  **Linear Combination / Pre-activation ($Z$):**
   
    $$Z = w_1 x_1 + w_2 x_2 + b$$

2.  **Step Activation Function ($Y$):**
   
    $$Y = f(Z) = \begin{cases} 1 & Z \geq 0 \\ 0 & Z < 0 \end{cases}$$

3.  **General Form of a Line (Substitution):**
   
    Let $w_1 = A, w_2 = B, b = C$ and $x_1 = x, x_2 = Y$, 
    
    then:

    $$\text{General form of line: } Ax + By + C = 0$$

4.  **Region Classification based on the Line:**
   
    $$\begin{cases} \geq 0 & \text{+ve Region} \\ < 0 & \text{-ve Region} \end{cases}$$


---

## Limitation
- It works only Linear and sort of linear 
- Not work on non-linear line

---