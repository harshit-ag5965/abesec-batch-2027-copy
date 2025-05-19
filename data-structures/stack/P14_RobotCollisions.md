### LeetCode Problem Link: [2751. Robot Collisions](https://leetcode.com/problems/robot-collisions/description/)

## Solution 1:

```java
class Robot {
    int position;
    int health;
    char direction;

    public Robot(int position, int health, char direction) {
        this.position = position;
        this.health = health;
        this.direction = direction;
    }

    @Override
    public String toString() {
        return "{ position: " + this.position + ", health: " + this.health + ", direction: " + this.direction + "}";
    }
}

class Solution {
    public List<Integer> survivedRobotsHealths(int[] positions, int[] healths, String directions) {
        List<Robot> robots = new ArrayList<>();
        for(int i = 0; i < positions.length; i++) {
            robots.add(new Robot(positions[i], healths[i], directions.charAt(i)));
        }
        robots.sort(Comparator.comparingInt(robot -> robot.position));

        Stack<Robot> stack = new Stack<>();
        for(Robot robot : robots) {
            boolean isDied = false;
            while(!stack.isEmpty() && stack.peek().direction == 'R' && robot.direction == 'L') {
                Robot lastRobot = stack.pop();
                if(lastRobot.health > robot.health) {
                    lastRobot.health -= 1;
                    stack.push(lastRobot);
                    isDied = true;
                    break;
                } else if(lastRobot.health == robot.health) {
                    isDied = true;
                    break;
                } else {
                    robot.health -= 1;
                }
            }
            if(!isDied) stack.push(robot);
        }

        List<Integer> remainingRobotsHealth = new ArrayList<>();
        Map<Integer, Integer> liveRobots = new HashMap<>();

        while(!stack.isEmpty()) {
            Robot robot = stack.pop();
            liveRobots.put(robot.position, robot.health);
        }

        for(int pos : positions) {
            if(liveRobots.containsKey(pos)) {
                remainingRobotsHealth.add(liveRobots.get(pos));
            }
        }

        return remainingRobotsHealth;

    }
}
```

## Solution 2:

```java
class Robot {
    int position;
    int health;
    char direction;
    int index;

    public Robot(int position, int health, char direction, int index) {
        this.position = position;
        this.health = health;
        this.direction = direction;
        this.index = index;
    }

    @Override
    public String toString() {
        return "{ position: " + this.position + ", health: " + this.health + ", direction: " + this.direction + "}";
    }
}

class Solution {
    public List<Integer> survivedRobotsHealths(int[] positions, int[] healths, String directions) {
        List<Robot> robots = new ArrayList<>();
        for(int i = 0; i < positions.length; i++) {
            robots.add(new Robot(positions[i], healths[i], directions.charAt(i), i));
        }
        robots.sort(Comparator.comparingInt(robot -> robot.position));

        Stack<Robot> stack = new Stack<>();
        for(Robot robot : robots) {
            boolean isDied = false;
            while(!stack.isEmpty() && stack.peek().direction == 'R' && robot.direction == 'L') {
                Robot lastRobot = stack.pop();
                if(lastRobot.health > robot.health) {
                    lastRobot.health -= 1;
                    stack.push(lastRobot);
                    isDied = true;
                    break;
                } else if(lastRobot.health == robot.health) {
                    isDied = true;
                    break;
                } else {
                    robot.health -= 1;
                }
            }
            if(!isDied) stack.push(robot);
        }

        List<Robot> aliveRobots = new ArrayList<>();
        while(!stack.isEmpty()) {
            aliveRobots.add(stack.pop());
        }

        aliveRobots.sort(Comparator.comparingInt(robot -> robot.index));

        List<Integer> remainingRobotsHealth = new ArrayList<>();
        for(Robot robot : aliveRobots) {
            remainingRobotsHealth.add(robot.health);
        }

        return remainingRobotsHealth;

    }
}
```

#### Time Complexity: `O(N * logN)`, because we are sorting the list where N is the length of the array.

#### Space Compelxity: `O(N)`, using stack and list or map to store elements.
