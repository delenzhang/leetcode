import java.util.Arrays;

public class Offer29 {

    static int[] clockwisePrintArray(int[][] matrix) {

        if(matrix.length == 0 || matrix[0].length == 0) {
            return new int[0];
        }
        int h = matrix.length, w = matrix[0].length;
        int[] res = new int[w * h];
        int i;
        int resI = 0;
        int top = 0, bottom = h - 1, left = 0, right = w -1;
        while (true) {
            for(i = left; i <= right; ++i) {
                res[resI++] = matrix[top][i];
            }
            top++;
            if (top > bottom) break;
            for (i = top; i <= bottom; i++) {
                res[resI++] = matrix[i][right];
            }
            right--;
            if (right < left) break;
            for (i = right; i >= left; i--) {
                res[resI++] = matrix[bottom][i];
            }
            bottom--;
            if (bottom < top) break;
            for (i = bottom; i >= top; i--) {
                res[resI++] = matrix[i][left];
            }
            left++;
            if (left > right) break;
        }
        return res;

    }

    static int[] counterclockwisePrintArray(int[][] matrix) {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return new int[0];
        }
        int h = matrix.length, w = matrix[0].length;
        int resIndex = 0;
        int[] res = new int[ h*w];
        if (matrix.length == 1) {
            for(int k = matrix[0].length - 1; k >= 0; k--) {
                res[resIndex++] = matrix[0][k];
            }
            return res;
        }


        int top = 0, bottom = h -1, left = 0, right = w - 1;

        int i;
        while (true) {
            for(i = top; i<=bottom; i++) {
                res[resIndex++] = matrix[i][left];
            }
            left++;
            if (left > right) break;
            for (i = left; i <= right; i++) {
                res[resIndex++] = matrix[bottom][i];
            }
            bottom--;
            if (bottom < top) break;
            for(i = bottom; i>= top; i--) {
                res[resIndex++] = matrix[i][right];
            }
            right--;
            if (right < left) break;
            for(i = right; i>=left; i--) {
                res[resIndex++]= matrix[top][i];
            }
            top++;
            if (top > bottom) break;
        }

        return res;
    }

    public static void main(String[] args) {
        int[][] matrix1 = {{1,2,3}, {4,5,6},{7,8,9}};
        System.out.println(Arrays.toString(Offer29.clockwisePrintArray(matrix1)));
        System.out.println(Arrays.toString(Offer29.counterclockwisePrintArray(matrix1)));
        int[][] matrix2 = {{1,2,3, 4}, {5,6, 7,8},{9,10,11,12}};
        System.out.println(Arrays.toString(Offer29.clockwisePrintArray(matrix2)));
        System.out.println(Arrays.toString(Offer29.counterclockwisePrintArray(matrix2)));
        int[][] matrix3 = {{1,2,3,4}};
        System.out.println(Arrays.toString(Offer29.clockwisePrintArray(matrix3)));
        System.out.println(Arrays.toString(Offer29.counterclockwisePrintArray(matrix3)));
        int[][] matrix4 = {{1}, {2}, {3}, {4}};
        System.out.println(Arrays.toString(Offer29.clockwisePrintArray(matrix4)));
        System.out.println(Arrays.toString(Offer29.counterclockwisePrintArray(matrix4)));
        int[][] matrix5 = {};
        System.out.println(Arrays.toString(Offer29.clockwisePrintArray(matrix5)));
        System.out.println(Arrays.toString(Offer29.counterclockwisePrintArray(matrix5)));
    }
}
