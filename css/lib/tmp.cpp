#include<vector>
#include<map>
#include<set>
using namespace std;
class Twitter {
    map<int, vector<pair<int,int>>> data;
    map<int, set<int> > followw;
    int timestamp;
public:
    /** Initialize your data structure here. */
    Twitter() {
        timestamp = 0;
    }
    
    /** Compose a new tweet. */
    void postTweet(int userId, int tweetId) {
        if(data.find(userId) == data.end()) {
            vector<pair<int, int> > a;
            a.push_back(pair<int,int>(tweetId, timestamp++));
            data[userId] = a;
        }
        else {
            data[userId].push_back(pair<int,int>(tweetId, timestamp++));
        }
    }
    
    /** Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. */
    vector<int> getNewsFeed(int userId) {
        vector<int> ans;
        follow(userId, userId);
        set<int> f = followw[userId];
        priority_queue<pair<pair<int, int>, pair<int, int>>, vector<pair<int, int>, pair<int, int>>>, [](pair<int, int>, pair<int, int>> a, pair<int, int>, pair<int, int>> b){return a.first.second < b.first.second;}> heap;
        for(auto i = f.begin(); i != f.end(); ++i){
            if(data.find(i) == data.end())
                continue;
            pair<pair<int, int>, pair<int, int>> a;
            int num = data[i].size()-1;
            a.first = data[i][num];
            a.second = pair<int, int>(i, num);
            heap.push(a);
        }
        int i = 0;
        while(!heap.empty() && i<10){
            auto tmp = heap.top();
            heap.pop();
            ans.push_back(tmp.first.first);
            i++;
            int j = tmp.second.first, k = tmp.second.second-1;
            if(k < 0) continue;
            tmp.first = data[j][k];
            tmp.second = pair<int, int>(j,k);
            heap.push(tmp);
        }
        return ans;
    }
    
    /** Follower follows a followee. If the operation is invalid, it should be a no-op. */
    void follow(int followerId, int followeeId) {
        if(followw.find(followerId) == followw.end()){
            followw[followerId] = set<int>();
            followw[followerId].insert(followerId);
        }
        followw[followerId].insert(followeeId);
    }
    
    /** Follower unfollows a followee. If the operation is invalid, it should be a no-op. */
    void unfollow(int followerId, int followeeId) {
        if(followw.find(followerId) == followw.end() || followerId == followeeId)
            return;
        followw[followerId].erase(followeeId);
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * Twitter obj = new Twitter();
 * obj.postTweet(userId,tweetId);
 * vector<int> param_2 = obj.getNewsFeed(userId);
 * obj.follow(followerId,followeeId);
 * obj.unfollow(followerId,followeeId);
 */
