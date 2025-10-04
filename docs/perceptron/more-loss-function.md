# More Loss Function

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

## For Linear Model

$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

## For Logistic Model

## For Multiclass 