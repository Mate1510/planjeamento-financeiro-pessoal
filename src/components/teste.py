import numpy as np

def jacobi(A, tol=1e-10, max_iter=100):
    n = A.shape[0]
    D = np.diag(A)  # Diagonal inicial
    R = np.eye(n)  # Matriz de rotação inicial
    converged = False
    iteration = 0

    while not converged and iteration < max_iter:
        max_off_diag = np.max(np.abs(A - np.diag(D)))  # Maior elemento fora da diagonal
        if max_off_diag < tol:
            converged = True
            break

        i, j = np.unravel_index(np.argmax(np.abs(A - np.diag(D))), (n, n))  # Posição do maior elemento fora da diagonal
        theta = 0.5 * np.arctan2(2 * A[i, j], D[j] - D[i])  # Ângulo de rotação

        c = np.cos(theta)
        s = np.sin(theta)

        # Atualização das matrizes
        J = np.eye(n)
        J[i, i] = c
        J[i, j] = -s
        J[j, i] = s
        J[j, j] = c

        R = np.dot(R, J)
        D = np.dot(np.dot(J.T, D), J)

        iteration += 1

    eigenvalues = D
    eigenvectors = R

    return eigenvalues, eigenvectors
