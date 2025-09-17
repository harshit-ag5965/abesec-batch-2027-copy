### LeetCode Problem Link: [506. Relative Ranks](https://leetcode.com/problems/relative-ranks/)

```cpp
class Pair {
public:
    int score;
    int index;
    Pair(int score, int index) {
        this->score = score;
        this->index = index;
    }
};

struct Comparator {
    bool operator()(Pair &p1, Pair &p2) {
        return p2.score > p1.score;
    }
};

class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        priority_queue<Pair, vector<Pair>, Comparator> maxHeap;

        for(int i = 0; i < score.size(); i++) {
            maxHeap.push(Pair(score[i], i));
        }

        vector<string> ans(score.size());
        for(int rank = 1; rank <= score.size(); rank++) {
            Pair pair = maxHeap.top();
            maxHeap.pop();
            int index = pair.index;
            if(rank == 1) {
                ans[index] = "Gold Medal";
            } else if(rank == 2) {
                ans[index] = "Silver Medal";
            } else if(rank == 3) {
                ans[index] = "Bronze Medal";
            } else {
                ans[index] = to_string(rank);
            }
        }
        return ans;
    }
};
```

#### Time Complexity: `O(NlogN)`.

#### Space Compelxity: `O(N)`, because we are using (extra space) i.e. MaxHeap to store N elements.
