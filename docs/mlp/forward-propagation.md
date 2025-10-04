# Forward Propagation 

## Diagram
- [ ] Add the neural network
  
## Layer 1

$$
W^TX + b
$$

$$
L_1 = \begin{bmatrix} W_{11} & W_{12} & W_{13} \\ W_{21} & W_{22} & W_{23} \\ W_{31} & W_{32} & W_{33} \\ W_{41} & W_{42} & W_{43} \end{bmatrix}^T \cdot \begin{bmatrix} X_{i1} \\ X_{i2} \\ X_{i3} \\ X_{i4} \end{bmatrix} + \begin{bmatrix} b_{i1} \\ b_{i2} \\ b_{i3} \end{bmatrix}
$$


$$
L_1 = \begin{bmatrix}
W_{11}' X_{i1} + W_{12}' X_{i2} + W_{13}' X_{i3} + W_{14}' X_{i4} \\
W_{21}' X_{i1} + W_{22}' X_{i2} + W_{23}' X_{i3} + W_{24}' X_{i4} \\
W_{31}' X_{i1} + W_{32}' X_{i2} + W_{33}' X_{i3} + W_{34}' X_{i4}
\end{bmatrix} + \begin{bmatrix}
b_{i1} \\
b_{i2} \\
b_{i3}
\end{bmatrix}
$$

$$
L_1 = \sigma \left( \begin{bmatrix}
W_{11}' X_{i1} + W_{12}' X_{i2} + W_{13}' X_{i3} + W_{14}' X_{i4} + b_{i1} \\
W_{21}' X_{i1} + W_{22}' X_{i2} + W_{23}' X_{i3} + W_{24}' X_{i4} + b_{i2} \\
W_{31}' X_{i1} + W_{32}' X_{i2} + W_{33}' X_{i3} + W_{34}' X_{i4} + b_{i3}
\end{bmatrix} \right) = \begin{bmatrix}
O_{i1} \\
O_{i2} \\
O_{i3}
\end{bmatrix}
$$

## Layer 2

$$
\mathbf{L}_2 = \sigma \left( \begin{bmatrix} W_{11}^2 & W_{21}^2 & W_{31}^2 \\ W_{12}^2 & W_{22}^2 & W_{32}^2 \end{bmatrix}^T \cdot \begin{bmatrix} O_1 \\ O_2 \\ O_3 \end{bmatrix} + \begin{bmatrix} b_{21} \\ b_{22} \end{bmatrix} \right) = \begin{bmatrix} O'_{21} \\ O'_{22} \end{bmatrix}
$$

$$
\mathbf{L}_2 = \sigma \left( \begin{bmatrix}
W_{11}^2 O_1 + W_{21}^2 O_2 + W_{31}^2 O_3 + b_{21} \\
W_{12}^2 O_1 + W_{22}^2 O_2 + W_{32}^2 O_3 + b_{22}
\end{bmatrix} \right) = \begin{bmatrix} O'_{21} \\ O'_{22} \end{bmatrix}
$$

$$
$$

$$
$$

## Layer 3

$$
\hat{Y} = \sigma \left( \begin{bmatrix} W_{11}^3 \\ W_{21}^3 \end{bmatrix}^T \cdot \begin{bmatrix} O_{21} \\ O_{22} \end{bmatrix} + \begin{bmatrix} b_{31} \end{bmatrix} \right)
$$

$$
\hat{Y} = \sigma \left( \left[ W_{11}^3 O_{21} + W_{21}^3 O_{22} + b_{31} \right] \right)
$$

$$
$$

$$
$$

## One line

$$
\mathbf{a}^{[1]} = \sigma (\mathbf{a}^{[0]} \mathbf{W}^{[1]} + \mathbf{b}^{[1]})
$$

$$
\mathbf{a}^{[2]} = \sigma (\mathbf{a}^{[1]} \mathbf{W}^{[2]} + \mathbf{b}^{[2]})
$$

$$
\mathbf{a}^{[3]} = \sigma (\mathbf{a}^{[2]} \mathbf{W}^{[3]} + \mathbf{b}^{[3]})
$$


- [ ] This one line code is missing 

---