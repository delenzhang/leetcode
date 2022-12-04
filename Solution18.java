import java.util.*;

public class Solution18 {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        int l = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        for(int first = 0; first < l; ++first) {
            if (first > 0 && nums[first] == nums[first-1]) {
                continue;
            }
            for(int second = first + 1; second < l; ++second) {
                if (second > first + 1 && nums[second] == nums[second-1]) {
                   continue;
                }
                int third = second + 1;
                int four = l - 1;
                while (third < four) {
                    long sum = ((long)nums[first] + (long)nums[second] + (long)nums[third] + (long)nums[four]);
                    if ( sum > target) {
                        --four;
                    } else if (sum < target) {
                        ++third;
                    } else if (sum == target) {
                        List<Integer> item = new ArrayList<>();
                        item.add(nums[first]);
                        item.add(nums[second]);
                        item.add(nums[third]);
                        item.add(nums[four]);

                        res.add(item);
                        while(third < four && nums[third+1] == nums[third]) ++third;
                        while (third < four && nums[four-1] == nums[four])  --four;
                        ++third;
                        --four;
                     }
                }
            }
        }

        return res;
    }
    public static void main(String[] args) {
        Solution18 solution18 = new Solution18();
//        int[] a = {2,2,2,2,2};
//        System.out.println(solution18.fourSum(a, 8));
//        assert solution16.threeSumClosest(a, 1) == 0 : "错误，a不大于b";

        int[] b = {1000000000,1000000000,1000000000,1000000000}; //2147483647

        assert false : "这里有bug！";
//        assert solution16.threeSumClosest(b, -2) != -2 : "错误，a不大于b";
        System.out.println(solution18.fourSum(b, -294967296));
        //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
    }
}
