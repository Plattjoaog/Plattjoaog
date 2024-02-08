function transformarNotaEmConceito(nota) {
    if (nota >= 9 && nota <= 10) {
        return 'A';
    } else if (nota >= 8 && nota < 9) {
        return 'B';
    } else if (nota >= 6 && nota < 8) {
        return 'C';
    } else if (nota >= 4 && nota < 6) {
        return 'D';
    } else {
        return 'E';
    }
}