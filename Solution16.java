import java.lang.reflect.Array;
import java.util.*;

public class Solution16 {

    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int sum = nums[0] + nums[1] + nums[2];
        int m = Math.abs(sum-target);
        int n = nums.length;
        for (int first = 0; first < nums.length - 2; ++first) {
            int second = first + 1, third = n - 1;
            while (second < third) {
                int _sum = nums[first] + nums[second] + nums[third];
                if (_sum == target) {
                    return _sum;
                }
                int _m = Math.abs(_sum - target);
                if (_m < m) {
                    sum = _sum;
                    m = _m;
                }
                if (_sum > target) {
                    third--;
                }
                if (_sum < target) {
                    second++;
                }
            }
        }
        System.out.println();
        return sum;
    }


    public static void main(String[] args) {
        Solution16 solution16 = new Solution16();
        int[] a = { 0,0,0 };
        System.out.println(solution16.threeSumClosest(a, -2));
//        assert solution16.threeSumClosest(a, 1) == 0 : "错误，a不大于b";

        int[] b = {4,0,5,-5,3,3,0,-4,-5};

        assert false : "这里有bug！";
        assert solution16.threeSumClosest(b, -2) != -2 : "错误，a不大于b";
        System.out.println(solution16.threeSumClosest(b, -2));
    }
}
