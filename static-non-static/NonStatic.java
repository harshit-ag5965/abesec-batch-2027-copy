class MI {
    String playerName;
    int playerRuns;
    private boolean isAllRounder;
    static String teamName = "Mumbai Indians";

    public MI(String playerName, int playerRuns, boolean isAllRounder) {
        this.playerName = playerName;
        this.playerRuns = playerRuns;
        this.isAllRounder = isAllRounder;
    }

    public static String getIsAllRounder() {
        return teamName;
    }
}

public class NonStatic {
    public static void main(String[] args) {
        MI player1 = new MI("Rohit Sharma", 4125, false);
        System.out.println(player1.playerName + " has scored " + player1.playerRuns + " runs." + MI.teamName);
        // player1.playerName = "Rohit Sharma";
        // player1.playerRuns = 4125;
        // player1.isAllRounder = false;
        // player1.teamName = "Mumbai Indians";
        MI player2 = new MI("Hardik Pandya", 2500, true);

        System.out.println(MI.getIsAllRounder());

    }
}
