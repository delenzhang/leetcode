import java.util.Arrays;

public class EditDistance {
    /** b.length
     * a 0 1 2 3
     *  1 0 1 2
     *  2 1 1 2
     *  3 2 2 1
     * @return
     */
    public static int getEditDistance(String a, String b) {
        int la = a.length(), lb = b.length();
        int [][] mn = new int[la+1][lb+1];
        for(int i = 0; i<= la; i++) {
            mn[i][0] = i;
        }
        for(int i = 0; i<= lb; i++) {
            mn[0][i] = i;
        }
        for(int i = 1; i <= la; i++) {
            for(int j = 1; j <= lb; j++) {
                int min1 = Math.min(mn[i-1][j-1], mn[i-1][j]);
                int min = Math.min(min1, mn[i][j-1]);
                if (a.charAt(i-1) == b.charAt(j-1)) {
                    mn[i][j] = min;
                } else {
                    mn[i][j] = min + 1;
                }
            }
        }
        for(int i = 0; i < mn.length; i++) {
            System.out.println(Arrays.toString(mn[i]));
        }

        return mn[la][lb];
    }

    public static void main(String[] args) {
//         int res = EditDistance.getEditDistance("zoologicoarchaeologist", "zoogeologist");
        int res = EditDistance.getEditDistance("doge", "dog");
        System.out.println(res);
    }
}
