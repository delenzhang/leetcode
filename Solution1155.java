public class Solution1155 {
    public static int numRollsToTarget(int n, int k, int target) {
        final int MOD = 1000000007;
        int[][] dp = new int[n+1][target+1];
        for(int i = 1; i <= target; ++i) {
            if (i > k) {
                dp[1][i] = 0;
            } else {
                dp[1][i] = 1;
            }
        }
        for(int num = 2; num <= n; num++) {
            for(int i = 1; i <= target; i++) {
                for(int j = 1; j <=k && i >= j; j++) {
                    dp[num][i] = (dp[num][i] + dp[num-1][i-j]) % MOD;
                }
            }
        }
        return dp[n][target];

    }
    public static void main(String[] args) {
//        System.out.println(Solution1155.numRollsToTarget(1, 6 ,3));
        System.out.println(Solution1155.numRollsToTarget(2, 6 ,7));
        System.out.println(Solution1155.numRollsToTarget(30, 30 ,500));
    }
}
