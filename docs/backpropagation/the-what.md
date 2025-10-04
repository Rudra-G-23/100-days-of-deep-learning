# Backpropagation (THE WHAT)

## Steps 
0. init w, b: → Random (w=1,b=0)
1. select a point (now)
2. predict/Do Forward prop. (Dot prd)
3. Choose a loss function
4. weight & bias update (Gradient Descent)

$$
W_{\text{new}} = W_{\text{old}} - \eta \frac{\partial L}{\partial W_{\text{old}}}
$$

$$
b_{\text{new}} = b_{\text{old}} - \eta \frac{\partial L}{\partial b_{\text{old}}}
$$


$$
$$

## Partial Derivative

- [ ]  Delete the some derivative
  
**We Need to find out this 9 derivative**

$$
\frac{\partial L}{\partial w_{11}'}, \frac{\partial L}{\partial w_{21}'}, \frac{\partial L}{\partial w_{31}'}, \frac{\partial L}{\partial w_{41}'}, \frac{\partial L}{\partial b_{11}'} \mid \frac{\partial L}{\partial w_{12}'}, \frac{\partial L}{\partial w_{22}'}, \frac{\partial L}{\partial w_{32}'}, \frac{\partial L}{\partial w_{42}'}, \frac{\partial L}{\partial b_{12}'}
$$

$$
\frac{\partial L}{\partial w_{11}^2}, \frac{\partial L}{\partial w_{21}^2}, \frac{\partial L}{\partial w_{12}^2}, \frac{\partial L}{\partial w_{22}^2}, \frac{\partial L}{\partial b_{21}} \mid \frac{\partial L}{\partial w_{31}^2}, \frac{\partial L}{\partial w_{41}^2}, \frac{\partial L}{\partial w_{32}^2}, \frac{\partial L}{\partial w_{42}^2}, \frac{\partial L}{\partial b_{22}}
$$

#### Chain Rule

$$
\begin{aligned}
\frac{\partial L}{\partial w_{11}^2} &= \frac{\partial L}{\partial \hat{Y}} \cdot \frac{\partial \hat{Y}}{\partial w_{11}^2} \quad (\text{Chain Rule}) \\
\\
\text{where } \frac{\partial L}{\partial \hat{Y}} &= \frac{\partial}{\partial \hat{Y}} (Y - \hat{Y})^2 = -2(Y - \hat{Y}) \\
\\
\text{and } \frac{\partial \hat{Y}}{\partial w_{11}^2} &= \frac{\partial}{\partial w_{11}^2} (O_{11} w_{11}^2 + O_{12} w_{21}^2 + b_{21}) = O_{11} \\
\\
\text{Thus, } \frac{\partial L}{\partial w_{11}^2} &= -2(Y - \hat{Y}) O_{11}
\end{aligned}
$$

---

1. Derivative of Loss w.r.t. Prediction $\hat{Y}$:
   
    $$
    \begin{aligned}
    \frac{\partial L}{\partial \hat{Y}} &= \frac{\partial}{\partial \hat{Y}} (Y - \hat{Y})^2 = -2(Y - \hat{Y})
    \end{aligned}
    $$

2. Derivative of Prediction w.r.t. Weight  ${w_{11}^2}$:
    $$
    \begin{aligned}
    \frac{\partial \hat{Y}}{\partial w_{11}^2} &= \frac{\partial}{\partial w_{11}^2} (O_{11} w_{11}^2 + O_{12} w_{21}^2 + b_{21}) = O_{11}
    \end{aligned}
    $$
3. Final Result (Chain Rule Applied):

    $$
    \begin{aligned}
    \frac{\partial L}{\partial w_{11}^2} &= -2(Y - \hat{Y}) O_{11}
    \end{aligned}
    $$

---

$$
\begin{aligned}
\frac{\partial L}{\partial w_{21}^2} &= \frac{\partial L}{\partial \hat{Y}} \cdot \frac{\partial \hat{Y}}{\partial w_{21}^2} \\
\\
\text{where } \frac{\partial \hat{Y}}{\partial w_{21}^2} &= \frac{\partial}{\partial w_{21}^2} (O_{11} w_{11}^2 + O_{12} w_{21}^2 + b_{21}) = O_{12} \\
\\
\text{Thus, } \frac{\partial L}{\partial w_{21}^2} &= -2(Y - \hat{Y}) O_{12}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial L}{\partial b_{21}} &= \frac{\partial L}{\partial \hat{Y}} \cdot \frac{\partial \hat{Y}}{\partial b_{21}} \\
\\
\text{where } \frac{\partial \hat{Y}}{\partial b_{21}} &= \frac{\partial}{\partial b_{21}} (O_{11} w_{11}^2 + O_{12} w_{21}^2 + b_{21}) = 1 \\
\\
\text{Thus, } \frac{\partial L}{\partial b_{21}} &= -2(Y - \hat{Y})
\end{aligned}
$$

