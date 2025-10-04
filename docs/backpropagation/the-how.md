# Backpropagation (THE HOW)

---

$$
    \begin{array}{l}
    \text{Backpropagation Algorithm} \\
    \text{epochs} = 5 \to (5) \\
    \text{for } i \text{ in range(epochs):} \\
    \quad \text{for } j \text{ in range}(\mathbf{X}.\text{shape}[0]): \\
    \quad \quad \to \text{ Select 1 row (random)} \\
    \quad \quad \to \text{ Predict (using forward prop)} \\
    \quad \quad \to \text{ Calculate loss (using loss function } \to \text{ mse)} \\
    \quad \quad \to \text{ Update weights and bias using GD} \\
    \quad \quad \quad \mathbf{W}_{\text{new}} = \mathbf{W}_{\text{old}} - \eta \frac{\partial L}{\partial \mathbf{W}} \\
    \quad \to \text{ Calculate avg loss for the epoch}
    \end{array}
$$