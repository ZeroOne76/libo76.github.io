---
title: 传输层
---
## 二分查找/排序

### 二分查找-I

给定一个元素升序的、无重复数字的整型数组 nums 和一个目标值 target ，

写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1

```java

publicclassSolution {

    publicint search (int[] nums,inttarget){

        intl = 0, r = nums.length-1;

        while(l <= r){

            intmid = (l + r)/2;

            if(nums[mid] == target) return mid;

            elseif(nums[mid] > target){

                r = mid -1;

            }else{

                l = mid +1;

            }  

        }

        return-1;

    }

}

```
