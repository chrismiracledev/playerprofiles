class Player {
    constructor(
        playerID,
        playerName,
        playerLink,
        jerseyNumber,
        positionCode,
        positionName,
        positionType,
        positionAbbreviation
    ) {
        this.playerID = playerID;
        this.playerName = playerName;
        this.playerLink = playerLink;
        this.jerseyNumber = jerseyNumber;
        this.positionCode = positionCode;
        this.positionName = positionName;
        this.positionType = positionType;
        this.positionAbbreviation = positionAbbreviation;
    }
    
} 

export default Player;