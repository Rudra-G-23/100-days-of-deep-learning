# Perceptron Loss Function

## Problem with the Perceptron Trick 
- [ ]  Add image and explanation
  
## Gradient Descent

$$
L(w_1, w_2, b) = \frac{1}{n} \sum_{i=1}^{n} L(Y_i, f(x_i)) + \alpha R(w_1, w_2)
$$

$$
L(Y_i, f(x_i)) = \max\left(0, 1 - Y_i f(x_i)\right)
$$

$$
L = \frac{1}{n} \sum_{i=1}^{n} L(Y_i, f(x_i)) \quad \text{(\# mean loss)}
$$

$$
f(x) = w_0 x_0 + w_1 x_1 + w_2 x_2 + b
$$

$$
\begin{array}{l}
\text{Let } -Y_i f(x_i) = X \\
\text{then } \max(0, X)
\end{array}
$$

$$
\max(0, X) = \begin{cases}
X & \text{if } X \geq 0 \quad (\text{or } -Y_i f(x_i) \geq 0) \\
0 & \text{if } X < 0 \quad (\text{or } -Y_i f(x_i) < 0)
\end{cases}
$$

## Simplified Version 

$$
\begin{bmatrix} X_{11} & X_{12} \\ X_{21} & X_{22} \end{bmatrix}
$$

$$
L = \frac{1}{2} \left[ \max(0, 1 - Y_1 f(x_1)) + \max(0, 1 - Y_2 f(x_2)) \right]
$$

$$
\begin{array}{c|c|c|c|c|c}
\text{Point} & Y_i & \hat{Y}_i & Y_i \cdot f(x_i) & -Y_i f(x_i) & \max(0, 1 - Y_i f(x_i)) \\
\hline
\text{P1} & 1 & 1 & +\text{ve} & -\text{ve} & 0 \\
\text{P2} & 1 & -1 & -\text{ve} & +\text{ve} & \max(0, \text{some } +\text{ve}) \\
\text{P3} & -1 & 1 & -\text{ve} & +\text{ve} & \max(0, \text{some } +\text{ve}) \\
\text{P4} & -1 & -1 & +\text{ve} & -\text{ve} & \max(0, \text{some } +\text{ve}) \\
\end{array}
$$

---