#   Perceptron Trick Algorithm

$$
\begin{array}{c|c|c|c}
\mathbf{x}_0 & \mathbf{x}_1 \text{(cgpa)} & \mathbf{x}_2 \text{(iq)} & \mathbf{Y} \text{(placed)} \\
\hline
1 & 7.5 & 81 & 1 \\
1 & 7.5 & 109 & 1 \\
1 & 7.0 & 81 & 0
\end{array}
$$

## General Equation

$$
\begin{aligned}
Ax + By + C &= 0 \\
w_1 &= A \\
w_2 &= B \\
w_0 &= \text{bias} = C
\end{aligned}
$$

$$
\begin{aligned}
w_0 x_0 + w_1 x_1 + w_2 x_2 &= 0 \\
\sum_{i=0}^{n} w_i x_i &= 0
\end{aligned}
$$

$$
\begin{bmatrix} w_0 & w_1 & w_2 \end{bmatrix} \begin{bmatrix} x_0 \\ x_1 \\ x_2 \end{bmatrix} = 0
$$

## Process

$$
\begin{array}{l}
\text{epoch } 1000, \quad \eta = 0.01 \\ 
\text{for } i \text{ in range (epochs):} \\
\quad \text{1. Randomly select a student (or point).} \\
\quad \text{2. if } \mathbf{x}_i \in \text{N and } \sum_{i=0}^{n} w_i x_i \geq 0 \quad (\text{fall in +ve region}) \\
\quad \quad w_{\text{new}} = w_{\text{old}} - \eta \mathbf{x}_i \\
\quad \text{3. if } \mathbf{x}_i \in \text{P and } \sum_{i=0}^{n} w_i x_i < 0 \quad (\text{fall in -ve region}) \\
\quad \quad w_{\text{new}} = w_{\text{old}} + \eta \mathbf{x}_i
\end{array}
$$

---

1. Learning Rate:
   
   $$
   \text{epoch } = 1000 \quad
   \eta = 0.01
   $$

2. Condition for Negative Class Point (N) Misclassified as Positive (≥0)

    $$
    \mathbf{x}_i \in \text{N and } \sum_{i=0}^{n} w_i x_i \geq 0
    $$



   $$
   $$
     
3. Weight Update (Correction 1 - Subtract x_i)
    
    $$
    \quad \quad w_{\text{new}} = w_{\text{old}} - \eta \mathbf{x}_i 
    $$

   
4. Condition for Positive Class Point (P) Misclassified as Negative (<0)
    
    $$
    \quad \quad w_{\text{new}} = w_{\text{old}} + \eta \mathbf{x}_i
    $$

   
5. Weight Update (Correction 2 - Add x_i)
   
    $$
    \mathbf{x}_i \in \text{P and } \sum_{i=0}^{n} w_i x_i < 0 \quad (\text{fall in -ve region})
    $$

---

## Simplified Algo

$$
w_{\text{new}} = w_{\text{old}} + \eta (Y_i - \hat{Y_i}) X_i
$$

---

$$
\begin{array}{c|c|c|c}
\text{Formula} & Y_i - \hat{Y_i} & \hat{Y_i} & Y_i \\
\hline
w_{\text{new}} = w_{\text{old}} & 0 & 1 & 1 \\
w_{\text{new}} = w_{\text{old}} & 0 & 0 & 0 \\
w_{\text{new}} = w_{\text{old}} + \eta X_i & 1 & 0 & 1 \\
w_{\text{new}} = w_{\text{old}} - \eta X_i & -1 & 1 & 0 \\
\end{array}
$$

---

$$
\begin{array}{l}
\text{for } i \text{ in range (epochs):} \\
\quad \text{select random student} \\
\quad w_{\text{new}} = w_{\text{old}} + \eta (Y_i - \hat{Y_i}) X_i
\end{array}
$$