$$
$$

$$
$$

$$
$$

!!! info "Above are"
    This are the w1 , w2 and b

### Layer 1 

$$
\frac{\partial L}{\partial w_{11}'} = \frac{\partial L}{\partial \hat{Y}} \cdot \frac{\partial \hat{Y}}{\partial O_{11}} \cdot \frac{\partial O_{11}}{\partial w_{11}'} = -2(Y - \hat{Y}) w_{11}^2 x_{i1}
$$

$$
\frac{\partial L}{\partial w_{21}'} = \frac{\partial L}{\partial \hat{Y}} \cdot \frac{\partial \hat{Y}}{\partial O_{11}} \cdot \frac{\partial O_{11}}{\partial w_{21}'} = -2(Y - \hat{Y}) w_{11}^2 x_{i2}
$$

$$
\frac{\partial L}{\partial b_{11}'} = \frac{\partial L}{\partial \hat{Y}} \cdot \frac{\partial \hat{Y}}{\partial O_{11}} \cdot \frac{\partial O_{11}}{\partial b_{11}'} = -2(Y - \hat{Y}) w_{11}^2
$$

#### Derivatives with respect to Layer 2 Inputs (O 1i)

$$
\begin{aligned}
\frac{\partial \hat{Y}}{\partial O_{11}} &= \frac{\partial}{\partial O_{11}} [W_{11}^2 O_{11} + W_{21}^2 O_{12} + b_{21}] = W_{11}^2 \\
\frac{\partial \hat{Y}}{\partial O_{12}} &= \frac{\partial}{\partial O_{12}} [W_{11}^2 O_{11} + W_{21}^2 O_{12} + b_{21}] = W_{21}^2
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial O_{11}}{\partial w_{11}'} &= \frac{\partial}{\partial w_{11}'} [x_{i1} w_{11}' + x_{i2} w_{21}' + b_{11}'] = x_{i1} \quad \text{(iq)} \\
\frac{\partial O_{11}}{\partial w_{21}'} &= \frac{\partial}{\partial w_{21}'} [x_{i1} w_{11}' + x_{i2} w_{21}' + b_{11}'] = x_{i2} \quad \text{(cgpa)} \\
\frac{\partial O_{11}}{\partial b_{11}'} &= \frac{\partial}{\partial b_{11}'} [x_{i1} w_{11}' + x_{i2} w_{21}' + b_{11}'] = 1
\end{aligned}
$$

### Layer 2

$$
\frac{\partial L}{\partial w_{12}'} = \frac{\partial L}{\partial \hat{Y}} \cdot \frac{\partial \hat{Y}}{\partial O_{12}} \cdot \frac{\partial O_{12}}{\partial w_{12}'} = -2(Y - \hat{Y}) W_{21}^2 X_{i1}
$$

$$
\frac{\partial L}{\partial w_{22}'} = \frac{\partial L}{\partial \hat{Y}} \cdot \frac{\partial \hat{Y}}{\partial O_{12}} \cdot \frac{\partial O_{12}}{\partial w_{22}'} = -2(Y - \hat{Y}) W_{21}^2 X_{i2}
$$

$$
\frac{\partial L}{\partial b_{12}'} = \frac{\partial L}{\partial \hat{Y}} \cdot \frac{\partial \hat{Y}}{\partial O_{12}} \cdot \frac{\partial O_{12}}{\partial b_{12}'} = -2(Y - \hat{Y}) W_{21}^2
$$

$$
\begin{aligned}
\frac{\partial O_{12}}{\partial w_{12}'} &= \frac{\partial}{\partial w_{12}'} \left[ X_{i1} w_{12}' + X_{i2} w_{22}' + b_{12}' \right] = X_{i1} \\
\frac{\partial O_{12}}{\partial w_{22}'} &= \frac{\partial}{\partial w_{22}'} \left[ X_{i1} w_{12}' + X_{i2} w_{22}' + b_{12}' \right] = X_{i2} \\
\frac{\partial O_{12}}{\partial b_{12}'} &= \frac{\partial}{\partial b_{12}'} \left[ X_{i1} w_{12}' + X_{i2} w_{22}' + b_{12}' \right] = 1
\end{aligned}
$$

$$
\begin{array}{l}
\text{epocs} = 1000 \\
\text{1) for } i \text{ in range(n):} \\
\quad \text{a) one student } \to \text{ forward prop} \\
\quad \text{b) loss calculate} \\
\quad \text{c) Adjust all weight \& bias} \\
\quad W_{\text{new}} = W_{\text{old}} - \eta \frac{\partial L}{\partial W_{\text{old}}}
\end{array}
$$

### Final Derivate

$$
$$

$$
$$

$$
$$

$$
$$

$$
$$

## Final Steps

$$
$$

$$
$$

$$
$$

$$
$$

$$
$$