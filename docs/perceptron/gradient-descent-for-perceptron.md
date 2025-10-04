# Gradient Descent For Perceptron

## Algorithm  

$$
\begin{array}{l}
\text{Gradient Descent} \\
L = \underset{w, w_2, b}{\text{argmin}} - \frac{1}{n} \sum_{i=1}^{n} \max(0, -Y_i f(x_i)) \\
\text{where } f(x_i) = w_1 x_{i1} + w_2 x_{i2} + b \\
\\
\text{for } i \text{ in epoch} \\
\quad w_1 = w_1 + \eta \frac{\partial L}{\partial w_1} \\
\quad w_2 = w_2 + \eta \frac{\partial L}{\partial w_2} \\
\quad b = b + \eta \frac{\partial L}{\partial b}
\end{array}
$$

$$
\frac{\partial L}{\partial w_1} = \frac{\partial L}{\partial f(x_i)} \cdot \frac{\partial f(x_i)}{\partial w_1}
$$

$$
\frac{\partial f(x)}{\partial w_k} = x_k
$$

$$
\frac{\partial L}{\partial f(x_i)} = \begin{cases}
0 & \text{if } 1 - Y_i f(x_i) \leq 0 \\
-Y_i & \text{if } 1 - Y_i f(x_i) > 0
\end{cases}
$$

$$
\frac{\partial f(x_i)}{\partial w_1} = \frac{\partial}{\partial w_1} (w_1 x_{i1} + w_2 x_{i2} + b) = x_{i1}
$$

$$
\begin{array}{l}
\frac{\partial L}{\partial w_1} = \begin{cases} 0 & \text{if } Y_i f(x_i) \geq 0 \\ -Y_i x_{i1} & \text{if } Y_i f(x_i) < 0 \end{cases} \\
\\
\frac{\partial L}{\partial w_2} = \begin{cases} 0 & \text{if } Y_i f(x_i) \geq 0 \\ -Y_i x_{i2} & \text{if } Y_i f(x_i) < 0 \end{cases} \\
\\
\frac{\partial L}{\partial b} = \begin{cases} 0 & \text{if } Y_i f(x_i) \geq 0 \\ -Y_i & \text{if } Y_i f(x_i) < 0 \end{cases}
\end{array}
$$

$$
$$

## Why Gradient Descent

---