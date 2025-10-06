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

!!! tip "When to use & What"
    $$
    \begin{array}{c|c|c|c}
    \text{Loss function} & \text{Activation} & \text{Output} & \text{where to use} \\
    \hline
    \text{Hinge Loss} & \text{Step} & \text{Perceptron} & \text{Binary classification} \\
    \hline
    \text{Log-loss} \newline (\text{Binary cross-entropy}) & \text{Sigmoid} & \text{Logistic Regression} & \text{Binary class} \\
    \hline
    \text{Categorical} \newline \text{Cross entropy} & \text{Softmax} & \text{Softmax Regression} & \text{Multiclass class} \\
    \hline
    \text{MSE} & \text{linear} & \text{linear Regression} & \text{linear Regression} \\
    \end{array}
    $$

---